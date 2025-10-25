using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DTOs;
using Microsoft.AspNetCore.Http;

namespace API.DTOs
{
    public class CustomerDto : BaseDto
    {
        public string Name { get; set; }
        public string ImageUrl { get; set; }
        public IFormFile ImageFile { get; set; }

    }
}