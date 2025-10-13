
using API.DTOs;
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
  public class BlogTypeController : BaseApiController
  {
    private readonly IRepository<BlogType> _blogTypeRepository;

    private readonly IUnitOfWork _uow;

    public BlogTypeController(
        IUnitOfWork uow,
        IMapper mapper
,
        IRepository<BlogType> BlogTypeRepository)
    {
      _uow = uow;
      _blogTypeRepository = BlogTypeRepository;
    }
    [HttpPost("add")]
    public virtual async Task<IActionResult> Add(BlogTypeDto dto)
    {
      dto.Id = 0;

      var x = _uow.Mapper.Map<BlogType>(dto);

      var result = _blogTypeRepository.Add(x);

      if (!await _uow.SaveAsync()) return BadRequest(new ApiResponse(400));

      var map = _uow.Mapper.Map<BlogTypeDto>(result);

      return Ok(map);
    }

   


    [AllowAnonymous]
    [HttpPost("update")]
    public virtual async Task<IActionResult> Update(BlogTypeDto dto)
    {
      var entity = await _blogTypeRepository.GetByAsync(x => x.Id == dto.Id);

      if (entity == null) return NotFound(new ApiResponse(StatusCodes.Status404NotFound));

      var result = _uow.Mapper.Map(dto, entity);

      _blogTypeRepository.Update(result);


      if (await _uow.SaveAsync()) return Ok();

      return BadRequest("Failed to Update");
    }


    [HttpPost("Delete/{id}")]
    public virtual async Task<ActionResult> Delete(int id)
    {
      var entity = await _blogTypeRepository.GetByAsync(x => x.Id == id);

      if (entity == null) return NotFound(new ApiResponse(StatusCodes.Status404NotFound));

      entity.IsDeleted = true;

      _blogTypeRepository.Update(entity);

      if (!await _uow.SaveAsync()) return BadRequest(new ApiResponse(StatusCodes.Status400BadRequest));

      return Ok();


    }

    [HttpGet]
    public virtual async Task<IActionResult> Get()
    {
      var result = await _blogTypeRepository.GetAllByAsync(x => x.IsDeleted == false);

      return Ok(result);
    }

    [HttpGet("GetById/{id}")]
    public virtual async Task<IActionResult> GetById(int id)
    {

      var result = await _blogTypeRepository.GetByIdAsync(id);

      return Ok(result);
    }

  }

}
