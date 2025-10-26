class InventoryPage {
  addToCart(productName) {
    return $(`button[data-test="add-to-cart-${productName}"]`).click();
  }

  get cartButton() {
    return $(".shopping_cart_link");
  }

  async goToCart() {
    await this.cartButton.click();
  }

  async verifyOnInventoryPage() {
    const url = await browser.getUrl();
    expect(url).toContain("/inventory.html");
  }
}

export default new InventoryPage();
