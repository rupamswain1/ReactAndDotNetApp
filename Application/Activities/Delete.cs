using Application.Core;
using MediatR;
using Persistence;
namespace Application.Activities
{
    public class Delete
    {
        public class Command : IRequest<Results<Unit>>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Command, Results<Unit>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<Results<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var activity = await _context.Activities.FindAsync(request.Id);
                if (activity == null) return null;
                _context.Remove(activity);
                var result = await _context.SaveChangesAsync() > 0;
                if (!result) return Results<Unit>.Failiure("Unable to delete the record");
                return Results<Unit>.Success(Unit.Value);
            }
        }
    }
}