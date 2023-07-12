function calcularPrecio() {
    var productos = [
      { nombre: "Coca", precio: 200 },
      { nombre: "Sprite", precio: 200 },
      { nombre: "Fernet", precio: 1000 },
      { nombre: "Vodka", precio: 1200 },
      { nombre: "Ron", precio: 2000 },
      { nombre: "Jugo", precio: 150 }
    ];
  
    var precioTotal = 0;
    var carrito = [];
  
    while (true) {
      console.log("Productos disponibles:");
      for (var i = 0; i < productos.length; i++) {
        console.log(
          i + 1 + ". " + productos[i].nombre + " - $" + productos[i].precio.toFixed(2)
        );
      }
  
      var opcion = parseInt(prompt("Ingrese el número del producto que desea agregar al carrito:"));
  
      if (!isNaN(opcion) && opcion >= 1 && opcion <= productos.length) {
        var productoSeleccionado = productos[opcion - 1];
  
        carrito.push(productoSeleccionado);
  
        precioTotal += productoSeleccionado.precio;
  
        var respuesta = prompt("¿Desea agregar otro producto al carrito? (Sí/No)").toLowerCase();
  
        if (respuesta !== "sí" && respuesta !== "si") {
          break;  }
      } else {
        console.log("Opción inválida. Ingrese un número válido.");
      }
    }

    console.log("Carrito de compras:");
    for (var i = 0; i < carrito.length; i++) {
      console.log(carrito[i].nombre + " - $" + carrito[i].precio.toFixed(2));
    }
    console.log("El precio total de los productos es: $" + precioTotal.toFixed(2));

    alert("El precio total de los productos es: $" + precioTotal.toFixed(2));
  }
  