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
        
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.setAttribute('href', repos[i].html_url);
        a.innerHTML = repos[i].name + '.';
        li.className = "repo-item";
        li.appendChild(a);
        gitContainer.appendChild(li);
    }
}