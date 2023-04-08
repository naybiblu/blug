export const splitString = (str: string, size: number) => {
    const regex = new RegExp(String.raw`\S.{1,${size}}\S(?= |$)`,
    'g');
    const chunks = str.match(regex);
    console.log(chunks)
    return chunks;
};

export const slugify = (str: string, url = false) => {
  const regex = url ? /[^\w\s-]+/g : /[^\w\s]+/g;
  
  if (!regex.test(str)) return url ? str : str.toLowerCase().replaceAll(" ", "-");;
  
  const result = str.replace(regex, '');
  
  return url ? result : result.toLowerCase().replaceAll(" ", "-");
};
