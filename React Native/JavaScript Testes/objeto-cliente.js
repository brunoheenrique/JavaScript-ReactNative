const cliente ={
    nome: 'Bruno Henrique',
    idade: 25,
    cpf: '44662308895',
    fones:['11942837656', '45883121'],
    email:'bruno180396@gmail.com',
    dependentes:[
        {
            nome: 'Enzo Henrique',
            parentesco: 'filho',
            datanasc:'28/07/2017',
        },
    ],
    saldo: 0,
    depositar:function(valor){
        this.saldo += valor
    }
}
cliente.depositar(100)
// console.log (cliente)
