function salvar() {
    $.ajax({
        type: "POST",
        url: "https://localhost:44332/API/Empresas.asmx/SalvarEmpresa",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            limparCampos();
            carregarEmpresas();
            $("#modalEditar").modal("hide");
        },
        failure: function (msg) { console.log(msg); },
        data: JSON.stringify({
            emp: {
                codigo: $("#inputCod").val(),
                nome: $("#inputNome").val(),
                dataFundacao: $("#inputData").val(),
                razaoSocial: $("#inputRazao").val(),
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
    $("#inputNome").val("");
    $("#inputData").val("");
    $("#inputRazao").val("");
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

function carregarEmpresas() {
    $.ajax({
        type: "GET",
        url: "https://localhost:44332/API/Empresas.asmx/ListarEmpresas",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            $("#grid_empresas tbody").html("");
            var empresas = data.d;

            for (var i = 0; i < empresas.length; i++) {
                $("#grid_empresas tbody").append("<tr>" +
                    "<td>" + empresas[i].codigo + "</td>" +
                    "<td>" + empresas[i].nome + "</td>" +
                    "<td>" + convertToJavaScriptDate(empresas[i].dataFundacao) + "</td>" +
                    "<td>" +
                    " <button type='button' " +
                    "         class='btn btn-xs btn-primary btn-filiais' " +
                    "         data-codigo='" + empresas[i].codigo + "'" +
                    ">Fliais</button > " +
                    " <button type='button' " +
                    "         class='btn btn-xs btn-secondary btn-editar' " +
                    "         data-codigo='" + empresas[i].codigo + "'" +
                    ">Editar</button> " +
                    " <button type='button' " +
                    "         class='btn btn-xs btn-danger btn-remover' " +
                    "         data-codigo='" + empresas[i].codigo + "'" +
                    ">Remover</button > " +
                    "</td > " +
                    "</tr>");
            }
            adicionaEventoEditar();
            adicionaEventoRemover();
            adicionarEventoFiliais();
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
            url: "https://localhost:44332/API/Empresas.asmx/GetEmpresa",
            data: JSON.stringify({ codigo: codigo }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                $("#modalEditar").modal("show");

                var Empresa = data.d
                console.log(Empresa);
                $("#inputCod").val(Empresa.codigo),
                $("#inputNome").val(Empresa.nome),
                $("#inputData").val(convertToJavaScriptDate(Empresa.dataFundacao)),
                $("#inputRazao").val(Empresa.razaoSocial),
                $("#inputFuncionarios").val(Empresa.funcionarios),
                $("#inputFaturamento").val(Empresa.faturamento),
                $("#inputCapital").val(Empresa.capitalSocial),
                $("#inputInscricao").val(Empresa.inscricaoEstadual),
                $("#inputCNPJ").val(Empresa.cnpj),
                $("#inputCidade").val(Empresa.cidade),
                $("#inputCEP").val(Empresa.cep),
                $("#inputBairro").val(Empresa.bairro),
                $("#inputEndereco").val(Empresa.endereco),
                $("#inputDescricao").val(Empresa.descricao),
                $("#inputEmail").val(Empresa.email),
                $("#inputTelefone").val(Empresa.telefone)
            },
            failure: function (msg) { alert(msg); }
        });
   });
}


function adicionaEventoRemover() {
    $(document).on("click", ".btn-remover", function () {
        var codigo = $(this).data("codigo");
        $.ajax({
            type: "POST",
            url: "https://localhost:44332/API/Empresas.asmx/Remover",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: JSON.stringify({ codigo: codigo }),
            success: function (data) {
                carregarEmpresas();
            },
            failure: function (msg) {
                alert(msg);
                console.log(codigo);
            },
        });
    });    
}

function adicionarEventoFiliais() {
    $(document).on("click", ".btn-filiais", function (e) {
        let codigo = $(this).data("codigo");
        $.ajax({
            type: "GET",
            url: "https://localhost:44332/API/Filiais.asmx/ListarFiliais",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: `codigoEmpresa=${codigo}`,
            success: function (data) {
                window.location.href = `/Pages/Filiais.aspx?codigoEmpresa=${codigo}`;
            },
            failure: function (msg) {
                alert(msg);
                console.log(codigo);
            },
        });
    });
}

$(document).ready(function () {
    carregarEmpresas();

    $(document).on("click", "#btn_salvar", salvar);
    $(document).on("click", "#btn_salvarEditar", salvar);


});

function convertToJavaScriptDate(value) {
    var pattern = /Date\(([^)]+)\)/;
    var results = pattern.exec(value);
    var dt = new Date(parseFloat(results[1]));
    return dt.getDate() + "/" + (dt.getMonth() + 1) + "/" + dt.getFullYear();
}