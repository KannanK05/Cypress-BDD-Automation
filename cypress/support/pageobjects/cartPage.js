class CartPage {

    addToCart() {
        cy.get('.product >.ellie-thumb-wrapper > .button').then(($element) => {
            const selectedIndices = [];
            while (selectedIndices.length < 2) {
                const randomIndex = Math.floor(Math.random() * $element.length);
                if (!selectedIndices.includes(randomIndex)) {
                    selectedIndices.push(randomIndex);
                    cy.wrap($element[randomIndex]).trigger('mouseover');
                    cy.wrap($element[randomIndex]).click();
                }
            }
        })
        return this;
    }

    findLowestPriceItem() {
        var lowestPriceItem;
        var lowestPrice = Number.MAX_VALUE;
        var lowestElement;
        cy.get('tbody >.woocommerce-cart-form__cart-item').each((items) => {
            const priceText = items.find('.product-price>span').text();
            const price = parseFloat(priceText.replace("$", ""));

            if (price < lowestPrice) {
                lowestPrice = price;
                lowestPriceItem = items.find('.product-name>a').text();
                lowestElement = items;
            }
        }).then((val) => {
            cy.log("lowestPriceItem :" + lowestPriceItem);
            cy.log("lowestPrice :" + lowestPrice);
            cy.wrap(lowestElement).as("lowestPriceElement");
            cy.wrap(lowestPriceItem).as("lowestPriceItem1")
        })
    }

    removelowestPriceItem() {
        cy.get("@lowestPriceElement.all").find('.product-remove>a').click();
        /*cy.wait(10000).then(()=>{
            
            cy.get("@lowestPriceElement.all").find('.product-remove>a').click();
        })
        */
        cy.get('.page-item-8 > a').click();
    }
}

export default CartPage;