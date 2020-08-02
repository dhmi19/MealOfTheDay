const puppeteer = require('puppeteer');

const getRecipes = async () => {
    const browser = await puppeteer.launch();

    const page = await browser.newPage();

    const url = "https://www.kitchenstories.com/en/categories/low-calorie-meals";

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

const getInfo = async (recipe,page) => {
    const {href, title} = recipe;
    const url = `https://www.kitchenstories.com${href}`;
    await page.goto(url);
    await page.waitFor(".inline-hls-player");

    const recipeTitle = await page.$$eval('.recipe-difficulty', results => {
        console.log(typeof results);
        return results.innerHTML();
        /* const titlesArray = results.map(result => {
            const titleElement = result.querySelector('.recipe-title');
            return titleElement.innerText;
        });
        return titlesArray[0]; */
    });

    console.log(recipeTitle);

};

const recipeInfo = async (allRecipes) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    for await (const recipe of allRecipes){
        await getInfo(recipe, page);        
    }
    page.close();
    browser.close();
}

const allRecipes = getRecipes().then( result => {
    console.log(result);
});

