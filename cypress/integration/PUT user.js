const dataJson = require('../fixtures/createUser')

describe('POST call', () => {

let token = "44656c4fb83ebdac04cfdc8e5e97cb69b567347dbc40c982a1c350dee2efa0ec"
let randonText = ""
let testEmail = ""

    it.only('Post user', () => {

        var pattern = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        for (var i = 0; i < 10; i++)
        randonText += pattern.charAt(Math.floor(Math.random() * pattern.length))
        testEmail = randonText + '@gmail'

        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v1/users',
            headers: {
                'Authorization': 'Bearer ' + token
            },
            body: {
                    "name": "Test Automation Cypress",
                    "email": "ganscypress@com",
                    "gender": "male",
                    "status": "active"
            }

        }).then((res) => {
            cy.log(JSON.stringify(res))
            expect(res.status).to.eq(201)
            expect(res.body.meta).to.be.null
            expect(res.body.data).has.property('name', "Test Automation Cypress")
            expect(res.body.data).has.property('email', "ganscypress@com") 
            expect(res.body.data).has.property('gender', "male") 
            expect(res.body.data).has.property('status', "active") 
        }).then((res) => {

            const userId = res.body.data.id
            cy.log('User id is: ' +userId)

            cy.request({
                method: 'PUT',
                url: 'https://gorest.co.in/public/v1/users/' +userId,
            headers: {
                'Authorization': 'Bearer ' + token
            },
            body: {
                "name": "Test Automation Cypress Updated",
                "email": "ganscypressupdated@com",
                "gender": "male",
                "status": "inactive"
            }

            }).then((res) => {
                expect(res.status).to.eq(200)
                expect(res.body.data).has.property('id', userId)
                expect(res.body.data).has.property('name', "Test Automation Cypress")
                expect(res.body.data).has.property('email', "ganscypress@com") 
                expect(res.body.data).has.property('gender', "male") 
                expect(res.body.data).has.property('status', "active") 
            })

           })
       })

})