export const splitString = (str: string, size: number) => {
    const regex = new RegExp(String.raw`\S.{1,${size}}\S(?= |$)`,
    'g');
    const chunks = str.match(regex);
    console.log(chunks)
    return chunks;
};