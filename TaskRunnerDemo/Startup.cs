using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(TaskRunnerDemo.Startup))]
namespace TaskRunnerDemo
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
