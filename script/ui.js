class chatui{
    constructor(list){
        this.list = list;
    }
    clear(){
        this.list.innerHTML = ''
    }
    render(data){
        // const tyme = dateFns.distanceInWordsToNow(
        //     data.created_at.toDate()
        //     ,{addSuffix:true}
        // );
        const tyme = data.created_at.toDate().toDateString();
        const html =
        `
        <li class ="main-list">
        <div class="list-name">${data.name}</div>
        <span class="list-message">${data.message}</span>
        <span class="list-date">${tyme}</span>
        </li>
        `;
        this.list.innerHTML += html;
    }
    addname(newn,old){
        const line = 
        `
        <li class="adding-name">
        <span>${old}</span> just changed to <span>${newn}</span>
        </li>
        `;
        this.list.innerHTML +=line;
    }
}