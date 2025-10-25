using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Diagnostics;

namespace API.Data
{
  public class DataContext : IdentityDbContext
  {
    public DataContext(DbContextOptions options) : base(options)
    {

    }


    public DbSet<Admin> Admins { get; set; }
    public DbSet<About> Abouts { get; set; }
    public DbSet<Auction> Auctions { get; set; }
    public DbSet<Banner> Banners { get; set; }
    public DbSet<Blog> Blogs { get; set; }
    public DbSet<BlogType> BlogTypes { get; set; }
    public DbSet<Contact> Contacts { get; set; }
    public DbSet<Customer> Customers { get; set; }
    public DbSet<Service> Services { get; set; }
    public DbSet<TermsAndCond> TermsAndConds { get; set; }
   


    protected override void OnModelCreating(ModelBuilder builder)
    {
      builder.HasDefaultSchema("dbo");

      base.OnModelCreating(builder);

      

        }
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
      optionsBuilder.UseLazyLoadingProxies();
      optionsBuilder
.ConfigureWarnings(x => x.Ignore(RelationalEventId.MultipleCollectionIncludeWarning));
    }


  }
}
