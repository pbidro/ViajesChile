$(function () {
    $("a").click(function (event) {
        // Con este if se asegura que this.hash tenga un valor antes de anular el comportamiento predeterminado
        if (this.hash !== "") {
            // Previene el comportamiento de click predeterminado
            event.preventDefault();
            // Guarda el valor del hash en una variable llamada gato
            var gato = this.hash;
            // Usa el método animate para animar el scroll y hacerlo de unaforma suave
            // El número opciona (800) especifica el número de milisegundos quese demorara en llegar hasta el área
            $('html, body').animate({
                scrollTop: $(gato).offset().top
            }, 800, function () {
                // Agrega hash (#) a la URL cuando haya terminado de desplazarse(comportamiento de click predeterminado)
                window.location.hash = gato;
            });
        }
        // Fin del if
    });

    //popover del icono de mapa en la seccion quienes somos
    $('[data-toggle="popover"]').popover()

    //al entrar el mause a los elementos con la clase textito estos se pondran amarillos, esta funcion se almacena en una variable y despues se llama x segundos
    $(".textito").mouseenter(function () {
        var txt = function () {
            $(".textito").css({ "color": "yellow" });
        };

        setTimeout(txt, 100);
    });

    //lo mismo que arriba pero cuando se saca el mouse
    $(".textito").mouseleave(function () {
        var shw = function () {
            $(".textito").css({ "color": "white" });
        };

        setTimeout(shw, 100);
    });

});

