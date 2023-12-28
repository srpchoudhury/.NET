using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;


namespace USB_device.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index() 
        { return View(); }
       
        [HttpPost]
        public ActionResult UploadScannedImage(string scannedImage)
        {
            // Process the scanned image here
            // You can save it, display it, or perform further processing

            // Example: Save the image to a file
            System.IO.File.WriteAllText(Server.MapPath("~/App_Data/scannedImage.txt"), scannedImage);

            return Json(new { success = true });
        }
    }
}