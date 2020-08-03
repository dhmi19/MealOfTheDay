
const categoryPageScraper = require('./scrapers/categoryPageScraper');

const getAnswer = async (criteria1, criteria2, criteria3) => {
    var url = "";
    var time = criteria1;

    if(criteria1 === "20 minutes"){
        url = "https://www.kitchenstories.com/en/categories/20-minute-meals?page=1";
    }else{
        if(criteria3 === "very healthy"){
            url = "https://www.kitchenstories.com/en/categories/recipes-under-500-calories";
        }
    }

    const dishOptions = await categoryPageScraper(url);

    

    return dishOptions;
}

module.exports = getAnswer;