using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace API.Interfaces
{
    public interface IBaseRepo<TEntity> where TEntity : class
    {
        void AddAsync(TEntity entity);
         TEntity Add(TEntity entity);
        void Remove(TEntity entity);
        void AddRangeAsync(List<TEntity> entity);
        void RemoveRangeAsync(List<TEntity> entity);
        void Update(TEntity entity);
        void UpdateRange(List<TEntity> entity);
        void UpdateAsync(TEntity entity);

        Task<IEnumerable<TEntity>> GetAll();
        Task<IEnumerable<TEntity>> GetAllBy(Expression<Func<TEntity, bool>> expression);
        Task<IQueryable<TEntity>> GetAllByAsyncQuerable(Expression<Func<TEntity, bool>> expression);

        Task<TEntity> GetById(int id);
         Task<TEntity> GetByAsync(Expression<Func<TEntity, bool>> expression);

        Task<TEntity> GetBy(Expression<Func<TEntity, bool>> expression);

        Task<IEnumerable<T>> Map_GetAll<T>();
        Task<IEnumerable<T>> Map_GetAllBy<T>(Expression<Func<T, bool>> expression);

        Task<IEnumerable<T>> Map_GetAllByX<T>(Expression<Func<TEntity, bool>> expression);
        Task<IQueryable<T>> Map_GetAllBy_Queryable<T>(Expression<Func<TEntity, bool>> expression);

        Task<T> Map_GetBy<T>(Expression<Func<T, bool>> expression);

    }
}
