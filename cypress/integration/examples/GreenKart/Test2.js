/// <reference types="Cypress" />

describe("My Second Test Suite", function(){
    it('My Second Test Case', function(){
       cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
       cy.get('input.search-keyword').type('ca')
       cy.wait(2000)
       //selenium can hit url in a browser with 'get'
       // sypress use 'get' like findElement of selenium

       //Parent child chaining

       cy.get('.products').as('productLocator')

       cy.get('@productLocator').find('.product').each(($el,index,$list)=>{

            const textVeg =$el.find('h4.product-name').text()
            if(textVeg.includes('Cashews')){
                $el.find('button').click()
            }
    })
    cy.wait(2000)
    cy.get('.cart-icon > img').click()
    cy.contains('PROCEED TO CHECKOUT').click()
    cy.contains('Place Order').click()
    
    })
})
