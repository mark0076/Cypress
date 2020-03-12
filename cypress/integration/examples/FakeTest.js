/// <reference types="Cypress" />
describe("My fake test", function(){
    it('My first fake Case', function(){
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.server()
        cy.route(
        {
            method: 'PUT',
            url: '/comments/*',
            status: 404,
            response: 
            {
                error: "Hey  I understood Cypress"
            },
            delay: 1000
        }). as('UpdateComment')

        cy.get('.network-put.btn.btn-warning').click()
        cy.get('.network-put-comment').should('contain',"Hey  Comment do not exist")


    })

})