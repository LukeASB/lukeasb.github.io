const automatedDate = (startDate: string): number => {
    const birth = new Date(startDate).valueOf();
    const now = new Date().valueOf();
    const howOldAmI = now - birth;
    const unixTimeStandard = 1970;
    const age = new Date(howOldAmI).getFullYear() - unixTimeStandard;
    return age;
}

export default automatedDate;