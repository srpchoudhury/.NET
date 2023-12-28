using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace OracleConnectivity2.Models
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext()
           : base("Conn")
        {
            Database.Log = Console.Write;
        }
        public DbSet<EMPDETAILS> EMPDETAILS { get; set; }

    }
}