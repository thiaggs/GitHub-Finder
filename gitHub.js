class GitHub{
    constructor(){
        this.client_id = '5c1c9b29e64179a15ea4';
        this.client_secret = '6c0936a3acf51cd036531660bb873eec12f58666';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();
        const repos = await reposResponse.json();
        
        return {
            profile,
            repos
        }
    }
}