const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "imgs/avatar-vangogh.jpg",
        post: "imgs/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "imgs/avatar-courbet.jpg",
        post: "imgs/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "imgs/avatar-ducreux.jpg",
        post: "imgs/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

let cardPosts = document.getElementById("card-posts")


function renderPosts() {
    let strPosts = ``
    for (let i = 0; i < posts.length; i++) {
        strPosts += `
        <div class="post">
            <div class="header">
                <div class="avatar-img">
                    <img src="${posts[i].avatar}" alt="Poster avatar">
                </div>
                <div class="poster-info">
                    <h3 class="poster-name">${posts[i].name}</h3>
                    <span class="poster-location">${[posts[i].location]}</span>
                </div>
            </div>
            <div class="post">
                <img src="${posts[i].post}" alt="">
            </div>
            <div class="tools">
                <img src="imgs/icon-heart.png" alt="">
                <img src="imgs/icon-comment.png" alt="">
                <img src="imgs/icon-dm.png" alt="">
            </div>
            <div class="likes">${posts[i].likes} likes</div>
            <div class="comment">
                <p><span>${posts[i].username}</span> ${posts[i].comment}</p>
            </div>
        </div>`
    }
    cardPosts.innerHTML = strPosts
}

renderPosts()
