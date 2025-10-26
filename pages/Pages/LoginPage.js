class LoginPage {
  get usernameField() {
    return $("#user-name");
  }
  get passwordField() {
    return $("#password");
  }
  get loginButton() {
    return $("#login-button");
  }

  async login(username, password) {
    await this.usernameField.setValue(username);
    await this.passwordField.setValue(password);
    await this.loginButton.click();
  }
}

export default new LoginPage();
