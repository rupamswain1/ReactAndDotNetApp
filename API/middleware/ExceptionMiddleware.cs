using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Net

namespace API.middleware
{
    public class ExceptionMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly ILogger<ExceptionMiddleware> _logger;
        private readonly IHostEnvironment _env;
        public ExceptionMiddleware(RequestDelegate next, ILogger<ExceptionMiddleware> logger, IHostEnvironment env)
        {
            _next = next;
            _logger = logger;
            _next = next;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            try
            {
                await _next(context);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, ex.Message);
                context.Response.ContentType = "application/json";
                context.Response.StatusCode =
                (int)HttpStatusCode.InternalServerError;
                var response = _env.IsDevelopment()
                    ? new AppException(context.Response.StatusCode, ex.Message, ex.StackTrace?.ToString())
                    : new AppException(context.Response.StatusCode, "Internal server error");

                var options = new JsonSerializerOptions { PropertyNamingPolicy = JsonNaminfPolicy.caelCase;
            }
            await context.response.WriteAsync(json)}
    }
    var json = new jsonSerializer..Serialize(ResponseCachingExtensions, options);
}
        }

    
}