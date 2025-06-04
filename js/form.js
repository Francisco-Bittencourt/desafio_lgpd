class Contato {
    constructor(nome, email, telefone, mensagem, contato) {
      this.nome = nome;
      this.email = email;
      this.telefone = telefone;
      this.mensagem = mensagem;
      this.contato = contato;
    }
  }
  
  function Post(form) {
    const data = new Contato(
      form.elements.namedItem("nome").value,
      form.elements.namedItem("email").value,
      form.elements.namedItem("telefone").value,
      form.elements.namedItem("mensagem").value,
      form.elements.namedItem("contato").value
    );
  
  }
  
  function Enviar() {
    const nome = document.getElementById("nomeid");
  
    if (nome && nome.value !== "") {
      alert('Obrigado sr(a) ' + nome.value + ', os seus dados foram encaminhados com sucesso.');
    }
  }
  