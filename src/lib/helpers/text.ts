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
    if (!regex.test(word)) strArr.push(word);
    else strArr.push("");
  }
  
  return urlify ? strArr.join(url ? "-" : " ").toLowerCase().replaceAll(" ", "-") : strArr.join(url ? "-" : " ");
};
