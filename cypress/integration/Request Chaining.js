describe('Check users information', () => {

let token = "44656c4fb83ebdac04cfdc8e5e97cb69b567347dbc40c982a1c350dee2efa0ec"

    it('Check users info)', () => {

        cy.request({

            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }).then((resp) => {
            const userName = resp.body[1].name
            return userName 
        })
        .then((userName) => {
            cy.request({
                method: 'GET',
                url: 'https://gorest.co.in/public/v2/users/' +userName
            }).then((resp) => {
                expect(resp.status).to.eq(200)
                expect(resp.body[1]).to.have.property('name', userName)
            })
        })
    })


})