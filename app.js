// ==============================
//       Characters and places
// ==============================

var hobbits = [
  'Frodo Baggins',
  'Samwise "Sam" Gamgee',
  'Meriadoc "Merry" Brandybuck',
  'Peregrin "Pippin" Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var baddies = [
  'Sauron',
  'Saruman',
  'The Uruk-hai',
  'Orcs'
];

var lands = [
  'the-shire',
  'rivendell',
  'mordor'
];

// ====================================
//           Chapters
// ====================================

function makeMiddleEarth() {
  console.log('Trying to make middle earth.');
  // create a section tag with an id of middle-earth
  var $middleEarthSection = $('<section></section>');
  console.log($middleEarthSection)
  $middleEarthSection.attr('id', 'middle-earth');
  // add the section to the body
  $('body').append($middleEarthSection);

  // add each land to the section as article tags-- try using a loop
  // inside each article tag include an h1 with the name of the land

  for (let i = 0; i < lands.length; i++) {
    // create the article tag
    var $landArticle = $('<article></article>');
    console.log($landArticle);
    // assign the id of the corresponding article tag as the name of the land
    $landArticle.attr('id',lands[i]);
    // add each land to the middle earth
    $middleEarthSection.append($landArticle);

    // create an h1 for each article
    var $landH1 = $('<h1></h1>');
    console.log($landH1)
    // assign the name of the land inside the h1
    $landH1.html(lands[i])
    // add the name of the land to the corresponding land
    $landArticle.append($landH1);
  }
}

function makeHobbits() {
  console.log('Make hobbits');
  // list the hobbits alphabetically.  Maybe use the .sort() method.
  // display an unordered list of hobbits in the shire
  // give each hobbit a class of "hobbit"

  $("#b2").sort(hobbits);
  console.log(hobbits)
}

function keepItSecretKeepItSafe() {
  // create an empty div with an id of 'the-ring' and innerHTML of "The ring"
  // add the ring as a child of Frodo
  $('#the-ring').append('<p>').append('The ring');

function makeBaddies() {
  // display an unordered list of baddies in Mordor
  // give each of the baddies a class of "baddy"

$("makeBaddies").append("baddies")
$("#b4").show("baddies");

$("#baddies").select("baddy");

}

function makeBuddies() {
  // create an aside tag and append it below mordor
  // display an unordered list of buddies in the aside
  // give each of the buddies a class of "buddy"

  ("makeBuddies").append("buddies")
$("#b5").show("buddies");

$("#baddies").select("buddy");
}

function leaveTheShire() {
  // grab the hobbits and move them to Rivendell
}

function beautifulStranger() {
  // change the buddy 'Strider' node to "Aragorn"

  $(".buddy").select("Strider");

  $("Strider").append("Aragorn");
}

function forgeTheFellowShip() {
  // move the hobbits and the buddies to Rivendell
  // create a new div called 'the-fellowship'
  // add an h1 with the text 'The Fellowship' to this new div
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}

function theBalrog() {
  // change the inner HTML of the 'Gandalf' node to 'Gandalf the White'
  // add a class "the-white" to this element
  // in the style.css file, add a css rule for the class "the-white"
  // have a white background and a grey border
}

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove the Uruk-Hai from the Baddies on the page
}

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Create a condition (Maybe an IF statement) that changes the font-color of the ring div to Red if
  // it is a child of the div with the id 'gollum'
  // Move Gollum into Mount Doom
}

function thereAndBackAgain() {
  // remove Gollum and the Ring from the DOM
  // remove all the baddies from the DOM
  // Move all the hobbits back to the shire
}

// =================================
// What to do when the page is ready
// =================================

window.onload = function() {
  document.querySelector('#b1').addEventListener('click', makeMiddleEarth);
  document.querySelector('#b2').addEventListener('click', makeHobbits);
  document.querySelector('#b3').addEventListener('click', keepItSecretKeepItSafe);
  document.querySelector('#b4').addEventListener('click', makeBaddies);
  document.querySelector('#b5').addEventListener('click', makeBuddies);
  document.querySelector('#b6').addEventListener('click', leaveTheShire);
  document.querySelector('#b7').addEventListener('click', beautifulStranger);
  document.querySelector('#b8').addEventListener('click', forgeTheFellowShip);
  document.querySelector('#b9').addEventListener('click', theBalrog);
  document.querySelector('#b10').addEventListener('click', hornOfGondor);
  document.querySelector('#b11').addEventListener('click', itsDangerousToGoAlone);
  document.querySelector('#b12').addEventListener('click', weWantsIt);
  document.querySelector('#b13').addEventListener('click', thereAndBackAgain);

};