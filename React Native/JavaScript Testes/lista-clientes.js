const clientes=[
    {
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
    },
    {
        nome: 'Jovem Dex',
        idade: 32,
        cpf: '446312314215',
        fones:['11943412356', '45883441'],
        email:'jovemdex123@gmail.com',
        dependentes:[
            {
                nome: 'Little Willy',
                parentesco: 'filho',
                datanasc:'13/04/2020',
            },   
        ],
    },
]

for (let i = 0; i < clientes.length; i++) {
    let listaDependentes = [...clientes[i].dependentes]
    console.table(listaDependentes)
}
