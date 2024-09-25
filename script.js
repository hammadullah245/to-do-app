let add = document.getElementById("event");
let input = document.getElementById("todo-input");
let listcontainer = document.getElementById("list-container");




input.addEventListener("keypress", function (e) { 
    if (e.key == "Enter") {
        additem();
    }
});

    

function additem(e) {
    if (input.value == "") {
        alert("Please enter a task")
    } else {


        let item_value = input.value;
        let item = document.createElement("div");
        item.classList.add("item");
    
        let item_content = document.createElement("div");
        item_content.classList.add("content");
        item.appendChild(item_content);
        let input_item = document.createElement("input");
        input_item.classList.add("text");
        input_item.type = 'text';
        input_item.value = item_value;
        input_item.setAttribute("readonly", "readonly");

            input_item.addEventListener("dblclick", function () {
                input_item.style.textDecoration = "line-through";
        
            })

            item_content.appendChild(input_item);

            let item_action = document.createElement("div");
            item_action.classList.add("actions");

            let edit_item = document.createElement("button");
            edit_item.classList.add("edit", "btn", "btn-success");
            edit_item.type = "button";
            edit_item.innerText = "Edit";
        

            let delete_item = document.createElement("button");
            delete_item.classList.add("delete", "btn", "btn-danger", "fas", "fa-trash");

            item_action.appendChild(edit_item);
            item_action.appendChild(delete_item);

            item.appendChild(item_action);

            listcontainer.appendChild(item);



            input.value = "";
    

            edit_item.addEventListener("click", (e) => {
                if (edit_item.innerHTML.toLowerCase() == 'edit') {
                    edit_item.innerText = "save";
                    input_item.removeAttribute("readonly");
                    input_item.focus();
                }
                else {
                    edit_item.innerText = "edit";
                    input_item.setAttribute("readonly", "readonly");
                }
            });


            delete_item.addEventListener("click", (e) => {
                listcontainer.removeChild(item);
            });
        }
    }