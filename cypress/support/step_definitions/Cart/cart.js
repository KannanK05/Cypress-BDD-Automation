import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import cartPage from '../../pageobjects/cartPage'


const cartObj = new cartPage();

Given("I add four random items to my cart", () => {
    cy.visit("https://cms.demo.katalon.com/");
    cartObj.addToCart();

});

When("I view my cart", () => {
    cy.get('.page-item-8 > a').click();
});

Then("I find total four items listed in my cart", () => {
    cy.get('.shop_table.shop_table_responsive.cart >tbody >tr').then((element) => {
        const expectedLength = element.length - 1;
        cy.wrap(expectedLength).should("eq", 2);
    });
});

When("I search for lowest price item", () => {
    cartObj.findLowestPriceItem();
});

And("I am able to remove the lowest price item from my cart", () => {
    cartObj.removelowestPriceItem();
});

Then("I am able to verify three items in my cart", () => {
    cy.get('.shop_table.shop_table_responsive.cart >tbody >tr').then((element) => {
        const expectedLength = element.length - 1;
        cy.wrap(expectedLength).should("eq", 1);

    });
});
