namespace AppDevWeb.Modelo.Entidades
{
    public class Produto
    {
        public long codigo { get; set; }
        public string nome { get; set; }
        public System.DateTime dataFundacao { get; set; }
        public string razaoSocial { get; set; }
        public bool ativa { get; set; }
        public int cooperativa { get; set; }
        public int funcionarios { get; set; }
        public decimal faturamento { get; set; }
        public decimal capitalSocial { get; set; }
        public int inscricaoEstadual { get; set; }
        public string cnpj { get; set; }
        public string cidade { get; set; }
        public string cep { get; set; }
        public string bairro { get; set; }
        public string endereco { get; set; }
        public string descricao { get; set; }
        public string email { get; set; }
        public string telefone { get; set; }





        public Produto()
        {
        }
    }
}