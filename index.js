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

document.getElementById("new-post").addEventListener("submit", function(e){
        e.preventDefault() //stop form from submitting
    const postTitle = document.getElementById("post-title").value
    const postBody = document.getElementById("post-body").value
    console.log(`${postTitle} ${postBody}`)
    const data = {
        title: postTitle,
        body: postBody

    }
    const option = {
        method:"POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        }
    }
    fetch("https://apis.scrimba.com/jsonplaceholder/posts", option)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)

            // Update the blog-list element with the generated HTML
            document.getElementById("blog-list").innerHTML =
            `
                    <h3>${data.title}</h3>
                    <p>${data.body}</p>
                    <hr />
                    ${document.getElementById("blog-list").innerHTML}
                `
                
            ;
        })
});