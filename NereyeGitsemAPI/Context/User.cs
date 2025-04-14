using System;
using System.Collections.Generic;

namespace NereyeGitsemAPI.Context;

public partial class User
{
    public int Id { get; set; }

    public string? Name { get; set; }

    public string? Surname { get; set; }

    public string? Email { get; set; }

    public string? Phone { get; set; }

    public DateOnly? Birthday { get; set; }

    public string? Password { get; set; }

    public string? NewPassword { get; set; }

    public DateTime CreatedDate { get; set; }

    public bool? Enabled { get; set; }
}
