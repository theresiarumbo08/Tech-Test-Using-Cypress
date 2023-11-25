

describe('Clear Form Review Product',() => {
    it('Clear the previously filled form',()=>{
        cy.visit('https://forms.office.com/pages/responsepage.aspx?id=is2XW8LLaEmfFhLKD9VwE9lpKmxdveNGmMWKETZvAWNUMzhBV1lYTlc1SDNRS00xRVg4OFhPODlQTS4u#View=ReportAbuse')

        cy.contains('Review our product')

         //Input fullname
         cy.get(':nth-child(1) > .-co-46 > .-a-50 > .-iS-61 > .-_F-60').click()
         .type("testing").should('have.value',"testing")
     
        //Input phone number
        cy.get(':nth-child(2) > .-co-46 > .-a-50 > .-iS-61 > .-_F-60').click()
            .type("088238239130").should('have.value',"088238239130")

        //Select list quality of product (affordable or expensive)
        cy.get(':nth-child(1) > div > .--x-77 > .-a-79 > .-hH-80').click()

        cy.get('.-nl-67 > .-a-79 > .-hH-80').click({force: true})
            .get('.-iS-85 > .-_F-60')
            .type("testing")

        //Click rate
        cy.get(`span[aria-label='5 Star']`).click()

        //Input review date
        cy.get('#DatePicker0-label').click()
            .type("11/01/2023").should('have.value', '11/01/2023')

        //Clear form
        cy.get('.css-244').click()

        cy.get('[aria-posinset="2"] > .-ts-235 > .-kA-238').click()

        //click button 'Clear Form'
        cy.get(`button[aria-label='Clear Form']`).click()
    }),

    it('Clear form when the previous form is still empty',()=>{
        cy.visit('https://forms.office.com/pages/responsepage.aspx?id=is2XW8LLaEmfFhLKD9VwE9lpKmxdveNGmMWKETZvAWNUMzhBV1lYTlc1SDNRS00xRVg4OFhPODlQTS4u#View=ReportAbuse')

        cy.contains('Review our product')
        /
        //Clear form
        cy.get('.css-274').click()

        cy.get('.css-306 > .-ts-265 > .-kA-268')
    })
})