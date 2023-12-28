using OracleConnectivity.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace OracleConnectivity.Controllers
{
    public class EmployeeController : Controller
    {

        public ActionResult EmpDetails()
        {
            List<EMP> employees = new List<EMP>();
            try
            {
                using (ApplicationDbContext db = new ApplicationDbContext())
                {
                    employees = db.EMP.ToList();
                }
            }
            catch (Exception)
            {

                throw;
            }
            return View(employees);
        }
        public ActionResult AddEmployee()
        {
            return View();
        }

        [HttpPost]
        public ActionResult AddEmployeeDetails(EMP ep)
        {
            EMP emp = new EMP();
            try
            {
                using (ApplicationDbContext db = new ApplicationDbContext())
                {
                    if (ep != null)
                    {
                      
                        emp.ENAME = ep.ENAME;
                        emp.JOB = ep.JOB;
                        emp.COMM = ep.COMM;
                        emp.MGR = ep.MGR;
                        emp.HIREDATE = ep.HIREDATE;
                        emp.DEPTNO = ep.DEPTNO;
                        emp.SAL = ep.SAL;
                        // ep.EMPNO = 7898;
                        db.EMP.Add(emp);
                        var i = db.SaveChanges();
                    }

                }
            }
            catch (Exception)
            {

                throw;
            }
            //return View("EmpDetails");
            return RedirectToAction("EmpDetails");
        }


        public ActionResult Edit(int id)
        {
            try
            {
                using (ApplicationDbContext db = new ApplicationDbContext())
                {
                    var userToEdit = db.EMP.FirstOrDefault(u => u.EMPNO == id);
                    if (userToEdit != null)
                    {
                        return View(userToEdit);
                    }
                }
            }
            catch (Exception)
            {

                throw;
            }
            return View();
        }

        [HttpPost]
        public ActionResult EditEmployee(EMP emp)
        {
            try
            {
                using (ApplicationDbContext db = new ApplicationDbContext())
                {
                    if (emp != null)
                    {
                        var employyeToEdit = db.EMP.FirstOrDefault(x => x.EMPNO == emp.EMPNO);
                        employyeToEdit.EMPNO = emp.EMPNO;
                        employyeToEdit.ENAME = emp.ENAME;
                        employyeToEdit.JOB = emp.JOB;
                        employyeToEdit.COMM = emp.COMM;
                        employyeToEdit.MGR = emp.MGR;
                        employyeToEdit.HIREDATE = emp.HIREDATE;
                        employyeToEdit.DEPTNO = emp.DEPTNO;
                        employyeToEdit.SAL = emp.SAL;
                        var i = db.SaveChanges();
                    }
                }
            }
            catch (Exception)
            {

                throw;
            }
            return RedirectToAction("EmpDetails");
        }

        public ActionResult Details(int id)
        {
            try
            {
                using (ApplicationDbContext db = new ApplicationDbContext())
                {
                    if (id != 0)
                    {
                        var empDetails = db.EMP.FirstOrDefault(x => x.EMPNO == id);
                        return View(empDetails);
                    }
                }
            }
            catch (Exception)
            {

                throw;
            }
            return View("EmpDetails");
        }


        public ActionResult DeleteEmp(int id)
        {
            try
            {
                using (ApplicationDbContext db = new ApplicationDbContext())
                {
                    var userToDelete = db.EMP.FirstOrDefault(u => u.EMPNO == id);

                    if (userToDelete != null)
                    {
                        db.EMP.Remove(userToDelete);
                        db.SaveChanges();
                    }
                }
            }
            catch (Exception)
            {
                throw;
            }
            return RedirectToAction("EmpDetails");
        }

        public ActionResult SendDataToSqlServer()
        {
            List<EMP> emp = new List<EMP>();

            try
            {
                using (ApplicationDbContext db = new ApplicationDbContext())
                {
                    emp = db.EMP.ToList();
                }

                if (emp.Count > 0)
                {
                    using (ApplicationDbContextDest dbs = new ApplicationDbContextDest())
                    {
                        foreach (var item in emp)
                        {
                            EMPLOYEES employees = new EMPLOYEES
                            {
                               
                                ENAME = item.ENAME,
                                JOB = item.JOB,
                                COMM = item.COMM,
                                MGR = item.MGR,
                                HIREDATE = item.HIREDATE,
                                DEPTNO = item.DEPTNO,
                                SAL = item.SAL
                            };

                            dbs.EMPLOYEES.Add(employees);
                            var i = dbs.SaveChanges();
                        }

                       
                    }
                }
            }
            catch (Exception)
            {
                throw;
            }

            return RedirectToAction("ViewSqlServerData");
        }

        public ActionResult ViewSqlServerData()
        {
            List<EMPLOYEES> employees = new List<EMPLOYEES>();
            try
            {
                using (ApplicationDbContextDest dbs = new ApplicationDbContextDest())
                {
                    employees = dbs.EMPLOYEES.ToList();
                }
            }
            catch (Exception)
            {

                throw;
            }
            return View(employees);
        }
    }
}