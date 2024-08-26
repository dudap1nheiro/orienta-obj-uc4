let rl = require("readline-sync")
export interface Data {
    constructor(dia: number, mes: number, ano: number)
    compara(outraData: Data): void
    getDia(): void
    getMes(): void
    getMesExtenso(): void
    getAno(): void
    isBissexto(): void
    clone(): void
}

export class Data implements Data{
    dia: number
    mes: number
    ano: number
   
    constructor(dia: number, mes: number, ano: number) {
        this.dia = dia
        this.mes = mes
        this.ano = ano
        
    }
    compara():void{
        if(data1 == data2){
            console.log("Data 1 e data 2 são iguais")
        }else{
            console.log("As datas são diferentes")
        }
    }
    getDia():void{
        console.log(O dia é ${this.dia})
    }
    getMesN():void{
        console.log(O mês é ${this.mes})
    }
    getMesEx():void{
        switch (this.mes) {
                case 1:
                console.log("Janeiro")
                break;
                case 2:
                console.log("Fevereiro")
                break;
                case 3:
                console.log("Março")
                break;
                case 4:
                console.log("Abril")
                break;
                case 5:
                console.log("Maio")
                break;
                case 6:
                console.log("Junho")
                break;
                case 7:
                console.log("Julho")
                break;
                case 8:
                console.log("Agosto")
                break;
                case 9:
                console.log("Setembro")
                break;
                case 10:
                console.log("Outubro")
                break;
                case 11:
                console.log("Novembro")
                break;
                case 12:
                console.log("Dezembro")
                break;
        
            default:
                console.log("Mês invalido")
                break;
        }
    }
    getAno():void{
        console.log(O ano é ${this.ano})
    }
    setData():any{
        let diaNovo = Number(rl.question("Fale o novo dia"))
        let mesNovo = Number(rl.question("Fale o novo mes"))
        let anoNovo = Number(rl.question("Fale o novo ano"))
        this.dia = diaNovo      
        this.mes = mesNovo
        this.ano = anoNovo
    }
    isBissexto(): void{
        if (this.ano % 400 == 0){
            console.log("Ano bissexto")
        }else{
            console.log("Ano normal")
        }
    }
    clone(): Data{
        let novaData = new Data(this.dia,this.mes,this.ano)
        return novaData
    }
}
let data1 = new Data(4,8,2008)
let data2 = new Data(27,7,2009)