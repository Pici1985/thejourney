
function getPosts(){
    fetch('https://justfields.com/project/eXrglmyB/json')
    .then( response => response.json() )
    .then( function (data) {
        console.log(data);
        data.posts.post.reverse().forEach(function(post){
            // console.log(post.title, post.blogpost, post.date)
            let div = document.createElement('div');
            div.innerHTML = (`
                <div class="card-inner">
                    <div class="card-img">
                        <img src="${post.image}">
                    </div>
                    <div class="card-wrp">
                        <h2>${post.title}</h2>
                        <p>${post.snippet}</p>
                        <div>
                            <button class="readMoreButton" onClick="showPost('${post.id}');">Read more...</button>
                        </div>
                        <div class="blogBody" id="${post.id}" style="display: none">
                            <button id="blogHider" class="blogHideButton" onClick="hidePost('${post.id}');">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FCA311"><path d="M0 0h24v24H0V0z" fill="none" opacity=".87"/><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z"/></svg>
                            </button>
                            <p>${post.blogpost}</p>
                        </div>
                        <div class="blogAuthorDate">
                            <span>${post.author}</span>
                            <span>${post.date}</span>
                        </div>
                    </div>
                </div>    
                    `);
            div.classList.add("card");
            let posts = document.getElementById('posts');
            posts.appendChild(div);
        })        
    });   
}

getPosts();


// these functions display and hide the body of each blogpost

function showPost(id){
    console.log(id);
    document.getElementById(id).style.display = "flex";
} ;

function hidePost(id){
    console.log('hide post');
    document.getElementById(id).style.display = "none";
}

