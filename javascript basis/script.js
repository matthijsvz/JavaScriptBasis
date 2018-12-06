"use strict";

const studentName = "Matthijs van Zunderen";
const studentGroup = "MD2B";
const year = main.year;

init();

function init() {
  document.getElementById("studentName").innerText = studentName;

  var studentGroup1 = (document.querySelectorAll(
    ".studentGroup"
  )[0].innerHTML = studentGroup);
  var studentGroup2 = (document.querySelectorAll(
    ".studentGroup"
  )[1].innerHTML = studentGroup);

  var studentName1 = (document.querySelectorAll(
    ".studentName"
  )[0].innerHTML = studentName);

  var year1 = (document.querySelectorAll(".pageYear")[0].innerHTML = year);
  var year2 = (document.querySelectorAll(".pageYear")[1].innerHTML = year);

      main.addContenItem("Inleiding", intro);
      main.addContenItem("Variabelen", variables);
      main.addContenItem("Object", object);
      main.addContenItem("Array", array);
      main.addContenItem("AJAX - Tabel", tabel);
      main.addContenItem("AJAX - Grafiek", bonus);

  intro();
}

function intro() {
  let description =
    "Je bent in dienst van energiemaatschappij Energy Solutions en" +
    " krijgt de opdracht om een webpagina te maken die de energiestanden toont van een aantal adressen." +
    " De data wordt via een webAPI beschikbaar gesteld. " +
    " Dit gebeurt in kleine stapjes en uiteindelijk is het de bedoeling om de data op een nette manier te presenteren." +
    "<p>Succes!!!</p>";
  main.updateContent("Inleiding", description);

  var element = document.getElementById("contentPlaceholder");

  var img = document.createElement("img");
  img.src = "photo.jpg";
  img.style.width = "100px";

  var label = document.createElement("label");
  label.classList.add("studentName");
  label.innerHTML = studentName;

  var p = document.createElement("p");
  p.appendChild(img);
  p.appendChild(document.createElement("br"));
  p.appendChild(label);
  element.appendChild(p);
}

function variables() {
  var variables = {
    postcode: "1234AB",
    huisnummer: 99,
    datum: new Date("2018-01-01").toISOString().split("T")[0],
    gas: 300,
    water: 30,
    electriciteit: [1001, 1002],
    slimmeMeter: true
  };

  let description =
    "Voor postcode " +
    variables.postcode +
    " en huisnummer " +
    variables.huisnummer +
    " zijn op " +
    variables.datum +
    " metingen gedaan en dit zijn de resultaten: gas=" +
    variables.gas +
    ", water=" +
    variables.water +
    ", electriciteit Hoog=" +
    variables.electriciteit[0] +
    " en electriciteitLaag=" +
    variables.electriciteit[1] +
    ". Dit is gedaan met een slimme meter.";

  var descriptionStats = {
    lengte: description.length,
    woorden: description.trim().split(" ").length,
    eerst: description.split(" ")[0],
    laatst: description.split(" ")[28],
    reverse: description
      .split("")
      .reverse()
      .join("")
  };

  let result =
    "" +
    "<h4>Verslag van de meting </h4>" +
    description +
    "" +
    "<h4>Nog wat eigenschappen</h4>" +
    "Het verslag heeft " +
    descriptionStats.lengte +
    " tekens, " +
    descriptionStats.woorden +
    "" +
    " woorden, het eerste woord is " +
    descriptionStats.eerst +
    " en het laatste woord is " +
    descriptionStats.laatst +
    "<h4>-> BONUS <-: Draai je het verslag van de meting om dan krijg je</h4>" +
    descriptionStats.reverse;
  main.updateContent("Variabelen", result);

  var element = document.getElementById("contentPlaceholder");

  var img = document.createElement("img");
  img.src = "photo.jpg";
  img.style.width = "100px";

  var label = document.createElement("label");
  label.classList.add("studentName");
  label.innerHTML = studentName;

  var p = document.createElement("p");
  p.appendChild(img);
  p.appendChild(document.createElement("br"));
  p.appendChild(label);
  element.appendChild(p);
}

