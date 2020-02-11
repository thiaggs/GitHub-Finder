//Instance a gitHub and ui object

const gitHub = new GitHub;
const ui = new UI;

// Search input

const searchUser = document.querySelector('#search-user');

searchUser.addEventListener('keyup', (e) => {

    //get input text
    const user = e.target.value;
    if(user !== ''){
        gitHub.getUser(user)
        .then(data => {
            if(data.profile.message === 'Not Found') {
                //show alert
                ui.showAlert('User not found', 'alert alert-danger');

            }else{
                //show profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);

            }
        })
    }else{
        //clear profile
        ui.clearProfile();
    }
});
