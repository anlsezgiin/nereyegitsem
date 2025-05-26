using System;
using System.Collections.Generic;

namespace NereyeGitsemAPI.Context;

public partial class Request
{
    public int Id { get; set; }

    public int? UserId { get; set; }

    public string? Prompt { get; set; }

    public string? Response { get; set; }

    public DateTime? CreatedDate { get; set; }
}
