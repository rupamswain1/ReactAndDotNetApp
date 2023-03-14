using Application.Core;
using AutoMapper;
using Domain;
using FluentValidation;
using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Edit
    {
        public class Command : IRequest<Results<Unit>>
        {
            public Activity activity { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator() {
                RuleFor(x => x.activity).SetValidator(new ActivityValidator());
            }
        }

        public class Handler : IRequestHandler<Command, Results<Unit>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }
            public async Task<Results<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var activity = await _context.Activities.FindAsync(request.activity.Id);
                if(activity == null) { return null; }
                _mapper.Map(request.activity, activity);
                var result=await _context.SaveChangesAsync()>0;
                if (!result) return Results<Unit>.Failiure("Unable to edit data");
                return Results<Unit>.Success(Unit.Value);
            }

        }
    }
}