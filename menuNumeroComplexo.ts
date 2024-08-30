import { numeroComplexo } from "./numeroComplexo"

let rl = require('readline-sync')
let teste = new numeroComplexo(0, 0)
let teste2 = new numeroComplexo(0, 0)
let menuzinho: boolean = true

while (menuzinho) {
    console.log(
        `
        Menu de opçoes
        
        1- Gets 
        2- Sets 
        3- Soma
        4- Subtrai
        5- Multiplica
        6- Divide
        7- Equals 
        8- toString
        9- modulo
        0- Sair
        
        `
    );
    
    let option = rl.questionInt('Escolha:')

    switch (option) {
        case 1:
            teste.getNC()
            break
        case 2:
            teste.setNC()
            break
        case 3:
            console.log(Inserindo numero para soma:)
            teste2.setNC()
            console.log(teste.somar(teste2));
            break
        case 4:
            console.log(Inserindo numero para subtrair: )
            teste2.setNC()
            console.log(teste.subtrair(teste2));
            break
        case 5:
            console.log(Inserindo numero para multiplicar: )
            teste2.setNC()
            console.log(teste.multiplicar(teste2));
            break
        case 6:
            console.log(Inserindo numero para dividir: )
            teste2.setNC()
            console.log(teste.dividir(teste2))
            break
        case 7:
            console.log(teste.equals(teste2));
            break
        case 8:
            console.log(teste.toString());
            break
        case 9:
            console.log(teste.modulo());
            break
        case 0:
            process.exit(0)
        default:
            console.log('Opcao invalida');
            break
    }
}