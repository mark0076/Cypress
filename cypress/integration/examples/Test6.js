/// <reference types="Cypress" />

describe("My Second Test Suite", function(){
    it('My Second Test Case', function(){

        //Check boxex
       cy.visit("http://qaclickacademy.com/practice.php")
       //cy.get('div.mouse-hover-content').invoke('show')
       cy.contains('Top').click({force: true})
       cy.url().should('include','top')


 

    })
})
