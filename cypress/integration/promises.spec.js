
it('sem testes ainda', () => { })

//const getSomething = () => 10;
const valor = prompt("Qual o valor ?");

const getSomething = () => {
    return new Promise((resolve, Reject) => {
        setTimeout(() => {
            resolve(valor);
            console.log('Respondendo...')
            return ;
        }, 1000)

    })
}

const system = () => {
    console.log('init');
    const prom = getSomething();
    prom.then(some => {
        console.log(some)
        console.log("Something is " + some)
        
        if (some >=20 )
        console.log ('maior q 20 = ' + some)
        else 
        console.log ('valor = ' + some)
        console.log('end')
    })


}

system();
