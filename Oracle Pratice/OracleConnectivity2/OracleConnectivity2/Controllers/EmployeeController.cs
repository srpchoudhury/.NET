using OracleConnectivity2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace OracleConnectivity2.Controllers
{
    public class EmployeeController : Controller
    {
        // GET: Employee
        public ActionResult empDetails()
        {
            List<EMPDETAILS> empDetails = new List<EMPDETAILS>();
            try
            {
                using (ApplicationDbContext db = new ApplicationDbContext())
                {
                    empDetails= db.EMPDETAILS.ToList();
                }
            }
            catch (Exception)
            {

                throw;
            }
            return View(empDetails);
        }
        public ActionResult empAdd()
        {
          
            return View();
        }
        [HttpPost]
        public ActionResult empAddAcc(EMPDETAILS epd)
        {
            List<EMPDETAILS> empDetails = new List<EMPDETAILS>();
            EMPDETAILS epds = new EMPDETAILS();
            try
            {
                using (ApplicationDbContext db = new ApplicationDbContext())
                {
                   // epds.ID = 7788;
                    epds.EMPNAME = epd.EMPNAME;
                    epds.EMPADD = epd.EMPADD;

                    db.EMPDETAILS.Add(epds);
                    var i = db.SaveChanges();
                }
            }
            catch (Exception)
            {

                throw;
            }
            return RedirectToAction("empDetails");
        }
    }
}