function object() {
  var variables = {
    postcode: "1234AB",
    huisnummer: 99,
    datum: new Date("2018-01-01"),
    gas: 300,
    water: 30,
    electriciteit: [1001, 1002],
    slimmeMeter: true
  };

  let description =
    "<h4>Verslag van de meting </h4>" +
    "Voor postcode " +
    variables.postcode +
    " en huisnummer " +
    variables.huisnummer +
    " zijn op " +
    variables.datum +
    " metingen gedaan en dit zijn de resultaten:<br><br>" +

    "<table>" +
    "<tr>" +
    "<td>Gas:</td>" +
    "<td>" +
    variables.gas +
    "</td>" +
    "</tr>" +
    "<tr>" +
    "<td>Water:</td>" +
    "<td>" +
    variables.water +
    "</td>" +
    "</tr>" +
    "<tr>" +
    "<td>Electriciteit Hoog:</td>" +
    "<td>" +
    variables.electriciteit[0] +
    "</td>" +
    "</tr>" +
    "<tr>" +
    "<td>Electriciteit Hoog:</td>" +
    "<td>" +
    variables.electriciteit[1] +
    "</td>" +
    "</tr>" +
    "</table><br>" +
    "Dit is gedaan met een slimme meter.";
  main.updateContent("Object", description);

  var element = document.getElementById("contentPlaceholder");

  var img = document.createElement("img");
  img.src = "photo.jpg";
  img.style.width = "100px";

  var label = document.createElement("label");
  label.classList.add("studentName");
  label.innerHTML = studentName;

  var p = document.createElement("p");
  p.appendChild(img);
  p.appendChild(document.createElement("br"));
  p.appendChild(label);

  element.appendChild(p);
}

function array() {
  var variables = {
    huis1: {
      postcode: "1234AB",
      huisnummer: 99,
      datum: new Date("2018-01-01").toISOString().split("T")[0],
      gas: 300,
      water: 30,
      electriciteit: [1001, 1002],
      slimmeMeter: true
    },
    huis2: {
      postcode: "1234AB",
      huisnummer: 45,
      datum: new Date("2018-01-01").toISOString().split("T")[0],
      gas: 1300,
      water: 130,
      electriciteit: [11001, 11002],
      slimmeMeter: false
    }
  };

  let description =
    "<h4>Overzicht van de metingen voor postcode 1234AB</h4>" +
    "<table>" +
    "<tr>" +
    "<th>postcode</th>" +
    "<th>huisnummer</th>" +
    "<th>datum</th>" +
    "<th>gas</th>" +
    "<th>water</th>" +
    "<th>electriciteit</th>" +
    "<th>slimmeMeter</th>" +
    "</td>" +
    "</tr>" +

    "<tr>" +
    "<td>" +
    variables.huis1.postcode +
    "</td>" +
    "<td>" +
    variables.huis1.huisnummer +
    "</td>" +
    "<td>" +
    variables.huis1.datum +
    "</td>" +
    "<td>" +
    variables.huis1.gas +
    "</td>" +
    "<td>" +
    variables.huis1.water +
    "</td>" +
    "<td>" +
    variables.huis1.electriciteit[0] +
    "," +
    variables.huis1.electriciteit[1] +
    "</td>" +
    "<td>" +
    variables.huis1.slimmeMeter +
    "</td>" +
    "</tr>" +

    "<tr>" +
    "<td>" +
    variables.huis2.postcode +
    "</td>" +
    "<td>" +
    variables.huis2.huisnummer +
    "</td>" +
    "<td>" +
    variables.huis2.datum +
    "</td>" +
    "<td>" +
    variables.huis2.gas +
    "</td>" +
    "<td>" +
    variables.huis2.water +
    "</td>" +
    "<td>" +
    variables.huis2.electriciteit[0] +
    "," +
    variables.huis2.electriciteit[1] +
    "</td>" +
    "<td>" +
    variables.huis2.slimmeMeter +
    "</td>" +
    "</tr>" +
    "</table>";
  main.updateContent("Array", description);

  var element = document.getElementById("contentPlaceholder");

  var img = document.createElement("img");
  img.src = "photo.jpg";
  img.style.width = "100px";

  // Create the label
  var label = document.createElement("label");
  label.classList.add("studentName");
  label.innerHTML = studentName;

  var p = document.createElement("p");
  p.appendChild(img);
  p.appendChild(document.createElement("br"));
  p.appendChild(label);

  element.appendChild(p);
}

