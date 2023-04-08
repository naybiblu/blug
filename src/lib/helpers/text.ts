export const splitString = (str: string, size: number) => {
    const regex = new RegExp(String.raw`\S.{1,${size}}\S(?= |$)`,
    'g');
    const chunks = str.match(regex);
    console.log(chunks)
    return chunks;
};

export const slugify = (str: string, url = false, urlify = true) => {
  const regex = url ? /[^\w\s-]+/g : /[^\w\s]+/g;
  
  if (!regex.test(str)) return str;
  
  const result = str.replace(/[^\w\s-]+/g, '');
  
  return urlify ? result.join(url ? "-" : " ").toLowerCase().replaceAll(" ", "-") : result.join(url ? "-" : " ");
};
