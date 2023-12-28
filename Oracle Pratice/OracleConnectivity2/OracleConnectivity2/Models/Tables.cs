using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace OracleConnectivity2.Models
{
    [Table("SYSTEM.EMPDETAILS")]
    public class EMPDETAILS
    {
        [Key]
        public int ID { get; set; }
        public string EMPNAME { get; set; }
        public string EMPADD { get; set; }
    }

}