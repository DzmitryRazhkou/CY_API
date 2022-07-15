// API Version 2

describe('GET call V2', () => {

let token = "44656c4fb83ebdac04cfdc8e5e97cb69b567347dbc40c982a1c350dee2efa0ec"

    it('Get all users (API Version 2)', () => {

        cy.request({

            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }).then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body[1].name).to.eq('Dzmitry Gans')
            
        })
    })

    it('Get just one user V2', () => {

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

// API Version 1

describe('GET call V1', () => {

    let token = "44656c4fb83ebdac04cfdc8e5e97cb69b567347dbc40c982a1c350dee2efa0ec"
    
        it('Get all users (API Version 1)', () => {
    
            cy.request({
    
                method: 'GET',
                url: 'https://gorest.co.in/public/v1/users',
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            }).then((res) => {
                expect(res.status).to.eq(200)
                // expect(res.body.meta.pagination.pages).to.eq(334)
                expect(res.body.meta.pagination.page).to.eq(1)
                expect(res.body.meta.pagination.limit).to.eq(10)
            })
        })
    })

    describe('GET call V1', () => {

        let token = "44656c4fb83ebdac04cfdc8e5e97cb69b567347dbc40c982a1c350dee2efa0ec"
        
            it('Get just one user (API Version 1)', () => {
        
                cy.request({
        
                    method: 'GET',
                    url: 'https://gorest.co.in/public/v1/users/5',
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                }).then((res) => {
                    expect(res.status).to.eq(200)
                    expect(res.body.meta).to.be.null
                    expect(res.body.data.id).to.eq(5)
                })
            })
        })

})