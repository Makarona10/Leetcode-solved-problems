function restoreString(s: string, indices: number[]): string {
  if (s.length <= 1) return s;
  const sArr = s.split("")
  let current: number;
  let tmp: number | string;
  for (let idx = 1; idx < s.length; idx++) {
    current = idx;
    while (current >= 1) {
      if (indices[current] < indices[current - 1]) {
        tmp = indices[current - 1];
        indices[current - 1] = indices[current];
        indices[current]= tmp;
        tmp = sArr[current - 1];
        sArr[current - 1] = sArr[current];
        sArr[current]= tmp;
      }
      current--;
    }
  };
  return sArr.join("");
};