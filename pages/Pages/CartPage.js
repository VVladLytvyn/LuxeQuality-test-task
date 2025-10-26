class CartPage {
  get cartItems() {
    return $$(".cart_item");
  }

  get checkoutButton() {
    return $("button[data-test='checkout']");
  }

  async getCartItemNames() {
    const items = await this.cartItems;
    if (!Array.isArray(items) || items.length === 0) return [];

    const names = [];
    for (const item of items) {
      const nameElement = await item.$(".inventory_item_name");
      names.push(await nameElement.getText());
    }

    return names;
  }

  async getCartItemPrices() {
    const items = await this.cartItems;
    if (!Array.isArray(items) || items.length === 0) return [];

    const prices = [];
    for (const item of items) {
      const priceElement = await item.$(".inventory_item_price");
      prices.push(await priceElement.getText());
    }

    return prices;
  }

  async clickCheckout() {
    const button = await this.checkoutButton;
    await button.click();
  }
}

export default new CartPage();
