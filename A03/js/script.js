function troca() {
  var imagem = document.getElementById("foto").src;

  console.log(imagem);

  // vamo pegar os caracteres da var img com o comando lenght

  console.log(imagem.length);

  //vamos utilizar o comando subtring para pegar os caracteres da imagem "pegar pedaços" do caminho da imagem

  /*console.log(imagem.substring(54, imagem.length)); 
  
    or */

  console.log(imagem.substring(imagem.length - 13, imagem.length));

  var rsimg = imagem.substring(imagem.length - 13, imagem.length);

  var rsimg = rsimg == "img/pic_1.jpg" ? "img/pic_2.jpg" : "img/pic_1.jpg";

  document.getElementById("foto").src = rsimg;

  console.log(rsimg);
}

function infoData() {
  // vamos criar uma instancia da classe "date" esta classe possui muitas funcoes como getHours getDate e getMonth

  const time = new Date();
  var dataCompleta = time.toDateString();
  var diames = time.getDate(); // Busca o dia do mes
  var dias = time.getDay(); // Busca o dia da semana de 0 a 6
  var mes = time.getMonth(); // Busca o mes do ano de 0 a 11
  var hora = time.getHours();
  var minutos = time.getMinutes();
  var segundos = time.getSeconds();

  //Desvio de fluxo multiplo com switch case

  switch (dias) {
    case 0:
      dias = "Sunday";

      break;
    case 1:
      dias = "Monday";

      break;

    case 2:
      dias = "Tuesday";

      break;

    case 3:
      dias = "Wednesday";

      break;

    case 4:
      dias = "Thursday";

      break;

    case 5:
      dias = "Friday";

      break;

    case 6:
      dias = "Saturday";

      break;

    default:
      alert("Esse dia não existe");

      break;
  }

  switch (mes) {
    case 0:
      mes = "January";

      break;
    case 1:
      mes = "February";

      break;

    case 2:
      mes = "March";

      break;

    case 3:
      mes = "April";

      break;

    case 4:
      mes = "May";

      break;

    case 5:
      mes = "June";

      break;

    case 6:
      mes = "July";

      break;

    case 7:
      mes = "August";

      break;
  }

  console.log("Today is %d of %s The day of the week is %s", diames, mes, dias);

  console.log(dataCompleta);

  /*time.getDate();
    time.getMonth();
    */
}
