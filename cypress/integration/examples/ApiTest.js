describe('My Api Suite',function(){
    it('My Api test',function(){
        

        cy.request('POST','http://216.10.245.166/Library/Addbook.php',{
            "name": "My first Book",
            "isbn": "fdsfsd",
            "aisle": "22f3",
            "author": "Josa Aar"
        }).then(function(response){
            expect(response.body).to.have.property("Msg","successfully added")
            expect(response.status).to.eq(200)

        
    })
    })
})