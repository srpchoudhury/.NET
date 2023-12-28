using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Helpers;

namespace crud.Models
{
    // Product Model


    // Customer Model
    [Table("SYSTEM.Customers")]
    public class Customers
    {
        [Key]
        public int CustomerID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
       
        public string Email { get; set; }
       
    }

    //create table

//    CREATE TABLE Customers(CustomerID int PRIMARY KEY, FirstName VARCHAR2(255),LastName VARCHAR2(255),Email VARCHAR2(255));


//INSERT INTO Customers(CustomerID, FirstName, LastName, Email)
//VALUES(1, 'John', 'Doe', 'john.doe@example.com');

//    INSERT INTO Customers(CustomerID, FirstName, LastName, Email)
//VALUES(2, 'Jane', 'Smith', 'jane.smith@example.com');






    // Order Model
    /*[Table("Orders", Schema = "C##DBO")]
    public class Orders
    {
        [Key]
        public int OrderID { get; set; }
        public int CustomerID { get; set; }
        public DateTime OrderDate { get; set; }

        // Navigation property for the associated customer

    }*/

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