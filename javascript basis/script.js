"use strict";

// Declare variables
const studentName = "Matthijs van Zunderen";
const studentGroup = "MD2B";
const year = main.year;

// Init
init();

// Functions

function init() {
    // Set content based on variables
    document.getElementById("studentName").innerText = studentName;
    // Add navigation link to the navigation panel on the left of the page
   	main.addContenItem("Inleiding", intro);
	main.addContenItem("Variabelen", variables);
    	main.addContenItem("Object", object);
    // Activate the first navigation link
    intro();
	   ChangeName();
	    ChangeGroup();
	     ChangeYear();
}

function intro() {
    let description = "Je bent in dienst van energiemaatschappij Energy Solutions en"
        + " krijgt de opdracht om een webpagina te maken die de energiestanden toont van een aantal adressen."
        + " De data wordt via een webAPI beschikbaar gesteld. "
        + " Dit gebeurt in kleine stapjes en uiteindelijk is het de bedoeling om de data op een nette manier te presenteren."
        + "<p>Succes!!!</p>";
    main.updateContent("Inleiding", description);

    // Set link to the element in the DOM
    var element = document.getElementById("contentPlaceholder");

    // Create the image and set some properties
    var img = document.createElement("img");
    img.src = "photo.jpg";
    img.style.width = "100px";

    // Create the label
    var label = document.createElement("label");
    label.innerHTML = "Matthijs van Zunderen";

    // Create the paragraph and add the image and label to it
    var p = document.createElement("p");
    p.appendChild(img);
    p.appendChild(document.createElement("br"));
    p.appendChild(label);

    // Add the paragraph to the DOM
    element.appendChild(p);
}

// Functie variabelen
function variables() {
	var post = "1234AB";
	var huisNummer = 99;
	var date = new Date();
	var gas = 300;
	var water = 30;
	var elchoog = 1001;
	var elclaag = 1002;
	var currentDate = date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear();
	var verslag = "Voor postcode " + post + " en huisnummer " + huisNummer + " zijn op " + currentDate + " meting gedaan "
	+ "  en dit zijn de resultaten: gas = " + gas + ", water = " + water + ", electriciteitHoog = " + elchoog + " en "
	+ "  electriciteitLaag = " + elclaag + ". Dit is gedaan met een slimme meter.";
  let result = "<h3>Verslag van de variablen</h3><br>" + verslag
  + "<h3>Nog wat eigenschappen</h3><br>"
  + "Het verslag heeft " + verslag.length + " tekens, " + verslag.split(' ').length + " woorden, het eerste woord is "  + verslag.split(' ')[0] + " en het laatste woord is " + verslag.split(' ')[verslag.split(' ').length - 1]  + "<h3>->BONUS<- : Draai je verslag van de meting om dan krijg je:</h3><br>" + verslag.split("").reverse().join("");
    main.updateContent("Variablen", result);
}

function object() {
  var post = "1234AB";
  var huisNummer = 99;
  var date = new Date();
  var gas = 300;
  var water = 30;
  var elchoog = 1001;
  var elclaag = 1002;
}

function ChangeName() {
	var names = document.getElementsByClassName('studentName');

	for(var i = 0; i < names.length; i++ ) {
		names[i].innerText = "Matthijs van Zunderen";
	}
}

function ChangeGroup() {
	var group = document.getElementsByClassName('studentGroup');

	for(var i = 0; i < group.length; i++ ){
		group[i].innerText = "MD2B";
	}
}

function ChangeYear() {
	var year = document.getElementsByClassName('pageYear');

	for(var i = 0; i < year.length; i++ ){
		year[i].innerText = "2018";
	}
}
