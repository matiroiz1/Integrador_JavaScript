// ===POPUP===

import { productoActivo, setproductoActivo } from "../../main";
import { handleDeleteProduct } from "../services/products";

const cancelButton = document.getElementById("cancelButton");
cancelButton.addEventListener("click", ()=>{
    closeModal();
});


// FUNCIONES PARA ABRIR Y CERRAR MODAL

export const openModal = ()=>{
    const modal = document.getElementById("modalPopUp");
    modal.style.display = "flex";
    const buttonDelete = document.getElementById("deleteButton");
    if(productoActivo){
        buttonDelete.style.display = "block";
    }else{
        buttonDelete.style.display = "none";

    }

    if(productoActivo){
        const name = document.getElementById("name"),
            imagen = document.getElementById("img"),
            precio = document.getElementById("precio"),
            categoria = document.getElementById("categoria");
        imagen.value = productoActivo.imagen;
        precio.value = productoActivo.precio;
        name.value = productoActivo.name;
        categoria.value = productoActivo.categoria;
    }


};

export const closeModal = ()=>{
    const modal = document.getElementById("modalPopUp");
 modal.style.display = "none";
 setproductoActivo(null);
 resetModal();
 };

const resetModal =()=>{
    const name = document.getElementById("name"),
        imagen = document.getElementById("img"),
        precio = document.getElementById("precio"),
        categoria = document.getElementById("categoria");
    imagen.value = "";
    precio.value = 0;
    name.value = "";
    categoria.value = "Seleccione una categoria";
};

const deleteButton = document.getElementById("deleteButton");
deleteButton.addEventListener("click", ()=>{
    handleButtonDelete();
});
const handleButtonDelete = ()=>{
    handleDeleteProduct();

}