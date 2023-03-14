

using Application.Core;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BaseApiController : ControllerBase
    {
        private IMediator _mediator;

        protected IMediator Mediator => _mediator ??=
            HttpContext.RequestServices.GetService<IMediator>();

        protected ActionResult HandleResult<T> (Results<T> results)
        {
            if (results == null) return NotFound();
            if (results.IsSuccess && results.Value != null)
            {
                return Ok(results.Value);
            }
            if(results.IsSuccess && results.Value == null)
            {
                return NotFound();
            }
            // else { return BadRequest(); }
            return BadRequest();
        }
    }
}