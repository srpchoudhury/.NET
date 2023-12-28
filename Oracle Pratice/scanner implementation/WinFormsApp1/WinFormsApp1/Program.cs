using System;
using System.Net;
using System.Net.NetworkInformation;
using System.Windows.Forms;

namespace DeviceScannerApp
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void btnScanDevices_Click(object sender, EventArgs e)
        {
            listBoxDevices.Items.Clear();
            ScanDevicesOnNetwork();
        }

        private void ScanDevicesOnNetwork()
        {
            try
            {
                NetworkInterface[] networkInterfaces = NetworkInterface.GetAllNetworkInterfaces();

                foreach (NetworkInterface networkInterface in networkInterfaces)
                {
                    if (networkInterface.OperationalStatus == OperationalStatus.Up &&
                        networkInterface.NetworkInterfaceType != NetworkInterfaceType.Loopback)
                    {
                        listBoxDevices.Items.Add($"Scanning devices on {networkInterface.Description} network:");

                        IPInterfaceProperties ipProperties = networkInterface.GetIPProperties();
                        UnicastIPAddressInformationCollection ipAddresses = ipProperties.UnicastAddresses;

                        foreach (UnicastIPAddressInformation ipAddress in ipAddresses)
                        {
                            listBoxDevices.Items.Add($"Host: {ipAddress.Address}, Name: {Dns.GetHostEntry(ipAddress.Address).HostName}");
                        }

                        listBoxDevices.Items.Add("");
                    }
                }
            }
            catch (Exception ex)
            {
                listBoxDevices.Items.Add($"An error occurred: {ex.Message}");
            }
        }
    }
}
