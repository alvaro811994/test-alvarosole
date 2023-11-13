describe("Cypress interview", () => {
  it("Locate the salary table", () => {
    cy.visit("https://ultimateqa.com/simple-html-elements-for-automation/")
    cy.get("table[id='htmlTableId']").each(($row) => {

      cy.wrap($row).within(()=>{

        cy.get("td:last-child").invoke('text').then((values)=>{

            cy.log("Values are: " + values)

        })

      })

    })
  });
});