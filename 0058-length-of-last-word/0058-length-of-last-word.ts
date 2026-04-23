function lengthOfLastWord(s: string): number {
    let splitted = s.split(' ');
    splitted = splitted.filter((c: string) => c.length > 0);
    return (splitted[splitted.length - 1]).length
};
