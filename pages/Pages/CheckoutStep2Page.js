class CheckoutStep2Page {
  get finishButton() {
    return $('[data-test="finish"]');
  }
  get summaryItems() {
    return $$(".cart_item");
  }
  get summaryTotal() {
    return $(".summary_total_label");
  }

  async clickFinish() {
    await this.finishButton.click();
  }

  async getTotalText() {
    return await this.summaryTotal.getText();
  }

  async getItemsCount() {
    return (await this.summaryItems).length;
  }
}

export default new CheckoutStep2Page();
