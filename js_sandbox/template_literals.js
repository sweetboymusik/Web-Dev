const first_name = "John";
const age = 31;
const job = "web dev";
const city = "Miami";

let html;

function hello() {
  return "hello";
}

// html = "<ul><li>Name: " + name + "</li>" + "<li>Job: " + job;

// with template strings (es6) - the new way of doing this
html = `
    <ul>
        <li>Name: ${first_name}</li>
        <li>Name: ${first_name}</li>
        <li>Name: ${first_name}</li>
        <li>Name: ${first_name}</li>
        <li>${2 + 2}</li>
        <li>${hello()}</li>
        <li>${age > 30 ? "over 30" : "under 30"}</li>
    </ul>
`;
document.body.innerHTML = html;
