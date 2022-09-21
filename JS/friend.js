const loadFriend = ()=>{
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => displayFriend(data))
}
loadFriend();

const displayFriend = (data)=>{
    const items = data.results;
    const friendBox = document.getElementById('friends');
    for(const item of items){

        console.log(item);
        const p = document.createElement('div');
        p.innerHTML = `
        <h3> <span style="color:red;">Name: </span> ${item.name.first} ${item.name.last} </h3>
        <h5> <span style="color:red;">Email: </span>${item.email} </h5>

        `
        friendBox.appendChild(p);
        p.style.color = 'blue';

    }
}