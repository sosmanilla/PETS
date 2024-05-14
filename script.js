const AS_URL_BASE =
  "https://script.google.com/macros/s/AKfycbwJenDnEhc4ZqvXH1k2RgMYrfWhNVEAnVs8V6iY8vXkVPxkDpgmQ1LTN_SboqPR8UAN/exec";

var url = document.location.href;
var k = url.substr(url.lastIndexOf("k=") + 2);

if (k) {
  fetch(AS_URL_BASE + "?k=" + k)
    .then((r) => r.text())
    .then((r) => {
      console.log(r);
      //document.write(r);
      if (r) {
        document.location.replace(r);
      }
    })
    .catch((err) => console.log(err));
}
