// Remove the leading and trailing slashes from a string
export function trimSlash(str: string) {
  return str.replace(/^\/|\/$/g, '');
}