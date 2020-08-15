describe("Tests Form", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
    })
    it("tests the flow", () => {
        cy.get("[data-cy=order]").click();
        cy.get("[data-cy=name]").type("John").should("have.value", "John");
        cy.get("[data-cy=instructions]").type("Leave at door").should("have.value", "Leave at door");
        cy.get("[data-cy=size]").select("Large").should("have.value", "Large");
        cy.get("[data-cy=pepperoni]").click().should("be.checked");
        cy.get("[data-cy=sausage]").click().should("be.checked");
        cy.get("[data-cy=mushroom]").click().should("be.checked");
        cy.get("[data-cy=olives]").click().should("be.checked");
        cy.get("[data-cy=peppers]").click().should("be.checked");
        cy.get("[data-cy=submit]").click();
    })
})