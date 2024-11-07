{
  const countWordOccurrences = (str1: string, str2: string) : number => {
    let cnt : number = 0;
    for(let i = 0; i < str1.length; i++) {
      let m: number = 0;
      let n: number = i;
      for(let j = 0; n<str1.length && j < str2.length; j++) {
        if(str1[n].toLowerCase() === str2[j].toLowerCase()) {
          m++;
        }
        n++;
      }
      if (m === str2.length) {
        i += (m-1);
        cnt++;
      }
    }
    return cnt;
  }


  // console.log(countWordOccurrences("I love typescript TypeScript TypeScripT", "typescript"))
  // console.log(countWordOccurrences("typea", "a"))
}