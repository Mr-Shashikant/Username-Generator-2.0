const generateUsername = () => {
  let userInput = document.querySelector("input").value;
  let varient = document.querySelector("select").value;
  if (userInput.length > 0) {
    if (varient === "withNum") {
      userInput = userInput.toLowerCase();
      userInput = userInput.replaceAll(" ", "");
      let userName = "@" + userInput + userInput.length;
      document.querySelector("#usernameDisplay").innerHTML = userName;
    } else if (varient === "random") {
      userInput = userInput.toLowerCase();
      userInput = userInput.replaceAll(" ", "");
      let userName = "@" + userInput + Math.floor(Math.random() * 100);
      document.querySelector("#usernameDisplay").innerHTML = userName;
    } else if (varient === "camel") {
      userInput = userInput.toLowerCase();
      let result = "";
      for (let i = 0; i < userInput.length; i++) {
        if (userInput[i] === " ") {
          if (i + 1 < userInput.length && i + 1 !== " ") {
            result += userInput[i + 1].toUpperCase();
            i++;
          }
        } else {
          result += userInput[i];
        }
      }
      let userName = "@" + result;
      document.querySelector("#usernameDisplay").innerHTML = userName;
    } else if (varient == "snake") {
      userInput = userInput.toLowerCase();
      userInput = userInput.replaceAll(" ", "_");
      let userName = "@" + userInput;
      document.querySelector("#usernameDisplay").innerHTML = userName;
    } else if (varient == "funny") {
      userInput = userInput.replaceAll(" ", "")
      let userName = "@" + replaceWithSpecialChars(userInput);
      document.querySelector("#usernameDisplay").innerHTML = userName;
    }
  } else {
    document.querySelector("#usernameDisplay").innerHTML = "--Your username will appear here!--";
  }
};

const specialChars = {
  a: "ǟ",
  b: "ɮ",
  c: "ƈ",
  d: "ɖ",
  e: "ɛ",
  f: "ʄ",
  g: "ɢ",
  h: "ɦ",
  i: "ɨ",
  j: "ʝ",
  k: "ӄ",
  l: "ʟ",
  m: "ʍ",
  n: "ռ",
  o: "օ",
  p: "ք",
  q: "զ",
  r: "ʀ",
  s: "ֆ",
  t: "ȶ",
  u: "ʊ",
  v: "ʋ",
  w: "ա",
  x: "Ӽ",
  y: "ʏ",
  z: "ʐ",
};

function replaceWithSpecialChars(input) {
  return input
    .split("")
    .map((char) => {
      const lowerChar = char.toLowerCase();
      return specialChars[lowerChar] || char;
    })
    .join("");
}


document.getElementById('info').addEventListener('click', () => {
  document.getElementById('popup').classList.add('visible');
});

document.getElementById('close-popup').addEventListener('click', () => {
  document.getElementById('popup').classList.remove('visible');
});