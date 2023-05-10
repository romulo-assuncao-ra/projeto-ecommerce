function consultaEndereco() {
    let cep = document.querySelector("#cep").value;
    if(cep.length <= 8) {
      alert("CEP INVÁLIDO, o CEP deve conter 8 números");
      return;
    }
  
    let url = `https://viacep.com.br/ws/${cep}/json/`;
    fetch(url).then(function (response) {
      
      response.json().then(function (data) {
        mostrarEndereco(data);
      });
    });
  }
  
  function mostrarEndereco(dados) {
    let nomeLocalizacao = document.querySelector(".nome-localizacao");
    if (dados.erro) {
      nomeLocalizacao.innerHTML = "CEP não encontrado";
    } else {
      nomeLocalizacao.innerHTML = dados.localidade;
      console.log("aaaa");
    }
  }