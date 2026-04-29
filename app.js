const siteConfig = {
  supportEmail: "betonmewinner@gmail.com",
  demoLink: "mailto:betonmewinner@gmail.com?subject=Managerarr%20Demo%20Request",
  buyLink:
    "mailto:betonmewinner@gmail.com?subject=Buy%20Managerarr%20for%20%249.99&body=Hi%2C%20I%20want%20to%20buy%20Managerarr%20for%20%249.99.%20Please%20send%20me%20the%20next%20steps%20for%20payment%2C%20delivery%2C%20and%20license%20activation."
};

function makeButton(label, href, tone = "primary") {
  const anchor = document.createElement("a");
  anchor.className = `button ${tone}`;
  anchor.href = href;
  anchor.textContent = label;
  return anchor;
}

function renderHeroActions() {
  const hero = document.querySelector("#hero-actions");
  const footer = document.querySelector("#footer-actions");
  const pricing = document.querySelector("#pricing-actions");

  hero.append(
    makeButton("Buy Full Version", siteConfig.buyLink, "primary"),
    makeButton("Request Demo Access", siteConfig.demoLink, "secondary")
  );

  pricing.append(
    makeButton("Buy for $9.99", siteConfig.buyLink, "primary"),
    makeButton("Request Demo Access", siteConfig.demoLink, "secondary")
  );

  footer.append(
    makeButton("Buy for $9.99", siteConfig.buyLink, "primary"),
    makeButton(siteConfig.supportEmail, `mailto:${siteConfig.supportEmail}`, "secondary")
  );
}

renderHeroActions();
