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
      case "\\": strArr.push("[x+5c]"); break;
      case "/": strArr.push("[x+2f]"); break;
      case ":": strArr.push("[x+3a]"); break;
      case "*": strArr.push("[x+2a]"); break;
      case "?": strArr.push("[x+3f]"); break;
      case "\"": strArr.push("[x+22]"); break;
      case "<": strArr.push("[x+3c]"); break;
      case ">": strArr.push("[x+3e]"); break;
      case "|": strArr.push("[x+7c]"); break;
      case "#": strArr.push("[x+23]"); break;
      case "%": strArr.push("[x+25]"); break;
      case "[": strArr.push("[x+5b]"); break;
      case "]": strArr.push("[x+5d]"); break;
      case "(": strArr.push("[x+28]"); break;
      case ")": strArr.push("[x+29]"); break;
      default: strArr.push(word);
    }
  }
  
  return urlify ? strArr.join(url ? "-" : " ").toLowerCase().replaceAll(" ", "-") : strArr.join(url ? "-" : " ");
};
