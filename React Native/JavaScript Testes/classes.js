class Cliente{
    constructor(nome,cpf,email,cc,saldo){
        this.nome= nome
        this.cpf=cpf
        this.email=email
        this.cc=cc
        this.saldo=saldo
    }   
    depositar(valor){
        this.saldo+=valor
    }    
    sacar(valor){
        this.saldo = (this.saldo - valor)
    }    
    exibirSaldo(){
        console.log(this.saldo)
    }
}

// const bruno = new Cliente('bruno',44662308895,'bruno123@email.com',0456123,100)

// console.log(bruno)

class ClientePoupanca extends Cliente{
    constructor(nome,cpf,email,cc,saldo,saldopoup){
        super(nome,cpf,email,cc,saldo)
        this.saldopoup = saldopoup    
    }   
    depositarPoup(valor){
        this.saldopoup += valor
    }   
    sacarPoup(valor){
        this.saldopoup = (this.saldopoup - valor)
    }
}

const bruno = new ClientePoupanca('bruno',231412312,'b@email.com',0421341,300,500)

console.log(bruno)

bruno.depositar(234)
bruno.depositarPoup(1234)

console.log(bruno)

bruno.sacar(333)
bruno.sacarPoup(234)

console.log(bruno)