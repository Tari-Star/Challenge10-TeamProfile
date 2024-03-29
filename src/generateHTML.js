// manager card
const genManager = function (manager) {
    return `
    <div class='col-4 mt-4'>
     <div class='card h-100'>
      <div class='card-header'>
      <h3>${manager.name}</h3>
      <h4>Manager</h4><i class='material-icons'>emoji_food_beverage</span></i>
      </div>
      <div class='card-body'>
      <p class='id'>ID: ${manager.id}</p>
      <p class='email'>Email: <a href='mailto:${manager.email}'>${manager.email}</a></p>
      <p class='office'>Office Number: ${manager.officeNumber}</p>
      </div>
      </div>
      </div>
      `;
}
//engineer card
const genEngineer = function (engineer) {
    return `
    <div class='col-4 mt-4'>
    <div class='card h-100'>
    <div class='card-header'>
    <h3>${engineer.name}</h3>
    <h4>Engineer</h4><i class="material-icons">laptop_mac</i>
    </div>

    <div class="card-body">
        <p class="id">ID: ${engineer.id}</p>
        <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
        <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
    </div>

</div>
</div>
    `;
}
//Intern card
const genIntern = function (intern){
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${intern.name}</h3>
                <h4>Intern</h4><i class="material-icons">school</i>
            </div>

            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
    </div>
</div>
    ` ;
}

// push arrey to page
generateHTML = (data) => {
    pageArrey = [];
    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            const managerCard = genManager(employee);
            pageArrey.push(managerCard);
        }
        if (role === 'Engineer') {
            const engineerCard = genEngineer(employee);
            pageArrey.push(engineerCard);
        }
        if (role === 'Intern') {
            const internCard = genIntern(employee);
            pageArrey.push(internCard);
        }

    }
     
    const employeeCards = pageArrey.join('');

    const genTeam = genTeamPage(employeeCards);
    return genTeam;
}
// generate html page
const genTeamPage = function (employeeCards) {
    return`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>MY Team</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
  </head>
  <body>
      <header>
          <nav class="navbar" id="navbar">
              <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">My Team</span>
          </nav>
      </header>
      <main>
          <div class="container">
              <div class="row justify-content-center" id="team-cards">
                  <!--Team Cards-->
                  ${employeeCards}
              </div>
          </div>
      </main>
      
  </body>
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  </html>
`;
}

module.exports = generateHTML;