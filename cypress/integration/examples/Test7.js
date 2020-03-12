/// <reference types="Cypress" />

describe("My Second Test Suite", function(){
    it('My Second Test Case', function(){

        //Check boxex
       cy.visit("http://qaclickacademy.com/practice.php")
       cy.get('#opentab').then(function(e1){
        const url= e1.prop('href')
        cy.visit(url)
       })


    })
})
