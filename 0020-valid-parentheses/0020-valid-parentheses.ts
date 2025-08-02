function isValid(s: string): boolean {
  if (s.length % 2 !== 0) return false;
  const bracketsStack = [];
  const openingBrackets = ["{", "[", "("];
  for (let i = 0; i < s.length; i++) {
    if (openingBrackets.includes(s[i])) {
      if (s[i] === "(") bracketsStack.push(")");
      if (s[i] === "[") bracketsStack.push("]");
      if (s[i] === "{") bracketsStack.push("}");
    } else {
      const closing = bracketsStack.pop();
      if (closing !== s[i]) {
        return false;
      }
    }
  }

  if (bracketsStack.length) return false;

  return true;
}