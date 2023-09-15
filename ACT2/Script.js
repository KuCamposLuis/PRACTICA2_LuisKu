class Calculadora {
    calcularFactorial(numero) {
        if (numero === 0) {
            return 1;
        } else {
            return numero * this.calcularFactorial(numero - 1);
        }
    }

    calcularFibonacci(numero) {
        if (numero <= 0) {
            return [];
        } else if (numero === 1) {
            return [0];
        } else if (numero === 2) {
            return [0, 1];
        } else {
            var fib = this.calcularFibonacci(numero - 1);
            fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
            return fib;
        }
    }

    calcularMCD(numA, numB) {
        if (numB === 0) {
            return numA;
        } else {
            return this.calcularMCD(numB, numA % numB);
        }
    }
}


const calculadora = new Calculadora();

function cambiarFormulario() {
    var figuraSeleccionada = document.getElementById("practica").value;
    document.getElementById("factorial").style.display = "none";
    document.getElementById("fibonacci").style.display = "none";
    document.getElementById("MCD").style.display = "none";
    document.getElementById(figuraSeleccionada).style.display = "block";
}

function calcularFactorial() {
    var numero = parseInt(document.getElementById("num").value);
    var resultado = calculadora.calcularFactorial(numero);
    document.getElementById("resultadoFactorial").textContent = resultado;
}

function calcularFibonacci() {
    var numero = parseInt(document.getElementById("numF").value);
    var resultado = calculadora.calcularFibonacci(numero);
    document.getElementById("resultadoFibonacci").textContent = resultado.join(", ");
}

function calcularMCD() {
    var numA = parseInt(document.getElementById("numA").value);
    var numB = parseInt(document.getElementById("numB").value);
    var resultado = calculadora.calcularMCD(numA, numB);
    document.getElementById("resultadoMCD").textContent = resultado;
}