//tabel ajax
function tabel() {
  var url = "http://gert-rikkers.nl/api/meterstanden";
  var description = "";

  var xhttpB = new XMLHttpRequest();
  xhttpB.open("GET", url, true);

  xhttpB.onreadystatechange = function() {
    if (xhttpB.readyState == 4 && xhttpB.status == 200) {
      var dataJSON = xhttpB.responseText;
      var dataJSON2 = JSON.parse(xhttpB.responseText);

      description +=
        "<h4>Overzicht van de metingen voor postcode " +
        dataJSON2[11].postcode +
        "</h4>";
      console.log(dataJSON2[1].postcode);
    }
  };
  xhttpB.send();

  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", url, true);
  console.log(url);

  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      var dataJSON = xhttp.responseText;

      var dataJSON2 = JSON.parse(xhttp.responseText);
      console.log(dataJSON2);

      description +=
        "<table>" +
        "<tr>" +
        "<th>postcode</th>" +
        "<th>huisnummer</th>" +
        "<th>datum</th>" +
        "<th>gas</th>" +
        "<th>water</th>" +
        "<th>slimmeMeter</th>" +
        "<th>elektriciteitHoog</th>" +
        "<th>elektriciteitLaag</th>" +
        "<th>maand</th>" +
        "<th>gasVerbruik</th>" +
        "</td>" +
        "</tr>";

      for (var i = 0; i < dataJSON2.length; i++) {
        var result1 = {
          postcode: dataJSON2[i].postcode,
          huisnummer: dataJSON2[i].huisnummer,
          datum: dataJSON2[i].datum,
          gas: dataJSON2[i].gas,
          water: dataJSON2[i].water,
          slimmeMeter: dataJSON2[i].slimmeMeter,
          elektriciteit: [
            dataJSON2[i].elektriciteit[0],
            dataJSON2[i].elektriciteit[1]
          ],
          maand: function() {
            var months = [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "Mei",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Okt",
              "Nov",
              "Dec"
            ];
            var datumm = new Date(dataJSON2[i].datum);
            return months[datumm.getMonth()];
          },
          gasVerbruik: function() {
            switch (dataJSON2[i].gas) {
              case dataJSON2[0].gas:
                return dataJSON2[1].gas - dataJSON2[0].gas;
                break;
              case dataJSON2[1].gas:
                return dataJSON2[2].gas - dataJSON2[1].gas;
                break;
              case dataJSON2[2].gas:
                return dataJSON2[3].gas - dataJSON2[2].gas;
                break;
              case dataJSON2[3].gas:
                return dataJSON2[4].gas - dataJSON2[3].gas;
                break;
              case dataJSON2[4].gas:
                return dataJSON2[5].gas - dataJSON2[4].gas;
                break;
              case dataJSON2[5].gas:
                return dataJSON2[6].gas - dataJSON2[5].gas;
                break;
              case dataJSON2[6].gas:
                return dataJSON2[7].gas - dataJSON2[6].gas;
                break;
              case dataJSON2[7].gas:
                return dataJSON2[8].gas - dataJSON2[7].gas;
                break;
              case dataJSON2[8].gas:
                return dataJSON2[9].gas - dataJSON2[8].gas;
                break;
              case dataJSON2[9].gas:
                return dataJSON2[10].gas - dataJSON2[9].gas;
                break;
              case dataJSON2[10].gas:
                return dataJSON2[11].gas - dataJSON2[10].gas;
                break;
              case dataJSON2[11].gas:
                return dataJSON2[12].gas - dataJSON2[11].gas;
                break;
              default:
                return "-";
            }
          }
        };

        description +=
          "<tr>" +
          "<td>" +
          result1.postcode +
          "</td>" +
          "<td>" +
          result1.huisnummer +
          "</td>" +
          "<td>" +
          result1.datum +
          "</td>" +
          "<td>" +
          result1.gas +
          "</td>" +
          "<td>" +
          result1.water +
          "</td>" +
          "<td>";

        if (result1.slimmeMeter == true) {
          description += "+";
        } else {
          description += "";
        }

        description +=
          "</td>" +
          "<td>" +
          result1.elektriciteit[0] +
          "</td>" +
          "<td>" +
          result1.elektriciteit[1] +
          "</td>" +
          "<td>" +
          result1.maand() +
          "</td>" +
          "<td>" +
          result1.gasVerbruik() +
          "</td>" +
          "</tr>";
      }

      description += "</table>";
      main.updateContent("AJAX - Tabel", description);
    }
  };

  xhttp.send();

  var element = document.getElementById("contentPlaceholder");

  var img = document.createElement("img");
  img.src = "photo.jpg";
  img.style.width = "100px";

  var label = document.createElement("label");
  label.classList.add("studentName");
  label.innerHTML = studentName;

  var p = document.createElement("p");
  p.appendChild(img);
  p.appendChild(document.createElement("br"));
  p.appendChild(label);

  element.appendChild(p);
}

