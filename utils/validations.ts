export const EmailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export const patterns: {
  [key: string]: { pattern: RegExp; message: string };
} = {
  email: {
    pattern: EmailPattern,
    message: "Geçersiz Email",
  },
};

export const validate = (text: string, patternName: string) => {
  if (patternName in patterns) {
    return !patterns[patternName].pattern.test(text)
      ? patterns[patternName].message
      : "";
  }

  return;
};
