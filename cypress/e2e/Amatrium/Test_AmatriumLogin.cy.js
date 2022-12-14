/// <reference types="cypress" /> 


import AmatriumElements from './AmtriumElements.js';

context('Amatrium Login Screen test matrix', () => {
    before(() => {
        cy.visit('dev.amatrium.com')
    });

    describe('Amatrium Login Screen test matrix', () => {

        it('It will navigate to Privacy Policy', () => {
            expect(AmatriumElements.privacyPolicyOpenButton, 'Privacy Policy Open button should be available').to.exist
            cy.get(AmatriumElements.privacyPolicyOpenButton)
              .click();
        }
        );

        it('It will check Privacy Policy panel ', () => {

            cy.get(AmatriumElements.privacyPolicyPanelHeader)
              .should('have.text', 'Privacy Policy')
              .click();
        }
        );

        it('It will close Privacy Policy', () => {
            expect(AmatriumElements.privacyPolicyCloseButton, 'Privacy Policy Close button should be available').to.exist
            cy.get(AmatriumElements.privacyPolicyCloseButton)
              .click();
        }
        );

        it('It will open Term, using cy.contains', () => {
            expect(AmatriumElements.termOpenButton, 'Term Open button should be available').to.exist
            cy.contains('Terms')
              .click();
            //cy.get(AmatriumElements.TermOpenButton).click()
        }
        );

        it('It will check Term panel ', () => {

            cy.get('#chakra-modal--header-5')
                .should('have.text', 'Terms of Service');
        }
        );

        it('It will close Term', () => {
            expect(AmatriumElements.termCloseButton, 'Term Close button should be available').to.exist
            cy.get(AmatriumElements.termCloseButton)
                .click();
        }
        );

        it('It will input email in Email Address field', () => {
            cy.get(AmatriumElements.emailAddressField)
                .type("britishcolumbia247@gmail.com")
                .should('have.value', 'britishcolumbia247@gmail.com');

        }
        );

        it('It will input password in Password field', () => {
            cy.get(AmatriumElements.passwordField)
                .type("w7ekg2w")
                .should('have.value', 'w7ekg2w');

        }
        );

        it('It will unhide password in Password field', () => {
            cy.get(AmatriumElements.passwordHideButton)
                .should('exist');
            cy.get(AmatriumElements.passwordHideButton)
                .click();

            cy.get(AmatriumElements.passwordHideButton)
                .click();
        }
        );



        it('It will check Login button , with multiple assertion', () => {
            cy.get(AmatriumElements.loginButton)

                //.should('exist').should('have.text', 'Login')

                .should((item) => {
                    expect(item).to.exist
                    expect(item).to.have.text('Login')
                });
                
            cy.get(AmatriumElements.loginButton)
                .click();

        }
        );

        it('It will check Login process', () => {
            cy.get(AmatriumElements.mainScreen_HeaderLogo)
                .should('exist');

            cy.get(AmatriumElements.mainScreen_HeaderLogo)
                .find('svg')
                .should('be.visible');

        }
        );

    })
});