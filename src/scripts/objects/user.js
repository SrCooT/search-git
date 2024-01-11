const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    followersurl: '',
    followingurl: '',

    repositories: [],
    setInfo(gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
        this.followersurl = gitHubUser.followers_url
        this.followingurl = gitHubUser.following_url
    },
    setRepositories(repositories){
        this.repositories = repositories
    }
}

export { user }