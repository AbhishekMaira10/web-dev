// Http statuses
// 200 - "ok"
// 403 - "forbidden"
// 404 - "Not Found"

// readyState Values
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready

document.getElementById("button").addEventListener("click", loadData);

function loadData() {
  // create an xhr object
  // xhr - XMLHTTPRequest

  const xhr = new XMLHttpRequest(),
    method = "GET",
    url = "data.txt";

  //Open
  xhr.open(method, url, true);

  // optional - for spinners and loaders
  xhr.onprogress = function () {
    console.log("READYSTATE", this.readyState);
  };

  xhr.onload = function () {
    console.log("READYSTATE", this.readyState);
    if (this.status === 200) {
      // console.log(this.responseText);
      document.getElementById(
        "output"
      ).innerHTML = `<h1>${this.responseText}</h1>`;
    }
  };

  // Old Syntax
  // xhr.onreadystatechange= function (){
  //   if(this.status ===200 && this.readyState === 4){
  //     console.log(this.responseText);
  //   }
  // }

  xhr.onerror = function () {
    console.log("Request Error ...");
  };

  xhr.send();
}
