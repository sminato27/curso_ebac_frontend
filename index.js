document.addEventListener('DOMContentLoaded', function() {
    const name = document.querySelector('#name');
    const username = document.querySelector('#username');
    const avatar = document.querySelector('#avatar');
    const repos = document.querySelector('#repos');
    const followers = document.querySelector('#followers');
    const following = document.querySelector('#following');
    const link = document.querySelector('#link');

    fetch('https://api.github.com/users/sminato27').then(function(response) {
        return response.json();
    }).then(function(json) {
        name.innerText = json.name;
        username.innerText = ('@' + json.login) ;
        avatar.src = json.avatar_url;
        followers.innerText = json.followers;
        following.innerText = json.following;
        repos.innerText = json.public_repos;
        link.href = json.html_url;
    })
})