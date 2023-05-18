describe("Home Page", () => {
  it("Open URL & assert title", async () => {
    await browser.url("https://practice.automationbro.com/");
    await expect(browser).toHaveTitle(
      "Practice E-Commerce Site – Automation Bro"
    ); // open url in browser
  });
  it("Open About Page and assert ULR", async () => {
    await browser.url("https://practice.automationbro.com/about/");
    await expect(browser).toHaveUrl(
      "https://practice.automationbro.com/about/"
    );
  });
  it("Click get started btn & url contains get-started test", async () => {
    await browser.url("https://practice.automationbro.com/");
    await $("#get-started").click();
    await expect(browser).toHaveUrlContaining("get-started");
  });

  it("Click logo & assert url DOES NOT contains get-started text", async () => {
    await browser.url("https://practice.automationbro.com/");
    await $('//img[@alt="Practice E-Commerce Site"]').click();
    await expect(browser).not.toHaveUrlContaining("get-started");
  });

  it('Find heading element & assert text', async () => {   
    const headingE1= await $('.elementor-widget-container h1');
    const headingText = await headingE1.getText();
    await expect(headingText).toEqual('Think different. Make different.');
  })
});
