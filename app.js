//Init GitHub
const github = new GitHub;
//init ui
const ui = new UI;

//Serach Input
const searchUser = document.getElementById('search-user');

//get Search Value
searchUser.addEventListener('keyup', (e) => {
  //Get input value
  const userText = e.target.value;
  if (userText != "") {
    //console.log(userText);
    github.getuser(userText).then(data => {
      if (data.profile.message == "Not Found") {
        console.log('in');
        //show alert
        ui.showAlert('User not found', 'alert alert-danger');
      } else {
        //show profile

        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }

    });

  } else {
    //clear data
    ui.clearProfile();
  }

});