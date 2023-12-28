using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace OracleConnectivity.Models
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext()
            : base("Conn")
        {
        }
        public DbSet<EMP> EMP { get; set; }
        public DbSet<DEPT> DEPT { get; set; }
        public DbSet<EMPDETAILS> EMPDETAILS { get; set; }
        
    }

    public class ApplicationDbContextDest : DbContext
    {
        public ApplicationDbContextDest()
            : base("Connection")
        {
        }
        public DbSet<EMPLOYEES> EMPLOYEES { get; set; }
        public DbSet<DEPARTMENT> DEPARTMENT { get; set; }

      
    }
}