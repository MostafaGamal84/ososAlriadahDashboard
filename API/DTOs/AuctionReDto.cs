using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DTOs;
using Microsoft.AspNetCore.Http;

namespace API.DTOs
{
    public class AuctionReDto : BaseDto
    {
       public string Name { get; set; }
        public DateTime Start { get; set; }
        public DateTime End { get; set; }
        public string Content { get; set; }
        public string Url { get; set; }

    

        // مسارات الملفات الداخلية (للتخزين)
        public string ImagePath { get; set; }
        public string PdfPath { get; set; }

        // معلومات إضافية
        public decimal? OpeningPrice { get; set; }
        public string AgentName { get; set; }
        public string District { get; set; }
        public string City { get; set; }

   

  
    

    }
}