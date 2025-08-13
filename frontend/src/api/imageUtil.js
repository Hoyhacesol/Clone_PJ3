export function getProfileImgUrl(filename) {
  if (!filename) return "/images/baseprofile.png";
  return `/images/${filename}`;
}
