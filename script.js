function countVowels(str) {
    // Converte a string para minúsculas para facilitar a contagem
    str = str.toLowerCase();
  
    var count = 0;
    for (var i = 0; i < str.length; i++) {
      var char = str[i];
      if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || char === "á" || char === "é" || char === "í" || char === "ó" || char === "ú") {
       {
        count++;
      }
    }
  
    return count;
  }
  
