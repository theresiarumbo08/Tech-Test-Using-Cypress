

describe('Add Report abuse',()=>{
    it('Report abuse by filling in the entire report form',()=>{
        cy.visit('/')

        cy.contains('Review our product')

        cy.get('.css-232').click()

        cy.get('#Phishing').click()

        cy.get('.-_F-60').click()
            .type('testing')
            .should('have.value','testing')

        cy.get('.css-224').click()

        cy.contains('Thanks!')
    }),

    it('Report abuse by leaving the report form blank',()=>{
        cy.visit('/')

        cy.contains('Review our product')

        cy.get('.css-232').click()

    
        cy.get('.css-224').click()

        // cy.contains('This question is required.')

    })
})