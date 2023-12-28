//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Web;
//using System.Management;
//namespace USB_device.Models
//{
//    public class UsbDeviceController
//    {
       
//            public static List<string> GetConnectedUsbDevices()
//            {
//                List<string> usbDevices = new List<string>();

//                try
//                {
//                    // Set up the WMI query to retrieve USB devices
//                    ManagementObjectSearcher searcher = new ManagementObjectSearcher("SELECT * FROM Win32_PnPEntity WHERE (PNPClass = 'USB' OR PNPClass = 'USBHub')");



//                    // Execute the query
//                    ManagementObjectCollection collection = searcher.Get();

//                    // Iterate through the result set and retrieve information
//                    foreach (ManagementObject obj in collection)
//                    {
//                        usbDevices.Add(obj["DeviceID"].ToString());
//                    }
//                }
//                catch (Exception ex)
//                {
//                    // Handle exceptions as needed
//                    Console.WriteLine("Error: " + ex.Message);
//                }

//                return usbDevices;
//            }
//        }
//    }
