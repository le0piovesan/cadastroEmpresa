<%@ Page Title="" Language="C#" MasterPageFile="~/Page.Master" AutoEventWireup="true" CodeBehind="CadastroEmpresa.aspx.cs" Inherits="AppDevWeb.Pages.CadastroEmpresa" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
<script src="CadastroEmpresa.js"
type="text/javascript"></script>

    <div class="form-group">
  <div class="row">
    <div class="col-sm-2">
      <label for="inputCod">Código</label>
      <input
        class="form-control"
        type="text"
        name="inputCod"
        id="inputCod"
      />
    </div>
    <div class="col-sm-8">
      <label for="inputNome">Nome Fantasia</label>
      <input class="form-control" type="text" name="inputNome" id="inputNome" />
    </div>
    <div class="col-sm-2">
      <label for="inputData">Data Fundação</label>
      <input class="form-control" type="date" name="inputData" id="inputData" />
    </div>
  </div>

  <div class="row">
    <div class="col-sm-8">
      <label for="inputRazao">Razão Social</label>
      <input
        class="form-control"
        type="text"
        name="inputRazao"
        id="inputRazao"
      />
    </div>

    <div class="col-sm-2 containerCheckbox">
      <p>Ativa</p>
      <input
        type="checkbox"
        name="inputAtiva"
        id="inputAtiva"
        class="form-check-input"
      />
    </div>

    <div class="col-sm-2 containerCheckbox">
      <p>Cooperativa</p>
      <input
        type="checkbox"
        name="inputCooperativa"
        id="inputCooperativa"
        class="form-check-input"
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
        id="inputFuncionarios"
      />
    </div>
    <div class="col-sm-2">
      <label for="inputFaturamento">Faturamento</label>
      <input
        class="form-control"
        type="number"
        name="inputFaturamento"
        id="inputFaturamento"
      />
    </div>
    <div class="col-sm-2">
      <label for="inputCapital">Capital Social</label>
      <input
        class="form-control"
        type="number"
        name="inputCapital"
        id="inputCapital"
      />
    </div>
    <div class="col-sm-3">
      <label for="inputInscricao">Inscrição Estadual</label>
      <input
        class="form-control"
        type="text"
        name="inputInscricao"
        id="inputInscricao"
      />
    </div>
    <div class="col-sm-3">
      <label for="inputCNPJ">CNPJ</label>
      <input class="form-control" type="text" name="inputCNPJ" id="inputCNPJ" />
    </div>
  </div>

  <div class="row">
    <div class="col-sm-6">
      <label for="inputCidade">Cidade</label>
      <input
        class="form-control"
        type="text"
        name="inputCidade"
        id="inputCidade"
      />
    </div>
    <div class="col-sm-2">
      <label for="inputCEP">CEP</label>
      <input class="form-control" type="text" name="inputCEP" id="inputCEP" />
    </div>
    <div class="col-sm-4">
      <label for="inputBairro">Bairro</label>
      <input
        class="form-control"
        type="text"
        name="inputBairro"
        id="inputBairro"
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
        id="inputEndereco"
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
        id="inputDescricao"
      />
    </div>
    <div class="col-sm-2">
      <label for="inputEmail">E-mail</label>
      <input
        class="form-control"
        type="text"
        name="inputEmail"
        id="inputEmail"
      />
    </div>
    <div class="col-sm-2">
      <label for="inputTelefone">Telefone</label>
      <input
        class="form-control"
        type="text"
        name="inputTelefone"
        id="inputTelefone"
      />
    </div>
  </div>

  <div class="d-flex justify-content-end">
    <button type="button"
            class="btn btn-xs btn-success"
            id="btn_salvar">
            <i class="fa fa-save"></i> 
        Salvar
    </button>
  </div>
</div>


</asp:Content>
