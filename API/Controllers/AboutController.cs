
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
  public class AboutController : BaseApiController
  {
    private readonly IRepository<About> _aboutRepository;

    private readonly IUnitOfWork _uow;

    public AboutController(
        IUnitOfWork uow,
        IMapper mapper
,
        IRepository<About> aboutRepository)
    {
      _uow = uow;
      _aboutRepository = aboutRepository;
    }
    [HttpPost("add")]
    public virtual async Task<IActionResult> Add(AboutDto dto)
    {
      dto.Id = 0;

      var x = _uow.Mapper.Map<About>(dto);

      var result = _aboutRepository.Add(x);

      if (!await _uow.SaveAsync()) return BadRequest(new ApiResponse(400));

      var map = _uow.Mapper.Map<AboutDto>(result);

      return Ok(map);
    }

   


    [AllowAnonymous]
    [HttpPost("update")]
    public virtual async Task<IActionResult> Update(AboutDto dto)
    {
      var entity = await _aboutRepository.GetByAsync(x => x.Id == dto.Id);

      if (entity == null) return NotFound(new ApiResponse(StatusCodes.Status404NotFound));

      var result = _uow.Mapper.Map(dto, entity);

      _aboutRepository.Update(result);


      if (await _uow.SaveAsync()) return Ok();

      return BadRequest("Failed to Update");
    }


    [HttpPost("Delete/{id}")]
    public virtual async Task<ActionResult> Delete(int id)
    {
      var entity = await _aboutRepository.GetByAsync(x => x.Id == id);

      if (entity == null) return NotFound(new ApiResponse(StatusCodes.Status404NotFound));

      entity.IsDeleted = true;

      _aboutRepository.Update(entity);

      if (!await _uow.SaveAsync()) return BadRequest(new ApiResponse(StatusCodes.Status400BadRequest));

      return Ok();


    }

    [HttpGet]
    public virtual async Task<IActionResult> Get()
    {
      var result = await _aboutRepository.GetAllByAsync(x => x.IsDeleted == false);

      return Ok(result);
    }

    [HttpGet("GetById/{id}")]
    public virtual async Task<IActionResult> GetById(int id)
    {

      var result = await _aboutRepository.GetByIdAsync(id);

      return Ok(result);
    }

  }

}
