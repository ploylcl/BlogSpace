fetch("https://apis.scrimba.com/jsonplaceholder/posts")
.then(response => response.json())
.then(data => {
    const postsArr =data.slice(0,5)
    console.log(postsArr)
    let html = ""
    for(let post of postsArr ){
        html += `
            <h3>${post.title}</h3>
            <p>${post.body}<p>
            <hr />
        `
    }
    document.getElementById("blog-list").innerHTML =html
})