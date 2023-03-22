fetch('https://crudcrud.com/api/f77065ae79fd4dd4a38ac30c01fb777a/todo')
    .then((response)=> response.json())
    .then((data)=> console.log(data));

// function load(){
//     fetch('https://crudcrud.com/api/f77065ae79fd4dd4a38ac30c01fb777a/todo')
//     .then((response)=> response.json())
//     .then((data)=>
//         data.forEach(function(item){
//         todo.innerHTML +=`
//         <li class="list-group-item d-flex justify-content-between align-item-center">
//             <h3 onclick="toggle(this)">${item.list}</h3> <span class="fs-3"><i class="fa-solid fa-trash text-danger" id="delete"></i></span>
//         </li>
//         `}));
// }

// load()


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

    event.preventDefault()
    let datapost = {
        list: inputan.value
    }
    let fetchOptions ={
        method: "POST",
        headers: 
            {"Content-Type":"application/json"},
        body: JSON.stringify(datapost)

    }
    fetch('https://crudcrud.com/api/f77065ae79fd4dd4a38ac30c01fb777a/todo',fetchOptions)
        .then((response)=> response.json())
        .then((data)=> console.log(data));
    inputan.value="";
});
function toggle(el){
    el.classList.toggle('done')
}

todo.addEventListener('click',function(event){
    if(event.target.id=="delete"){
        event.target.parentElement.parentElement.remove()
        event.preventDefault()
        storage('Delete',event.target.parentElement.parentElement.textContent.trim())
        // let hps =event.target.parentElement.parentElement.textContent.trim()
        // let del ={
        //     method: "DELETE"
    
        // }
        // fetch(`https://crudcrud.com/api/f77065ae79fd4dd4a38ac30c01fb777a/todo/${hps}`,del)
        //     .then((response)=> response.json())
        //     .then((data)=> console.log(data));
    }
})


