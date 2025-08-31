const handleLoadPost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => {
            displayPost(data);
        })
}

const displayPost = (posts) => {
    const postContainer = document.getElementById("postContainer");
    postContainer.innerHTML = "";
    for (const post of posts) {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        `;
        postContainer.appendChild(postElement);
    }
}