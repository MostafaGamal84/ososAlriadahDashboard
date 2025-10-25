
using API.DTOs;
using API.DTOs.Admin;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

using UnitOfWork;
using API.Error;
using Microsoft.AspNetCore.Http;

namespace API.Controllers
{
  [AllowAnonymous]
  public class AdminController : BaseApiController
  {
    private readonly IUnitOfWork _uow;

    public AdminController(
        IUnitOfWork uow
    )
    {
      _uow = uow;
    }
    [HttpPost("add")]
    public virtual async Task<IActionResult> Add(AdminAddDto dto)
    {
      dto.Id = 0;

      var x = _uow.Mapper.Map<Admin>(dto);

      var result = _uow.AdminRepo.Add(x);

      if (!await _uow.SaveAsync()) return BadRequest(new ApiResponse(400));

      var map = _uow.Mapper.Map<AdminReDto>(result);

      return Ok(map);
    }

    [HttpPost("login")]
    public virtual async Task<IActionResult> Login(LoginDto dto)
    {
      // Find admin by email and password (no hashing)
      var admin = await _uow.AdminRepo.GetBy(a => a.Email == dto.Email && a.Password == dto.Password);

      // If not found, return 401 Unauthorized
      if (admin == null)
        return Unauthorized(new ApiResponse(401, "Invalid email or password"));

      // Map to response DTO
      var result = _uow.Mapper.Map<AdminReDto>(admin);

      return Ok(result);
    }
    [HttpGet]
    public virtual async Task<IActionResult> Get()
    {
      var result = await _uow.AdminRepo.GetAllBy(x => x.IsDeleted == false);

      return Ok(result);
    }
    [HttpPost("Delete/{id}")]
    public virtual async Task<ActionResult> Delete(int id)
    {
      var entity = await _uow.AdminRepo.GetById(id);

      if (entity == null) return NotFound(new ApiResponse(StatusCodes.Status404NotFound));

      entity.IsDeleted = true;

      _uow.AdminRepo.Update(entity);

      if (!await _uow.SaveAsync()) return BadRequest(new ApiResponse(StatusCodes.Status400BadRequest));

      return Ok();
    }
    [AllowAnonymous]
    [HttpPost("update")]
    public virtual async Task<IActionResult> Update(AdminAddDto dto)
    {
      var entity = await _uow.AdminRepo.GetById(dto.Id);

      if (entity == null) return NotFound(new ApiResponse(StatusCodes.Status404NotFound));

   
      var result = _uow.Mapper.Map(dto, entity);

      _uow.AdminRepo.Update(result);


      if (await _uow.SaveAsync()) return Ok();

      return BadRequest("Failed to Update");
    }

  }
}
