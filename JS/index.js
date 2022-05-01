function get_repos() {
    fetch('https://api.github.com/users/kquinn1998/repos')
    .then(response => response.json())
    .then(function (data) {
        process_repos(data);
    });
}

function process_repos(repos) {
    var repo_names_container = document.getElementById("repo_names");
    var repo_last_updated_container = document.getElementById("repo_last_updated");
    for (var i = 0; i < repos.length; i++) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.setAttribute('href', repos[i].html_url);
        a.innerHTML = repos[i].name + '.';
        li.className = "repo-item";
        li.appendChild(a);
        repo_names_container.appendChild(li);

        var date = new Date(repos[i].updated_at)
        var li = document.createElement("li");
        li.innerHTML = date.toDateString();
        li.className = "repo-item";
        repo_last_updated_container.appendChild(li);
    }
}