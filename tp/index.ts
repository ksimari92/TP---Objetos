import * as readlineSync from "readline-sync";
const Diagram = require('cli-diagram');

class Operaciones {
    private operacion: string;
    private numero1: number;
    private numero2: number;
    private resultado :number;

    
    public constructor() {
        this.numero1 = 0;
        this.numero2 = 0;
        this.operacion = '';
    
    }

    public hacerOperacion(): number {
        let resultado:number=0;
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
    }

    public ingresarValores() {
        this.numero1 = readlineSync.questionFloat('Ingrese el primer valor: ');
        this.numero2 = readlineSync.questionFloat('Ingrese el segundo valor: ');
        while (this.operacion !== '+' && this.operacion !== '-' && this.operacion !== '*' && this.operacion !== '/'){
            this.operacion = readlineSync.question('Ingrese el tipo de operacion: ');
        }
    }
    
        public getNumero1(): number{
            return this.numero1;
        }

        public getNumero2(): number{
            return this.numero2;
        }

        public getOperacion(): string{
            return this.operacion;
        }
}

class Pizarra {
    private calculadora = new Operaciones();
    private  grafico = new Diagram();
    public constructor() {
        
    }
     
    public getCalculadora(): Operaciones {
        return this.calculadora;
    }

    public getGrafico():void {
      this.grafico.box('Numero1\n' + this.calculadora.getNumero1(), { color: "yellow", size: 2 })
    .line(0)
    .box(this.calculadora.getOperacion(), { color: "red", size: 1 })
    .line(0)
    .box('Numero2\n' +this.calculadora.getNumero2(), { color: "yellow", size: 2 })
    .arrow(["-->"])
    .box('Resultado\n' + this.calculadora.hacerOperacion(), { color: "green", size: 3, verticalAling: "middle" });
    console.log(this.grafico.draw());
    }
    }


    

let miPizarra = new Pizarra();
miPizarra.getCalculadora().ingresarValores()
miPizarra.getCalculadora().hacerOperacion();
miPizarra.getGrafico();

console.log(miPizarra);



