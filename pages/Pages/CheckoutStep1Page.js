class CheckoutStep1Page {
  get firstNameInput() {
    return $('[data-test="firstName"]');
  }
  get lastNameInput() {
    return $('[data-test="lastName"]');
  }
  get postalCodeInput() {
    return $('[data-test="postalCode"]');
  }
  get continueButton() {
    return $('[data-test="continue"]');
  }

  async fillForm(firstName, lastName, postalCode) {
    await this.firstNameInput.setValue(firstName);
    await this.lastNameInput.setValue(lastName);
    await this.postalCodeInput.setValue(postalCode);
  }

  async clickContinue() {
    await this.continueButton.click();
  }
}

export default new CheckoutStep1Page();
