const puppeteer = require('puppeteer');

const getRecipes = async (url, dish) => {
    let properties = {};

    const browser = await puppeteer.launch();

    const page = await browser.newPage();
    await page.setDefaultNavigationTimeout(0);
    
    await page.goto(url);

    await page.waitFor(".recipe-difficulty");

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

    const imageURL = await page.$$eval('.recipe-background', rows => {
        const row = rows[0];

        var outerHTML = row.outerHTML.toString();
        const imageUrlLinks = outerHTML.match(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g);
        if(imageUrlLinks.length === 0){
            return null;
        }
        return imageUrlLinks[imageUrlLinks.length - 1];
    });

    properties = {
        ...dish,
        difficulty,
        ingredients,
        imageURL
    };

    page.close()
    .catch(error => console.log(error));
    
    browser.close()
    .catch(error => console.log(error));

    return properties;
};


module.exports = getRecipes;