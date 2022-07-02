async function getData() {
    var res = await fetch("https://62a2ebe421232ff9b2132650.mockapi.io/people");
    res = await res.json();
    res.forEach(user => createUser(user));
}
getData();
const recipients = document.querySelector(".recipients");

function createUser(user) {
    const users = document.createElement('div');
    users.className = 'users';
    users.innerHTML = `
    <img class="userimg" src="${user.avatar}">
    <div>
        <p class="username">${user.name}</p>
        <p class="joindate">${new Date(user.createdAt).toDateString()}</p>
    </div>`;
    recipients.append(users);
}
