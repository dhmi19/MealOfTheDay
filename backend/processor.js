
const categoryPageScraper = require('./scrapers/categoryPageScraper');
const recipePageScraper = require('./scrapers/recipePageScraper');


const getDishData = async (dishOptions) => {

    const promises = dishOptions.map((dish) => {
        const fullUrl = "https://www.kitchenstories.com" + dish.href;
        
        return new Promise((resolve, reject) => {
            recipePageScraper(fullUrl, dish)
            .then((result) => {
                resolve(result);
            })
            .catch((error) => {
                reject(error);
            });
        });
    });

    const results = await Promise.all(promises).catch(error => {
        console.log(error);
        return error;
    });
    
    return results;
}


const checkCriteria2 = (dishData, criteria2) => {
    let maxIngredients = 0;
    switch(criteria2){
        case "less ingredients":
            maxIngredients = 10;
            break;
        case "medium ingredients":
            maxIngredients = 12;
            break;
        default:
            maxIngredients = 100;
            break;
    }

    const criteria2Options = dishData.filter(dish => {
        return dish.ingredients <= maxIngredients;
    });
    
    return criteria2Options;
};

const getAnswer = async (criteria1, criteria2, criteria3) => {
    var url = "";
    console.log(criteria1);
    console.log(criteria2);
    console.log(criteria3);
    if(criteria1 === "20 minutes"){
        url = "https://www.kitchenstories.com/en/categories/20-minute-meals?page=1";
    }
    else if(criteria3 === "very healthy"){
        url = "https://www.kitchenstories.com/en/categories/recipes-under-300-calories";
    }
    else{
        if(criteria1 == "1 hour"){
            url = "https://www.kitchenstories.com/en/categories/quick-meals-for-guests";
        }
        else if(criteria3 === "medium healthy"){
            url = "https://www.kitchenstories.com/en/categories/recipes-under-500-calories";
        }
        else{
            url = "https://www.kitchenstories.com/en/categories/dinner";
        }
    }


    const dishOptions = await categoryPageScraper(url).catch(error => {
        console.log(error);
        return [];
    });

    if(dishOptions === []){
        return {};
    }

    let dishData = [];
    try{
        dishData = await getDishData(dishOptions);
    } catch(error){
        console.log(error);
        return error;
    }
    
    const resultsCriteria2 = checkCriteria2(dishData, criteria2);

    if(resultsCriteria2 === []){
        return dishOptions[0];
    }else{
        const result = resultsCriteria2[Math.floor(Math.random() * resultsCriteria2.length)];
        console.log(result);
        return result;
    }
}

/*
const c1 = "no limit";
const c2 = "medium ingredients";
const c3 = "unhealthy";

getAnswer(c1, c2, c3).then(result => console.log(result)).catch(error => console.log(error));
*/
module.exports = getAnswer;
