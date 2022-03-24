let res = document.getElementById("res");
const reset = () => (res.innerHTML = "");
const input = (a) => (res.innerHTML += a);

function render() {
  let code = res.innerHTML;
  if (!code) return;
  const matches = code.match(/[0-1]+/g);
  if (matches) {
    for (const match of matches)
      code = code.replace(match, parseInt(Number(match), 2));
  }
  try {
    eval(`code=(${code})`);
  } catch (e) {
    console.error(e);
  }
  res.innerHTML = Math.round(code).toString(2);
}
