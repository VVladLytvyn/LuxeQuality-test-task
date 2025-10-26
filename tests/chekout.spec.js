import LoginPage from "../pages/Pages/LoginPage";
import InventoryPage from "../pages/Pages/InventoryPage";
import CartPage from "../pages/Pages/CartPage";
import CheckoutStep1Page from "../pages/Pages/CheckoutStep1Page";
import CheckoutStep2Page from "../pages/Pages/CheckoutStep2Page";
import CheckoutCompletePage from "../pages/Pages/CheckoutCompletePage";
import { faker } from "@faker-js/faker";

describe("Valid Checkout", () => {
  it("should complete checkout successfully", async () => {
    await browser.url("https://www.saucedemo.com/");
    await LoginPage.login("standard_user", "secret_sauce");

    // add product to cart
    await InventoryPage.addToCart("sauce-labs-backpack");

    // go to cart
    await InventoryPage.goToCart();
    const cartItems = await CartPage.getCartItemNames();
    expect(cartItems).toContain("Sauce Labs Backpack");

    // click Checkout
    await CartPage.clickCheckout();

    // fill checkout form
    await CheckoutStep1Page.fillForm(
      faker.person.firstName(),
      faker.person.lastName(),
      faker.location.zipCode()
    );
    await CheckoutStep1Page.clickContinue();

    // Finish
    await CheckoutStep2Page.clickFinish();

    // Verify order complete
    const successMessage = await CheckoutCompletePage.getSuccessMessage();
    expect(successMessage).toBe("Thank you for your order!");

    // Back Home
    await CheckoutCompletePage.clickBackHome();
    await InventoryPage.verifyOnInventoryPage();
  });
});
