"use strict";
exports.__esModule = true;
var readlineSync = require("readline-sync");
var Diagram = require('cli-diagram');
var Pizarra = /** @class */ (function () {
    function Pizarra() {
        this.numero1 = 0;
        this.numero2 = 0;
        this.operacion = '';
        this.resultado = 0;
    }
    Pizarra.prototype.hacerOperacion = function () {
        this.ingresarValores();
        switch (this.operacion) {
            case '-':
                this.resultado = this.numero1 - this.numero2;
                break;
            case '*':
                this.resultado = this.numero1 * this.numero2;
                break;
            case '/':
                this.resultado = this.numero1 / this.numero2;
                break;
            default:
                this.resultado = this.numero1 + this.numero2;
        }
        return this.resultado;
    };
    Pizarra.prototype.dibujarCalculadora = function () {
        var grafico = new Diagram().box('Numero1\n' + this.numero1, { color: "yellow", size: 2 })
            .line(0)
            .box(this.operacion, { color: "red", size: 1 })
            .line(0)
            .box('Numero2\n' + this.numero2, { color: "yellow", size: 2 })
            .arrow(["-->"])
            .box('Resultado\n' + this.resultado, { color: "green", size: 3, verticalAling: "middle" });
        console.log(grafico.draw());
    };
    Pizarra.prototype.ingresarValores = function () {
        this.numero1 = readlineSync.questionFloat('Ingrese el primer valor');
        this.numero2 = readlineSync.questionFloat('Ingrese el segundo valor');
        while (this.operacion !== '+' && this.operacion !== '-' && this.operacion !== '*' && this.operacion !== '/') {
            this.operacion = readlineSync.question('Ingrese el tipo de operacion');
        }
    };
    return Pizarra;
}());
var miPizarra = new Pizarra();
miPizarra.hacerOperacion();
miPizarra.dibujarCalculadora();
