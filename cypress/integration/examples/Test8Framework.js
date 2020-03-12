/// <reference types="Cypress" />
import HomePage from '../../support/PageObjects/HomePage'
import ProductsPage from '../../support/PageObjects/ProductsPage'
describe("My Second Test Suite", function(){

    before(function(){
        //runs once before all tests in the block 
        cy.fixture('example').then(function(data){
            this.data=data
        })
    })

    it('My Second Test Case', function(){
        
        const homePage= new HomePage()
        const productsPage = new ProductsPage()
        cy.visit(Cypress.env('url'))
        homePage.getEditBox().type(this.data.name) 
        homePage.getGender().select(this.data.gender)
        homePage.getTwoWayDataBinding().should('have.value',this.data.name)
        homePage.getEditBox().should('have.attr','minlength','2')
        homePage.getEnterpreneaur().should('be.disabled')
        //cy.pause() //or .debug()
        homePage.getShopTab().click()

        
        Cypress.config("defaultCommandTimeout", 8000)
        
        this.data.productName.forEach(function(element){
            cy.selectProduct(element)
        })
        productsPage.checkOutButton().click()

        var sum=0
        cy.get('tr>td:nth-child(4)>strong').each(($e1,index,$list) =>{

        const amount=$e1.text()
        var res = amount.split(" ")
        res=res[1].trim()
        sum= Number(sum) +Number(res)
        

        }).then(function(){
            cy.log(sum)
        })
        

        cy.get('.text-right strong').then(function(element){
            const amount =element.text()
            var res =amount.split(" ")
            var total=res[1].trim()
            expect(Number(total)).to.equal(sum)

        })
            
        cy.contains('Checkout').click()
        cy.get('#country').type('India')
        cy.get('#checkbox2').click({force: true})
        cy.get('input[type="submit"].btn.btn-success.btn-lg').click()
        cy.get('.alert').then(function(element){
            const actualText=element.text()

            expect(actualText.includes("Success")).to.be.true

        })
        


    })
})
