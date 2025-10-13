using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DTOs;

namespace API.DTOs
{
    public class ContactDto:BaseDto
    {
          public string Name { get; set; }
        public string Content { get; set; }

    }
}