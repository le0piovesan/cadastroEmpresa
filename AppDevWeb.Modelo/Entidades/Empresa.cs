using System.Collections.Generic;

namespace AppDevWeb.Modelo.Entidades
{
    public class Empresa
    {
        public long codigo { get; set; }
        public string nome { get; set; }
        public System.DateTime dataFundacao { get; set; }
        public string razaoSocial { get; set; }
        public int funcionarios { get; set; }
        public decimal faturamento { get; set; }
        public decimal capitalSocial { get; set; }
        public string inscricaoEstadual { get; set; }
        public string cnpj { get; set; }
        public string cidade { get; set; }
        public string cep { get; set; }
        public string bairro { get; set; }
        public string endereco { get; set; }
        public string descricao { get; set; }
        public string email { get; set; }
        public string telefone { get; set; }
        public List<Filial> filiais { get; set; }

        public static List<Empresa> Empresas = new List<Empresa>();
        
        public static Empresa GetEmpresa(long codigo)
        {
            return Empresas.Find(o => o.codigo == codigo);
        }

        public Filial GetFilial(long codigo_filial)
        {
            Filial filial = filiais.Find(o => o.codigo == codigo_filial);
            if(filial == null)
            {
                return null;
            }
            else
            {
                return filial;
            }
             
        }

        public bool RemoveFilial(long codigoFilial)
        {
            return filiais.Remove(GetFilial(codigoFilial));

        }

        public Empresa()
        {
            filiais = new List<Filial>();
        }
    }
}