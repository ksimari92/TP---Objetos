"use strict";
exports.__esModule = true;
var readlineSync = require("readline-sync");
var Diagram = require('cli-diagram');
var Operaciones = /** @class */ (function () {
    function Operaciones() {
        this.numero1 = 0;
        this.numero2 = 0;
        this.operacion = '';
    }
    Operaciones.prototype.hacerOperacion = function () {
        var resultado = 0;
        switch (this.operacion) {
            case '-':
                resultado = this.numero1 - this.numero2;
                break;
            case '*':
                resultado = this.numero1 * this.numero2;
                break;
            case '/':
                resultado = this.numero1 / this.numero2;
                break;
            default:
                resultado = this.numero1 + this.numero2;
        }
        return resultado;
    };
    Operaciones.prototype.ingresarValores = function () {
        this.numero1 = readlineSync.questionFloat('Ingrese el primer valor: ');
        this.numero2 = readlineSync.questionFloat('Ingrese el segundo valor: ');
        while (this.operacion !== '+' && this.operacion !== '-' && this.operacion !== '*' && this.operacion !== '/') {
            this.operacion = readlineSync.question('Ingrese el tipo de operacion: ');
        }
    };
    Operaciones.prototype.getNumero1 = function () {
        return this.numero1;
    };
    Operaciones.prototype.getNumero2 = function () {
        return this.numero2;
    };
    Operaciones.prototype.getOperacion = function () {
        return this.operacion;
    };
    return Operaciones;
}());
var Pizarra = /** @class */ (function () {
    function Pizarra() {
        this.calculadora = new Operaciones();
        this.grafico = new Diagram();
    }
    Pizarra.prototype.getCalculadora = function () {
        return this.calculadora;
    };
    Pizarra.prototype.getGrafico = function () {
        this.grafico.box('Numero1\n' + this.calculadora.getNumero1(), { color: "yellow", size: 2 })
            .line(0)
            .box(this.calculadora.getOperacion(), { color: "red", size: 1 })
            .line(0)
            .box('Numero2\n' + this.calculadora.getNumero2(), { color: "yellow", size: 2 })
            .arrow(["-->"])
            .box('Resultado\n' + this.calculadora.hacerOperacion(), { color: "green", size: 3, verticalAling: "middle" });
        console.log(this.grafico.draw());
    };
    return Pizarra;
}());
var miPizarra = new Pizarra();
miPizarra.getCalculadora().ingresarValores();
miPizarra.getCalculadora().hacerOperacion();
miPizarra.getGrafico();
console.log(miPizarra);
