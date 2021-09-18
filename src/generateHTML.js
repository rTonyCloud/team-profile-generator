const fs = require("fs");
const path = require("path");
const Intern = require("../lib/Intern");
const stylesheet = "./src/generateStyle.css";

const contentCreate = (employees) => {
  let finalHTML = "";



  employees.forEach((employee) => {
    let icon =
      employee.getRole() == "Manager"
      ? `<i class="fas fa-user-tie"></i>`
      : employee.getRole() == "Engineer"
      ? `<i class= "fas fa-glasses"></i>`
      : `<i class="fas fa-graduation-cap"></i>`



    let special = employee.officeNumber
    ? `Office Number: ${employee.officeNumber}`
    :  employee.github
    ? `Github: <a href="https://github.com/${employee.github}/">${employee.github}</a>`
    : `School: ${employee.school}`;
  
    finalHTML += `<div class="col">
      <div class="card rounded-lg">
        <div class="card-body rounded-top bg-light">
          <h5 class="card-title">${employee.name}</h5>
          <h5 class="card-title">${icon}${employee.getRole()}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${employee.id}</li>
          <li class="list-group-item">Email:${employee.email}</li>
          <li class="list-group-item">${special}</li>
        </ul>
      </div>
    </div>`;
  });
  generateHTML(finalHTML);
};

let generateHTML = (content) => {
  let html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
      crossorigin="anonymous" />
      <script src="https://kit.fontawesome.com/e58a7b52cf.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="./style.css" />
    <title>Meet Our Team</title>
  </head>
  <body>
      <h1 class="text-center p-4 fw-bold">Meet Our Team</h1>
    <article class="container main-wrapper min-vh-100">
      <div class="content-center p-6">
        <div class="row row-cols-1 row-cols-md-2">
        ${content}
        </div>
      </div>
    </article>
  </body>
  <footer class="text-center p-6">Made with ❤️ by Tony Rivera</footer>
</html>`;
  writeToFile("index.html", html);
  writeToFile("style.css", stylesheet);
};

// Creates files using path and fs
const writeToFile = (fileName, content) => {
  
  // Create file path
  fs.writeFileSync(path.join(process.cwd(), "/dist/", fileName), content);

};

module.exports = contentCreate;