// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
var cuentas = [];
var tDebito = 0;
var tCredito = 0;
$(document).ready(function () {
    function loadCounts() {
        //cuentas = [];
        temp = $("#tablacuentas tbody").html();
        console.log(temp);
        size = temp.match(/\<tr\>/gm).length ;
        for (let i = 0; i < size; i++) {
            cuenta = {};
            cuenta.Numero = $("#tablacuentas tbody tr #".concat(i, "Numero")).val()
            cuenta.Nombre = $("#tablacuentas tbody tr #" + parseFloat(i) + "Nombre").val()
            cuenta.Cedula = $("#tablacuentas tbody tr #" + parseFloat(i) + "Cedula").val()
            cuenta.NombreTercero = $("#tablacuentas tbody tr #" + parseFloat(i) + "NombreTercero").val()
            cuenta.Nota = $("#tablacuentas tbody tr #" + parseFloat(i) + "Nota").val()
            cuenta.Debito = $("#tablacuentas tbody tr #" + parseFloat(i) + "Debito").val()
            cuenta.Credito = $("#tablacuentas tbody tr #" + parseFloat(i) + "Credito").val()
            cuenta.Modify = false;
            cuentas.push(cuenta);
        }
        console.log(cuentas);
        actualizaValores();
    }
    loadCounts();

    $(cuentas).on('change', function () {
        console.log("modificado")
    })
});

function validateModified(index) {
    i = index
    console.log(i)
    console.log(cuentas[index].Modify)
    if (cuentas[index].Modify == false) {
        $("#tablacuentas tbody tr #".concat(i, "Numero")).removeAttr("disabled")
        $("#tablacuentas tbody tr #" + parseFloat(i) + "Nombre").removeAttr("disabled")
        $("#tablacuentas tbody tr #" + parseFloat(i) + "Cedula").removeAttr("disabled")
        $("#tablacuentas tbody tr #" + parseFloat(i) + "NombreTercero").removeAttr("disabled")
        $("#tablacuentas tbody tr #" + parseFloat(i) + "Nota").removeAttr("disabled")
        $("#tablacuentas tbody tr #" + parseFloat(i) + "Debito").removeAttr("disabled")
        $("#tablacuentas tbody tr #" + parseFloat(i) + "Credito").removeAttr("disabled")
        $("#tablacuentas tbody tr #" + parseFloat(i) + "btn").text("save");
        cuentas[index].Modify = true;
    }
    else {
        $("#tablacuentas tbody tr #".concat(i, "Numero")).attr("disabled",true)
        $("#tablacuentas tbody tr #" + parseFloat(i) + "Nombre").attr("disabled",true)
        $("#tablacuentas tbody tr #" + parseFloat(i) + "Cedula").attr("disabled",true)
        $("#tablacuentas tbody tr #" + parseFloat(i) + "NombreTercero").attr("disabled",true)
        $("#tablacuentas tbody tr #" + parseFloat(i) + "Nota").attr("disabled",true)
        $("#tablacuentas tbody tr #" + parseFloat(i) + "Debito").attr("disabled", true)
        $("#tablacuentas tbody tr #" + parseFloat(i) + "Credito").attr("disabled", true)
        $("#tablacuentas tbody tr #" + parseFloat(i) + "btn").text("edit");
        cuentas[index].Modify = false;

        cuenta = {};
        cuenta.Numero = $("#tablacuentas tbody tr #".concat(i, "Numero")).val()
        cuenta.Nombre = $("#tablacuentas tbody tr #" + parseFloat(i) + "Nombre").val()
        cuenta.Cedula = $("#tablacuentas tbody tr #" + parseFloat(i) + "Cedula").val()
        cuenta.NombreTercero = $("#tablacuentas tbody tr #" + parseFloat(i) + "NombreTercero").val()
        cuenta.Nota = $("#tablacuentas tbody tr #" + parseFloat(i) + "Nota").val()
        cuenta.Debito = $("#tablacuentas tbody tr #" + parseFloat(i) + "Debito").val()
        cuenta.Credito = $("#tablacuentas tbody tr #" + parseFloat(i) + "Credito").val()
        cuenta.Modify = false;
        cuentas[i] = cuenta;
    }

    actualizaValores();
}

