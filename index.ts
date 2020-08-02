import * as readlineSync from "readline-sync";
const Diagram = require('cli-diagram');

class Pizarra {
    private operacion: string;
    private numero1: number;
    private numero2: number;
    private resultado: number;
    public constructor() {
        this.numero1 = 0;
        this.numero2 = 0;
        this.operacion = '';
        this.resultado = 0;
    }
    public hacerOperacion(): number {
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
    }
    public dibujarCalculadora(): void {
        let grafico = new Diagram().box('Numero1\n' + this.numero1, { color: "yellow", size: 2 })
            .line(0)
            .box(this.operacion, { color: "red", size: 1 })
            .line(0)
            .box('Numero2\n' + this.numero2, { color: "yellow", size: 2 })
            .arrow(["-->"])
            .box('Resultado\n' + this.resultado, { color: "green", size: 3, verticalAling: "middle" });
        console.log(grafico.draw());
    }
    private ingresarValores() {
        this.numero1 = readlineSync.questionFloat('Ingrese el primer valor: ');
        this.numero2 = readlineSync.questionFloat('Ingrese el segundo valor: ');
        while (this.operacion !== '+' && this.operacion !== '-' && this.operacion !== '*' && this.operacion !== '/'){
            this.operacion = readlineSync.question('Ingrese el tipo de operacion: ');
        }
    }
}
let miPizarra = new Pizarra();
miPizarra.hacerOperacion();
miPizarra.dibujarCalculadora();






