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

        const options ={
        method:"POST",
        body: JSON.stringify(data),
        header:{
            "content-type":"application.jason"
        }
    }
    fetch("https://apis.scrimba.com/jsonplaceholder/posts" , options)
    .then(res => res.json())
    .then(data =>{
        console.log(data)
    })
})