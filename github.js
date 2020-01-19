class GitHub {

  constructor() {
    this.client_id = "07589b0d79b358bf17a3";
    this.client_secret = "e47054319edfd21d307f271da7a701b505ab25d8";
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getuser(user) {
    const userProfile = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const userRepos = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await userProfile.json();

    const repos = await userRepos.json();

    return {
      profile,
      repos
    };

  }
}