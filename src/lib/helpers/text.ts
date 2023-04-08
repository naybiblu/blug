export const splitString = (str: string, size: number) => {
    const regex = new RegExp(String.raw`\S.{1,${size}}\S(?= |$)`,
    'g');
    const chunks = str.match(regex);
    console.log(chunks)
    return chunks;
};

export const slugify = (str: string, url = false, urlify = true) => {
  const regex = url ? /[^\w\s-]+/ : /[^\w\s]+/;
  const strArr = [];
  
  if (!regex.test(str)) return str;
  
  for (var word of str.split(url ? "-" : " ")) {
    switch (word) {
      case "\\": return strArr.push("[x+5c]");
      case "/": return strArr.push("[x+2f]");
      case ":": return strArr.push("[x+3a]");
      case "*": return strArr.push("[x+2a]");
      case "?": return strArr.push("[x+3f]");
      case "\"": return strArr.push("[x+22]");
      case "<": return strArr.push("[x+3c]");
      case ">": return strArr.push("[x+3e]");
      case "|": return strArr.push("[x+7c]");
      case "#": return strArr.push("[x+23]");
      case "%": return strArr.push("[x+25]");
      case "[": return strArr.push("[x+5b]");
      case "]": return strArr.push("[x+5d]");
      case "(": return strArr.push("[x+28]");
      case ")": return strArr.push("[x+29]");
      default: return strArr.push(word);
    }
  }
  
  return urlify ? strArr.join(url ? "-" : " ").toLowerCase().replaceAll(" ", "-") : strArr.join(url ? "-" : " ");
};