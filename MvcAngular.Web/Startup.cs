using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(MvcAngular.Web.Startup))]
namespace MvcAngular.Web
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            
        }
    }
}
