
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
  public class TermsAndCondController : BaseApiController
  {
    private readonly IRepository<TermsAndCond> _termsAndCondRepository;

    private readonly IUnitOfWork _uow;

    public TermsAndCondController(
        IUnitOfWork uow,
        IMapper mapper
,
        IRepository<TermsAndCond> TermsAndCondRepository)
    {
      _uow = uow;
      _termsAndCondRepository = TermsAndCondRepository;
    }
    [HttpPost("add")]
    public virtual async Task<IActionResult> Add(TermsAndCondDto dto)
    {
      dto.Id = 0;

      var x = _uow.Mapper.Map<TermsAndCond>(dto);

      var result = _termsAndCondRepository.Add(x);

      if (!await _uow.SaveAsync()) return BadRequest(new ApiResponse(400));

      var map = _uow.Mapper.Map<TermsAndCondDto>(result);

      return Ok(map);
    }

   


    [AllowAnonymous]
    [HttpPost("update")]
    public virtual async Task<IActionResult> Update(TermsAndCondDto dto)
    {
      var entity = await _termsAndCondRepository.GetByAsync(x => x.Id == dto.Id);

      if (entity == null) return NotFound(new ApiResponse(StatusCodes.Status404NotFound));

      var result = _uow.Mapper.Map(dto, entity);

      _termsAndCondRepository.Update(result);


      if (await _uow.SaveAsync()) return Ok();

      return BadRequest("Failed to Update");
    }


    [HttpPost("Delete/{id}")]
    public virtual async Task<ActionResult> Delete(int id)
    {
      var entity = await _termsAndCondRepository.GetByAsync(x => x.Id == id);

      if (entity == null) return NotFound(new ApiResponse(StatusCodes.Status404NotFound));

      entity.IsDeleted = true;

      _termsAndCondRepository.Update(entity);

      if (!await _uow.SaveAsync()) return BadRequest(new ApiResponse(StatusCodes.Status400BadRequest));

      return Ok();


    }

    [HttpGet]
    public virtual async Task<IActionResult> Get()
    {
      var result = await _termsAndCondRepository.GetAllByAsync(x => x.IsDeleted == false);

      return Ok(result);
    }

    [HttpGet("GetById/{id}")]
    public virtual async Task<IActionResult> GetById(int id)
    {

      var result = await _termsAndCondRepository.GetByIdAsync(id);

      return Ok(result);
    }

  }

}
