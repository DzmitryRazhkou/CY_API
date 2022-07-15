
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

        cy.fixture('createUser').then((payload) => {
        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {
                'Authorization': 'Bearer ' + token
            },
            body: {
                "name": dataJson.name,
                "email": testEmail,
                "gender": dataJson.gender,
                "status": dataJson.status
            }
        }).then((res) => {
            cy.log(JSON.stringify(res))
            expect(res.status).to.eq(201)
            // expect(res.body.meta).to.be.null
            expect(res.body).has.property('name', payload.name)
            expect(res.body).has.property('email', testEmail) 
            expect(res.body).has.property('gender', payload.gender) 
            expect(res.body).has.property('status', payload.status) 
        })
    })
    })

})