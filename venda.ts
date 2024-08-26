let rll = require("readline-sync")
class Produt {
    nome:string
    preco:number
    marca:string
    constructor(nome:string,preco:number,marca:string) {
        this.nome = nome
        this.preco = preco
        this.marca = marca
        
    }
    lucro(){
        return (this.preco * 0.2) 
        
    }
    getprod(){
        console.log(O produto ${this.nome} da marca ${this.marca} custa ${this.preco} e o lucro é ${this.lucro()})
    }
    setprod(){
        this.nome = rll.question("qual o nome do produto\n")
        this.preco = rll.questionInt("qual o valor\n")
        this.marca = rll.question("qual a marca\n")
    }

}
class Vend {
    produto:Produt
    quantidade:number
    valor:number
    data:string

    constructor(produto:Produt,quantidade:number,valor:number,data:string) {
        this.produto = produto
        this.quantidade = quantidade
        this.valor = valor
        this.data = data

        
    }
    valortotal(){
        return this.quantidade * this.valor
    }
    descont(){
        return this.valortotal() /2
    }
    getvend():void{
        console.log(`O produto ${this.produto.nome} da marca ${this.produto.marca} custa 
        ${this.produto.preco} e o lucro é ${this.produto}lO valor total da venda é ${this.valortotal()}e o desconto é ${this.descont()}`)
    }
    setprod(){
        this.produto = rll.question("qual o nome do produto\n")
        this.quantidade = rll.questionInt("qual o quantos tu comprou\n")
        this.valor = rll.question("qual o valor\n")
        this.data = rll.question("qual a data\n")
    }
}
class Loja {
    produto: Produt
    vendas:Vend
    total:number 

    constructor(produto:Produt,vendas:Vend,total:number) {
        this.produto = produto
        this.vendas = vendas
        this.total = total
        
    }
    mostrarTudo():void{
        console.log(O produto ${this.produto.nome} da marca ${this.produto.marca} custa ${this.produto.preco} \nE o lucro é ${this.produto.preco} \nO valor total da venda é ${this.vendas.valortotal()}\nE o desconto é ${this.vendas.descont()})
                }
  
    }

let prod = new Produt("tv 24 polegada",3000,"lg")
let vend = new Vend(prod,2,3000,"10/10/2020")
let loja = new Loja (prod,vend,10000)

loja.mostrarTudo()