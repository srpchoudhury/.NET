using System;
using WIA;

class Program
{
    static void Main()
    {
        bool isScannerConnected = IsScannerConnected();

        if (isScannerConnected)
        {
            Console.WriteLine("A scanner device is connected.");
        }
        else
        {
            Console.WriteLine("No scanner device found.");
        }

        Console.ReadLine();
    }

    static bool IsScannerConnected()
    {
        try
        {
            // Create a new WIA CommonDialog to select a device
            var commonDialog = new CommonDialog();

            // Show the Select Device dialog without allowing the user to select a device
            var device = commonDialog.ShowSelectDevice(WiaDeviceType.UnspecifiedDeviceType, false, false);

            return device != null;
        }
        catch (Exception)
        {
            // Handle exceptions as needed
            return false;
        }
    }
}
