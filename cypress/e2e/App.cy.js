describe('App', () => {
  beforeEach(() => {
    cy.intercept('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=tuGQcmG8QUpUgvlq0aIEgXlwWjoybiFL', {fixture: `HomeNews`})
    cy.visit('http://localhost:3000/')
  })
  it('should see a homepage logo', () => {
    cy.get('.logo').should('exist')
  })
  it('should have a search input field', () => {
    cy.get('select[name="section"]')
  })
  it('should be able to see two news stories', () => {
    cy.get('.card').should('have.length', 2)
    .get('.card').first().contains("Intruder Wanted to Break Speaker Pelosi’s Kneecaps, Federal Complaint Says")
    .get('.card').last().contains("Letters, Tweets, TV: How Midterm Disinformation Has Washed Over Pennsylvania")
  })
  it('should be able to see a list of the input options', () => {
    cy.get('option').should('have.length', 27)
  })
  it('should be able to change the input field', () => {
    cy.get('select[name="section"]').select('food').should('have.value', 'food')
  })
  it('should be able to see food news when searching for it', () => {
    cy.intercept('https://api.nytimes.com/svc/topstories/v2/food.json?api-key=tuGQcmG8QUpUgvlq0aIEgXlwWjoybiFL', {fixture: `FoodNews`})
    cy.get('select[name="section"]').select('food').should('have.value', 'food')
    cy.get('.card').should('have.length', 2)
    cy.wait(3000)
    .get('.newsTitle').first().contains("These Cooks, Waiters and Casino Workers Could Swing the Senate")
    .get('.newsTitle').last().contains("In Cleveland, They’re Cooking Up a Gay Neighborhood From Scratch")
  })
  it('should be able to click on an article to see a more detailed page', () => {
    cy.get(".scoopButton").first().click()
    cy.get(".articleTitle").contains("Intruder Wanted to Break Speaker Pelosi’s Kneecaps, Federal Complaint Says")
    cy.get(".articleInfo").first().contains("Published: 2022-10-31 and updated on 2022-10-31 by By Glenn Thrush, Kellen Browning and Luke Vander Ploeg")
    cy.get(".articleInfo").last().contains("Location: California")
    cy.get('img').should('have.attr', 'src').should('include',"https://static01.nyt.com/images/2022/10/30/us/00Nat-pelosi-charges-1/merlin_215605134_57f89922-0ed1-4682-bafe-28d33af82e7b-threeByTwoSmallAt2X.jpg")
    cy.get(".articleAbstract").contains("Federal prosecutors filed charges on Monday against the man the police said broke into House Speaker Nancy Pelosi’s San Francisco home and struck her husband with a hammer.")
    cy.get('a').should('have.attr', 'href').should('include', "/")
  })
  it('should see an error page when user visits a bad url', () => {
    cy.visit('http://localhost:3000/booboo')
    cy.get('.errorImage').should('exist')
    cy.get('.errorMessage').contains("Seems like this isnt the right place to get the scoop. Lets head back by clicking here")
  })
  it('should see an error message when there is a bad network request', () => {
    cy.intercept('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=tuGQcmG8QUpUgvlq0aIEgXlwWjoybiFL', {
      statusCode: 404
    })
    cy.get("h1").contains("Error 404. We couldn't get the scoop! Please reload and try again")
  })
  it('should see an error message if there are no articles for a topic', () => {
    cy.intercept('https://api.nytimes.com/svc/topstories/v2/food.json?api-key=tuGQcmG8QUpUgvlq0aIEgXlwWjoybiFL', {fixture: 'noNews'})
    cy.get('select[name="section"]').select('food').should('have.value', 'food')
    cy.get(".noNewsError").contains("Sorry there are no news articles for this topic! Sorry for the inconvienence")
  })
})