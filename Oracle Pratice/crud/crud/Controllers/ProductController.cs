using crud.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace crud.Controllers
{
    public class ProductController : Controller
    {
        // GET: Product
        ApplicationDbContext db = new ApplicationDbContext();
        // GET: Product
        public ActionResult Index()
        {
            var products = db.Customers.FirstOrDefault();


            return View(products);
        }

        public ActionResult Add()
        {

            return View();
        }

        public ActionResult AddDetails(Product pr)
        {
            db.Product.Add(pr);
            var i = db.SaveChanges();


            return View("Index");
        }
     
    }
        
}