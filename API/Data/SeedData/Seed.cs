using System.Collections.Generic;
using System.Security.Cryptography;
using System.Text.Json;
using System.Threading.Tasks;
using API.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class Seed
    {

        // public static async Task SeedUsers(DataContext context)
        // {
            
        // }

        private static async Task<List<T>> ReadData<T>(string file)
        {
            var fileData = await System.IO.File.ReadAllTextAsync("Data/SeedData/" + file + ".json");
            var data = JsonSerializer.Deserialize<List<T>>(fileData);
            return data;
        }
    }



}










