using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TestSeleccionSiian.Models;
using Newtonsoft.Json;

namespace TestSeleccionSiian.Controllers
{
    public class DocumentoContableController : Controller
    {

        private DocumentoContable _document = new DocumentoContable
        {
            Sucursal = "Pasto",
            TipoDocumento = "Nota Contable",
            FechaContabilizacion = "2018-06-12T19:30",
            FechaDocumento = "2018-06-12T19:30",
            Cedula = 1085309822,
            Nombre = "Juan Tonguino",
            Moneda = "Peso Colombiano",
            Notas = "Registro constitucion de empresa s/n acta 001",
            Cuentas = new List<Cuenta> { new Cuenta {
                Numero = 110505,
                Nombre = "Caja General",
                Cedula = 123467,
                NombreTercero = "David Perez",
                Nota = "Caja General",
                Debito = "3000000",
                Credito = "0",
            },  new Cuenta {
                Numero = 310505,
                Nombre = "Apoerte Social",
                Cedula = 123467,
                NombreTercero = "David Perez",
                Nota = "Aporte Social",
                Debito = "0",
                Credito = "3000000",
            } }
        };

        // GET: DocumentoContable
        public ActionResult Index()
        {
            return View(_document);
        }

        // GET: DocumentoContable/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: DocumentoContable/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: DocumentoContable/Create
        [HttpPost]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                // TODO: Add insert logic here

                _document.Sucursal = collection["Sucursal"];
                _document.TipoDocumento = collection["TipoDocumento"];
                _document.FechaContabilizacion = collection["FechaContabilizacion"];
                _document.FechaDocumento = collection["FechaDocumento"];
                _document.Cedula = int.Parse(collection["Cedula"]);
                _document.Nombre = collection["Nombre"];
                _document.Moneda = collection["Moneda"];
                _document.Notas = collection["Notas"];
                string tempCuentas = collection["Cuentas"];
                //JavaScriptSerializer json_serializer = new JavaScriptSerializer();
                List<Cuenta> resutlt=JsonConvert.DeserializeObject<List<Cuenta>>(tempCuentas);
                _document.Cuentas = resutlt;
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: DocumentoContable/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: DocumentoContable/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: DocumentoContable/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: DocumentoContable/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}