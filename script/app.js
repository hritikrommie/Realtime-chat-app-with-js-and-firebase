const list = document.querySelector('.chat');
const sendmsg = document.querySelector('.fill-form');
const upname = document.querySelector('.send-name');
const uproom = document.querySelector('.head');

uproom.addEventListener('click',(e)=>{
    if(e.target.tagName==='BUTTON'){
        ui.clear();
        user.updateRoom(e.target.getAttribute('id'));
        user.getchats(data=>{
            ui.render(data);
        });
        document.querySelector('.curr-room p').textContent = e.target.innerText;
    }
})

sendmsg.addEventListener('submit',e=>{
    e.preventDefault();
    const message = sendmsg.send.value.trim();
    user.addchat(message).then(()=>{
        
    }).catch(err=>{
        console.log(err);
    });
    sendmsg.reset();
})

upname.addEventListener('submit',e=>{
    e.preventDefault();
    const newnick = upname.nick.value.trim();
    ui.addname(newnick,localStorage.username);
    user.upodateName(newnick);
    upname.reset();
})

const localname = localStorage.username ? localStorage.username:'Anonymous';
const ui = new chatui(list);
const user = new chatroom(localname,'general');
user.getchats(data=>{
    ui.render(data);
});