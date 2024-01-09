function changeVocals(str) {
  const vokal = "aiueoAIUEO";
  const changeVocals = "bivfpBiVFP";
  let hasil = "";
  let temp = [];
  for (let i = 0; i < str.length; i++) {
    temp.push(str[i]);
  }
  for (let i = 0; i < temp.length; i++) {
    for (let j = 0; j < vokal.length; j++) {
      if (temp[i] === vokal[j]) {
        hasil += changeVocals[j];
      }
    }
    if (hasil.length < i + 1) {
      hasil += temp[i];
    }
  }
  return hasil;
}

// console.log(changeVocals("Hello World"));

function reverseWord(str) {
  let reverseWord = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseWord += str[i];
  }
  return reverseWord;
}

// console.log(reverseWord("hello world"));

function setLowerUpperCase(str) {
  let inverted = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) {
      inverted += str[i].toUpperCase();
    } else {
      inverted += str[i].toLowerCase();
    }
  }
  return inverted;
}

// console.log(setLowerUpperCase("Hello World"));
function removeSpaces(str) {
  let removeSpaces = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      removeSpaces += str[i];
    }
  }
  return removeSpaces;
}

// console.log(removeSpaces("Hello World"));

function passwordGenerator(name) {
  if (name.length < 5) {
    return "Minimal karakter yang diinputkan adalah 5 karakter";
  } else {
    name = changeVocals(name);
    name = reverseWord(name);
    name = setLowerUpperCase(name);
    name = removeSpaces(name);
    return name;
  }
}

console.log(passwordGenerator("Sergei Dragunov")); // 'VPNVGBRdiFGRFs'
console.log(passwordGenerator("Dimitri Wahyudiputra")); // 'BRTVPiDVYHBwiRTiMid'
console.log(passwordGenerator("Alexei")); // 'iFXFLb'
console.log(passwordGenerator("Alex")); // 'Minimal karakter yang diinputkan adalah 5 karakter'
