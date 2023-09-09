let postArr = []
const titleInput = document.getElementById("post-title")
const bodyInput = document.getElementById("post-body")
const form = document.getElementById("new-post")
const blogList = document.getElementById("blog-list")
function renderpost (){
    let html = ""
    for(let post of postsArr ){
        html += `
            <h3>${post.title}</h3>
            <p>${post.body}<p>
            <hr />
        `
    }
    blogList.innerHTML =html
}

//Get API
fetch("https://apis.scrimba.com/jsonplaceholder/posts")
.then(response => response.json())
.then(data => {
    postsArr =data.slice(0,5)
    renderpost()
})

form.addEventListener("submit", function(e){
        e.preventDefault() //stop form from submitting
    const postTitle = titleInput.value
    const postBody = bodyInput.value
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
            postsArr.unshift(data)
            renderpost()
            form.reset()
        })
});