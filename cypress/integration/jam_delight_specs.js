// Do not import the entire Resources class - only need strings for reference
import strings from "../../src/resources/Strings";

const email = "email@email.com";
const secondEmail = "second@Jammail.com";





describe("Jam Delight", function () {


    it("Loads successfully", function () {
        cy.visit("/");
    });





    it("Displays the welcome screen", function () {
        cy.contains("Welcome");
        cy.get('[data-cy="Header"]').should("have.class", "hidden");
        cy.get('[data-cy="Main Button"]').should("not.have.class", "grayedout");
    });





    it("Starts the questionnaire", function () {
        cy.get('[data-cy="Main Button"]')
            .should("contain", strings.START)
            .should("not.have.class", "grayedout")
            .click()
            .should("contain", strings.FINISH)
            .should("have.class", "grayedout");
    });





    it("Can run a full questionnaire", function () {

        cy.get('[data-cy="Breadcrumbs"]')
            .children()
            .each(() => {

                cy.get("body").then(($body) => {

                    // Enter email if that's the email page
                    if ($body.find('[data-cy="eMail Submit Button"]').length > 0) {
                        cy.log("Entering email");

                        cy.get('[data-cy="eMail Input"]')
                            .type(email)
                            .should("have.value", email);

                        cy.get('[data-cy="eMail Submit Button"]')
                            .click();
                    }

                    // Answer a question randomly if it's not the email page
                    else {
                        cy.log("Answering Question");

                        cy.get('[data-cy="Answer Button Array"]').then(($btnRow) => {
                            const btnNumber = $btnRow.length;
                            cy.get('[data-cy="Answer Button Array"]')
                                .children()
                                .eq(Math.floor(Math.random() * btnNumber))
                                .click({force:true})
                        });
                    }
                });
            });
    });





    it("Shows the summary modal", function () {
        cy.get('[data-cy="Modal"]')
            .should("be.visible");

        cy.contains(email);
    });





    it("Changes email", function () {
       cy.get("button")
           .contains(strings.EDIT)
           .click();

        cy.get('[data-cy="Modal"]')
            .should("be.not.visible");

        cy.get('[data-cy="Breadcrumbs"]')
            .children()
            .last()
            .click();

        cy.get('[data-cy="eMail Input"]')
            .clear()
            .type(secondEmail)
            .should("have.value", secondEmail);

        cy.get('[data-cy="eMail Submit Button"]')
            .click();
    });





    it("Finalizes the questionnaire", function () {
        cy.get('[data-cy="Modal"]')
            .should("be.visible");

        cy.get('[data-cy="Modal Finish"]')
            .click();
    });




});
