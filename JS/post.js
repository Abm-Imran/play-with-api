const loadPost = ()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data))

}

const displayPost = (data)=>{
    const container = document.getElementById('posts');
    console.log(data);
    for(const post of data){
        const div = document.createElement('div');
        div.innerHTML =`
        <h3 class= 'post-h'> ${post.title} </h3>
        <p class= 'post-p'> ${post.body} </p>
        `
        // div.classList.add('post');
        container.appendChild(div);
    }
}