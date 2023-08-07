// 1 Descripción del ejercicio

// PUNTOS SEGUNDA PREENTREGA
// PARA APROBAR, DEBEMOS HACER USO DE: ARRAYS, OBJETOS, FUNCIONES, MÉTODOS DE ARRAYS DE ITERACIÓN O MÉTODOS DE ARRAYS COMO PUSH, SPLICE, ETC, LOS QUE QUIERAN USAR
// TIENEN QUE INTERACTUAR CON EL USUARIO A TRAVÉS DE PROMPT
// PUEDEN DEVOLVER LA RESPUESTA AL USUARIO CON UN ALERT O CONSOLE.LOG
// TODOS LOS PUNTOS TIENEN QUE TRABAJAR CON ARRAYS DE OBJETOS
// SE DEBEN INSTANCIAR NUEVOS OBJETOS Y ESTOS DEBEN SER PUSHEADOS A UN ARRAY VACÍO

// CASO ECOMMERCE
// Generen con un función constructora o class constructor con 
//  5 objeto relativos a productos.
// Este objeto tiene uqe tener los siguientes propiedades:
// - nombre, precio, cantidad, categoria, id.
// Estos objetos deben ser pusheados a un array vacío que se llame productos
// al tener la data de nuestros productos, se debe hacer uso de un método 
// de array que ordene a los elementos por su nombre (sort).
// luego debemos mandar un prompt, que se aloje en una variable, que 
// le pregunte al usuario qué quiere comprar.
// debemos usar un método de array que busque a ese elemento, que tome
// su valor de nombre y precio y que mande un alerta al usuario, diciéndole
// que el producto ya está preparado para ir a su domicilio, que salio x 
// dinero y agradecer por su compra.

let nombre = '';
let precio = '0';
let stock =  '0';
let categoria = '';
let marca = '';
let descripcion = '';
let descuento = '0';
let despachogratis = false;
let id = '0';
let dataZapatillas = [];

