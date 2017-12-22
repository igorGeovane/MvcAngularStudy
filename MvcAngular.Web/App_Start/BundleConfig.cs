using System.Web;
using System.Web.Optimization;

namespace MvcAngular.Web
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/Scripts/Bundles")
                .Include("~/bundles/inline.*")
                .Include("~/bundles/polyfills.*")
                .Include("~/bundles/scripts.*")
                .Include("~/bundles/vendor.*")
                .Include("~/bundles/main.*"));

            bundles.Add(new StyleBundle("~/Scripts/Styles")
                .Include("~/bundles/styles.*"));
        }
    }
}
