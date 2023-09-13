import cartPage from '../../support/pageobjects/cartPage'

describe("Add cart Items",()=>{
    const cartObj = new cartPage();
   /* before( function () {
        cy.visit("https://cms.demo.katalon.com/"); 
    })*/
    it("I add four random items to my cart",()=>{
        cy.visit("https://cms.demo.katalon.com/");  
        cartObj.addToCart();
       
    });

    it("I view my cart",() =>{
        cy.get('.page-item-8 > a').click();       
    });
        
    it("I find total four items listed in my cart",() =>{
        cy.get('.shop_table.shop_table_responsive.cart >tbody >tr').then((element)=>{
           const expectedLength =element.length-1;
           cy.wrap(expectedLength).should("eq",2);
          });
    });
    
    it("I search for lowest price item",() =>{
        cartObj.findLowestPriceItem();
    });
    
    it("I am able to remove the lowest price item from my cart",() =>{
        cartObj.removelowestPriceItem();
    });
    
    it("I am able to verify three items in my cart",() =>{
        cy.get('.shop_table.shop_table_responsive.cart >tbody >tr').then((element)=>{
           const expectedLength =element.length-1;
           cy.wrap(expectedLength).should("eq",1);        
          
         });
    });
})