<%@ Page Title="" Language="C#" MasterPageFile="~/Page.Master"
    AutoEventWireup="true"
    CodeBehind="ListagemEmpresas.aspx.cs"
    Inherits="AppDevWeb.Pages.CadastroEmpresa" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2"
    ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <script src="CadastroEmpresa.js"
        type="text/javascript"></script>

    <div class="form-group">
        <div class="row">
            <div class="col-md-12">
                <table id="grid_empresas" class="table">
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Nome</th>
                            <th>Data de Fundação</th>
                            <th>CNPJ</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <div id="modalEditar" class="modal" tabindex="-1">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Modal title</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <div class="row">
                        <div class="col-sm-2">
                            <label for="inputCod">Código</label>
                            <input class="form-control" type="text" name="inputCod" id="inputCod" disabled>
                        </div>
                        <div class="col-sm-8">
                            <label for="inputNome">Nome</label>
                            <input class="form-control" type="text" name="inputNome" id="inputNome">
                        </div>
                        <div class="col-sm-2">
                            <label for="inputData">Data</label>
                            <input class="form-control" type="text" name="inputData" id="inputData" disabled>
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

                       <%-- <div class="col-sm-2 containerCheckbox">
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
                        </div>--%>

                         <div class="col-sm-4">
                          <label for="inputFuncionarios">Funcionários</label>
                          <input
                            class="form-control"
                            type="number"
                            name="inputFuncionarios"
                            id="inputFuncionarios"
                          />
                        </div>
                        
                      </div>

                      <div class="row">
                       <div class="col-sm-3">
                          <label for="inputFaturamento">Faturamento</label>
                          <input
                            class="form-control"
                            type="number"
                            name="inputFaturamento"
                            id="inputFaturamento"
                          />
                        </div>
                        <div class="col-sm-3">
                          <label for="inputCapital">Capital</label>
                          <input
                            class="form-control"
                            type="number"
                            name="inputCapital"
                            id="inputCapital"
                          />
                        </div>
                        <div class="col-sm-3">
                          <label for="inputInscricao">Inscrição</label>
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
                        <div class="col-sm-4">
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

                            </div>
                        </div>
                    </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                Fechar
                </button>
              <button id="btn_salvarEditar" type="button" class="btn btn-primary">
                <i class="fa fa-plus"></i>
                Salvar
            </button>
            </div>
          </div>
        </div>
      </div>

</asp:Content>
