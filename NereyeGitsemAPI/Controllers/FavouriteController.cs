using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NereyeGitsemAPI.Context;

namespace NereyeGitsemAPI.Controllers;

[Route("[controller]")]
[ApiController]
public class FavouritesController : ControllerBase
{
	private readonly DatabaseContext _context;

	public FavouritesController(DatabaseContext context)
	{
		_context = context;
	}

	// GET: /favourites/list/{userId}
	[HttpGet("list/{userId}")]
	public async Task<ActionResult<List<Favourite>>> GetFavourites(int userId)
	{
		var data = await _context.Favourites
			.Where(f => f.UserId == userId && f.Enabled == true)
			.ToListAsync();

		return data;
	}

	// POST: /favourites/add
	[HttpPost("add")]
	public async Task<ActionResult> AddFavourite([FromBody] Favourite favourite)
	{
		favourite.CreatedDate = DateTime.UtcNow;
		favourite.Enabled = true;

		_context.Favourites.Add(favourite);
		await _context.SaveChangesAsync();

		return Ok();
	}

	// DELETE: /favourites/delete/{id}
	[HttpDelete("delete/{id}")]
	public async Task<ActionResult> DeleteFavourite(int id)
	{
		var fav = await _context.Favourites.FindAsync(id);
		if (fav == null)
			return NotFound();

		fav.Enabled = false;
		await _context.SaveChangesAsync();

		return Ok();
	}
}
