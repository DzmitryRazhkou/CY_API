describe('POST call', () => {

    let token = "44656c4fb83ebdac04cfdc8e5e97cb69b567347dbc40c982a1c350dee2efa0ec"
   
    // CREATE AN USER

        it.only('Post user', () => {
    
            cy.request({
                method: 'POST',
                url: 'https://gorest.co.in/public/v1/users',
                headers: {
                    'Authorization': 'Bearer ' + token
                },
                body: {
                        "name": "CY_CreateForDelete",
                        "email": "cypress_createForDelete125@com",
                        "gender": "male",
                        "status": "active"
                }
    
            }).then((res) => {
                cy.log(JSON.stringify(res))
                expect(res.status).to.eq(201)
                expect(res.body.meta).to.be.null
                expect(res.body.data).has.property('name', "CY_CreateForDelete")
                expect(res.body.data).has.property('email', "cypress_createForDelete125@com") 
                expect(res.body.data).has.property('gender', "male") 
                expect(res.body.data).has.property('status', "active") 
            }).then((res) => {
    
                const userId = res.body.data.id
                cy.log('User id is: ' +userId)
    
    // DELETE AN USER

                cy.request({
                    method: 'DELETE',
                    url: 'https://gorest.co.in/public/v1/users/' +userId,
                headers: {
                    'Authorization': 'Bearer ' + token
                },
                 
                }).then((res) => {
                    expect(res.status).to.eq(204)

                })
    
               })
           })
    
    })