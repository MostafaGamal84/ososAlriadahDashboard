namespace Api.Helpers
{


  public class PaginationParams
  {
    private const int MaxPageSize = 50;
    public int PageNumber { get; set; } = 1;
    private int _length = 10;

    public int PageSize
    {
      get => _length;
      set => _length = (value > MaxPageSize) ? MaxPageSize : value;
    }

  }
}