function btnAdd() {
    cuenta = {};
    cuenta.Numero = $("#tablacuentas tbody tr #newNumero").val()
    cuenta.Nombre = $("#tablacuentas tbody tr #newNombre").val()
    cuenta.Cedula = $("#tablacuentas tbody tr #newCedula").val()
    cuenta.NombreTercero = $("#tablacuentas tbody tr #newNombreTercero").val()
    cuenta.Nota = $("#tablacuentas tbody tr #newNota").val()
    cuenta.Debito = $("#tablacuentas tbody tr #newDebito").val()
    cuenta.Credito = $("#tablacuentas tbody tr #newCredito").val()
    cuenta.Modify = false;
    temprnew = $("#tablacuentas tbody #newitem").html()
    console.log(cuentas.length);
    $("#tablacuentas tbody #newitem").remove()
    $("#tablacuentas tbody").html($("#tablacuentas tbody").html()+`
        <tr>
            <td><input class="form-control" id="`+ cuentas.length + `Numero" type="text" value="` + cuenta.Numero + `" disabled/></td>
            <td><input class="form-control" id="`+ cuentas.length + `Nombre" type="text" value="` + cuenta.Nombre + `" disabled/></td>
            <td><input class="form-control" id="`+ cuentas.length + `Cedula" type="text" value="` + cuenta.Cedula + `" disabled/></td>
            <td><input class="form-control" id="`+ cuentas.length + `NombreTercero" type="text" value="` + cuenta.NombreTercero + `" disabled/></td>
            <td><input class="form-control" id="`+ cuentas.length + `Nota" type="text" value="` + cuenta.Nota + `" disabled/></td>
            <td><input class="form-control" id="`+ cuentas.length + `Debito" type="text" value="` + cuenta.Debito + `" disabled/></td>
            <td><input class="form-control" id="`+ cuentas.length + `Credito" type="text" value="` + cuenta.Credito + `" disabled/></td>
            <td><button id="`+ cuentas.length + `btn" onclick="validateModified(`+cuentas.length+`)"><span class="oi oi-image"></span> Edit</button></td>
        </tr>
        <tr id ="newitem">
            `+ temprnew +`
        </tr>
    `);
    cuentas.push(cuenta);
    actualizaValores();
}

function actualizaValores() {
    tDebito = 0;
    tCredito = 0;

    for (i = 0; i < cuentas.length; i++) {
        tDebito += parseFloat(cuentas[i].Debito);
        tCredito += parseFloat(cuentas[i].Credito);
    }

    $('#tdebito').text(tDebito)
    $('#tcredito').text(tCredito)
    $('#tdiferencia').text(tDebito-tCredito)
}

function validateValue() {
    diff = tDebito - tCredito;

    if (diff==0)
    {
        var data = new FormData();
        data.append('Sucursal', $('#Sucursal').val())
        data.append('TipoDocumento', $('#TipoDocumento').val())
        data.append('FechaContabilizacion', $('#FechaContabilizacion').val())
        data.append('FechaDocumento', $('#FechaDocumento').val())
        data.append('Cedula', $('#Cedula').val())
        data.append('Nombre', $('#Nombre').val())
        data.append('Moneda', $('#Moneda').val())
        data.append('Notas', $('#Notas').val())
        data.append('Cuentas', JSON.stringify(cuentas))

        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'DocumentoContable/Create', true);
        xhr.onload = function () {
            // do something to response
            console.log(this.responseText);
        };
        xhr.send(data);
    }
    else {
        console.log("not iguales");
        $('#failedValue').modal('toggle')
    }
}