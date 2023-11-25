

describe('Add Review', () => {
    it('Input form review with valid format', () => {
        cy.visit('https://forms.office.com/pages/responsepage.aspx?id=is2XW8LLaEmfFhLKD9VwE9lpKmxdveNGmMWKETZvAWNUMzhBV1lYTlc1SDNRS00xRVg4OFhPODlQTS4u#View=ReportAbuse')

        cy.contains('Review our product')

        //Input fullname
        cy.get(':nth-child(1) > .-co-46 > .-a-50 > .-iS-61 > .-_F-60').click()
            .type("testing").should('have.value',"testing")
        
        //Input phone number
        cy.get(':nth-child(2) > .-co-46 > .-a-50 > .-iS-61 > .-_F-60').click()
            .type("088238239130").should('have.value',"088238239130")

        //Select list quality of product (affordable or expensive)
        // cy.get(':nth-child(1) > div > .--x-77 > .-a-79 > .-hG-80').click()

        cy.get('.-nl-67 > .-a-79 > .-hH-80').click({force: true})
            .get('.-iS-85 > .-_F-60')
            .type("testing")

        //Click rate
        cy.get(`span[aria-label='5 Star']`).click()

        //Input review date
        cy.get('#DatePicker0-label').click()
            .type("11/01/2023").should('have.value', '11/01/2023')

        //Click Submit to send Review Product
        cy.contains('Submit').click()
    }),
    
    it('Input form review by leaving part of the review form blank', () => {
        cy.visit('https://forms.office.com/pages/responsepage.aspx?id=is2XW8LLaEmfFhLKD9VwE9lpKmxdveNGmMWKETZvAWNUMzhBV1lYTlc1SDNRS00xRVg4OFhPODlQTS4u#View=ReportAbuse')

        cy.contains('Review our product')

        //Input fullname
        cy.get(':nth-child(1) > .-co-46 > .-a-50 > .-iS-61 > .-_F-60').click()
            .type("testing").should('have.value',"testing")
        
        //phone number
        cy.get(':nth-child(2) > .-co-46 > .-a-50 > .-iS-61 > .-_F-60').click()
        
        //Input review date
        cy.get('#DatePicker0-label').click()

        //Click Submit to send Review Product
        cy.contains('Submit').click()

        cy.contains('This question is required.')

        cy.contains('4 question(s) need to be completed before submitting: Question 2,Question 3,Question 4,Question 5.')
    }),

    it('Input form review with invalid format', () => {
        cy.visit('https://forms.office.com/pages/responsepage.aspx?id=is2XW8LLaEmfFhLKD9VwE9lpKmxdveNGmMWKETZvAWNUMzhBV1lYTlc1SDNRS00xRVg4OFhPODlQTS4u#View=ReportAbuse')

        cy.contains('Review our product')

        //Input fullname
        cy.get(':nth-child(1) > .-co-46 > .-a-50 > .-iS-61 > .-_F-60').click()
            .type("testing").should('have.value',"testing")
        
        //Input phone number
        cy.get(':nth-child(2) > .-co-46 > .-a-50 > .-iS-61 > .-_F-60').click()
            .type("088238239130").should('have.value',"088238239130")

        //Select list quality of product (affordable or expensive)
        // cy.get(':nth-child(1) > div > .--x-77 > .-a-79 > .-hG-80').click()

        cy.get('.-nl-67 > .-a-79 > .-hH-80').click({force: true})
            .get('.-iS-85 > .-_F-60')
            .type("testing")

        //Click rate
        cy.get(`span[aria-label='5 Star']`).click()

        //Input review date
        cy.get('#DatePicker0-label').click()
            .type("2023/01/11")
            
        cy.contains('Error: invalid date input, please input date in M/d/yyyy format')
    })
})