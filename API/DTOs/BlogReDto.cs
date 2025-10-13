using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DTOs;

namespace API.DTOs
{
    public class BlogReDto : BaseDto
    {
        public string Title { get; set; }
        public string Content { get; set; }
        public string ImagePath { get; set; }
        public int BlogTypeId { get; set; }
        public virtual BlogTypeDto BlogType { get; set; }

    }
}