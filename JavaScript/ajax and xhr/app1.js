document.getElementById("button1").addEventListener("click", loadCustomer);

function loadCustomer() {
  const xhr = new XMLHttpRequest(),
    method = "GET",
    url = "customer.json";

  xhr.open(method, url, true);

  xhr.onload = function () {
    if (this.status === 200) {
      const customer = JSON.parse(this.responseText);
      const output = `
      <ul>
        <li>ID: ${customer.id}</li>
        <li>NAME: ${customer.name}</li>
        <li>COMPANY: ${customer.company}</li>
        <li>PHONE: ${customer.phone}</li>
      </ul>
      `;

      document.getElementById("customer").innerHTML = output;
    }
  };

  xhr.send();
}
