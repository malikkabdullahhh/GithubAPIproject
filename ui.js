class UI {
    constructor() {
        this.profile = document.getElementById("profile");
    }

    showProfile(user){
        this.clearAlert();
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}">
                        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">View Profile</a> 
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-dark">Public Repos: ${user.public_repos}</span>
                        <span class="badge badge-success">Public Gists: ${user.public_gists}</span>
                        <span class="badge badge-warning">Folllowers: ${user.followers}</span>
                        <span class="badge badge-secondary">Following: ${user.following}</span>
                        <br><br>
                        <ul class="list-group">
                            <li class="list-group-item">Company: ${user.company}</li>
                            <li class="list-group-item">Website/Blog: ${user.blog}</li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Member Since: ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3">Latest Repos</h3>
            <div id="repos"></div>

        `;
    }

    showRepos(repos){
        let output = '';

        repos.forEach(repo => {
            output += `
                <div class="card card-body mb-2">
                    <div class="row">
                        <div class="col_md-6">
                            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                            <span class="badge badge-dark">Stars: ${repo.stargazers_count}</span>
                            <span class="badge badge-success">Watchers: ${repo.watchers_count}</span>
                            <span class="badge badge-warning">Forks: ${repo.forks_count}</span>
                        </div>
                    </div>
                </div>
            `;
        });

        // Output repos
        document.getElementById("repos").innerHTML = output;
    }

    showAlert(message, className){
        // Clear any remaining alerts
        this.profile.innerHTML = '';
        this.clearAlert();
        
        // Create div
        const div = document.createElement('div');
        // Add classes
        div.className = className;
        // Add text
        div.appendChild(document.createTextNode(message));
        // Get Parent
        const container = document.querySelector('.searchContainer');
        // Get Search box
        const search = document.querySelector('.search');
        // Insert Alert
        container.insertBefore(div, search);
        // Timeout after 3 seconds
        setTimeout(() => {
            // this.profile.innerHTML = "";
            this.clearAlert();    
        }, 2000);
    }

    clearAlert(){
        const currentAlert = document.querySelector('.alert');

        if(currentAlert){
            currentAlert.remove();

        }
    }

    clearProfile(){
        this.profile.innerHTML = '';
    }
}