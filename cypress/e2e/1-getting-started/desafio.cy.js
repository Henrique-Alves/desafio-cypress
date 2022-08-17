/// <reference types="cypress" />


describe('Teste e2e', () => {
    beforeEach(() => {
        /* cy.visit('https://www.serasa.com.br/ecred/') */
        cy.visit('https://www.serasa.com.br/ecred/simulador')
    })

    it('validar simulação de emprestimo no valor de 1000 em 6x', () => {
        cy.get('.menu-sand > span').click()
        cy.get(':nth-child(2) > .container > .head-li').click()
        /* cy.get('.selected-sub-item > [href="/ecred/simulador"]').click()  
        não está fazendo a transição de pagina, com isso vou add a url da proxima pagina*/
        /* cy.visit('https://www.serasa.com.br/ecred/simulador.in/iframe.html') */
        
            cy.get('#slider-range-fill').invoke("val", "1000").trigger("change")
            cy.get('slider-range-month').invoke("val", "6")//index 0
            cy.get('#price-number').should('contain', '271,27')


        /* cy.get('slider-range').invoke("val", "1000").trigger("change") */
    })

    it.only('validar simulação de emprestimo no valor de 4000 em 12x', () => {
        /* cy.visit('https://www.serasa.com.br/ecred/simulador') */

        cy.get('slider-range').invoke("val", "4000").trigger("change")
        cy.get('slider-range-month').invoke("val", "12")//index 0
        cy.get('#price-number').should('contain', '478,49')

    })
})