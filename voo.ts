interface Voo {
    constructor(numeroVoo: string, data: string);
    qntdCadeiras():void;
    proximoAcentoLivre(): void;
    verifica(cadeira: number): void;
    ocupa(cadeira: number): void;
    vagas(): void;
    getVoo(): void;
    getData(): void;
    clone(): void;


}
class Voo implements Voo{
    numeroVoo: string
    data: string
    cadeira:Array<number>
    constructor(numeroVoo: string, data: string,cadeira:Array<number> ) {
        this.numeroVoo = numeroVoo 
        this.data = data
        this.cadeira = []
    }
    qntdCadeiras(): void {

        for (let i = 0; i < 99; i++) {
            this.cadeira.push(0)
            
        }
    }
    proximoAcentoLivre(): void{
        let i
        let n = true
        while (n == true) {
            if(this.cadeira[i]==0){
                console.log(this.cadeira)
                n = false
            }
            i++
        }
    }
    verifica(cadeira: number): void {
        
       
        if(cadeira == 0){
            console.log("a cadeira está livre")
        }else{
            console.log("a cadeira não esta livre")
        }
        }
        ocupa(cadeira: number): void {
        
            let i: number
            for(i = 0; i <= this.cadeira.length;i++){
               if(cadeira == i && this.cadeira[i] == 0){
                   console.log('Voce ocupou essa cadeira')
                   this.cadeira[i] = 1
                   }
                   else{
                       console.log('Essa cadeira esta ocupada');
                       
                   }
               }
            }
            vaga(): number {
                let i = 0
                let n = 0
                while(this.cadeira.length[i]<99){
                    i++
                    if(this.cadeira[i] == 0){
                        n ++
                        }
                }
                return n
        }
        getVoo(): string {
            console.log(Seu voou é: ${this.numeroVoo})
            return this.numeroVoo
        }
    
        getData(): void {
            console.log(Data do voo: ${this.data})
            
        }
    
        clone(): void {
            let vooDois = new Voo(this.numeroVoo,this.data,this.cadeira)
            
        }
    }