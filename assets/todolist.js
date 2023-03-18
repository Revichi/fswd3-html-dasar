var btn = document.getElementById('tambah')
let inputan = document.getElementById('add')
const todo = document.getElementById("todo")

let data = [];

if(localStorage.getItem("data")){
    const datastorage = JSON.parse(localStorage.getItem("data"));
    datastorage.forEach(function(item){
    todo.innerHTML +=`
    <li class="list-group-item d-flex justify-content-between align-item-center">
        <h3 onclick="toggle(this)">${item}</h3> <span class="fs-3"><i class="fa-solid fa-trash text-danger" id="delete"></i></span>
    </li>
    `
    data.push(item);
    })


}

function storage(action,item){
    switch(action){
        case 'Add' :
            data.push(item);
            break;
        case 'Delete':
            data = data.filter(function(list){
                return list != item;
            })
            break;
    }
    localStorage.setItem('data',JSON.stringify(data))
}




btn.addEventListener('click', function (event) {
    todo.innerHTML +=`
    <li class="list-group-item d-flex justify-content-between align-item-center">
        <h3 onclick="toggle(this)">${inputan.value}</h3> <span class="fs-3"><i class="fa-solid fa-trash text-danger" id="delete"></i></span>
    </li>
    `

    storage('Add',inputan.value)

    inputan.value="";
    event.preventDefault()
});
function toggle(el){
    el.classList.toggle('done')
}

todo.addEventListener('click',function(event){
    if(event.target.id=="delete"){
        event.target.parentElement.parentElement.remove()
        event.preventDefault()
        storage('Delete',event.target.parentElement.parentElement.textContent.trim())
    }
})


