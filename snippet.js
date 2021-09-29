// define a function to get the posts from Justfields.com
function getPosts(){
// sent a simple async GET request with the fech API to the URL thats specified by justfields 
    fetch('https://justfields.com/<Your project>/<Your fields>/json')
// turn the response to a JSON object
    .then( response => response.json() )
// iterate through the JSON array with a forEach loop (I also reversed the array so that oldest posts are displayed first )
    .then( function (data) {
        data.posts.post.reverse().forEach(function(post){
// create new a new DIV element on each iteration 
            let div = document.createElement('div');
// set the innerHTML of the div to the required html template
            div.innerHTML = (`  
                < this is where you would create the html structure of each item that you would like to display >
                < and have access to dynamic variables like ${post.id},${post.body} etc. whatever fields you specified on Justfields >
            `);
// this is an optional step I added the Bootstrap classname "card" to each item so that it can be referenced later in the stylesheet
            div.classList.add("card");
// grabbing the precreated DIV from the HTML template which serves as a wrapper to all the posts  
            let posts = document.getElementById('posts');
// appending the dynamically created DIV to the static one
            posts.appendChild(div);
        })        
    });   
}
// Invoke the function
getPosts();