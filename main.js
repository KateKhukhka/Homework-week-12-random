const button = document.getElementById("random_button");
const alphabet = "абвгдеёжзийклмнопрстуфхцчшщъэьыюя";
function getRandomLetter(alphabet) {
  return Math.floor(Math.random() * 33);
}
let randomLetter1 = alphabet[getRandomLetter(alphabet)];
let randomLetter2 = alphabet[getRandomLetter(alphabet)];
let randomLetter3 = alphabet[getRandomLetter(alphabet)];
let randomLetter4 = alphabet[getRandomLetter(alphabet)];
let randomWord =
  randomLetter1 +
  randomLetter2 +
  randomLetter3 +
  randomLetter4;
