using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace crud.Models
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext() : base("Conn") { }
        public DbSet<Product> Product { get; set; }
        public DbSet<Customers> Customers { get; set; }
        public DbSet<Order> Order { get; set; }
        //public DbSet<OrderDetail> OrderDetails { get; set; }


    }
}