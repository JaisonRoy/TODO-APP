var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(this.responseText);
        var result = "";
        for (var i = 0; i < response.length; i++) {
            result += `<li class = "todo-list"> <input id=${i} value = true
            type=checkbox onClick="insertTodo(${i})"></input> ${response[i].title}   </li>  `;

        }
        document.getElementById("todo-list").innerHTML = result;

    }
}
const todos = []

function insertTodo(index) {
    console.log(index);
    var checkbox = document.getElementById(index);
    if (checkbox.checked) {
        todos.push(1);
    } else {
        todos.pop(1);
    }
    console.log(checkbox.checked);

    console.log(todos);
    if (todos.length == 5) {
        alert(" Congrats. 5 Tasks have been Successfully Completed")
    }

}

console.log(todos.length);


xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
xhttp.send();