//grafiek ajax
function bonus() {
  var url = "http://gert-rikkers.nl/api/meterstanden";
  var description = "";

  var xhttpB = new XMLHttpRequest();
  xhttpB.open("GET", url, true);

  xhttpB.onreadystatechange = function() {
    if (xhttpB.readyState == 4 && xhttpB.status == 200) {
      var dataJSON = xhttpB.responseText;
      var dataJSON2 = JSON.parse(xhttpB.responseText);
      var y = new Date(dataJSON2[0].datum);
      var n = y.getFullYear();

      description +=
        "<h4>Gasverbruik voor postcode " +
        dataJSON2[11].postcode +
        " voor " +
        n +
        "</h4>";
    }
  };
  xhttpB.send();

  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", url, true);
  console.log(url);

  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      var dataJSON = xhttp.responseText;

      var dataJSON2 = JSON.parse(xhttp.responseText);
      console.log(dataJSON2);

      for (var i = 0; i < dataJSON2.length; i++) {
        var result1 = {
          datum: dataJSON2[i].datum,
          gas: dataJSON2[i].gas,
          maand: function() {
            var months = [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "Mei",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Okt",
              "Nov",
              "Dec"
            ];
            var datumm = new Date(dataJSON2[i].datum);
            if (dataJSON2[i].datum == "2018-1-1") {
              return "";
            } else {
              return months[datumm.getMonth()];
            }
          },
          gasVerbruik: function() {
            switch (dataJSON2[i].gas) {
              case dataJSON2[0].gas:
                return dataJSON2[1].gas - dataJSON2[0].gas;
                break;
              case dataJSON2[1].gas:
                return dataJSON2[2].gas - dataJSON2[1].gas;
                break;
              case dataJSON2[2].gas:
                return dataJSON2[3].gas - dataJSON2[2].gas;
                break;
              case dataJSON2[3].gas:
                return dataJSON2[4].gas - dataJSON2[3].gas;
                break;
              case dataJSON2[4].gas:
                return dataJSON2[5].gas - dataJSON2[4].gas;
                break;
              case dataJSON2[5].gas:
                return dataJSON2[6].gas - dataJSON2[5].gas;
                break;
              case dataJSON2[6].gas:
                return dataJSON2[7].gas - dataJSON2[6].gas;
                break;
              case dataJSON2[7].gas:
                return dataJSON2[8].gas - dataJSON2[7].gas;
                break;
              case dataJSON2[8].gas:
                return dataJSON2[9].gas - dataJSON2[8].gas;
                break;
              case dataJSON2[9].gas:
                return dataJSON2[10].gas - dataJSON2[9].gas;
                break;
              case dataJSON2[10].gas:
                return dataJSON2[11].gas - dataJSON2[10].gas;
                break;
              case dataJSON2[11].gas:
                return dataJSON2[12].gas - dataJSON2[11].gas;
                break;
              default:
                return "";
            }
          }
        };

        description +=
          "<div class='graph'>" +
          "<span class='maand'>" +
          result1.maand() +
          "</span>" +
          "<span class='verbruik verbruik-" +
          result1.gasVerbruik() +
          "'>" +
          result1.gasVerbruik() +
          "</span>" +
          "</div>";
      }

      description += "</table>";
      main.updateContent("AJAX - Grafiek ->BONUS<-", description);
    }
  };

  xhttp.send();

  var element = document.getElementById("contentPlaceholder");

  var img = document.createElement("img");
  img.src = "photo.jpg";
  img.style.width = "100px";

  var label = document.createElement("label");
  label.classList.add("studentName");
  label.innerHTML = studentName;

  var p = document.createElement("p");
  p.appendChild(img);
  p.appendChild(document.createElement("br"));
  p.appendChild(label);
  element.appendChild(p);
}
