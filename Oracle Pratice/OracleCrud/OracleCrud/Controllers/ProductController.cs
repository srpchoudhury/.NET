using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using OracleCrud.Models;

namespace OracleCrud.Controllers
{
    public class ProductController : Controller
    {
         ApplicationDbContext db = new ApplicationDbContext();
            // GET: Product
            public ActionResult Index()
            {
                var products = db.Products.ToList(); 
                return View(products);
            }
       
    }
}