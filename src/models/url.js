const Hash = {
  url: "",
  hash: "",
};
const Hashes = [];
let counter = 0;
exports.addHash = (hash) => {
  let newHash = shorturl(hash.url);
  Hashes.push(newHash);
  counter = counter + 1;
  return newHash;
};

exports.getHash = (hash) => {
  let element = searchHash(hash);
  if (!element) {
    return null;
  }
  return element;
};

const searchHash = (hash) => {
  let e = Hashes.find((element) => element.hash == hash);
  return e;
};

function geturl(url) {
  var protocol_ok =
    url.startsWith("http://") ||
    url.startsWith("https://") ||
    url.startsWith("ftp://");
  if (!protocol_ok) {
    newurl = "http://" + url;
    return newurl;
  } else {
    return url;
  }
}

function getrandom() {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}

function shorturl(url) {
  let longurl = geturl(url);
  let hash = getrandom();
  return { url: longurl, hash: hash };
}
