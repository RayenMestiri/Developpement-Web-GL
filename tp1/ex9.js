async function getPosts() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    data.slice(0, 5).forEach(p => console.log(p.title));
}
getPosts();
