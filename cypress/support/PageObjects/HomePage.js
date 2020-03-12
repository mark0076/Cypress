class HomePage
{
getEditBox()
{
    return cy.get('div.form-group input[name="name"]')
}

getTwoWayDataBinding()
{

return cy.get('.ng-untouched.ng-pristine.ng-valid')    
}

getGender()
{

return cy.get('#exampleFormControlSelect1')

}

getEnterpreneaur()
{
    return cy.get('#inlineRadio3')
}

getShopTab()
{
    return cy.get('a[href*=\'shop\']')
}

}

export default HomePage;