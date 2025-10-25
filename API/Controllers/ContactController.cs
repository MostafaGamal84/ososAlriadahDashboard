
using API.DTOs;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using UnitOfWork;
using API.Error;
using Microsoft.AspNetCore.Http;
using System.Net.Mail;
using System.Net;

namespace API.Controllers
{
  [AllowAnonymous]
  public class ContactController : BaseApiController
  {
    private readonly IRepository<Contact> _contactRepository;

    private readonly IUnitOfWork _uow;

    public ContactController(
        IUnitOfWork uow,
        IMapper mapper
,
        IRepository<Contact> contactRepository)
    {
      _uow = uow;
      _contactRepository = contactRepository;
    }
    [HttpPost("add")]
    public virtual async Task<IActionResult> Add(ContactDto dto)
    {
      dto.Id = 0;

      var x = _uow.Mapper.Map<Contact>(dto);

      var result = _contactRepository.Add(x);

      if (!await _uow.SaveAsync()) return BadRequest(new ApiResponse(400));

      var map = _uow.Mapper.Map<ContactDto>(result);

      return Ok(map);
    }




    [AllowAnonymous]
    [HttpPost("update")]
    public virtual async Task<IActionResult> Update(ContactDto dto)
    {
      var entity = await _contactRepository.GetByAsync(x => x.Id == dto.Id);

      if (entity == null) return NotFound(new ApiResponse(StatusCodes.Status404NotFound));

      var result = _uow.Mapper.Map(dto, entity);

      _contactRepository.Update(result);


      if (await _uow.SaveAsync()) return Ok();

      return BadRequest("Failed to Update");
    }


    [HttpPost("Delete/{id}")]
    public virtual async Task<ActionResult> Delete(int id)
    {
      var entity = await _contactRepository.GetByAsync(x => x.Id == id);

      if (entity == null) return NotFound(new ApiResponse(StatusCodes.Status404NotFound));

      entity.IsDeleted = true;

      _contactRepository.Update(entity);

      if (!await _uow.SaveAsync()) return BadRequest(new ApiResponse(StatusCodes.Status400BadRequest));

      return Ok();


    }

    [HttpGet]
    public virtual async Task<IActionResult> Get()
    {
      var result = await _contactRepository.GetAllByAsync(x => x.IsDeleted == false);

      return Ok(result);
    }

    [HttpGet("GetById/{id}")]
    public virtual async Task<IActionResult> GetById(int id)
    {

      var result = await _contactRepository.GetByIdAsync(id);

      return Ok(result);
    }


    [HttpPost("SendEmailForNewRequests")]
    public async Task SendEmailForNewRequests(string email, string name, string message, string phone)
    {
      // Compose the email body in HTML format with good styling
      string htmlBody = $@"
<div style='font-family: Arial, sans-serif; padding: 20px; direction: rtl; text-align: right;'>
    <h2 style='color: #2c3e50;'>🔔 رسالة جديدة من نموذج التواصل</h2>
    <p style='font-size: 16px;'>لقد تم استلام رسالة جديدة من نموذج التواصل على الموقع.</p>
    <table style='border-collapse: collapse; width: 100%; max-width: 600px; font-size: 16px;'>
        <tr style='background-color: #f2f2f2;'>
            <th style='text-align: right; padding: 10px; border: 1px solid #ccc;'>الحقل</th>
            <th style='text-align: right; padding: 10px; border: 1px solid #ccc;'>القيمة</th>
        </tr>
        <tr>
            <td style='padding: 10px; border: 1px solid #ccc;'>الاسم</td>
            <td style='padding: 10px; border: 1px solid #ccc;'>{name}</td>
        </tr>
        <tr>
            <td style='padding: 10px; border: 1px solid #ccc;'>البريد الإلكتروني</td>
            <td style='padding: 10px; border: 1px solid #ccc;'>{email}</td>
        </tr>
        <tr>
            <td style='padding: 10px; border: 1px solid #ccc;'>رقم الهاتف</td>
            <td style='padding: 10px; border: 1px solid #ccc;'>{phone}</td>
        </tr>
        <tr>
            <td style='padding: 10px; border: 1px solid #ccc;'>الرسالة</td>
            <td style='padding: 10px; border: 1px solid #ccc;'>{message}</td>
        </tr>
    </table>
</div>";

      string websiteEmail = "ussryadah@gmail.com";
      MailMessage myMail = new MailMessage();
      myMail.From = new MailAddress("info@osos-alriadah.com");
      myMail.To.Add(websiteEmail);
      myMail.Subject = "📨 Message From Website";
      myMail.SubjectEncoding = System.Text.Encoding.UTF8;
      myMail.Body = htmlBody;
      myMail.BodyEncoding = System.Text.Encoding.UTF8;
      myMail.IsBodyHtml = true;
      myMail.Priority = MailPriority.High;

      using (var client = new SmtpClient())
      {
        client.Host = "smtpout.secureserver.net";
        client.Port = 587;
        client.EnableSsl = true;
        client.Credentials = new NetworkCredential("info@osos-alriadah.com", "P@ssw0rd1");

        client.Send(myMail);
      }
    }

  }

}
