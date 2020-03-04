function mostrarMsg(){
    var nome = document.querySelector("#nome").value;
    var idade = document.querySelector("#idade").value;
    
    text01 = document.createTextNode(nome);
    text02 = document.createTextNode(idade);

    var tr01 = criaTr();
    var tr02 = criaTr();
    console.log(tr01);
    var td01 = criaTd();
    var td02 = criaTd();

    td01.appendChild(text01);
    td02.appendChild(text02);

    table01 = document.querySelector("#tbody");
    tr01.appendChild(td01);
    tr01.appendChild(td02);
    table01.appendChild(tr01);
    

}

    function criaTr() {
        return document.createElement("tr");
    }

    function criaTd() {
        return document.createElement("td");
    }