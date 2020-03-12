/// <reference types="Cypress" />

describe("My Second Test Suite", function(){
    it('My Second Test Case', function(){

        //Check boxex
       cy.visit("http://qaclickacademy.com/practice.php")
       cy.get(' tr td:nth-child(2)').each(($e1, index, $list) => {
            const text =$e1.text()
            if(text.includes('Python')){
                cy.get(' tr td:nth-child(2)').eq(index).next().then(function(price){
                    const priceText=price.text()
                    expect(priceText).to.equal('25')
                })

            }
       })

 

    })
})
