let  infoBotines = [
    {
        name : 'Nike Mercurial',
        model: 'Zoom Superfly 9 Aca Tf CS',
        price : 54999,
        brand : 'Nike',
        stock : 43,
        condition:'Futbol 5',
        id : 0,
        img:"https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw44a81692/products/NIDJ5629-001/NIDJ5629-001-1.JPG"
    },
    {
        name : 'Umbro Sala Pro 5',
        model: 'Bump Club',
        price : 22340,
        brand : 'Umbro',
        stock : 3,
        condition: 'Futsal',
        id : 1,
        img:"https://sporting.vtexassets.com/arquivos/ids/775442-800-800?v=638174132235970000&width=800&height=800&aspect=true"
    },
    {
        name : 'Umbro Sala Pro 5',
        model: 'Bump',
        price : 33540,
        brand : 'Umbro',
        stock : 15,
        condition: 'Futsal',
        id : 2,
        img:"https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw2dbf74a0/products/UB_U01FB041-180/UB_U01FB041-180-1.JPG"
    },
    {
        name : 'Adidas X Speedflow',
        model: '3',
        price : 24199,
        brand : 'Adidas',
        stock : 60,
        condition: 'Futbol 5',
        id : 3,
        img:"https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwae2ab46d/products/AD_FY3322/AD_FY3322-1.JPG"
    },
    {
        name : 'Umbro Sala Pro 5',
        model: 'Bump Club',
        price : 22340,
        brand : 'Umbro',
        stock : 3,
        condition: 'Futsal',
        id : 4,
        img:"https://sporting.vtexassets.com/arquivos/ids/775442-800-800?v=638174132235970000&width=800&height=800&aspect=true"
    },
    {
        name : 'Adidas X Speedflow',
        model: '3',
        price : 24199,
        brand : 'Adidas',
        stock : 60,
        condition: 'Futbol 5',
        id : 5,
        img:"https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwae2ab46d/products/AD_FY3322/AD_FY3322-1.JPG"
    },
    {
        name : 'Nike Mercurial',
        model: 'Zoom Superfly 9 Aca Tf CS',
        price : 54999,
        brand : 'Nike',
        stock : 43,
        condition:'Futbol 5',
        id : 6,
        img:"https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw44a81692/products/NIDJ5629-001/NIDJ5629-001-1.JPG"
    },
    {
        name : 'Umbro Sala Pro 5',
        model: 'Bump',
        price : 33540,
        brand : 'Umbro',
        stock : 15,
        condition: 'Futsal',
        id : 7,
        img:"https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw2dbf74a0/products/UB_U01FB041-180/UB_U01FB041-180-1.JPG"
    },
    {
        name : 'Adidas X Speedflow',
        model: '3',
        price : 24199,
        brand : 'Adidas',
        stock : 60,
        condition: 'Futbol 5',
        id : 8,
        img:"https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwae2ab46d/products/AD_FY3322/AD_FY3322-1.JPG"
    },
    {
        name : 'Umbro Sala Pro 5',
        model: 'Bump',
        price : 33540,
        brand : 'Umbro',
        stock : 15,
        condition: 'Futsal',
        id : 9,
        img:"https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw2dbf74a0/products/UB_U01FB041-180/UB_U01FB041-180-1.JPG"
    },
    {
        name : 'Umbro Sala Pro 5',
        model: 'Bump Club',
        price : 22340,
        brand : 'Umbro',
        stock : 3,
        condition: 'Futsal',
        id : 10,
        img:"https://sporting.vtexassets.com/arquivos/ids/775442-800-800?v=638174132235970000&width=800&height=800&aspect=true"
    },
    {
        name : 'Nike Mercurial',
        model: 'Zoom Superfly 9 Aca Tf CS',
        price : 54999,
        brand : 'Nike',
        stock : 43,
        condition:'Futbol 5',
        id : 11,
        img:"https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw44a81692/products/NIDJ5629-001/NIDJ5629-001-1.JPG"
    },
    
    
   
    
]

const cardsContainer = document.querySelector('.list-product')
/*--------------------RENDERIZAR PRODUCTOS-------------------*/
function renderProducts(arr){
    for (product of arr){
    const productCard = document.createElement('div');
    productCard.classList.add('box-product');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.img);
    
    
    

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');
    productInfoDiv.classList.add('container-product-info');
    const productName = document.createElement('h3');
    const productPrice = document.createElement('p');
    productName.innerText = `${product.name} ${product.model}`;
    productPrice.innerText = '$' + product.price;
    productInfoDiv.append(productName, productPrice);
    

    const productInfoButton = document.createElement('button');
    productInfoButton.classList.add('add-to-cart-button');
    const productFigureImg = document.createElement('img');
    productFigureImg.setAttribute('src', './bt_add_to_cart.svg');
    productFigureImg.setAttribute('id', `${product.id}`);
    productInfoButton.appendChild(productFigureImg);

    
    
    
    productInfo.append(productInfoDiv,productInfoButton);

    
    productCard.append(productImg,productInfo);

    cardsContainer.appendChild(productCard);
  };
}
renderProducts(infoBotines);

/*---------------------CARRITO DE COMPRAS--------------------*/ 
//n será el numero de items en el carrito
let n = 0;
const btnAdd = document.querySelectorAll('.add-to-cart-button');
const ulList = document.querySelector('.my-carrito-container')
const deleteAll = document.querySelector('.delete-all-carrito');
const msjCarritoVacio = document.querySelector('.p-msj');
const numCarrito = document.querySelector('.num-product-carrito');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector("#side-carrito");



/*--------------ABRIR CARRITO---------*/ 
menuCarritoIcon.addEventListener("click",()=>{
    shoppingCartContainer.classList.toggle('inactive');
    
    
});




//Eliminar por completo los items del carrito
deleteAll.addEventListener('click',()=>{
    ulList.innerHTML='';
    n=0;
    numCarrito.innerHTML = '0';
    msjCarritoVacio.classList.remove('inactive');

});




//Agregar items al carrito
for(i=0; i<btnAdd.length;i++){   
 if(btnAdd[i].firstChild.id == i){
    btnAdd[i].addEventListener('click',(e)=>{
        let product = infoBotines[e.target.id];
        //removemos el mensaje de carrito vacio
        msjCarritoVacio.classList.add('inactive');
        //por cada item n se suma
        n++;
        //creamos el item de la lista
        const elemento = document.createElement('li');
        elemento.classList.add(`item-list-${n}`);
        elemento.classList.add('item')
        let msjH3 = `${product.name} ${product.model}`;
        let msjP = `${product.price}`
        elemento.innerHTML = 
      ` <div class="product-info carrito-info">
        <div class="container-carrito-info">
           <h3>${msjH3}</h1>
            <p>${msjP}</p> 
        </div>
        <button class="delete-product-carrito${n}">
            <img src="./icon_close.png" alt="delete product" class="logo-delete-item">
        </button>`;
        ulList.appendChild(elemento);

        //eliminar item individualmente
        const deleteIcn = document.querySelector(`.delete-product-carrito${n}`);
        const elementDelete = document.querySelector(`.item-list-${n}`);
        
        deleteIcn.addEventListener('click',()=>{
            n--;
            elementDelete.remove();
            numCarrito.innerHTML = `${n}`;
            if(ulList.childElementCount==0){
                msjCarritoVacio.classList.remove('inactive');
                numCarrito.innerHTML = '0';
                n=0;
            }
            
            
        })
        numCarrito.innerHTML = `${n}`;
    })
 } 

    
};








