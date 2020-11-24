export default function api(method, url) {
  return fetch(url, {
    method
  }).then(reponse => response.json())
}