using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Entities;

namespace API.Entities

{    public class About: BaseEntity
    {
        
        public string Content { get; set; }
    }
}
