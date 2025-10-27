internal class Program
{
  private static async Task Main(string[] args)
  {
    var builder = WebApplication.CreateBuilder(args);
  const string AllowAll = "AllowAll";
    builder.Services.AddCors(options =>
    {
      options.AddPolicy(AllowAll, policy =>
        policy
          .AllowAnyOrigin()
          .AllowAnyHeader()
          .AllowAnyMethod()
      );
    });
    builder.Services.AddApplicationServices(builder.Configuration);
    builder.Services.AddControllers();
    builder.Services.AddSwaggerGen(c =>
    {
      c.SwaggerDoc("v1", new OpenApiInfo { Title = "Osus Elriadah", Version = "v1" });
    });

    var app = builder.Build();
    if (app.Environment.IsDevelopment())
    {
      app.UseDeveloperExceptionPage();
      app.UseSwagger();
      app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "API v1"));
    }
    else
    {
      app.UseSwagger();
      app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "API v1"));
    }
        app.UseDefaultFiles();

    app.UseStaticFiles();

    app.UseHttpsRedirection();

    app.UseRouting();
      app.UseCors(AllowAll);
    app.UseAuthorization();
    app.MapControllers();




    using var scope = app.Services.CreateScope();
    var services = scope.ServiceProvider;
    try
    {
      var context = services.GetRequiredService<DataContext>();
      await context.Database.MigrateAsync();
    }
    catch (Exception ex)
    {
      var logger = services.GetRequiredService<ILogger<Program>>();
      logger.LogError(ex, "An error occured During migration");

    }
    await app.RunAsync();
  }
}
