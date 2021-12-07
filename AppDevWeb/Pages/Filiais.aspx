<%@ Page Title="" Language="C#" MasterPageFile="~/Page.Master"
    AutoEventWireup="true"
    CodeBehind="Filiais.aspx.cs"
    Inherits="AppDevWeb.Pages.Filiais" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2"
    ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <script src="CadastroFilial.js"
        type="text/javascript"></script>

    <h3 class="d-flex justify-content-center">Filiais</h3>

    <div class="form-group">
  <div class="row">
    <div class="col-sm-2">
      <label for="inputCod">Código</label>
      <input
        class="form-control"
        type="text"
        name="inputCod"
        id="inputFilialCod"
        disabled
      />
    </div>
    <div class="col-sm-8">
      <label for="inputNome">Nome Filial</label>
      <input class="form-control" type="text" name="inputNome" id="inputFilialNome" />
    </div>

    <div class="col-sm-2">
      <label for="inputData">Data Fundação</label>
      <input class="form-control" type="date" name="inputData" id="inputFilialData" />
    </div>
  </div>

  <div class="row">
    <div class="col-sm-8">
      <label for="inputRazao">Razão Social</label>
      <input
        class="form-control"
        type="text"
        name="inputRazao"
        id="inputFilialRazao"
      />
    </div>
  </div>

  <div class="row">
    <div class="col-sm-2">
      <label for="inputFuncionarios">Funcionários</label>
      <input
        class="form-control"
        type="number"
        name="inputFuncionarios"
        id="inputFilialFuncionarios"
      />
    </div>
    <div class="col-sm-2">
      <label for="inputFaturamento">Faturamento</label>
      <input
        class="form-control"
        type="number"
        name="inputFaturamento"
        id="inputFilialFaturamento"
      />
    </div>
    <div class="col-sm-2">
      <label for="inputCapital">Capital Social</label>
      <input
        class="form-control"
        type="number"
        name="inputCapital"
        id="inputFilialCapital"
      />
    </div>
    <div class="col-sm-3">
      <label for="inputInscricao">Inscrição Estadual</label>
      <input
        class="form-control"
        type="text"
        name="inputInscricao"
        id="inputFilialInscricao"
      />
    </div>
    <div class="col-sm-3">
      <label for="inputCNPJ">CNPJ</label>
      <input class="form-control" type="text" name="inputCNPJ" id="inputFilialCNPJ" />
    </div>
  </div>

  <div class="row">
    <div class="col-sm-6">
      <label for="inputCidade">Cidade</label>
      <input
        class="form-control"
        type="text"
        name="inputCidade"
        id="inputFilialCidade"
      />
    </div>
    <div class="col-sm-2">
      <label for="inputCEP">CEP</label>
      <input class="form-control" type="text" name="inputCEP" id="inputFilialCEP" />
    </div>
    <div class="col-sm-4">
      <label for="inputBairro">Bairro</label>
      <input
        class="form-control"
        type="text"
        name="inputBairro"
        id="inputFilialBairro"
      />
    </div>
  </div>

  <div class="row">
    <div class="col-sm-12">
      <label for="inputEndereco">Endereço</label>
      <input
        class="form-control"
        type="text"
        name="inputEndereco"
        id="inputFilialEndereco"
      />
    </div>
  </div>

  <div class="row">
    <div class="col-sm-6">
      <label for="inputDescricao">Descrição</label>
      <input
        class="form-control"
        type="text"
        name="inputDescricao"
        id="inputFilialDescricao"
      />
    </div>
    <div class="col-sm-2">
      <label for="inputEmail">E-mail</label>
      <input
        class="form-control"
        type="text"
        name="inputEmail"
        id="inputFilialEmail"
      />
    </div>
    <div class="col-sm-2">
      <label for="inputTelefone">Telefone</label>
      <input
        class="form-control"
        type="text"
        name="inputTelefone"
        id="inputFilialTelefone"
      />
    </div>
  </div>
        </div>
            <div class="col-md-12 d-flex justify-content-end">
                <button type="button"
                    class="btn btn-xs btn-success"
                    id="btn_salvar">
                    <i class="fa fa-save"></i> 
                     Salvar</button>
            </div>
        <div class="row">
            <div class="col-md-12 m-2">
                <table id="grid_filiais" class="table">
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Nome</th>
                            <th>Data de Fundação</th>
                            <th>CNPJ
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
        </div>

</asp:Content>