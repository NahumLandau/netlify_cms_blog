export const urlFromFileName = fileName => {
  return fileName
    .split("")
    .splice(2, fileName.lastIndexOf(".md") - 2)
    .join("");
};
