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
        public void Salvar(Empresa new_emp)
        {
            Empresa empresa = Empresa.GetEmpresa(new_emp.codigo);

            Console.WriteLine(empresa);
            if (empresa == null)
            {
                Empresa.Empresas?.Add(new_emp);
            }
            else
            {
                empresa.nome = new_emp.nome;
                empresa.descricao = new_emp.descricao;
                empresa.razaoSocial = new_emp.razaoSocial;
                empresa.funcionarios = new_emp.funcionarios;
                empresa.faturamento = new_emp.faturamento;
                empresa.capitalSocial = new_emp.capitalSocial;
                empresa.inscricaoEstadual = new_emp.inscricaoEstadual;
                empresa.cnpj = new_emp.cnpj;
                empresa.cidade = new_emp.cidade;
                empresa.cep = new_emp.cep;
                empresa.bairro = new_emp.bairro;
                empresa.endereco = new_emp.endereco;
                empresa.descricao = new_emp.descricao;
                empresa.email = new_emp.email;
                empresa.telefone = new_emp.telefone;
            }   
        }

        public List<Empresa> GetEmpresas()
        {
            return Empresa.Empresas;
        }

        public void Remover(long codigo)
        {
            Empresa.Empresas = Empresa.Empresas.Where(o => o.codigo != codigo)
                               .ToList();
        }

        public int Contar()
        {
            int total = Empresa.Empresas.Count;
            return total;
        }
    }
}
