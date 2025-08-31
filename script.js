const handleLoadUser = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            displayUser(data);
        })
        .catch(error => {
            console.error('Error fetching user:', error);
        });
}
const displayUser = (users) => {
    console.log(users[0]);
} 