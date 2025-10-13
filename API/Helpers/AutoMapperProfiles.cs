

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
      CreateMap<About, AboutDto>().ReverseMap();
      CreateMap<Contact, ContactDto>().ReverseMap();
      CreateMap<Service, ServiceDto>().ReverseMap();
      CreateMap<TermsAndCond, TermsAndCondDto>().ReverseMap();
      CreateMap<BlogType, BlogTypeDto>().ReverseMap();
      CreateMap<Blog, BlogReDto>();
      CreateMap<BlogDto, Blog>();
      CreateMap<BannerDto, Banner>();
      CreateMap<Banner, BannerReDto>();
      CreateMap<CustomerDto, Customer>();
      CreateMap<Customer, CustomerReDto>();
       CreateMap<AuctionDto, Auction>();
      CreateMap<Auction, AuctionReDto>();
     

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
