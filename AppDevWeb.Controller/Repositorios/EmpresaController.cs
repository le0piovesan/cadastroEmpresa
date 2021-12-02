using AppDevWeb.Modelo.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppDevWeb.Controller.Repositorios
{
    public class EmpresaController
    {
        public List<Empresa> Empresas = new List<Empresa>();

        public void Salvar(Empresa Emp)
        {
            if (GetEmpresa(Emp.codigo) == null)
                Empresas?.Add(Emp);
            else
                foreach (Empresa empresa in Empresas)
                    if (empresa.codigo == Emp.codigo)
                    {
                        empresa.nome = Emp.nome;
                        empresa.descricao = Emp.descricao;
                        //empresa.ativa = Emp.ativa;
                        empresa.dataFundacao = Emp.dataFundacao;
                    }
        }

        public List<Empresa> GetEmpresas()
        {
            return Empresas;
        }

        public void Remover(long codigo)
        {
            Empresas = Empresas.Where(o => o.codigo != codigo)
                               .ToList();
        }

        public Empresa GetEmpresa(long codigo)
        {
            return Empresas.FirstOrDefault(o => o.codigo == codigo);
        }
    }
}
