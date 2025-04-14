using System;
using System.Collections.Generic;

namespace NereyeGitsemAPI.Context;

public partial class Favourite
{
    public int Id { get; set; }

    public string? Title { get; set; }

    public DateTime? CreatedDate { get; set; }

    public int UserId { get; set; }

    public bool? Enabled { get; set; }
}
