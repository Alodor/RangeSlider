$(document).ready(function() {
            
    // una nueva hoja de estilo
    var nuevaHojaDeEstilo = document.createElement("style");
    document.head.appendChild(nuevaHojaDeEstilo);

    // los elementos padre dondeponer los sliders
    var elementoPadre = document.querySelector(".inputDiv");
    var inputsRy = [];

    function Input(id) {
        this.att = {};
        this.att.type = "range";
        this.att.id = "range";
        this.att.value = 2;
        this.att.min = 1;
        this.att.max = 10;
        this.att.autocomplete = "off";
        this.att.step = "1";
        this.input;
        this.output;
        this.interval = this.att.max - this.att.min;

        this.crear = function(elementoPadre) {
            this.input = document.createElement("input");
            this.output = document.createElement("div");
            this.output.innerHTML = this.att.value;
            this.output.setAttribute("class", "output");

            for (var name in this.att) {
                if (this.att.hasOwnProperty(name)) {
                    this.input.setAttribute(name, this.att[name]);
                }
            }

            elementoPadre.appendChild(this.input);
            elementoPadre.appendChild(this.output);

            this.CSSstyle();
        }

        this.actualizar = function() {
            this.output.innerHTML = this.input.value;
            this.att.value = this.input.value;
            this.CSSstyle();
        }

        this.CSSstyle = function() {
            // calcula la posición del thumb en porcentajes
            this.porcentaje = ((this.att.value - this.att.min) / this.interval) * 100;
            // establece las nuevas reglas CSS
            this.style = "#" + this.att.id + "::-webkit-slider-runnable-track{ background-size:" + this.porcentaje + "% 100%;}\n";
            this.style += "#" + this.att.id + "::-moz-range-track{ background-size:" + this.porcentaje + "% 100%}\n";
        }
    }

    function actualizarCSS() {
        // una cadena de texto donde guardar los estilos
        var HojaCSS = "";

        for (var i = 0; i < inputsRy.length; i++) {
            HojaCSS += inputsRy[i].style;
        }
        nuevaHojaDeEstilo.textContent = HojaCSS;
    }

    // setup
    var i = new Input("itr1");
    i.crear(elementoPadre);
    inputsRy.push(i);

    actualizarCSS();

    for (var n = 0; n < inputsRy.length; n++) {
        (function(n) {
            inputsRy[n].input.addEventListener("input", function() {
                inputsRy[n].actualizar();
                actualizarCSS();
            }, false)
        }(n));
    }
    
    
    // Aqui se encuentran las condicionales
    $('#range').change(function() {
        var obj = $('#range').val();
        
        switch (obj) {
            case '1':
                $('#mensaje').html('Has seleccionado la posición 1');
                break;
            case '2':
                $('#mensaje').html('Has seleccionado la posición 2');
                break;
            case '3':
                $('#mensaje').html('Has seleccionado la posición 3');
                break;
            case '4':
                $('#mensaje').html('Has seleccionado la posición 4');
                break;
            case '5':
                $('#mensaje').html('Has seleccionado la posición 5');
                break;
            case '6':
                $('#mensaje').html('Has seleccionado la posición 6');
                break;
            case '7':
                $('#mensaje').html('Has seleccionado la posición 7');
                break;
            case '8':
                $('#mensaje').html('Has seleccionado la posición 8');
                break;
            case '9':
                $('#mensaje').html('Has seleccionado la posición 9');
                break;
            case '10':
                $('#mensaje').html('Has seleccionado la posición 10');
        }
    });

});    