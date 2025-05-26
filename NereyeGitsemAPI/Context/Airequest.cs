using System;
using System.Collections.Generic;

namespace NereyeGitsemAPI.Context;

public partial class Airequest
{
    public int Id { get; set; }

    public string? Prompt { get; set; }

    public string? Response { get; set; }
}
