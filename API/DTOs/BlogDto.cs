using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DTOs;
using Microsoft.AspNetCore.Http;

namespace API.DTOs
{
    public class BlogDto : BaseDto
    {
        public string Title { get; set; }
        public string Content { get; set; }
        public IFormFile ImageFile { get; set; }
        public string ImageUrl { get; set; }
        public int BlogTypeId { get; set; }

    }
}