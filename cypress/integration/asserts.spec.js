/// <reference types="cypress"/>
it('Assertivas de equal', () => {
    const a = 1;

    expect (a).equal(1);
    expect (a,'deveria ser 1').equal(1);
    
})

it('Arrays', () => {
    const arr = [1,2,3]
    expect (arr).to.have.members([1,2,3])
    expect (arr).to.include.members([1,2,3])

})