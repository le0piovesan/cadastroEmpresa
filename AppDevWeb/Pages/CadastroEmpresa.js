function salvar() {
    $.ajax({
        type: "POST",
        url: "https://localhost:44332/API/Produtos.asmx/SalvarProduto",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            console.log(data)
            limparCampos();
            carregarProdutos();
        },
        failure: function (msg) { console.log(msg); },
        data: JSON.stringify({
            prod: {
                codigo: $("#inputCod").val(),
                nome: $("#inputNome").val(),
                dataFundacao: $("#inputData").val(),
                razaoSocial: $("#inputRazao").val(),
                //ativa: $("#inputAtiva").is(":checked"),
                //cooperativa: $("#inputCooperativa").is(":checked"),
                funcionarios: $("#inputFuncionarios").val(),
                faturamento: $("#inputFaturamento").val(),
                capitalSocial: $("#inputCapital").val(),
                inscricaoEstadual: $("#inputInscricao").val(),
                cnpj: $("#inputCNPJ").val(),
                cidade: $("#inputCidade").val(),
                cep: $("#inputCEP").val(),
                bairro: $("#inputBairro").val(),
                endereco: $("#inputEndereco").val(),
                descricao: $("#inputDescricao").val(),
                email: $("#inputEmail").val(),
                telefone: $("#inputTelefone").val(),
            },
        })
    });
}

function limparCampos() {
    $("#inputCod").val("");
    $("#inputNome").val("");
    $("#inputData").val("");
    $("#inputRazao").val("");
    //$("#inputAtiva").val("");
    //$("#inputCooperativa").val("");
    $("#inputFuncionarios").val("");
    $("#inputFaturamento").val("");
    $("#inputCapital").val("");
    $("#inputInscricao").val("");
    $("#inputCNPJ").val("");
    $("#inputCidade").val("");
    $("#inputCEP").val("");
    $("#inputBairro").val("");
    $("#inputEndereco").val("");
    $("#inputDescricao").val("");
    $("#inputEmail").val("");
    $("#inputTelefone").val("");
}

function carregarProdutos() {
    $.ajax({
        type: "GET",
        url: "https://localhost:44332/API/Produtos.asmx/ListarProdutos",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            console.log(data)
            $("#grid_produtos tbody").html("");
            var produtos = data.d;

            for (var i = 0; i < produtos.length; i++) {
                $("#grid_produtos tbody").append("<tr>" +
                    "<td>" + produtos[i].codigo + "</td>" +
                    "<td>" + produtos[i].nome + "</td>" +
                    "<td>" + produtos[i].descricao + "</td>" +
                    //"<td>" + produtos[i].ativa + "</td>" +
                    "<td>" + produtos[i].dataFundacao + "</td>" +
                    "<td>" +
                    " <button type='button' " +
                    "         class='btn btn-xs btn-secondary btn-editar' " +
                    "         data-codigo='" + produtos[i].codigo + "'" +
                    ">Editar</button> " +
                    " <button type='button' " +
                    "         class='btn btn-xs btn-danger btn-remover' " +
                    "         data-codigo='" + produtos[i].codigo + "'" +
                    ">Remover</button > " +
                    "</td > " +
                    "</tr>");
            }
            adicionaEventoEditar();
            adicionaEventoRemover();
        },
        failure: function (msg) { console.log(msg); },
        data: {}
    });
}

function adicionaEventoEditar() {
    $(document).on("click", ".btn-editar", function () {
        var codigo = $(this).data("codigo");
        $.ajax({
            type: "POST",
            url: "https://localhost:44332/API/Produtos.asmx/GetProduto",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                var Produto = data.d;
                $("#inputCod").val(Produto.codigo),
                $("#inputNome").val(Produto.nome),
                $("#inputData").val(Produto.dataFundacao),
                $("#inputRazao").val(Produto.razaoSocial),
                //$("#inputAtiva").is(":checked"),
                //$("#inputCooperativa").is(":checked"),
                $("#inputFuncionarios").val(Produto.funcionarios),
                $("#inputFaturamento").val(Produto.faturamento),
                $("#inputCapital").val(Produto.capitalSocial),
                $("#inputInscricao").val(Produto.inscricaoEstadual),
                $("#inputCNPJ").val(Produto.cnpj),
                $("#inputCidade").val(Produto.cidade),
                $("#inputCEP").val(Produto.cep),
                $("#inputBairro").val(Produto.bairro),
                $("#inputEndereco").val(Produto.endereco),
                $("#inputDescricao").val(Produto.descricao),
                $("#inputEmail").val(Produto.email),
                $("#inputTelefone").val(Produto.telefone)
            },
            failure: function (msg) { alert(msg); },
            data: JSON.stringify({ Codigo: codigo })
        });
    });
}

function adicionaEventoRemover() {
    $(document).on("click", ".btn-remover", function () {
        var codigo = $(this).data("codigo");
        $.ajax({
            type: "POST",
            url: "https://localhost:44332/API/Produtos.asmx/Remover",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                carregarProdutos();
            },
            failure: function (msg) { alert(msg); },
            data: JSON.stringify({ Codigo: codigo })
        });
    });    
}

$(document).ready(function () {
    carregarProdutos();

    $(document).on("click", "#btn_salvar", salvar);
});