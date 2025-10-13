using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using DTOs;

namespace API.DTOs.Admin
{
  public class AdminAddDto : BaseDto
  {
    public string Email { get; set; }
    public string Password { get; set; }
  }
}
