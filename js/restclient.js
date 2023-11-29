async function getPosts(){
    let res = await fetch('http://restserver.ru/news');    
   
    let posts = await res.json();
    document.querySelector('.post-list').innerHTML=``;
    posts.forEach(element => {
        document.querySelector('.post-list').innerHTML+=`
                <div class="card text-start" style="width: 18rem; margin: 10px">                
                <div class="card-body">
                <h4 class="card-title">${element.title}</h4>
                <p class="card-text">${element.content}</p>
                <a href="#"  class="card-link" onclick="removeNews(${element.id})">Удалить</a>
                <a href="#"  class="card-link" onclick="openForm(${element.id})">Редактировать</a>
            </div>
        </div>`        
    });
}

async function addNews(){
    let title =document.getElementById('title').value;
    let content =document.getElementById('content').value;

    let formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);

    const res = await fetch ('http://restserver.ru/news', {
        method: 'POST',
        body: formData
    });

    const data = await res.json();

    if(data.status === true){
        await getPosts();
    }

}

async function removeNews(id){

    console.log("id="+id);
    const res = await fetch (`http://restserver.ru/news/${id}`, {
        method: "DELETE"        
    });

    const data = await res.json();

    
    
    if(data.status === true){
        await getPosts();
    }
}

async function updNews(id){

    let title =document.getElementById('new-title').value;
    let content =document.getElementById('new-content').value;

    let formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    var object = {};
    formData.forEach((value, key) => object[key] = value);
    var json = JSON.stringify(object);

    const res = await fetch (`http://restserver.ru/news/${id}`, {
        method: "PATCH",
        body: json  
    });


    const data = await res.json();
    if(data.status === true){
        await getPosts();
    }
}

getPosts()
