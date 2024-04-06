export function setCookie(name: string, value: string, daysToExpire?: number) {
  let cookie = `${name}=${encodeURIComponent(value)}`;

  if (daysToExpire) {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + daysToExpire);
    cookie += `; expires=${expirationDate.toUTCString()}`;
  }

  document.cookie = cookie;
}

export function getCookie(name: string): string | null {
  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.trim().split('=');
    if (cookieName === name) {
      return decodeURIComponent(cookieValue);
    }
  }
  return null;
}

export function deleteCookie(name: string) {
  setCookie(name, '', -1);
}
