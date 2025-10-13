using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DTOs;
using Microsoft.AspNetCore.Http;

namespace API.DTOs
{
    public class BannerReDto : BaseDto
    {
        public string Title { get; set; }
        public string PhotoUrl { get; set; }
        public string Content { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    }
}