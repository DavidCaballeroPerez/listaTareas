const ingresarTarea = document.getElementById("ingresar-tarea");
const btnAgregar = document.getElementById("btnCrearTarea");
const listaTareas = document.getElementById("listaDeTareas");
console.log(ingresarTarea);
console.log(btnAgregar);
console.log(listaTareas);

//agregar tarea
btnAgregar.addEventListener("click", AgregarTarea)

function AgregarTarea() {
  if (ingresarTarea.value) {
    let nuevaTarea = document.createElement("div");
    nuevaTarea.classList.add("tarea");
    let textonuevaTarea = document.createElement("p");
    textonuevaTarea.innerText = ingresarTarea.value;

    let iconos = document.createElement("div");
    iconos.classList.add("iconos");
    /*
        iconos.innerHTML = `<span class="material-symbols-outlined">
    check_box_outline_blank</span><span class="material-symbols-outlined">delete_forever
    </span>`*/

    let iconobox = document.createElement("span");
    iconobox.classList.add("material-symbols-outlined");
    iconobox.innerText = "check_box_outline_blank";
    iconobox.style.cursor = "pointer";
    iconobox.addEventListener("click", tareaCompletada);
    let iconodel = document.createElement("span");
    iconodel.classList.add("material-symbols-outlined");
    iconodel.innerText = "delete_forever";
    iconodel.style.cursor = "pointer";
    iconodel.addEventListener("click", eliminarTarea);


    iconos.append(iconobox, iconodel);

    nuevaTarea.appendChild(textonuevaTarea);
    nuevaTarea.appendChild(iconos);


    listaTareas.appendChild(nuevaTarea);
    ingresarTarea.value = "";
  } else {
    console.log("ingrese una tarea");
  }
}

function tareaCompletada(e) {
  let tarea = e.target.parentNode.parentNode;
  tarea.classList.toggle("tareaCompletada");

  console.log("complete")
}
function eliminarTarea(e) {
  let tareadel = e.target.parentNode.parentNode;
  listaTareas.removeChild(tareadel);
  console.log("delete")
}