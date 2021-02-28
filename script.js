function calc(weight, height) {
  height = document.getElementById("height").value;
  weight = document.getElementById("weight").value;

  if (height.length >= 4) {
    alert("O número digitado em ALTURA não é válido!");
  } else if (weight.length >= 4) {
    alert("O número digitado em PESO não é válido!");
  } else {
    height = document.getElementById("height").value / 100;
    let imc = Math.floor(weight / (height * height));
    console.log(imc);
    document.getElementById(
      "imc"
    ).innerHTML = `O seu IMC é <span class="highlight">${imc}</span>.`;

    if (imc <= 18.9) {
      document.getElementById(
        "desc"
      ).innerHTML = `IMC menor que 19: Você está <span class="highlight-red">ABAIXO DO PESO IDEAL</span>. Um corpo abaixo do peso ideal pode esconder problemas de saúde como diabetes e hipertireoidismo, entre outros males, assim como pode acarretar distúrbios que chegam até mesmo colocar a vida em risco. Saber as causas e consequências do baixo peso é essencial para a manutenção da saúde e do bem-estar. <a
      target="_blank"
      href="https://www.minhavida.com.br/alimentacao/tudo-sobre/17566-como-engordar"
      >Como engordar com saúde.</a
    >`;
    } else if (imc >= 19 && imc <= 25) {
      document.getElementById(
        "desc"
      ).innerHTML = `IMC entre 19 e 25: Você está <span class="highlight-green">DENTRO DO PESO IDEAL</span>. Estar com a manutenção do corpo em dia é sinônimo de saúde e bem-estar. Isso porque, quando estamos com o organismo saudável, a energia aumenta e, consequentemente, a autoestima, motivação e também a disposição. O corpo humano funciona como uma máquina: se soubermos cuidar bem dele com uma alimentação saudável, check-up médico em dia e atividades físicas regulares, as chances de ele funcionar corretamente, evitando doenças e baixa imunidade, são muito altas.<a
        target="_blank"
        href="https://www.unimedfortaleza.com.br/blog/alimentacao/dicas-praticas-para-manter-o-peso-ideal"
        >Como manter o peso ideal.</a
      >`;
    } else if (imc > 25 && imc <= 29) {
      document.getElementById(
        "desc"
      ).innerHTML = `IMC acima de 25: Você está com <span class="highlight-red">SOBREPESO</span>. De acordo com o Ministério da Saúde, 53,8% da população brasileira está em sobrepeso. Apesar de não ser tão arriscado quanto estar em grau de Obesidade, estar acima do peso (mesmo que pouco) já acarreta riscos para a saúde. <a
          target="_blank"
          href="https://www.minhavida.com.br/alimentacao/materias/20614-20-dicas-para-emagrecer-rapido-e-com-saude"
          >Como emagrecer com saúde.</a
        >`;
    } else if (imc > 29) {
      document.getElementById(
        "desc"
      ).innerHTML = `IMC acima de 29: Você está com <span class="highlight-red">OBESIDADE</span>. A obesidade é um fator de risco para várias doenças dentre as quais podemos citar: câncer, hipertensão arterial, doenças cardiovasculares, doenças cerebrovasculares, apneia do sono, osteoartrite e Diabetes tipo II. O aumento do peso corporal é uma tendência mundial, mas você pode ir na direção contrária. Com uma alimentação adequada e exercícios físicos, é possível reverter esse quadro. <a
            target="_blank"
            href="https://www.minhavida.com.br/alimentacao/materias/20614-20-dicas-para-emagrecer-rapido-e-com-saude"
            >Como emagrecer com saúde.</a
          >`;
    }
  }
}
