using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Migrations
{
    public partial class dates : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Date",
                schema: "dbo",
                table: "Auctions",
                newName: "Start");

            migrationBuilder.AddColumn<DateTime>(
                name: "End",
                schema: "dbo",
                table: "Auctions",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "End",
                schema: "dbo",
                table: "Auctions");

            migrationBuilder.RenameColumn(
                name: "Start",
                schema: "dbo",
                table: "Auctions",
                newName: "Date");
        }
    }
}
