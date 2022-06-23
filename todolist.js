const todoObjectList = [];

class Todo_Class{
    constructor(item){
        this.ulElement = item;
    }

    add(){

    }

    done_undone(x){

    }
    deleteElement(z){

    }

    display(){

    }
}

const listSection = document.querySelector("#myUL");

myTodoList = new Todo_Class(listSection);

document.querySelector(".addbtn").addEventListener("click",function () {
    myTodoList.add()
})

add (){
    const todoInput = document.querySelector("#myInput").value;
    if (todoInput== ""){
        alert ("You did not enter any item!");
    }else{
        const todoObject = {
            id : todoObjectList.length,
            todoText : todoInput,
            idDone : false,
        }
        todoObjectList.unshift(todoObject);
        this.display();
        document.querySelector("#myInput").value = '';
    }
}

display(){
    this.ulElement.inner.HTMl = "";

    todoObjectList.forEach((object_item)=> {
        const liElement = document.createElement("li");
        const delBtn = document.createElement ("i");

        liElement.innerText = object_item.todoText;
        liElement.setAttribute("data-id",object_item.id);

        delBtn.setAttribute("data-id",object_item.id);
        delBtn.classList.add("far", "fa-trash-alt");

        liElement.appendChild(delBtn);

        delBtn.addEventListener("click",function(e){
            const deletedId = e.target.getAtribute ("data-id");
            myTodoList.done_undone("checked");
        })

        if (object_item.isDone){
            liElement.classList.add("checked");
        }

        this.ulElement.appendChild(liElement);
    })

}

done_undone(x){
    const selectedTodoIndex = todoObjectList.findIndex((item) => item.id == x);
    console.log (todoObjectList[selectedTodoIndex].isDone);
    todoObjectList[selectedTodoIndex].isDone == false ? todoObjectList[
        selectedTodoIndex].isDone = true : todoObjectList[selectedTodoIndex].isDone = false;
        thisdisplay();

}

deleteElement(z){
    const selectedDelIndex = todoObjectList.findIndex((item) => item.id == z);
    todoObjectList.splice(selectedDelIndex,1);

    this.display();
}