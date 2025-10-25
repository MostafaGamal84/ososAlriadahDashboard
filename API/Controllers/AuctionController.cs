
using API.DTOs;
using API.Entities;
using API.Error;
using API.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using UnitOfWork;

namespace API.Controllers
{
  [AllowAnonymous]
  public class AuctionController : BaseApiController
  {
    private readonly IRepository<Auction> _auctionRepository;

    private readonly IUnitOfWork _uow;

    public AuctionController(
        IUnitOfWork uow,
        IRepository<Auction> auctionRepository)
    {
      _uow = uow;
      _auctionRepository = auctionRepository;
    }
    [HttpPost("add")]
    public virtual async Task<IActionResult> Add([FromForm] AuctionDto dto)
    {
      dto.Id = 0;

      // 1. Save image if provided
      if (dto.ImageFile != null)
      {
        var savedPath = await _uow.FileRepository.CreateFileAsync(dto.ImageFile, "uploads/Auctions");
        dto.ImagePath = savedPath;
      }

      // 2. Map and save
      var x = _uow.Mapper.Map<Auction>(dto);
      var result = _auctionRepository.Add(x);

      if (!await _uow.SaveAsync())
        return BadRequest(new ApiResponse(400));

      var map = _uow.Mapper.Map<AuctionReDto>(result);
      return Ok(map);
    }




    [AllowAnonymous]
    [HttpPost("update")]
    public virtual async Task<IActionResult> Update([FromForm]AuctionDto dto)
    {
      var entity = await _auctionRepository.GetByAsync(x => x.Id == dto.Id);

      if (entity == null) return NotFound(new ApiResponse(StatusCodes.Status404NotFound));
      // 1. Save image if provided
      if (dto.ImageFile != null)
      {
        var savedPath = await _uow.FileRepository.CreateFileAsync(dto.ImageFile, "uploads/Auctions");
        dto.ImagePath = savedPath;
      }
      var result = _uow.Mapper.Map(dto, entity);

      _auctionRepository.Update(result);


      if (await _uow.SaveAsync()) return Ok();

      return BadRequest("Failed to Update");
    }


    [HttpPost("Delete/{id}")]
    public virtual async Task<ActionResult> Delete(int id)
    {
      var entity = await _auctionRepository.GetByAsync(x => x.Id == id);

      if (entity == null) return NotFound(new ApiResponse(StatusCodes.Status404NotFound));

      entity.IsDeleted = true;

      _auctionRepository.Update(entity);

      if (!await _uow.SaveAsync()) return BadRequest(new ApiResponse(StatusCodes.Status400BadRequest));

      return Ok();
    }

    [HttpGet]
    public virtual async Task<IActionResult> Get()
    {
      var result = await _auctionRepository.GetAllByAsync(x => x.IsDeleted == false);

      return Ok(result);
    }

    [HttpGet("GetById/{id}")]
    public virtual async Task<IActionResult> GetById(int id)
    {

      var result = await _auctionRepository.GetByIdAsync(id);

      return Ok(result);
    }
  }
}