/*
    // Consulto cuantos productos ingresaran
    let iReg = '0';
    const data_ = /[0-9]/;
    iReg = prompt("Cuantos productos Ingresará ?");
    console.log("Productos a ingresar" +iReg);

    let retorno = true;
    let valorString = '';
    // Valido que el valor de cantidad de productos debe ser numérico
    let validarNumero = (valor) => { 
        retorno = true;
        valorString = valor;
        console.log("Dato a validar iReg es:"+valor);
        //console.log(typeof valor);
        if (valor == null ) {  
            retorno = false;
        } else { 
           for ( let j = 0 ; j < valor.length; j++){
            if ( !(valor[j].match(data_) )) {
                retorno = false;
            }   
            } // for

            if (typeof valor == 'string'){ 
                if (valor.trim() == "") { 
                    retorno = false
                }
            }

        }
        return retorno;
    } 

    let valNumero = validarNumero(iReg);
    if ( !valNumero){
        iReg = prompt("Favor Ingresar valor Numérico de Cuantos productos Ingresará ?");
        if ( !validarNumero(iReg) ){
            retorno = false;
            alert("Error, Cantidad de productos es incorrecta. Se aborata proceso.");
        }    
    }

    // Aca defino funcion constructora para alimentar array de datos....
    function dataIngresada ( nombre, precio, stock,categoria,marca,descripcion,descuento,despacho,id ) {
        this.nombre = nombre,
        this.precio =  precio,
        this.stock = stock,
        this.categoria = categoria,
        this.marca  = marca,
        this.descripcion = descripcion,
        this.descuento = descuento,
        this.despachogratis = despachogratis,
        this.id = id
    }; 
    

    // Si la validación de la cantidad de registros es OK... continua el programa
    if (retorno) { 
        for ( i = 0; i < iReg; i++) {
            id = i;// prompt(`Producto Ingrese Id que identifica al producto(Valor numérico >=0)`);
            nombre = prompt(`Producto[${i}].Ingrese Nombre del producto`);
            precio = prompt(`Producto[${i}].Ingrese Precio del producto. (Valor numérico)`);
            stock =  prompt(`Producto[${i}].Ingrese Stock del producto. (Valor numérico)`);
            categoria = prompt(`Producto[${i}].Ingrese Categoría del producto`);
            marca = prompt(`Producto[${i}].Ingrese Marca del producto`);
            descripcion = prompt(`Producto[${i}].Ingrese Descripción del producto`);
            descuento = prompt(`Producto[${i}].Ingrese Descuento del producto(Valor Numérico 0-99)`);
            despachogratis= prompt(`Producto[${i}].Ingrese Despacho gratis del producto(Valor numérico 0=NO 1=SI)`);
        
            dataZapatillas.push ( new dataIngresada(nombre, precio, stock,categoria,marca,descripcion,descuento,despachogratis,id));
        }       
     
    retorno = true;
    console.log("Ejecuto validación de valores Numéricos");
    for( i= 0; i < dataZapatillas.length ; i++){
        // Valido precio del producto
        valNumero = validarNumero(dataZapatillas[i].precio);
        if ( !valNumero){
            dataZapatillas[i].precio = prompt(`Producto [${[i]}].Favor Ingresar valor Numérico de PRECIO de producto`);
            if ( !validarNumero(dataZapatillas[i].precio) ){
                retorno = false;
                alert(`Error, valor de PRECIO [${dataZapatillas[i].precio}] de producto es incorrecto. Se aborata proceso.`);
            }    
        }

        // Valido Stock de producto
        valNumero = validarNumero(dataZapatillas[i].stock);
        if ( !valNumero){
            dataZapatillas[i].stock = prompt(`Producto [${[i]}].Favor Ingresar valor Numérico de STOCK de producto`);
            if ( !validarNumero(dataZapatillas[i].stock) ){
                retorno = false;
                alert(`Error, valor de STOCK [${dataZapatillas[i].stock}] de producto es incorrecto. Se aborata proceso.`);
            }    
        }

        // Valido Descuento de producto
        valNumero = validarNumero(dataZapatillas[i].descuento);
        if ( !valNumero){
            dataZapatillas[i].descuento = prompt(`Producto [${[i]}].Favor Ingresar valor Numérico de DESCUENTO producto. Valor(0-99)`);
            if ( !validarNumero(dataZapatillas[i].descuento) ){
                retorno = false;
                alert(`Error, valor de DESCUENTO [${dataZapatillas[i].descuento}] de producto es incorrecto. Se aborata proceso.`);
            }    
        }

        // Valido Despacho gratis de producto
        valNumero = validarNumero(dataZapatillas[i].despachogratis);
        if ( !valNumero){
            dataZapatillas[i].despachogratis = prompt(`Producto [${[i]}].Favor Ingresar valor Numérico de DESPACHO GRATIS de producto. (Valor numérico 0=NO 1=SI)`);
            if ( !validarNumero(dataZapatillas[i].despachogratis) ){
                retorno = false;
                alert(`Error, valor de DESPACHO GRATIS [${dataZapatillas[i].despachogratis}] de producto es incorrecto. Se aborata proceso.`);
            } else {
                if (dataZapatillas[i].despachogratis == '0') { 
                    dataZapatillas[i].despachogratis = false;
                 } else if (dataZapatillas[i].despachogratis == 1) {
                    dataZapatillas[i].despachogratis == true;
                 } else {
                    alert(`Error, valor de DESPACHO GRATIS [${dataZapatillas[i].despachogratis}] de producto es incorrecto. Se aborata proceso.`);
                    retorno = false;
                 }
            }   
        }
   }
   } // If retorno

   if (!retorno) {
    console.log("Existe error de datos. Termino el proceso ya que no data Correcta ");
    throw new Error();
   }

   /*
   NO tenia claro si el objeto se creaba con datos via promt o se definia
   el objeto con datos. Para este caso definí el objeto principal dataZapatillas
   el cual se visualiza abajo.

   De lo contrario tambien desarrollé arriba todo el ingreso de datos para
   alimentar el objeto con sus datos como ; id,nombre,precio,stock,categori,
   marca,descripción,descuento y si tiene despacho gratis.

   Personalmente creo que ingresar los datos para llenar el objeto el muy engorroso
   imaginemo 5 producto con 9 atributos... son N ingresos.

   La ejecución actual esta con el objeto creado dataZapatillas. Así
   se muestra con un alert los productos que hay en la tienda y el
   usuario ingresa ID del producto, cantidad a comprar y si tiene
   despacho gratuito se solicita la dirección  para despachar producto.
   Luego aparecen con alert el resumen de la venta. Como valor agregado
   creo un html con los datos de la tienda e imagen del producto.

   Si quieren probar llenar el objeto dato a dato. Favor comentar
   el objeto dataZapatillas( se ve abajo ). Y descomentar el codigo de arriba
   gracias.
    */


