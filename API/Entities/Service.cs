using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Entities;

namespace API.Entities

{    public class Service: BaseEntity
    {
        
        public string Title { get; set; }
        public string Content { get; set; }
    }
}
