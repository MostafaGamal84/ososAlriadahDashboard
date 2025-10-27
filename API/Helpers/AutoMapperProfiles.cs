

using API.DTOs;
using API.DTOs.Admin;
using API.Entities;
using AutoMapper;
using DTOs;
using Entities;

namespace API.Helpers
{

  public class AutoMapperProfiles : Profile
  {
    public AutoMapperProfiles()
    {
      CreateMap<BaseEntity, BaseDto>();
      CreateMap<DateTime, DateTime>().ConvertUsing(x => DateTime.SpecifyKind(x, DateTimeKind.Utc));
      CreateMap<AdminAddDto, Admin>();
      CreateMap<Admin, AdminReDto>();
      CreateMap<AuctionDto, Auction>();
      CreateMap<Auction, AuctionReDto>()
      .ForMember(dest => dest.Url, opts => opts.MapFrom(r => r.Url));;


    }
    private bool IsDefaultValue(object value)
    {
      if (value == null)
        return true;

      var type = value.GetType();

      // Handle strings separately
      if (type == typeof(string))
        return string.IsNullOrEmpty((string)value);

      // Handle other types (value types, classes)
      return value.Equals(Activator.CreateInstance(type));
    }

  }
}
