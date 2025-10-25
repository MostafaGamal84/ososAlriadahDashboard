
using API.DTOs;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

using UnitOfWork;
using API.Error;
using Microsoft.AspNetCore.Http;
using API.Entities;

namespace API.Controllers
{
  [AllowAnonymous]
  public class CustomerController : BaseApiController
  {
    private readonly IRepository<Customer> _customerRepository;

    private readonly IUnitOfWork _uow;

    public CustomerController(
        IUnitOfWork uow,
        IMapper mapper
,
        IRepository<Customer> CustomerRepository)
    {
      _uow = uow;
      _customerRepository = CustomerRepository;
    }
  [HttpPost("add")]
public virtual async Task<IActionResult> Add([FromForm] CustomerDto dto)
{
    dto.Id = 0;

    // 1. Save image if provided
    if (dto.ImageFile != null)
    {
        var savedPath = await _uow.FileRepository.CreateFileAsync(dto.ImageFile, "uploads/Customers");
        dto.ImageUrl = savedPath;
    }

    // 2. Map and save
    var x = _uow.Mapper.Map<Customer>(dto);
    var result = _customerRepository.Add(x);

    if (!await _uow.SaveAsync())
        return BadRequest(new ApiResponse(400));

    var map = _uow.Mapper.Map<CustomerReDto>(result);
    return Ok(map);
}

   


    [AllowAnonymous]
    [HttpPost("update")]
    public virtual async Task<IActionResult> Update(CustomerDto dto)
    {
      var entity = await _customerRepository.GetByAsync(x => x.Id == dto.Id);

      if (entity == null) return NotFound(new ApiResponse(StatusCodes.Status404NotFound));
 // 1. Save image if provided
    if (dto.ImageFile != null)
    {
        var savedPath = await _uow.FileRepository.CreateFileAsync(dto.ImageFile, "uploads/Customers");
        dto.ImageUrl = savedPath;
    }
      var result = _uow.Mapper.Map(dto, entity);

      _customerRepository.Update(result);


      if (await _uow.SaveAsync()) return Ok();

      return BadRequest("Failed to Update");
    }


    [HttpPost("Delete/{id}")]
    public virtual async Task<ActionResult> Delete(int id)
    {
      var entity = await _customerRepository.GetByAsync(x => x.Id == id);

      if (entity == null) return NotFound(new ApiResponse(StatusCodes.Status404NotFound));

      entity.IsDeleted = true;

      _customerRepository.Update(entity);

      if (!await _uow.SaveAsync()) return BadRequest(new ApiResponse(StatusCodes.Status400BadRequest));

      return Ok();
    }

    [HttpGet]
    public virtual async Task<IActionResult> Get()
    {
      var result = await _customerRepository.GetAllByAsync(x => x.IsDeleted == false);

      return Ok(result);
    }

    [HttpGet("GetById/{id}")]
    public virtual async Task<IActionResult> GetById(int id)
    {

      var result = await _customerRepository.GetByIdAsync(id);

      return Ok(result);
    }
  }
}
