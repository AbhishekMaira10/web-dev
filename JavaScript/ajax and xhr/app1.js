document.getElementById("button1").addEventListener("click", loadCustomer);

document.getElementById("button2").addEventListener("click", loadCustomers);

// Load Single Customer
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

// Load Multiple Customers
function loadCustomers() {
  const xhr = new XMLHttpRequest(),
    method = "GET",
    url = "customers.json";

  xhr.open(method, url, true);

  xhr.onload = function () {
    if (this.status === 200) {
      const customers = JSON.parse(this.responseText);

      let output = "";
      customers.forEach(
        (customer) =>
          (output += `
      <ul>
        <li>ID: ${customer.id}</li>
        <li>NAME: ${customer.name}</li>
        <li>COMPANY: ${customer.company}</li>
        <li>PHONE: ${customer.phone}</li>
      </ul>
      <hr>
      `)
      );

      document.getElementById("customers").innerHTML = output;
    }
  };

  xhr.send();
}
