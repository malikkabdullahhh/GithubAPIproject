class Github {
    constructor(){
        this.client_id = 'ccbcf424e8d633c84d8e';
        this.client_secret = 'b3cf86f29fb862b558f55481b0cd185bda44cf2f';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&?client_secret=${this.client_secret}`);

        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}client_id=${this.client_id}&?client_secret=${this.client_secret}`);


        const profile = await profileResponse.json();
        const repos = await reposResponse.json();

        return {
            profile,
            repos
            
        }
    }
}