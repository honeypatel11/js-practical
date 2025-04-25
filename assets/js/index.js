let arr = JSON.parse(localStorage.getItem("recipe")) || [];
let editinfo = JSON.parse(localStorage.getItem("editinfo"));
let editidx = JSON.parse(localStorage.getItem("editidx"));


let btn = document.getElementById("button").addEventListener("click", function () {
    let titel = document.getElementById("title").value;
    let ingredients = document.getElementById("ingredients").value;
    let instructions = document.getElementById("instructions").value;
    let cuisine = document.getElementById("cuisine").value;
 

})
let obj = {
    titel,
    ingredients,
    instructions,
    cuisine,

};


if (arr.length != null) {
    localStorage.getItem("")
    document.getElementById("data").innerHTML = "data not found";

}else{
    obj.push(arr);
}
function deleteall(idx){
    arr.splice(idx);
    localStorage.setItem("recipe" , JSON.stringify(arr));
    display()
    localStorage.removeItem("editinfo")
    localStorage.removeItem("editidx")

}
function edit(idx){


}
function display(arr){
    let data = document.getElementById("data").innerHTML = " "

    arr.forEach(items,idx => {

        let data = document.getElementById("data").innerHTML += `
                <tr>
                    <td>${items.titel}</td>
                    <td>${items.ingredients}</td>
                    <td>${items.instructions}</td>
                    <td>${items.cuisine}</td>
                    <td> <button onclick = deleteall((${idx})) ><i class="fa-solid fa-pen-to-square"></i></button>
                    <td> <button onclick = edit((${idx}))><i class="fa-solid fa-trash"></i></button>
                 </tr>
    
    `
        
    });

}

