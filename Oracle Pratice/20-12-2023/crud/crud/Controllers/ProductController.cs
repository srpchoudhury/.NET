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
            List<Customers> customers = new List<Customers>();
            
            using (ApplicationDbContext db = new ApplicationDbContext())
            {
                customers = db.Customers.ToList();
               
            }
            return View(customers);
        }

        public ActionResult Add()
        {

            return View();
        }

        public ActionResult AddDetails(Customers cu)
        {
            
                ApplicationDbContext db = new ApplicationDbContext();
                db.Customers.Add(cu);
                var i = db.SaveChanges();

              
                return RedirectToAction("Index");

          
        }
     
    }
        
}