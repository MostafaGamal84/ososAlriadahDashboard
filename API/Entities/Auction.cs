using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Entities;

namespace API.Entities

{
    public class Auction : BaseEntity
    {
    public string Name { get; set; }

    // التواريخ
    public DateTime Start { get; set; }
    public DateTime End { get; set; }

    public string? Content { get; set; }
        public string? Url { get; set; }

    // الملفات الأساسية
    public string? ImagePath { get; set; }
    public string? PdfPath { get; set; }

    // تفاصيل إضافية
    public decimal? OpeningPrice { get; set; }   // decimal(18,2)
    public string? AgentName { get; set; }
    public string? District { get; set; }
    public string? City { get; set; }

    }
}
