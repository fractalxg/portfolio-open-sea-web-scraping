const puppeteer = require("puppeteer");
require("dotenv").config();

async function run() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(process.env.SITE);

  await page.screenshot({ path: "example.png" });
  await browser.close();
}
run();
