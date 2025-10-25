using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Entities;

namespace API.Entities

{    public class Customer : BaseEntity
    {
        public string Name { get; set; }
        public string ImageUrl { get; set; }
    }
}
