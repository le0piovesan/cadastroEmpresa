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
                            <th>Data de Cadastro</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
        </div>
    </div>


</asp:Content>
