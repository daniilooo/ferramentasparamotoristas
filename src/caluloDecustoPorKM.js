function calcularCustoPorKm(){ 
    
    event.preventDefault();

    let consumoNagasolina = Number(document.getElementById('consumoGasolina').value);
    let consumoNoEtanol = Number(document.getElementById('consumoEtanol').value);
    let valorGasolina = Number(document.getElementById('valorGasolina').value);
    let valorEtanol = Number(document.getElementById('valorEtanol').value);

    //calculo de rendimento
    let rendimentoNagasolina = (1/consumoNagasolina).toFixed(3);
    let rendimentoNoEtanol = (1/consumoNoEtanol).toFixed(3);

    //calculo de custo por km
    let custoNagasolina = (rendimentoNagasolina * valorGasolina).toFixed(2);
    let custoNoEtanol = (rendimentoNoEtanol * valorEtanol).toFixed(2);   
    

    let newResultado = document.getElementById('resultado');
    newResultado.innerHTML += `O rendimento do seu carro na gasolina é ${rendimentoNagasolina} L/Km</br> O rendimento do seu carro no etanol é ${rendimentoNoEtanol} L/Km</br> O seu custo por Km utilizando Gasolina é ${custoNagasolina} R$/Km</br> O seu custo por km utilizando Etanol é ${custoNoEtanol} R$/km`;

}