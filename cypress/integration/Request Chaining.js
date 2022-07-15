describe('Check users information', () => {

// let token = "44656c4fb83ebdac04cfdc8e5e97cb69b567347dbc40c982a1c350dee2efa0ec"

    it('Check users info)', () => {

        cy.request({

            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users/',
            // headers: {
            //     'Authorization': 'Bearer ' + token
            // }
        }).then((resp) => {
            const userName = resp.body[0].name
            return userName 
        })
        .then((userName) => {
            cy.request({
                method: 'GET',
                url: 'https://gorest.co.in/public/v2/users/?name=' +userName
            }).then((resp) => {
                expect(resp.status).to.eq(200)
                expect(resp.body[0]).to.have.property('name', userName)
            })
        })
    })



// Check random from array:

it('Check users randomly info from array)', () => {

    cy.request({

        method: 'GET',
        url: 'https://gorest.co.in/public/v2/users/',
        // headers: {
        //     'Authorization': 'Bearer ' + token
        // }
    }).then((resp) => {
        const userName = resp.body
        return userName 
    })
    .then((userName) => {

        for(let i = 0; i < userName.length; i++){

        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users/?name=' +userName[i].name
        }).then((resp) => {
            expect(resp.status).to.eq(200)
            expect(resp.body[0]).to.have.property('name', userName[i].name)
        })
    }

    })
})





})