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
                        //empresa.dataFundacao = Emp.dataFundacao;
                        empresa.razaoSocial = Emp.razaoSocial;
                        //empresa.ativa = Emp.ativa;
                        //empresa.cooperativa = Emp.cooperativa
                        empresa.funcionarios = Emp.funcionarios;
                        empresa.faturamento = Emp.faturamento;
                        empresa.capitalSocial = Emp.capitalSocial;
                        empresa.inscricaoEstadual = Emp.inscricaoEstadual;
                        empresa.cnpj = Emp.cnpj;
                        empresa.cidade = Emp.cidade;
                        empresa.cep = Emp.cep;
                        empresa.bairro = Emp.bairro;
                        empresa.endereco = Emp.endereco;
                        empresa.descricao = Emp.descricao;
                        empresa.email = Emp.email;
                        empresa.telefone = Emp.telefone;
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
        public void SalvarEditar(Empresa Emp)
        {
          
                foreach (Empresa empresa in Empresas)
                    if (empresa.codigo == Emp.codigo)
                    {
                        empresa.nome = Emp.nome;
                        empresa.descricao = Emp.descricao;
                        empresa.dataFundacao = Emp.dataFundacao;
                        empresa.razaoSocial = Emp.razaoSocial;
                        //empresa.ativa = Emp.ativa;
                        //empresa.cooperativa = Emp.cooperativa
                        empresa.funcionarios = Emp.funcionarios;
                        empresa.faturamento = Emp.faturamento;
                        empresa.capitalSocial = Emp.capitalSocial;
                        empresa.inscricaoEstadual = Emp.inscricaoEstadual;
                        empresa.cnpj = Emp.cnpj;
                        empresa.cidade = Emp.cidade;
                        empresa.cep = Emp.cep;
                        empresa.bairro = Emp.bairro;
                        empresa.endereco = Emp.endereco;
                        empresa.descricao = Emp.descricao;
                        empresa.email = Emp.email;
                        empresa.telefone = Emp.telefone;
                }
    }
    }
}
