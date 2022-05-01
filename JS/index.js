function get_repos() {
    fetch('https://api.github.com/users/kquinn1998/repos')
    .then(response => response.json())
    .then(function (data) {
        process_repos(data);
    });
}

function process_repos(repos) {
    var gitContainer = document.getElementById("myRepos");
    for (var i = 0; i < repos.length; i++) {
        
        var div = document.createElement("div");
        div.className = "repo-item";
        div.innerHTML = 'Repo Name: ' + repos[i].name + '.';
        gitContainer.appendChild(div);
    }
}