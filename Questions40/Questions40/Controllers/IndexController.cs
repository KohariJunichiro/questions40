using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Questions40.Controllers
{
    public class IndexController : Controller
    {
        // GET: Index
        public ActionResult Index()
        {
            return Content("Hello, World!");
        }
        public ActionResult Show()
        {
            ViewBag.Message = "Hello, World!";
            return View();
        }
    }
}