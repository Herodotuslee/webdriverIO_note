describe("Contact", () => {
  it("Fill all the input fields", async () => {
    await browser.url("/contact/");
    await $(".contact-name input").addValue("Test Name");
    await $(".contact-email input").addValue("test@mail.com");
    await $(".contact-phone input").addValue("1234567890");
    await $(".contact-message textarea").addValue("Test Subject");
    await $("button[type=submit]").click();

    const successAlert=$("[role=alert]");
    await expect(successAlert).toHaveTextContaining("Thanks for contacting us! We will be in touch with you shortly");
  });
});
