using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
using NereyeGitsemAPI.Context;
using NereyeGitsemAPI.Models;

namespace NereyeGitsemAPI.Controllers;

[ApiController]
[Route("[controller]")]
public class AIController : ControllerBase
{
	private readonly IHttpClientFactory _httpClientFactory;
	private readonly IConfiguration _configuration;
	private readonly DatabaseContext _context;

	public AIController(IHttpClientFactory httpClientFactory, IConfiguration configuration, DatabaseContext context)
	{
		_httpClientFactory = httpClientFactory;
		_configuration = configuration;
		_context = context;
	}

	[HttpPost("ask")]
	public async Task<IActionResult> Ask([FromBody] AIRequest request)
	{
		var client = _httpClientFactory.CreateClient();
		client.DefaultRequestHeaders.Add("Authorization", $"Bearer {_configuration["OpenRouter:ApiKey"]}");
		client.DefaultRequestHeaders.Add("HTTP-Referer", "https://localhost:44327/swagger/index.html");
		client.DefaultRequestHeaders.Add("X-Title", "NereyeGitsem");

		var payload = new
		{
			model = "deepseek/deepseek-r1-distill-llama-70b:free",
			messages = new[]
			{
				new { role = "user", content = request.Prompt }
			}
		};

		var response = await client.PostAsJsonAsync("https://openrouter.ai/api/v1/chat/completions", payload);

		if (!response.IsSuccessStatusCode)
		{
			var error = await response.Content.ReadAsStringAsync();
			return StatusCode(500, $"AI bağlantı hatası: {error}");
		}

		var json = await response.Content.ReadFromJsonAsync<JsonElement>();
		var content = json
			.GetProperty("choices")[0]
			.GetProperty("message")
			.GetProperty("content")
			.GetString();

		var dbRequest = new Request
		{
			UserId = request.UserId,
			Prompt = request.Prompt,
			Response = content,
			CreatedDate = DateTime.UtcNow
		};

		_context.Requests.Add(dbRequest);
		await _context.SaveChangesAsync();

		return Ok(new { response = content });
	}
}
