export const urlFromFileName = fileName => {
  return fileName
    .split("")
    .splice(2, fileName.lastIndexOf(".md") - 2)
    .join("");
};

export const shuffle = a => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};
