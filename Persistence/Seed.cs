
using Domain;
using Microsoft.AspNetCore.Identity;
namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context, UserManager<AppUser> userManager)
        {

            if (!userManager.Users.Any())
            {
                var users = new List<AppUser>{
                    new AppUser{DisplayName = "Bob", UserName="bob", Email="bob@test.com"},
                    new AppUser{DisplayName = "tom", UserName="tom", Email="tom@test.com"},
                    new AppUser{DisplayName = "jerry", UserName="jerry", Email="jerry@test.com"},

                };
                foreach (var user in users)
                {
                    await userManager.CreateAsync(user, "Pa$$w0rd");
                    Console.WriteLine("Done");
                }
            }



            if (context.Activities.Any()) return;

            var activities = new List<Activity>
            {
                new Activity{
                    Title="Past Activity 1",
                    Date=DateTime.UtcNow.AddMonths(-2),
                    Description="Activity 2 Months Ago",
                    Category="drinks",
                    City="London",
                    Venue="Pub",
                },
                 new Activity{
                    Title="Past Activity 2",
                    Date=DateTime.UtcNow.AddMonths(-1),
                    Description="Activity 1 Month Ago",
                    Category="culture",
                    City="Paris",
                    Venue="Louvre",
                },
                 new Activity{
                     Title="Future Activity 1",
                    Date=DateTime.UtcNow.AddMonths(1),
                    Description="Activity 1 Month in Future",
                    Category="culture",
                    City="London",
                    Venue="Natural history Museum",
                },
                 new Activity{
                        Title="Future Activity 2",
                    Date=DateTime.UtcNow.AddMonths(2),
                    Description="Activity 2 Month in Future",
                    Category="music",
                    City="London",
                    Venue="02 Arena",
                },
                 new Activity{
                    Title="Future Activity 3",
                    Date=DateTime.UtcNow.AddMonths(3),
                    Description="Activity 3 Month in Future",
                    Category="drinks",
                    City="London",
                    Venue="Another Pub!",
                },
                 new Activity{
                    Title="Future Activity 4",
                    Date=DateTime.UtcNow.AddMonths(4),
                    Description="Activity 4 Month in Future",
                    Category="drinks",
                    City="London",
                    Venue="yet Another Pub!",
                },
                 new Activity{
                   Title="Future Activity 5",
                    Date=DateTime.UtcNow.AddMonths(5),
                    Description="Activity 5 Month in Future",
                    Category="drinks",
                    City="London",
                    Venue="Another Pub!",
                },
                 new Activity{
                   Title="Future Activity 6",
                    Date=DateTime.UtcNow.AddMonths(6),
                    Description="Activity 6 Month in Future",
                    Category="music",
                    City="London",
                    Venue="Roundhouse Camden",
                },
                  new Activity{
                   Title="Future Activity 7",
                    Date=DateTime.UtcNow.AddMonths(7),
                    Description="Activity 7 Month in Future",
                    Category="travel",
                    City="London",
                    Venue="Somewhere on the Thames",
                },
                  new Activity{
                   Title="Future Activity 8",
                    Date=DateTime.UtcNow.AddMonths(8),
                    Description="Activity 8 Month in Future",
                    Category="film",
                    City="London",
                    Venue="Cinema",
                },
            };
            await context.Activities.AddRangeAsync(activities);
            await context.SaveChangesAsync();
        }
    }
}