function makeRequest() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://example.com/api/data', true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      // success
      console.log(xhr.responseText);
    } else {
      // error
      console.log(xhr.statusText);
    }
  };
  xhr.send();
}

fetch('http://example.com/api/data')
  .then(response => response.text())
  .then(data => console.log(data))
  .catch(error => console.error(error));
