
const countries = async () => {

    try{
        const response = await fetch('https://restcountries.eu/rest/v2/all');
        const data = await response.json();

        data.map((da)=> countries2.push(data.name))

    }catch (Error){
        console.log(" no lo trago ");
    }
}
countries();
console.log(countries2);






