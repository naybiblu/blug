export const shuffle = (arr: any[]) => {
    let currentIndex = arr.length,  randomIndex;
  
    while (currentIndex != 0) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [arr[currentIndex], arr[randomIndex]] = [
        arr[randomIndex], arr[currentIndex]];
    }
  
    return arr;
};

export const sortByDate = (arr: any[], recent = true) => {
    if (recent) return arr.sort((a: any, b: any) => new Date(b.date).valueOf() - new Date(a.date).valueOf());
    else return arr.sort((a: any, b: any) => new Date(a.date).valueOf() - new Date(b.date).valueOf());
};