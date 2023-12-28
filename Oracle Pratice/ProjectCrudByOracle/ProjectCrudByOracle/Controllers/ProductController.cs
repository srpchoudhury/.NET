using ProjectCrudByOracle.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ProjectCrudByOracle.Controllers
{
    public class ProductController : Controller
    {
        // GET: Productt
        // GET: Product
        ApplicationDbContext db = new ApplicationDbContext();
        // GET: Product
        public ActionResult Index()
        {
            var products = db.Products.ToList();
            return View(products);
        }
    }
}