
using API.DTOs;
using API.DTOs.Admin;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

using UnitOfWork;
using API.Error;
using Microsoft.AspNetCore.Http;

namespace API.Controllers
{
  [AllowAnonymous]
  public class ServiceController : BaseApiController
  {
    private readonly IRepository<Service> _serviceRepository;

    private readonly IUnitOfWork _uow;

    public ServiceController(
        IUnitOfWork uow,
        IMapper mapper
,
        IRepository<Service> serviceRepository)
    {
      _uow = uow;
      _serviceRepository = serviceRepository;
    }
    [HttpPost("add")]
    public virtual async Task<IActionResult> Add(ServiceDto dto)
    {
      dto.Id = 0;

      var x = _uow.Mapper.Map<Service>(dto);

      var result = _serviceRepository.Add(x);

      if (!await _uow.SaveAsync()) return BadRequest(new ApiResponse(400));

      var map = _uow.Mapper.Map<ServiceDto>(result);

      return Ok(map);
    }

   


    [AllowAnonymous]
    [HttpPost("update")]
    public virtual async Task<IActionResult> Update(ServiceDto dto)
    {
      var entity = await _serviceRepository.GetByAsync(x => x.Id == dto.Id);

      if (entity == null) return NotFound(new ApiResponse(StatusCodes.Status404NotFound));

      var result = _uow.Mapper.Map(dto, entity);

      _serviceRepository.Update(result);


      if (await _uow.SaveAsync()) return Ok();

      return BadRequest("Failed to Update");
    }


    [HttpPost("Delete/{id}")]
    public virtual async Task<ActionResult> Delete(int id)
    {
      var entity = await _serviceRepository.GetByAsync(x => x.Id == id);

      if (entity == null) return NotFound(new ApiResponse(StatusCodes.Status404NotFound));

      entity.IsDeleted = true;

      _serviceRepository.Update(entity);

      if (!await _uow.SaveAsync()) return BadRequest(new ApiResponse(StatusCodes.Status400BadRequest));

      return Ok();


    }

    [HttpGet]
    public virtual async Task<IActionResult> Get()
    {
      var result = await _serviceRepository.GetAllByAsync(x => x.IsDeleted == false);

      return Ok(result);
    }

    [HttpGet("GetById/{id}")]
    public virtual async Task<IActionResult> GetById(int id)
    {

      var result = await _serviceRepository.GetByIdAsync(id);

      return Ok(result);
    }

  }

}
