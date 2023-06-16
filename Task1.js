
function task1( conversie, str){
    if ( !str.match(/\s/)) {
        return "Propozitia nu are spatii";
    }
    else {
        if(!str.match(/EUR|USD/)){
            return "Propozitia nu contine cuvintele 'USD' sau 'EUR'."
        }
        else {
            let str1 = str.split(" ");
            let arr;
            const words = [];
            const regex = /[+-]?\d+(\.\d+)?/g;
            for (let i = 0; i < str1.length; i++) {
                if (str1[i] === "EUR" || str1[i] === "USD") {
                    words.push(str1[i - 1]);
                }

            }
            if ( !regex.test(words))
                return 0;
            for (let m = 0; m < words.length ; m++){
                arr = words.map((item) => item.match(regex));
            }
            let sumt = 0;
            let num;
            for (let k = 0; k < arr.length; k++){
                num = arr[k];
                    sumt = num.reduce((accumulator, currentValue) => {
                        return parseFloat(accumulator) + parseFloat(currentValue);},0)
                    arr.splice(k,1,Number(sumt.toFixed(2)));
            }
            let codes = [];
            for ( let p = 0; p < str1.length; p++){
                if ( str1[p] === 'USD' || str1[p] ==='EUR')
                    codes.push(str1[p]);
        }
            const minifinal = [];

            for ( let final = 0; final < codes.length; final ++){
                minifinal.push({amount: arr[final], cod: codes[final]});
            }
            let total1 = 0;
            const maxfinal = JSON.parse(JSON.stringify(minifinal));
            for (let a = 0; a < minifinal.length; a++){
                if ( maxfinal[a].cod === 'USD') {
                    maxfinal[a].amount = maxfinal[a].amount * conversie;

                }
                total1 += maxfinal[a].amount;

            }
            let total =  Number(total1.toFixed(2))
            return {
                minifinal,
                total
            }
        }

        }
        }

console.log(task1(0.9,"Stefan are primite as13.87df 26 USD și Asfbrut6 4 .54vUSD dsj32dsd68EUR rfef45.98USD"))
