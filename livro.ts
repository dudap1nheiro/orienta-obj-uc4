class livro {
    titulo: string
    autor: string
    ano: number
    constructor(titulo:string, autor:string,ano:number) {
        this.titulo
        this.autor
        this.ano
    }
    detalhes(){
        console.log(Título: ${this.titulo}, Autor: ${this.autor}, Ano ${this.ano})
        
    }
}
let newlivro = new livro("as aventuras de blau", "blau",2 )
newlivro.detalhes()