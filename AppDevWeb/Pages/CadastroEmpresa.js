let quantidadeEmpresas = 0;

if (getCookie("codigoEmp") == "") {
    setCookie("codigoEmp", 1, 7);
}

let countEmp = getCookie("codigoEmp");

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

function verificarEmpresas() {
    $.ajax({
        type: "GET",
        url: "https://localhost:44332/API/Empresas.asmx/ContarEmpresas",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: {},
        success: function (data) {
            quantidadeEmpresas = data.d

            if (quantidadeEmpresas === 0) {
                setCookie("codigoEmp", 0, -1);
                setCookie("codigoFilial", 0, -1);
            }

            },
            failure: function (msg) {
                alert(msg);
            },
        });
}

function salvarEditado() {
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

function salvar() {
    $.ajax({
        type: "POST",
        url: "https://localhost:44332/API/Empresas.asmx/SalvarEmpresa",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            countEmp = parseInt(countEmp) + 1;
            
            setCookie("codigoEmp", countEmp, 7);
           
            limparCampos();
            carregarEmpresas();
        },
        failure: function (msg) { console.log(msg); },
        data: JSON.stringify({
            emp: {
                codigo: countEmp,
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
    $("#inputCod").val("");
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
    verificarEmpresas();

    $("#inputCod").val(countEmp),
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
                    "<td>" + empresas[i].cnpj + "</td>" +
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
        console.log("meu pinto", codigo)
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
    $(document).on("click", "#btn_salvarEditar", salvarEditado);


});


function convertToJavaScriptDate(value) {
    var pattern = /Date\(([^)]+)\)/;
    var results = pattern.exec(value);
    var dt = new Date(parseFloat(results[1]));
    return dt.getDate() + "/" + (dt.getMonth() + 1) + "/" + dt.getFullYear();
}