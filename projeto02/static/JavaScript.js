function verificaValores() {
    var valor01 = parseInt(document.querySelector("#valor01").value);
    var valor02 = parseInt(document.querySelector("#valor02").value);
    
    if(valor01 > valor02){
        criaDiv(valor01);
    }else if(valor01 < valor02){
        criaDiv(valor02);
    }else{
        resultadoIgual();
    }
    
    
}
    function criaDiv( valor ) {
        var div = document.createElement("div")
        result = document.querySelector("#result");
        div = document.createTextNode(valor);
        result.appendChild(div);
    }
    function resultadoIgual() {
        result = document.querySelector("#result");
        div = document.createTextNode(" Valores Iguais");
       
        result.appendChild(div);
    }