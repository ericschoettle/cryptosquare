function Cryptosquare(string) {
  var dePunctuate = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  var lowerCase = dePunctuate.replace(/\s/g,"").toLowerCase().split("");
  var arraySize = Math.ceil(Math.sqrt(lowerCase.length));
  var squareArray = [];
  for (var i = 0; i < lowerCase.length; i += arraySize) {
    squareArray.push(lowerCase.slice(i, i + arraySize));
  }
  var cryptoString = "";
  for (var i = 0; i < arraySize; i++) {
    for (var j = 0; j < lowerCase.length/arraySize; j++) {
      if (squareArray[j][i]) {
        cryptoString = cryptoString + squareArray[j][i];
      }
    }
  }
  var cryptoStringDivided = "";
  for (var i = 0; i < cryptoString.length; i += 5 ) {
    cryptoStringDivided = cryptoStringDivided + " " + cryptoString.slice(i, i+5);
  }
  return cryptoStringDivided;
}

console.log(Cryptosquare("this is fat or"));


function DecryptSquare(string) {
  var noSpaces = string.replace(/\s/g,"").split("");
  var arrayWidth = Math.ceil(Math.sqrt(noSpaces.length));
  console.log(arrayWidth)
  var remainder = arrayWidth * arrayWidth - noSpaces.length;
  console.log(remainder)
  if (remainder > arrayWidth) {
    var arrayHeight = arrayWidth - 1;
    remainder = remainder - arrayWidth;
  } else {
    var arrayHeight = arrayWidth;
  }
  var boxOneWidth = arrayWidth-remainder;
  var boxOneHeight = arrayHeight;
  var boxTwoWidth = remainder;
  var boxTwoHeight = arrayHeight - 1;
  console.log(boxOneHeight)
  console.log(boxOneWidth)
  // make boxes
  var boxOne = [];
  for (var i = 0; i < boxOneWidth; i++) {
    boxOne.push(noSpaces.slice(i * boxOneHeight, (i + 1) * boxOneHeight));
  } console.log(boxOne)

  for (var i = 0; i < boxTwoWidth; i++) {
    boxOne.push(noSpaces.slice(i * boxTwoHeight + boxOneHeight*boxOneWidth, (i + 1) * boxTwoHeight + boxOneHeight*boxOneWidth));
  }


  // readBoxes
  var cryptoString = "";
  for (var i = 0; i < arrayWidth; i++) {
    for (var j = 0; j < arrayWidth; j++) {
      debugger
      if (boxOne[j][i]) {
        cryptoString = cryptoString + boxOne[j][i];
      }
    }
  }

  console.log(cryptoString)
}


console.log(DecryptSquare("tiths oifrs a"))
