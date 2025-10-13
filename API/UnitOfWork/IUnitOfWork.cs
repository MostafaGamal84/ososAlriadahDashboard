using API.Interfaces;
using API.IRepository;
using AutoMapper;
using Entities;

namespace UnitOfWork
{
    public interface IUnitOfWork : IDisposable
    {
        IRepository<TEntity> Repository<TEntity>() where TEntity : BaseEntity;




        Task<bool> SaveAsync();
        bool HasChanges();
        IMapper Mapper { get; }
        IFileRepository FileRepository { get; }
        IAdminRepo AdminRepo { get; }
    }
}
