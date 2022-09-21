
// const span =document.getElementById('spa');
// span.style.color= 'tomato';

const loadData = ()=> {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(data => console.log(data))
}

const loadUsers = ()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data=> displayUsers(data))
}

const displayUsers = (data)=>{
    const ul = document.getElementById('user');
    const span =document.getElementById('spa');
    span.style.color= 'tomato';
    for(const user of data){
        // console.log(user);
        const li = document.createElement('li');
        li.innerText = user.name;
        li.classList.add('list-item');
        ul.appendChild(li);
    }
}