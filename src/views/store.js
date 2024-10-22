// ===========STORE==============

import { setproductoActivo } from "../../main";
import { handleGetProductLocalStorage } from "../persistence/localstorage";
import { openModal } from "./modal";


export const handleGetProductToStore = ()=>{

    const products = handleGetProductLocalStorage();
    handleRenderList(products);
    
};

export const handleRenderList = (productosIn) =>{

    const burguers = productosIn.filter((el)=> el.categoria == "Hamburguesas")
    const papas = productosIn.filter((el)=> el.categoria == "Papas")
    const gaseosas = productosIn.filter((el)=> el.categoria == "Gaseosas")

    const rederProductGroup = (productos, tittle)=>{
        if(productos.length > 0) {
            const productosHTML = productos.map((producto, index)=>{
            return `<div class='containerTargetItem' id="product-${producto.categoria}-${index}">
                <div>
                <img src='${producto.imagen}'/>
                <div> 
                <h2>${producto.name}</h2>
                </div>
                <div class='targetProps'> 
                <p><b>Precio:</b> $ ${producto.precio}</p>
            
                </div>
                
                </div>
                </div>`;
            });

            return `
                <section class='sectionStore'>
                <div class='containerTittleSection'>
                    <h3>${tittle}</h3>
                </div>
                <div class='containerProductStore'>
                ${productosHTML.join("")}
                </div>

                </section>
            
            `;

        } else {
            return "";
        }
    };

    // renderiza cada uno de los productos dentro de su categoria
    const appContainer = document.getElementById("storeContainer");
    appContainer.innerHTML = `
    ${rederProductGroup(burguers, "Hamburguesas")}
    ${rederProductGroup(papas, "Papas")}
    ${rederProductGroup(gaseosas, "Gaseosas")}
    `;

    const addEvents = (productsIn)=>{
        if (productsIn) {
            productsIn.forEach((element, index) =>{
                const productContainer = document.getElementById(
                    `product-${element.categoria}-${index}`);
                productContainer.addEventListener("click",()=>{
                    setproductoActivo(element);
                    openModal();
                });
            });
        }
    };
    addEvents(burguers);
    addEvents(papas);
    addEvents(gaseosas);
};
