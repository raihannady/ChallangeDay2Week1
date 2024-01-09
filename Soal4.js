function meleeRangedGrouping(str) {
  if (str === "") {
    return [];
  }
  let temp = "";
  let tempArr = [];
  let result = [[], []];
  for (let i = 0; i < str.length; i++) {
    temp += str[i];

    if (str[i] === "," || i === str.length - 1) {
      tempArr.push(temp);
      temp = "";
    }

    // if (str[i] === "-Ranged") {
    //   tempArr.push(temp);
    //   temp = "";
    //   result[0].push(tempArr);
    // }
    if (str[i] === "-") {
      //   tempArr.push(temp);
      temp = "";
    }
    if (str[i + 1] === "-") {
      tempArr.push(temp);
      temp = "";
    }
  }

  for (let i = 0; i < tempArr.length; i++) {
    if (tempArr[i] === "Melee") {
      result[1].push(tempArr[i]);
    } else {
      result[0].push(tempArr[i]);
    }
  }

  console.log(JSON.stringify(result));
  return result;
}

// TEST CASE

console.log(
  meleeRangedGrouping(
    "Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged"
  )
);
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(
  meleeRangedGrouping("Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged")
);
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping("")); // []