// Objeto Principal
 dataZapatillas = [
    {
        id: 0,
        nombre: "Galaxy",
        precio: 69990,
        stock:300,
        categoria:"Running",
        marca:"Adidas",
        descripcion:"Galaxy Star Zapatilla Running Mujer Azul",
        descuento: 0,
        despachogratis: false
    }, 
    {
        id: 1,
        nombre: "Blazer",
        precio: 51000,
        stock:450,
        categoria:"Urbana",
        marca:"Nike",
        descripcion:"Blazer low 77 zapatilla urbana",
        descuento: 10,
        despachogratis: true
    },   
    {
        id: 2,
        nombre: "Terrex",
        precio: 45000,
        stock:160,
        categoria:"Zapatillas",
        marca:"Adidas",
        descripcion:"Terrex Unity Lea Zapatilla Outdoor Hombre Negro",
        descuento: 20,
        despachogratis: true
    },
    {
        id: 3,
        nombre: "Lact",
        precio: 76000,
        stock:140,
        categoria:"Urbana",
        marca:"Lacoste",
        descripcion:"Lact Zapatilla Urbana Hombre Blanco",
        descuento: 0,
        despachogratis: false    
    },
    {
        id: 4,
        nombre: "Nmd",
        precio: 70000,
        stock:190,
        categoria:"Urbana",
        marca:"Adidas",
        descripcion:"Nmd Zapatilla Urbana Mujer Blanco Adidas",
        descuento: 30,
        despachogratis: true       
    },
    {
        id: 5,
        nombre: "Questa",
        precio: 55000,
        stock:900,
        categoria:"Running",
        marca:"Nike",
        descripcion:"Questa Zapatilla Running Mujer Blanco",
        descuento: 0,
        despachogratis: false
    },
    {
        id: 6,
        nombre: "Street",
        precio: 48000,
        stock:950,
        categoria:"Urbana",
        marca:"Nike",
        descripcion:"Street Zapatilla Urbana Mujer Negro",
        descuento: 15,
        despachogratis: true
    },
    {
        id: 7,
        nombre: "Response",
        precio: 28000,
        stock:261,
        categoria:"Running",
        marca:"Adidas",
        descripcion:"Response Zapatilla Running Mujer Gris Adidas",
        descuento: 12,
        despachogratis: true
    },
    {
        id: 8,
        nombre: "Urban",
        precio: 39000,
        stock:415,
        categoria:"Urbana",
        marca:"Puma",
        descripcion:"Urban Zapatilla Mujer Negro Puma",
        descuento: 40,
        despachogratis: true
    }    
]


// Muestro Objeto Principal 
console.log(dataZapatillas);

// Ordeno Objeto Principal por Nombre Solo para
// mostrar por consola.
const dataZapatillasOrdenado = dataZapatillas.slice().sort(( a, b ) => {
    if ( a.nombre < b.nombre ) {
        return -1;
    } else if ( a.nombre > b.nombre ) {
        return 1;
    } else {
        return 0;
    }
})
// Muestro datos ordenados 
console.log("Muestro datos ordenados por nombre del producto");
console.log(dataZapatillasOrdenado);

// Ordeno objeto por número de ID, para mostrar en console.log
// y luego trabajo con el array ordenado por ID
const dataZapatillasId = dataZapatillas.slice().sort(( a, b ) => {
    if ( a.id < b.id ) {
        return -1;
    } else if ( a.id > b.id ) {
        return 1;
    } else {
        return 0;
    }
});
console.log("Muestro datos ordenados por ID del producto");
console.log(dataZapatillasId)

// Ejecuto PUSH al arreglo dataVenta que es el
// arreglo final con el que se trabajara
// recorro objeto ordenado xon ForEach y hago PUSH al arreglo
let dataWeb = '';
let textoVenta = '';
const dataVenta  = []

