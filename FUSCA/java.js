// Função para atualizar o contador regressivo
function atualizarContador() {
    const dataLancamento = new Date("2025-07-01T00:00:00").getTime();
    const agora = new Date().getTime();
    const diferenca = dataLancamento - agora;
  
    if (diferenca <= 0) {
      document.getElementById("contador").innerText = "LANÇADO!";
      return;
    }
  
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);
  
    document.getElementById("contador").innerText = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
  }
  
  // Atualiza o contador a cada segundo
  setInterval(atualizarContador, 1000);
  atualizarContador(); // Chama imediatamente ao carregar a página