using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace crud.Models
{
    // Product Model

    [Table("Product", Schema = "C##DBO")]
    public class Product
    {
        [Key]
        public int ProductID { get; set; }
        public string ProductName { get; set; }
        public decimal Price { get; set; }
    }

    // Customer Model
    [Table("Customer", Schema = "C##DBO")]
    public class Customers
    {
        [Key]
        public int CustomerID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
    }

    //// Order Model
    [Table("Order", Schema = "C##DBO")]
    public class Order
    {
        [Key]
        public int OrderID { get; set; }
        public int CustomerID { get; set; }
        public DateTime OrderDate { get; set; }

        // Navigation property for the associated customer

    }

    //// OrderDetail Model
    //[Table("OrderDetail", Schema = "C##DBO")]
    //public class OrderDetail
    //{
    //    [Key]
    //    public int OrderDetailID { get; set; }
    //    public int OrderID { get; set; }
    //    public int ProductID { get; set; }
    //    public int Quantity { get; set; }
    //    public decimal Price { get; set; }
    //    public decimal TotalPrice { get; set; }

    //    // Navigation properties for the associated order and product
    //    public Order Order { get; set; }
    //    public Product Product { get; set; }
    //}
}