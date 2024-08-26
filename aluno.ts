let rl = require('readline-sync')
class aluno {
    nome: string
    notas:Array<number>
    constructor(nome:string) {
        this.nome = nome
        this.notas = []
    }
    registro():void{
        
        let nota1: number = rl.questionInt("fala tua primeira nota")
        let nota2: number = rl.questionInt("fala tua segunda nota")

        this.notas.push(nota1,nota2)
        }
        cacularMedia():void{
            let media = (this.notas[0]+this.notas[1])/2
            console.log(media)
        }
    }
let nome  = rl.question("qual teu nome patrao ")

let aluno1 = new aluno(nome)

aluno1.registro()
aluno1.cacularMedia()