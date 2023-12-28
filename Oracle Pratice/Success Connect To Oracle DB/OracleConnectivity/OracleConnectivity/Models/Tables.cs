using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace OracleConnectivity.Models
{
    [Table("SYSTEM.EMP")]
    public class EMP
    {
        [Key]
        public int EMPNO { get; set; }
        public string ENAME { get; set; }
        public string JOB { get; set; }
        public int? MGR { get; set; }
        public DateTime HIREDATE { get; set; }
        public double SAL { get; set; }
        public double? COMM { get; set; }
        public int DEPTNO { get; set; }
    }
    [Table("SYSTEM.EMPDETAILS")]
    public class EMPDETAILS
    {
        [Key]
        public int ADD { get; set; }
        public string EMPNAME { get; set; }
        public string EADD { get; set; }
    }
    
    [Table("SYSTEM.DEPT")]
    public class DEPT
    {
        [Key]
        public int DEPTNO { get; set; }
        public string DNAME { get; set; }
        public string LOC { get; set; }
      
    }


    [Table("DEPARTMENT")]
    public class DEPARTMENT
    {
        [Key]
        public int DEPTNOSERVER { get; set; }
        public string DNAMESERVER { get; set; }
        public string LOCSERVER { get; set; }

       

    }
    [Table("EMPLOYEES")]
    public class EMPLOYEES
    {
        [Key]
        public int EMPNO { get; set; }
        public string ENAME { get; set; }
        public string JOB { get; set; }
        public int? MGR { get; set; }
        public DateTime? HIREDATE { get; set; }
        public double? SAL { get; set; }
        public double? COMM { get; set; }
        public int? DEPTNO { get; set; }
    }

}