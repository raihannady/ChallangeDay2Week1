function hitungJumlahKata(kalimat) {
  let count = 0;
  let check = false;

  for (let i = 0; i < kalimat.length; i++) {
    if (kalimat[i] !== " " && !check) {
      count++;
      check = true;
    } else if (kalimat[i] === " ") {
      check = false;
    }
  }

  return count;
}

// TEST CASES
console.log(hitungJumlahKata("I have a dream")); // 4
console.log(hitungJumlahKata("Never eat shredded wheat or cake")); // 6
console.log(hitungJumlahKata("A song to sing")); // 4
console.log(hitungJumlahKata("I")); // 1
console.log(hitungJumlahKata("I believe I can code")); // 5
