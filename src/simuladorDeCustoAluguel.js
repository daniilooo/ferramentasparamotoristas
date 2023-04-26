function calcularCustoAlugado(){

    event.preventDefault();

    let valorSemana = Number(document.getElementById('valorSemanal').value);
    let kmSemanal = Number(document.getElementById('kmSemanal').value);
    let consumoMedio = Number(document.getElementById('consumoMedio').value);
    let valorCombustivel = Number(document.getElementById('valorCombustivel').value);

    let custoLocadora = valorSemana/kmSemanal;
    let custoCombustivel = (1/consumoMedio)*valorCombustivel;
    let custoCombSemanal = custoCombustivel * kmSemanal;

    let custoTotal = valorSemana + custoCombSemanal;

    let newResultado = document.getElementById('resultado');
    newResultado.innerHTML = `<li>O base no custo da locação semanal, o custo do Km rodado é ${custoLocadora} R$/Km</li> 
    <li>Para rodar os ${kmSemanal} Km da sua franquia o seu custo com combustível vai ser <strong> R$${(custoCombSemanal).toFixed(2)}</strong></li>
    <li>O seu custo semanal total, somando combustível + locação será <strong>R$${(custoTotal).toFixed(2)}</strong></li>` 
}