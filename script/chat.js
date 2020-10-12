class chatroom{
    constructor(username,room){
        this.name = username;
        this.room = room;
        this.chats = db.collection('chats');
        this.unsub;
    }
    async addchat(message){
        const now = new Date();
        const chat = {
            message: message,
            room: this.room,
            name : this.name,
            created_at : firebase.firestore.Timestamp.fromDate(now)
        };
        const response = await this.chats.add(chat);
        return response;
    }
    getchats(callback){
        this.unsub = this.chats
        .where('room','==',this.room)//check for a particular room
        .orderBy('created_at')//order element
        .onSnapshot(snapshot=>{
            snapshot.docChanges().forEach(element=>{
                if(element.type === 'added'){
                    callback(element.doc.data());
                }
            })
        });
    }
    upodateName(username){
        this.name = username;
        localStorage.setItem('username',username);
    }
    updateRoom(room){
        this.room = room;
        if(this.unsub){
            this.unsub();
        }
    }
}

