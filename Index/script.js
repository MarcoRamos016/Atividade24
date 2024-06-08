document.getElementById("contform").addEventListener("submit", function(event) {
    event.preventDefault(); 

    
    var usuario= document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;
    

    
    var produto = {
        usuario: usuario,
        senha: senha

    };


    if (typeof(Storage) !== "undefined") {
        if (localStorage.getItem("produtos")) {
            var produtosArray = JSON.parse(localStorage.getItem("produtos"));
            produtosArray.push(produto);
            localStorage.setItem("produtos", JSON.stringify(produtosArray));
        } else {
            var novoArray = [produto];
            localStorage.setItem("produtos", JSON.stringify(novoArray));
        }

        document.getElementById("contform").reset();

        alert("Produto cadastrado com sucesso!");

        location.reload();
    } else {
        alert("Seu navegador não suporta a localStorage. Não é possível salvar os dados.");
    }

    
});