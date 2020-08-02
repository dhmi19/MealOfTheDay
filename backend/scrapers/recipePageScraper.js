const puppeteer = require('puppeteer');

const getRecipes = async () => {
    let properties = {};

    const browser = await puppeteer.launch();

    const page = await browser.newPage();

    const url = "https://www.kitchenstories.com/en/recipes/white-wine-baked-fish-with-sweet-potatoes";

    await page.goto(url);

    await page.waitFor(".inline-hls-player");

    const [difficulty] = await page.$$eval('.recipe-difficulty', rows => {
        return rows.map(row => {
            var outerHTML = row.outerHTML.toString();
            var difficultySpan = outerHTML.split("<span>")[1];
            const difficulty = difficultySpan.split("</span>")[0];
            return difficulty.split(" ")[0];
        });
    });

    const ingredients = await page.$$eval('.ingredients__col-2', rows => {
        return rows.map(row => {
            var outerHTML = row.outerHTML.toString();
            //var difficultySpan = outerHTML.split("<span>")[1];
            //const difficulty = difficultySpan.split("</span>")[0];
            //return difficulty.split(" ")[0];
            return outerHTML
        }).length;
    });

    

    properties = {
        "difficulty": difficulty,
        "ingredients": ingredients
    };

    page.close();
    browser.close();

    return properties;
};

getRecipes().then(results => {
    console.log(results);
});