describe('GET call', () => {

let token = "44656c4fb83ebdac04cfdc8e5e97cb69b567347dbc40c982a1c350dee2efa0ec"

    it('Get all users', () => {

        cy.request({

            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }).then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body[1].name).to.eq('Kanishka Varma')
            expect(res.body[9].id).to.eq(3357)
            
        })
    })

    it('Get just one user', () => {

        cy.request({

            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users/150',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }).then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body.name).to.eq('Atreyi Marar')
            expect(res.body.email).to.equal('atreyi_marar@damore.org')
            // 
        })
    })
})