using AppDevWeb.Modelo.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppDevWeb.Controller.Repositorios
{
    public class ProdutoController
    {
        public List<Produto> Produtos = new List<Produto>();

        public void Salvar(Produto Prod)
        {
            if (GetProduto(Prod.codigo) == null)
                Produtos?.Add(Prod);
            else
                foreach (Produto produto in Produtos)
                    if (produto.codigo == Prod.codigo)
                    {
                        produto.nome = Prod.nome;
                        produto.descricao = Prod.descricao;
                        produto.ativa = Prod.ativa;
                        produto.dataFundacao = Prod.dataFundacao;
                    }
        }

        public List<Produto> GetProdutos()
        {
            return Produtos;
        }

        public void Remover(long Codigo)
        {
            Produtos = Produtos.Where(o => o.codigo != Codigo)
                               .ToList();
        }

        public Produto GetProduto(long Codigo)
        {
            return Produtos.FirstOrDefault(o => o.codigo == Codigo);
        }
    }
}
