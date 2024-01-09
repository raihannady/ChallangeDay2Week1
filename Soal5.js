function stringToArray(string) {
  let result = [[], [], []];
  let secArr = [];
  let temp = "";
  for (let i = 0; i < string.length; i++) {
    secArr.push(string[i]);
    result.insert(i, string[i]);
  }

  return secArr;
}

console.log(stringToArray("aqrst,ukaei,ffooo"));

// result
// [
//   [ 'a', 'q', 'r', 's', 't' ],
//   [ 'u', 'k', 'a', 'e', 'i' ],
//   [ 'f', 'f', 'o', 'o', 'o' ]
// ]

console.log(stringToArray("qwer,tyui,asdf,ghjk"));

// result
// [
//   [ 'q', 'w', 'e', 'r' ],
//   [ 't', 'y', 'u', 'i' ],
//   [ 'a', 's', 'd', 'f' ],
//   [ 'g', 'h', 'j', 'k' ]
// ]
