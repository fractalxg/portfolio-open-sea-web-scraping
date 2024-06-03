const puppeteer = require("puppeteer");
require("dotenv").config();

async function run() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(process.env.SITE);

  // const html = await page.content();
  // console.log(html)

  // const title = await page.evaluate(() => document.title);
  // console.log(title);

  // const text = await page.evaluate(() => document.body.innerText)
  // console.log(text);

  const links = await page.evaluate(() =>
    Array.from(document.querySelectorAll('a'), (e) => e.href)
  );
  console.log(links);

  await browser.close();
}
run();
