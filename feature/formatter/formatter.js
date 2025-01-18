export function ucFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function ucWords(str) {
  return str.split(" ").map(ucFirst).join(" ");
}

// prettier-ignore
export function slugify(str) {
  return str.toLowerCase().trim().replace(/[\s\W-]+/g, "-");
}

export function normalize(str) {
  return str.replace(/\s+/g, " ").trim();
}

export function truncate(str, maxLength) {
  return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
}

export function sanitize(str) {
  return str.replace(/[^a-zA-Z0-9 ]/g, "");
}
