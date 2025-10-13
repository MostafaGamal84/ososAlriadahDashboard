using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Migrations
{
    public partial class auc : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "PDFPath",
                schema: "dbo",
                table: "Auctions",
                newName: "PdfPath");

            migrationBuilder.AddColumn<string>(
                name: "AgentName",
                schema: "dbo",
                table: "Auctions",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "City",
                schema: "dbo",
                table: "Auctions",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "District",
                schema: "dbo",
                table: "Auctions",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<decimal>(
                name: "OpeningPrice",
                schema: "dbo",
                table: "Auctions",
                type: "decimal(18,2)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AgentName",
                schema: "dbo",
                table: "Auctions");

            migrationBuilder.DropColumn(
                name: "City",
                schema: "dbo",
                table: "Auctions");

            migrationBuilder.DropColumn(
                name: "District",
                schema: "dbo",
                table: "Auctions");

            migrationBuilder.DropColumn(
                name: "OpeningPrice",
                schema: "dbo",
                table: "Auctions");

            migrationBuilder.RenameColumn(
                name: "PdfPath",
                schema: "dbo",
                table: "Auctions",
                newName: "PDFPath");
        }
    }
}
