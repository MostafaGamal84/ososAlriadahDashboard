# Osos Alriadah Dashboard

## Auction management page

The API now serves a lightweight web page that lets you create, update, and delete auctions directly against the SQL Server database. After running the API you can open `https://localhost:5001/` (or the base URL you host the API on) and use the page to:

- Add a new auction with metadata, optional image, and scheduling information.
- Select an existing auction to edit its fields and optionally upload a replacement cover image.
- Remove an auction (the API performs a soft delete by setting `IsDeleted = true`).

The UI uses vanilla HTML, CSS, and JavaScript and communicates with the existing REST endpoints (`/api/auction/*`).

## Running the API and static page

1. Restore packages and build the solution:
   ```bash
   dotnet restore API/API.csproj
   dotnet build API/API.csproj
   ```
2. Apply the latest Entity Framework Core migrations so the `Auctions` table exists:
   ```bash
   dotnet ef database update --project API/API.csproj --startup-project API/API.csproj
   ```
3. Launch the API:
   ```bash
   dotnet run --project API/API.csproj
   ```
4. Open a browser at the base URL printed in the console. The `index.html` page is served from `wwwroot/` and automatically calls the auction API.

## Installing required libraries via the Package Manager Console

If you prefer to restore dependencies manually with the Package Manager Console in Visual Studio, run the following commands inside the `API` project:

```powershell
Install-Package Microsoft.EntityFrameworkCore -Version 6.0.10
Install-Package Microsoft.EntityFrameworkCore.SqlServer -Version 6.0.6
Install-Package Microsoft.EntityFrameworkCore.Tools -Version 6.0.10
Install-Package Microsoft.EntityFrameworkCore.Design -Version 6.0.10
Install-Package Microsoft.EntityFrameworkCore.Proxies -Version 6.0.6
Install-Package AutoMapper.Extensions.Microsoft.DependencyInjection -Version 11.0.0
Install-Package Swashbuckle.AspNetCore -Version 6.3.1
```

Running `dotnet restore` (or using Visual Studio's "Restore NuGet Packages" command) will also install the same dependencies automatically because they are included in `API.csproj`.
