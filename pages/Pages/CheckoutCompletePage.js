class CheckoutCompletePage {
  get completeHeader() {
    return $(".complete-header");
  }
  get backHomeButton() {
    return $('[data-test="back-to-products"]');
  }

  async getSuccessMessage() {
    return await this.completeHeader.getText();
  }

  async clickBackHome() {
    await this.backHomeButton.click();
  }
}

export default new CheckoutCompletePage();