dataZapatillasId.forEach(( data ) => {
    dataVenta.push({
        id : data.id,
        nombre: data.nombre,
        precio: data.precio,
        stock: data.stock,
        categoria: data.categoria,
        marca: data.marca,
        descripcion: data.descripcion,
        descuento: data.descuento,
        despachogratis: data.despachogratis
     });
     
     // Creo variable para mostrar los productos
     // de la tienda al usuario. Y decidan que comprar
    textoVenta = textoVenta + " " + data.id + ":ID de producto," + data.descripcion + ",Precio $ "+ data.precio + ",dscto."+ data.descuento + "% " +" \n ";
   
    // Creo variable para luego mostrar un pequeño Html
    // de la tienda   
    dataWeb = dataWeb + `
        <h3>
            ${data.descripcion}
        </h3>
        <p> id Producto ${data.id} </P>
        <p> Marca ${data.marca} </P>
        <p> Precio $ ${data.precio} pesos Chilenos</P>
        <p> Stock en bodega ${data.stock} </P>
        <p> Categoría ${data.categoria} </P>
        <p> Descuento ${data.descuento}% </P>  
        <p> ${(data.despachogratis ==true) ? "Despacho GRATIS a tu domicilio" : "Producto sin despacho"} <p> 
        <img src="./img/${data.id}.png" alt=${data.nombre} style="width:200px;height:150px">
      `
    });
  dataWeb = `<h2>
           Bienvenidos a Nuestra tienda de REMATE de Zapatillas
           </h2>
           <h4>
           Estos son los productos que tenemos en Stock
           </h4>
  ` + dataWeb;

console.log("Datos web para mostrar HTML");
console.log(dataWeb);
document.write(dataWeb);

// Muestro arreglo dataVenta final
console.log("Muestro arreglo Final");
console.log(dataVenta);

textoVenta = "Bienvenidos a la Tienda de REMATE de Zapatillas \n"+
"Estos son los productos que tenemos en Stock: \n "+textoVenta;
console.log(textoVenta);

// Mensaje alert para que usuario vea los productos de la tienda
alert(textoVenta);

