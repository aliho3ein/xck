/* Set Cookie */
const setCk = (name, value) => {
  document.cookie = `&${name}=${value};SameSite=None; Secure`;
};

/* Delete Cookie */
const removeCk = (name) => {
  document.cookie = `&${name}=; expires=Thu, 03 Jan 2022 00:00:00 UTC; path=/;SameSite=None;Secure`;
};

/* Get Cookie */
const getCk = (name) => {
  let strCookie = document.cookie.split("=");
  let arrCookie = [];
  strCookie.forEach((e) => {
    let ne = e.split("&");
    for (let i = 0; i < ne.length; i++) {
      arrCookie.push(ne[i].replace(";", "").trim());
    }
  });
  const index = arrCookie.indexOf(name);

  return index > 0 ? arrCookie[index + 1] : `${name} not exist`;
};

export { setCk, getCk, removeCk };
