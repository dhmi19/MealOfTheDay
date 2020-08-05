const puppeteer = require('puppeteer');

const getRecipes = async (url) => {
    const browser = await puppeteer.launch();

    const page = await browser.newPage();
    await page.setDefaultNavigationTimeout(0);
    await page.goto(url);

    await page.waitFor(".archive-tile");

    const dishes = await page.$$eval('.archive-tile', rows => {
        return rows.map(row => {
            const properties = {};
            const hrefElement = row.querySelector('.archive-tile__link');
            const titleElement = row.querySelector('.archive-tile__name');
            properties.title = titleElement.innerText;
            properties.href = hrefElement.getAttribute('href');
            return properties;
        });
    });

    page.close();
    browser.close();
    return dishes;
};

/*const allRecipes = getRecipes().then( result => {
    console.log(result);
});*/

module.exports = getRecipes;