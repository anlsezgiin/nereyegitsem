using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NereyeGitsemAPI.Context;

namespace NereyeGitsemAPI.Controllers;

[Route("[controller]")]
[ApiController]
public class UserController : ControllerBase
{
	private readonly DatabaseContext _context;

	public UserController(DatabaseContext context)
	{
		_context = context;
	}

	// GET: /user/list
	[HttpGet("list")]
	public async Task<ActionResult<List<User>>> GetUsers()
	{
		var users = await _context.Users
			.Where(x => x.Enabled == true)
			.ToListAsync();

		return users;
	}

	// GET: /user/getById/5
	[HttpGet("getById/{id}")]
	public async Task<ActionResult<User>> GetUserById(int id)
	{
		var user = await _context.Users.FirstOrDefaultAsync(x => x.Id == id && x.Enabled == true);

		if (user == null)
			return NotFound();

		return user;
	}

	// POST: /user/add
	[HttpPost("add")]
	public async Task<ActionResult> AddUser([FromBody] User user)
	{
		user.Id = 0; // Identity column
		user.CreatedDate = DateTime.UtcNow;
		user.NewPassword = null;
		user.Enabled = true;
		user.Phone = "+90" + user.Phone;
		_context.Users.Add(user);
		await _context.SaveChangesAsync();

		return Ok();
	}

	// PUT: /user/update/5
	[HttpPut("update/{id}")]
	public async Task<ActionResult> UpdateUser(int id, [FromBody] User updatedUser)
	{
		var user = await _context.Users.FirstOrDefaultAsync(x => x.Id == id && x.Enabled == true);
		if (user == null)
			return NotFound();
		var updatePhone = "+90" + updatedUser.Phone;
		user.Name = updatedUser.Name;
		user.Surname = updatedUser.Surname;
		user.Email = updatedUser.Email;
		if(updatedUser.Phone != null && user.Phone != updatePhone)
		{
			user.Phone = updatePhone;
		}
		else
		{
			user.Phone = user.Phone;
		}
			user.Birthday = updatedUser.Birthday;
		if(updatedUser.NewPassword != null)
		{
			user.Password = updatedUser.NewPassword;
		} else
		{
			user.Password = updatedUser.Password;
		}
		_context.Users.Update(user);
		await _context.SaveChangesAsync();

		return Ok();
	}

	// DELETE: /user/delete/5
	[HttpDelete("delete/{id}")]
	public async Task<ActionResult> DeleteUser(int id)
	{
		var user = await _context.Users.FirstOrDefaultAsync(x => x.Id == id && x.Enabled == true);
		if (user == null)
			return NotFound();

		user.Enabled = false;
		_context.Users.Update(user);
		await _context.SaveChangesAsync();

		return Ok();
	}
}
