const friendInput=document.getElementById('friendInput');
const addButton=document.getElementById('addButton');
const drawButton=document.getElementById('drawButton');
const friendList=document.getElementById('friendList');
const resultContainer=document.getElementById('result');

let friends=[];
addButton.addEventListener('click',()=>{
    const friendName=friendInput.value.trim();
    if(friendName === ''){
        alert('Por favor ingrese un nombre Valido');
        return;
    }	

    friends.push(friendName);
    friendInput.value='';
    updateFriendList();
});

drawButton.addEventListener('click',()=>{
    if(friends.length === 0){
        alert('No hay amigos para sotear');
        return;
    }
    const randomIndex=Math.floor(Math.random()*friends.length);
    const randomFriend=friends[randomIndex];
    resultContainer.innerText=`El amigo secreto es: ${randomFriend}`;
});

function updateFriendList(){
    friendList.innerHTML='';
    friends.forEach((friend,index)=>{
        const li=document.createElement('li');
        li.innerText=friend;
        friendList.appendChild(li);
    });
}
