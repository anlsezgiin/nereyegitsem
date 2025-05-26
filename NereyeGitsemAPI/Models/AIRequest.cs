namespace NereyeGitsemAPI.Models
{
	public class AIRequest
	{
		public int? UserId { get; set; }
		public string Prompt { get; set; } = string.Empty;
	}
}
