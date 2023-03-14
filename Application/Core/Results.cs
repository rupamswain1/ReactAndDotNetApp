using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Core
{
    public class Results<T>
    {
        public bool IsSuccess { get; set; }
        public T Value { get; set; }

        public string Error { get; set; }

        public static Results<T> Success(T value)
        {
            return new Results<T> { IsSuccess=true, Value = value };
        }

        public static Results <T> Failiure(string error)
        {
            return new Results<T> { IsSuccess = false, Error = error };
        }

    }
}
