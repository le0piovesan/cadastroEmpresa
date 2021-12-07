if (getCookie("codigoFilial") == "") {
    setCookie("codigoFilial", 1, 7);
}
let countFilial = getCookie("codigoFilial");

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function salvar() {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var codigo = url.searchParams.get("codigoEmpresa");
    $.ajax({
        type: "POST",
        url: "https://localhost:44332/API/Filiais.asmx/SalvarFilial",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            countFilial = parseInt(countFilial) + 1;
            setCookie("codigoFilial", countFilial, 7);
            limparCampos();
            carregarFiliais();
        },
        failure: function (msg) { console.log(msg); },
        data: JSON.stringify({
            codigoMatriz: codigo,
            filial: {
                codigo: countFilial,
                nome: $("#inputFilialNome").val(),
                dataFundacao: $("#inputFilialData").val(),
                razaoSocial: $("#inputFilialRazao").val(),
                funcionarios: $("#inputFilialFuncionarios").val(),
                faturamento: $("#inputFilialFaturamento").val(),
                capitalSocial: $("#inputFilialCapital").val(),
                inscricaoEstadual: $("#inputFilialInscricao").val(),
                cnpj: $("#inputFilialCNPJ").val(),
                cidade: $("#inputFilialCidade").val(),
                cep: $("#inputFilialCEP").val(),
                bairro: $("#inputFilialBairro").val(),
                endereco: $("#inputFilialEndereco").val(),
                descricao: $("#inputFilialDescricao").val(),
                email: $("#inputFilialEmail").val(),
                telefone: $("#inputFilialTelefone").val(),
            },
        })
    });
}

function limparCampos() {
    $("#inputFilialCod").val("");
    $("#inputFilialNome").val("");
    $("#inputFilialData").val("");
    $("#inputFilialRazao").val("");
    $("#inputFilialFuncionarios").val("");
    $("#inputFilialFaturamento").val("");
    $("#inputFilialCapital").val("");
    $("#inputFilialInscricao").val("");
    $("#inputFilialCNPJ").val("");
    $("#inputFilialCidade").val("");
    $("#inputFilialCEP").val("");
    $("#inputFilialBairro").val("");
    $("#inputFilialEndereco").val("");
    $("#inputFilialDescricao").val("");
    $("#inputFilialEmail").val("");
    $("#inputFilialTelefone").val("");
}

function carregarFiliais() {  
    $("#inputFilialCod").val(countFilial);
    var url_string = window.location.href;
    var url = new URL(url_string);
    var codigo = url.searchParams.get("codigoEmpresa");

    $.ajax({
        type: "GET",
        url: "https://localhost:44332/API/Filiais.asmx/ListarFiliais",
        data: `codigoEmpresa=${codigo}`,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            console.log(data)
            $("#grid_filiais tbody").html("");
            var filiais = data.d;
            if (filiais && filiais.length > 0) { 
                for (var i = 0; i < filiais.length; i++) {
                    $("#grid_filiais tbody").append("<tr>" +
                        "<td>" + filiais[i].codigo + "</td>" +
                        "<td>" + filiais[i].nome + "</td>" +
                        "<td>" + convertToJavaScriptDate(filiais[i].dataFundacao) + "</td>" +
                        "<td>" + filiais[i].cnpj + "</td>" +
                        "<td>" +
                        " <button type='button' " +
                        "         class='btn btn-xs btn-secondary btn-editar-filial' " +
                        "         data-codigo='" + filiais[i].codigo + "'" +
                        ">Editar</button> " +
                        " <button type='button' " +
                        "         class='btn btn-xs btn-danger btn-remover-filial' " +
                        "         data-codigo='" + filiais[i].codigo + "'" +
                        ">Remover</button > " +
                        "</td > " +
                        "</tr>");
                }
            }
            adicionaEventoEditar();
            adicionaEventoRemover();
        },
        failure: function (msg) { console.log(msg); }
    });
}

function adicionaEventoEditar() {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var codigoMatriz = url.searchParams.get("codigoEmpresa");

    $(document).on("click", ".btn-editar-filial", function () {
        var codigoFilial = $(this).data("codigo");
        $.ajax({
            type: "GET",
            url: "https://localhost:44332/API/Filiais.asmx/GetFilial",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {

                var Empresa = data.d
                console.log(Empresa);
                $("#inputFilialCod").val(Empresa.codigo),
                $("#inputFilialNome").val(Empresa.nome),
                $("#inputFilialData").val(Empresa.dataFundacao),
                $("#inputFilialRazao").val(Empresa.razaoSocial),
                $("#inputFilialFuncionarios").val(Empresa.funcionarios),
                $("#inputFilialFaturamento").val(Empresa.faturamento),
                $("#inputFilialCapital").val(Empresa.capitalSocial),
                $("#inputFilialInscricao").val(Empresa.inscricaoEstadual),
                $("#inputFilialCNPJ").val(Empresa.cnpj),
                $("#inputFilialCidade").val(Empresa.cidade),
                $("#inputFilialCEP").val(Empresa.cep),
                $("#inputFilialBairro").val(Empresa.bairro),
                $("#inputFilialEndereco").val(Empresa.endereco),
                $("#inputFilialDescricao").val(Empresa.descricao),
                $("#inputFilialEmail").val(Empresa.email),
                $("#inputFilialTelefone").val(Empresa.telefone)
            },
            failure: function (msg) { alert(msg); },
            data: `codigoMatriz=${codigoMatriz}&&codigoFilial=${codigoFilial}`
        });
    });
}

function adicionaEventoRemover() {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var codigoMatriz = url.searchParams.get("codigoEmpresa");

    $(document).on("click", ".btn-remover-filial", function () {
        var codigoFilial = $(this).data("codigo");
        $.ajax({
            type: "POST",
            url: "https://localhost:44332/API/Filiais.asmx/Remover",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: JSON.stringify({
                codigoMatriz, codigoFilial
            }),
            success: function (data) {
                carregarFiliais();
            },
            failure: function (msg) {
                alert(msg);
                console.log(codigo);
            },
        });
    });
}


$(document).ready(function () {
    carregarFiliais();
    $(document).on("click", "#btn_salvar", salvar);

});

function convertToJavaScriptDate(value) {
    var pattern = /Date\(([^)]+)\)/;
    var results = pattern.exec(value);
    var dt = new Date(parseFloat(results[1]));
    return dt.getDate() + "/" + (dt.getMonth() + 1) + "/" + dt.getFullYear();
}