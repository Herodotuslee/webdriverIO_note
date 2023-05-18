describe("Navigation Menu", () => {
  it("Open URL & assert title", async () => {
    const expectedLinks = [
      "Home",
      "About",
      "Shop",
      "Blog",
      "Contact",
      "My account",
    ];
    const actualLinks = [];
    await browser.url("/");
    // const navLinks = await $("#primary-menu").$$("li[id*=menu]");
    const navLinks = await $$("#primary-menu li[id*=menu]");

    for (const link of navLinks) {
      actualLinks.push(await link.getText());
    }
    await expect(expectedLinks).toEqual(actualLinks);
  });
});
