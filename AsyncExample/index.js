console.log('Before');
//getUser(1)
//    .then(user=>getRepository(user.getHubUserName))
//    .then(repos=>getCommits(repos))
//    .catch(err=>console.error(err));
foo();
console.log('After');

async function foo() {
    try {
        const user = await getUser(1);
        const repos = await getRepository(user.getHubUserName);
        const commits = await getCommits(repos.repositories);
        console.log(commits);
    } catch (e) {
        console.error(e);
    }
}

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('getUser Reading from DB');
            resolve({ id: id, getHubUserName: 'hayri' });
        }, 2000);
    });

}

function getRepository(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('getRepository Reading from DB');
            resolve({ username: username, repositories: 'repos' });
            //reject(new Error('Error'));
        }, 2000);
    });

}

function getCommits(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('getCommits Reading from DB');
            resolve({ username: username, commits: 'hayri commit' });
        }, 2000);
    });
}