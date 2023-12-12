describe('API Mocking in Cypress using cy.intercept', () => {
    beforeEach(() => {

        // The order is important !!
        // Set up the interceptors for the URLs BEFORE you visit the website

        cy.intercept("GET",
            "https://api.realworld.io/api/tags", {
            fixture: "mockTags.json"
            })

        cy.intercept("GET",
            "https://api.realworld.io/api/articles?limit=10&offset=0", {
            fixture: "mockArticles.json"
            })

        // Visit the website, the APIs are called and mock responses returned
        cy.visit("https://angular.realworld.io");
    });

    it("Validate the Tags contain the mocked data", () => {
        cy.get(".tag-list", )
            .should("contain", "Cypress")
            .and("contain", "Playwright");
    });

    it("Validate the Article feed contains the mocked data" , () => {
        cy.get("app-favorite-button")
            .should('have.length', 1);
        cy.get(".author").contains("Jason Bourne");
        cy.get(".preview-link > p").contains("Cypress")
    })
})