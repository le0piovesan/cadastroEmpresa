﻿using AppDevWeb.Controller.Repositorios;
using AppDevWeb.Modelo.Entidades;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Web;
using System.Web.Script.Services;
using System.Web.Services;
using System.Web.SessionState;

namespace AppDevWeb.API
{
    [ScriptService]
    public class Empresas : System.Web.Services.WebService, IRequiresSessionState
    {
        private EmpresaController Controller
        {
            get
            {
                if (HttpContext.Current
                               .Session["CONTROLLER_EMPRESA"] == null)
                    HttpContext.Current
                               .Session["CONTROLLER_EMPRESA"] = new EmpresaController();

                return HttpContext.Current
                               .Session["CONTROLLER_EMPRESA"] as EmpresaController;
            }
            set 
            {
                HttpContext.Current.Session["CONTROLLER_EMPRESA"] = value;
            }        
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json,
                      UseHttpGet = true)]
        public List<Empresa> ListarEmpresas()
        {
            return Controller.GetEmpresas();
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json,
                      UseHttpGet = true)]
        public int ContarEmpresas()
        {
            return Controller.Contar();
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public Empresa GetEmpresa(long codigo)
        {
            return Empresa.GetEmpresa(codigo);
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public string Remover(long codigo)
        {
            Controller.Remover(codigo);
            return "OK";
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public string SalvarEmpresa(Empresa emp)
        {
            Controller.Salvar(emp);
            return "OK";            
        }

    }
}
