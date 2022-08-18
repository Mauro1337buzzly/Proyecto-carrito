
const contGrid = document.querySelector('.contGrid');
const tablaCarrito = document.querySelector('.tablaCarrito')
const comprarTodo = document.querySelector('.comprarTodo')


try {

    fetch('productos/productos.json')
    .then(respuesta => {
        return respuesta.json()
    })
    .then( datos => {
        let contador = [0]
        while (datos.length > contador) {

        let producto = document.createElement('div')

        let imgCont  = document.createElement('div')
        let img = document.createElement('img')

        let contenido = document.createElement('div')

        let titulo = document.createElement('h2')
        let precio = document.createElement('p')
        let talle = document.createElement('h3')

        let agregarAlCarrito = document.createElement('button')



        producto.setAttribute('class', 'producto')

        imgCont.setAttribute('class', 'imgCont')
        img.setAttribute('src', datos[contador].img )
        img.setAttribute('alt', 'imagen de fondo')

        contenido.setAttribute('class', 'contenido')

        titulo.setAttribute('class', 'h2')
        talle.setAttribute('class', 'talle')
        precio.setAttribute('class', 'precio')

        titulo.innerHTML = datos[contador].nombre;
        precio.innerHTML = datos[contador].precio+"$";
        talle.innerHTML = datos[contador].talle;

        
            

        agregarAlCarrito.setAttribute('class', 'btnAgregarAlCarrito')
        agregarAlCarrito.setAttribute('value', contador)
        agregarAlCarrito.innerHTML = 'Agregar al carrito';


        producto.appendChild(imgCont)
        imgCont.appendChild(img)
        producto.appendChild(contenido)
        contenido.appendChild(titulo)
        contenido.appendChild(precio)
        contenido.appendChild(talle)
        contenido.appendChild(agregarAlCarrito)
        contGrid.appendChild(producto)

        agregarAlCarrito.addEventListener('click', (e) => {

            const tdGeneral = document.querySelectorAll('.obtjst')

            const tr = document.createElement('tr')
            const tdUno = document.createElement('td')
            const tdDos = document.createElement('td')
            const tdTres = document.createElement('td')

            tdUno.setAttribute('class', 'obtjst')
            tdDos.setAttribute('class', 'obtjst')
            tdTres.setAttribute('class', 'obtjst')
            tr.setAttribute('class', 'trjs')


            tdUno.innerHTML = datos[agregarAlCarrito.value].nombre
            tdDos.innerHTML = datos[agregarAlCarrito.value].talle
            tdTres.innerHTML = datos[agregarAlCarrito.value].precio

            if (tdGeneral.length == 0) { 

            tr.appendChild(tdUno)
            tr.appendChild(tdDos)
            tr.appendChild(tdTres)
            tablaCarrito.appendChild(tr);
             }

            tdGeneral.forEach((elem, i) => {
                if (elem.innerHTML == datos[agregarAlCarrito.value].nombre ){
                    alert ('El producto se ha agregado al carrito')
                } else {
                    tr.appendChild(tdUno)
                    tr.appendChild(tdDos)
                    tr.appendChild(tdTres)
                    tablaCarrito.appendChild(tr);
                }
            })
        } );
        contador++;
        }
    })
}
    catch (e) { 
        console.log(e)
    }

    comprarTodo.addEventListener('click', (e) => {
        const trjs = document.querySelectorAll('.trjs')

        if( trjs.length == 0 ){

            alert('Agregue un producto a su carrito')
        } else {
            trjs.forEach(elem => {
                elem.outerHTML = ""
            })
            alert('Gracias por su compra!')
        }
    })







