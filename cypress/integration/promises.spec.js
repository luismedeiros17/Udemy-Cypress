
it('sem testes ainda', () => { })

//const getSomething = () => 10;
const getSomething = () => {
    return new Promise((resolve, Reject) => {
        setTimeout(() => {
            resolve(13);
            //console.log('Respondendo...')
            //return 11;
        }, 1000)

    })
}

const system = () => {
    console.log('init');
    const prom = getSomething();
    prom.then(some => {
        console.log("Something is " + some)
        console.log('end')
    })


}

system();
