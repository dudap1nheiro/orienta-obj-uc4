var leitor = require('readline-sync')
export class Carro {
    Tanque: number
    KM: number
    Marca: string

    constructor (Tanque:number,KM: number,Marca: string){
        this.Tanque = Tanque
        this.KM = KM
        this.Marca = Marca
    }


    andar():void {
        let distancia = leitor.questionint('Qual a Distancia que o seu carro vai percorrer? ')
        let combustivel = this.Tanque - (this.KM / distancia)
        if (this.Tanque >= combustivel){
            this.Tanque = combustivel
            console.log(Voce andou ${distancia} KM)
            }else{
                console.log('Voce nao tem combustivel suficiente para andar')
        }
    }

    obterGasolina(){
        console.log(Voce atualmente possui ${this.Tanque} de Gasolina.)
    }
 
    adicionarGasolina(){
        let adicionar = leitor.questionint('Quanto de Gasolina voce deseja adicionar? ')
        this.Tanque += adicionar
        console.log(`Voce possui atualmente ${this.Tanque} de gasolina. `)    
    }
   
    Carro10(): void{
        let tanque = leitor.questionint('Quanto de tanque o seu carrinho consegue consumir? ')
        let KM = leitor.questionint(`Quanto de KM o seu carrinho vai percorrer? `)
        let marca = leitor.questionint(`Qual a marca do seu carrinho? `)
        this.Tanque = tanque
        this.KM = KM
        this.Marca = marca
    
        
    }
}

class Garagem{
    
carros: Carro[]


   
    
    addCarro(carro: Carro):void{
        if(this.carros.length > 9){
            console.log('A garagem esta cheia')
        }else{
            this.carros.push(carro)
        }
    }
    remover():void {
        let nomeremovido = leitor.question("qual Carro deseja remover")
        this.carros = this.carros.filter(Garagem => this.carros !== nomeremovido)
    }
}