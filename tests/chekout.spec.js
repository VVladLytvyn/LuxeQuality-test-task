import LoginPage from "../pages/Pages/LoginPage";
import InventoryPage from "../pages/Pages/InventoryPage";
import CartPage from "../pages/Pages/CartPage";
import CheckoutStep1Page from "../pages/Pages/CheckoutStep1Page";
import CheckoutStep2Page from "../pages/Pages/CheckoutStep2Page";
import CheckoutCompletePage from "../pages/Pages/CheckoutCompletePage";
import { faker } from "@faker-js/faker";

describe("Valid Checkout", () => {
  it("should complete checkout successfully", async () => {
    // Precondition: login
    await browser.url("https://www.saucedemo.com/");
    await LoginPage.login("standard_user", "secret_sauce");

    // Step 1: add product to cart
    await InventoryPage.addToCart("sauce-labs-backpack");

    // Step 2: go to cart
    await InventoryPage.goToCart();
    const cartItems = await CartPage.getCartItemNames();
    expect(cartItems).toContain("Sauce Labs Backpack");

    // Step 3: click Checkout
    await CartPage.clickCheckout();

    // Step 4-6: fill checkout form
    await CheckoutStep1Page.fillForm(
      faker.person.firstName(),
      faker.person.lastName(),
      faker.location.zipCode()
    );
    await CheckoutStep1Page.clickContinue();

    // Step 7: Finish
    await CheckoutStep2Page.clickFinish();

    // Step 8: Verify order complete
    const successMessage = await CheckoutCompletePage.getSuccessMessage();
    expect(successMessage).toBe("Thank you for your order!");

    // Step 9: Back Home
    await CheckoutCompletePage.clickBackHome();
    await InventoryPage.verifyOnInventoryPage();
  });
});
