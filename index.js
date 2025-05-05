document.addEventListener('DOMContentLoaded',  ()=> {
    const form= document.getElementById("todo-form");
    const input= document.getElementById("todo-input");
    const list= document.getElementById("todo-list");



    form.addEventListener("submit", (e)=> {
        e.preventDefault();
        const taskText= input.value.trim();
        if (taskText === '') return;
        const li= document.createElement("li");
        li.textContent= taskText;
        li.addEventListener("click", ()=> {
            li.classList.toggle("completed");
        });
        const deleteBtn =document.createElement("button");
        deleteBtn.textContent= "X";
        deleteBtn.className= "delete-btn";

        deleteBtn.addEventListener("click", (e)=> {
            e.stopPropagation();
            list.remove();
        });
        li.appendChild(deleteBtn);
        list.appendChild(li);
        input.value= '';

        
    });
    });console.log("Stage 1 loaded");

