using AppDevWeb.Modelo.Entidades;
using AppDevWeb.Controller.Repositorios;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppDevWeb.Controller.Repositorios
{
    public class FilialController
    {
        public void Salvar(long codigoMatriz, Filial new_fil)
        {
            Empresa empresa = Empresa.GetEmpresa(codigoMatriz);
            Console.WriteLine(new_fil.codigo);
            Filial filial = empresa.GetFilial(new_fil.codigo);
            if (filial == null)
            {
                empresa.filiais?.Add(new_fil);
            }
            else
            {
                filial.nome = new_fil.nome;
                filial.descricao = new_fil.descricao;
                filial.dataFundacao = new_fil.dataFundacao;
                filial.razaoSocial = new_fil.razaoSocial;
                filial.funcionarios = new_fil.funcionarios;
                filial.faturamento = new_fil.faturamento;
                filial.capitalSocial = new_fil.capitalSocial;
                filial.inscricaoEstadual = new_fil.inscricaoEstadual;
                filial.cnpj = new_fil.cnpj;
                filial.cidade = new_fil.cidade;
                filial.cep = new_fil.cep;
                filial.bairro = new_fil.bairro;
                filial.endereco = new_fil.endereco;
                filial.descricao = new_fil.descricao;
                filial.email = new_fil.email;
                filial.telefone = new_fil.telefone;
            }   
        }

        public List<Filial> GetFiliais(long codigoMatriz)
        {
            Empresa empresa = Empresa.GetEmpresa(codigoMatriz);
            if (empresa != null)
                return empresa.filiais;
            else
                return new List<Filial>();
        }

        public void Remover(long codigoMatriz, long codigoFilial)
        {
            Empresa empresa = Empresa.GetEmpresa(codigoMatriz);
            empresa.RemoveFilial(codigoFilial);
        }

        public Filial GetFilial(long codigoMatriz, long codigoFilial)
        {
            return GetFiliais(codigoMatriz).FirstOrDefault(o => o.codigo == codigoFilial);
        }
    }
}

