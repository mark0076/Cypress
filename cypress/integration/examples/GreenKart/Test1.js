/// <reference types="Cypress" />
describe("My first Test Suite", function(){
    it('My first Test Case', function(){
       cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
       cy.get('input.search-keyword').type('ca')
       cy.wait(2000)
       //selenium can hit url in a browser with 'get'
       // sypress use 'get' like findElement of selenium
       cy.get('.product').should('have.length', 5)
       cy.get('.product:visible').should('have.length', 4)
       //Parent child chaining

       cy.get('.products').as('productLocator')
       cy.get('@productLocator').find('.product').should('have.length',4)
       cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function(){
        console.log('sf')
       })

       
       cy.get('@productLocator').find('.product').each(($el,index,$list)=>{

            const textVeg =$el.find('h4.product-name').text()
            if(textVeg.includes('Cashews')){
                $el.find('button').click()
            }

       })
       // assert if logo text is correctly displayed
       cy.get('.brand').should('have.text','GREENKART')

       cy.get('.brand'). then(function(logoElement){
           cy.log(logoElement.text())

       })
       //cy.log(logo.text())

    })

})