let idProductoBoolean = false;
let cantidadBoolean = false;
let idProducto = prompt("Ingrese ID de producto Rango(0-8)");
console.log("Id ingresado por el usuario: " + idProducto);

 // Función flecha que valida ID correcto del producto
 const validaIdProducto = (idProducto) => {
    let idCorrecto = true; 
    const data = /[0-9]/;

    if (idProducto == null ) {  
        idCorrecto = false;
    } else if ( !idProducto.match(data) ){
       idCorrecto = false;
    }
    return idCorrecto;
  } 

    idProductoBoolean = validaIdProducto(idProducto);
    // Si no es correcto el primer ingreso de ID, 
    // hay un segundo intento de ingreso y final
    if (!idProductoBoolean ) {
        idProducto = prompt("Por favor REINGRESE ID producto correcto Rango(0-8)");
        idProductoBoolean = validaIdProducto(idProducto);

        // Segundo ingreso esta malo de ID de producto. Aborto la compra
        if(!idProductoBoolean) {
        console.log(`Error, Id de producto ingresado [${idProducto})] es Incorrecto( debe estar en rango 0-8 ). Compra abortada`);
        alert(`Error, Id de producto ingresado [${idProducto}] es Incorrecto( debe estar en rango 0-8 ). Compra abortada`);
        }
    }

    // SI el primer dato de Id de Producto es Correcto
    // entonces ahora solicito la cantidad a comprar
    if (idProductoBoolean) {
        // Ingreso cantidad de productos a Comprar
        let cantidadUsuario = prompt("Ingrese CANTIDAD de productos a Comprar");
        console.log("Cantidad de productos a Comprar: " + cantidadUsuario);

        // Función flecha que valida Cantidad de Productos
        cantidadBoolean = true; 
        const validaCantidad = (cantidadUsuario) => {
            let cantidadCorrecta = true; 
            const data = /[0-9]/;

            if (cantidadUsuario == null ) {  
                cantidadCorrecta = false;
            } else if ( !cantidadUsuario.match(data) ){
               cantidadCorrecta = false;
            } else if (!(cantidadUsuario.length >= 1)) {        
                cantidadCorrecta = false;
            } else if ( !(cantidadUsuario >= 1 && cantidadUsuario <=99 )) {        
                cantidadCorrecta = false;
            }

            //if (! cantidadCorrecta) { alert("Error, Cantidad de pruductod Incorrecta. Compra abortada"); }
            return cantidadCorrecta;
        }
        cantidadBoolean = validaCantidad(cantidadUsuario); 

        // Si no es correcto el primer ingreso de cantidad
        // hay un segundo ingreso y final
        if (!cantidadBoolean ) {
            cantidadUsuario = prompt("Por favor REINGRESE Cantidadd de producto correcto Rango(1-99)");
            cantidadBoolean = validaCantidad(cantidadUsuario);

            // Segundo ingreso esta malo de Cantidad  de producto. Aborto la compra
            if(!cantidadBoolean) {
               console.log(`Error, Cantidad de producto ingresado [${cantidadUsuario})] es Incorrecto( debe estar en rango 1-99). Compra abortada`);
               alert(`Error, Cantidad de producto ingresado [${cantidadUsuario})] es Incorrecto( debe estar en rango 1-99). Compra abortada`);
            }
        }

        // Si cantidad es correcta ejecuto FILTER sobre el ARRAY para
        // rescatar los datos del producto en 
        if (cantidadBoolean) {  
            const dataEncontrado = dataVenta.filter( data => data.id == idProducto)
            console.log("Registro encontrado");
            console.log(dataEncontrado);

            // Valido si hay Stock Suficiente del producto
            if (Number(cantidadUsuario) > Number(dataEncontrado[0].stock)) {
                alert(`ERROR lo sentimos cantidad solicitada  ${cantidadUsuario} es mayor a nuestro actual stock ${dataEncontrado[0].stock}. Compra abortada`);
            } else {

                let precio = dataEncontrado[0].precio;
                let descuento = dataEncontrado[0].descuento;
                let descuentoTotal = 0;
                let despacho = "Producto sin despacho a domicilio";
                if (dataEncontrado[0].despachogratis){ 
                    despacho = "Producto con despacho GRATIS!!";
                }
                console.log(despacho);
                console.log(`Precio:  ${precio} pesos Chilenos`);
                console.log(`Descuento:  ${descuento} `);
                console.log("cantidadUsuario:" + cantidadUsuario);
                let total = Number(precio) * Number(cantidadUsuario);
                if (Number(descuento) > 0) {
                    descuentoTotal = Number(descuento/100) * total; 
                    total = total - descuentoTotal;
                }
                console.log(`Descuento: ${descuento}%  ${descuentoTotal} `);
                console.log(`Total compra:  ${total} `);

                let lugarDespacho = "";  
                let lugarDespachoFinal = "";      
                let despachoBoolean = true;
                // Si es TRUE el despacho Gratis solicito
                // dirección de despacho
                if (dataEncontrado[0].despachogratis){ 
                    lugarDespacho = prompt("Producto con despacho Gratis!!. Ingrese dirección de despacho");
                    // Valido si ingresaron dirección de despacho
                    if (lugarDespacho == null){
                        despachoBoolean = false;    
                    } else if (lugarDespacho.trim() == "") {
                        despachoBoolean = false;    
                    }  

                    // Si no ingresar Dirección de despacho
                    // solicito nuevamente que ingresen dirección de despacho
                    if (!despachoBoolean) {
                        lugarDespacho = prompt("Por Favor REINGRESE Dirección ya que el Producto tiene despacho Gratis!!");
                    }

                    console.log("Dirección de despacho");
                    lugarDespachoFinal = "Se despachará en 24hrs a dirección " + lugarDespacho;
                    console.log(lugarDespacho);
                }

                let resumenVenta = `ID producto [${dataEncontrado[0].id}] 
                                    ${dataEncontrado[0].descripcion} \n
                                    Marca  ${dataEncontrado[0].marca} \n 
                                    ${despacho} \n                             
                                    Precio $ ${precio} pesos Chilenos \n 
                                    Cantidad ${cantidadUsuario} \n
                                    Descuento ${descuento}%  $ ${descuentoTotal} \n
                                    Total compra $ ${total} 
                        ******* Gracias por su Compra ******* \n                        
                        ***Le invitamos a ver nuestra página web *** 
                        ${lugarDespachoFinal}`;

                // Muestro con un ALERT el resumen de la venta
                // mostrando datos del producto si tiene descuento
                // se aplica al total        
                alert("Resumen de la venta \n" + resumenVenta);                             
                console.log("Resumen de la venta \n" + resumenVenta);  
            }
        }
}   

