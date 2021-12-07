using AppDevWeb.Controller.Repositorios;
using AppDevWeb.Modelo.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Script.Services;
using System.Web.Services;

namespace AppDevWeb.API
{
    [ScriptService]
    public class Filiais : System.Web.Services.WebService
    {
        public  FilialController Controller
        {
            get
            {
                if (HttpContext.Current
                               .Session["CONTROLLER_FILIAL"] == null)
                    HttpContext.Current
                               .Session["CONTROLLER_FILIAL"] = new FilialController();

                return HttpContext.Current
                               .Session["CONTROLLER_FILIAL"] as FilialController;
            }
            set
            {
                HttpContext.Current.Session["CONTROLLER_FILIAL"] = value;
            }
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json,
                        UseHttpGet = true)]
        public List<Filial> ListarFiliais(long codigoEmpresa)
        {
            Empresa empresa = Empresa.GetEmpresa(codigoEmpresa);
            return empresa.filiais;
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json,
                        UseHttpGet = true)]
        public Filial GetFilial(long codigoMatriz, long codigoFilial)
        {
            FilialController filial = new FilialController();
            return filial.GetFilial(codigoMatriz, codigoFilial);
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public string Remover(long codigoMatriz, long codigoFilial)
        {
            FilialController filial = new FilialController();
            filial.Remover(codigoMatriz, codigoFilial);
            return "OK";
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public string SalvarFilial(long codigoMatriz, Filial filial)
        {
            Console.WriteLine(codigoMatriz);
            Console.WriteLine("asoidasiod" + filial);
            FilialController filialController = new FilialController();
            filialController.Salvar(codigoMatriz, filial);
            return "OK";
        }

    }
}

