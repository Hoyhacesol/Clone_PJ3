export function getProfileImgUrl(filename) {
  if (!filename) return "http://43.201.249.236:8080/images/baseprofile.png";
  return `http://43.201.249.236:8080/images/${filename}`;
}
