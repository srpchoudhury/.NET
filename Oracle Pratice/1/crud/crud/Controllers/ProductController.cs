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
     
        // GET: Product
        public ActionResult Index()
        {
            ApplicationDbContext db = new ApplicationDbContext();
            var products = db.Customers.ToList();


            return View(products);
        }

        public ActionResult Add()
        {

            return View();
        }

        public ActionResult AddDetails(Customers cr)
        {
            
            try
            {
                ApplicationDbContext db = new ApplicationDbContext();
                db.Customers.Add(cr);
                var i = db.SaveChanges();

                var products = db.Product.ToList();
                return View(products);

            }
            catch (Exception ex)
            {
                // Handle or log the exception
                Console.WriteLine(ex.Message);
            }
            return View();
        }
     
    }
        
}