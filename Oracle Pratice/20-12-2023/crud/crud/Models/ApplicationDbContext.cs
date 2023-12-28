using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace crud.Models
{
    
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext()
            : base("Conn")
        {

        }
        public static ApplicationDbContext Create()
        {
            return new ApplicationDbContext();
        }


        public DbSet<Customers> Customers { get; set; }

       


    }
}