function Cryptosquare(string) {
  var dePunctuate = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  var lowerCase = dePunctuate.replace(/\s/g,"").toLowerCase().split("");
  var arraySize = Math.ceil(Math.sqrt(lowerCase.length));
  var squareArray = [];
  for (var i = 0; i < lowerCase.length; i+=arraySize) {
    squareArray.push(lowerCase.slice(i, i+arraySize));
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

console.log(Cryptosquare("this is fat abc"));
