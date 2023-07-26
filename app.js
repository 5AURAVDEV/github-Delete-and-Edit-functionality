let add = document.querySelector("#addForm");
add.addEventListener("submit", newadd);
let del=document.getElementById("items")
del.addEventListener("click",btndel)
del.addEventListener("click",edit_items)

function newadd(event) {
  event.preventDefault();
  let val = document.getElementById("item");
  let x = document.getElementById("items");
  let y = document.createElement("li");
  let z = document.createElement("button");
  y.setAttribute("class", "list-group-item");
  y.innerText=val.value
  z.setAttribute("class", "btn btn-danger btn-sm float-right delete");
  z.innerText="X"
  y.appendChild(z)
  x.appendChild(y)
}

function btndel(event){
    if(event.target.className.includes('delete')){
        if(confirm("are u sure")){
        let d=event.target.parentElement
        d.parentElement.removeChild(d)
        }
    }
}
let xyz=document.getElementsByClassName("list-group-item")
for(i=0;i<xyz.length;i++){
let m=document.createElement("button")
m.className="btn btn-primary btn-sm float-right"
m.innerText="EDIT"
xyz[i].appendChild(m)
}

function edit_items(event){
    if(event.target.className.includes('primary')){
        let k=event.target.parentElement
        console.log(k.firstChild.textContent)
        k.firstChild.textContent="edited"
    }
}