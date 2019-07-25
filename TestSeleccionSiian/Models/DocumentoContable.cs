using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TestSeleccionSiian.Models
{
    public class DocumentoContable
    {
        public string Sucursal { get; set; }

        public string TipoDocumento { get; set; }

        public string FechaDocumento { get; set; }

        public string FechaContabilizacion { get; set; }

        public int Cedula { get; set; }

        public string Nombre { get; set; }

        public string Moneda { get; set; }

        public string Notas { get; set; }

        public List<Cuenta> Cuentas{ get; set; }
    }
}
