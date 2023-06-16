import {Transaction} from "./Transaction";

export class TransactionService{
    transactionList: Transaction[];
    constructor (){
        this.transactionList = [];
    }
    generateList () {
        const curentDate = new Date ();
        const curentMonth = curentDate.getMonth()+1;
        for( let i = 1; i <= 20; i++){
            const id = i;
            const uid = Math.trunc(Math.random() *5 +1)
            const amount = (Math.round(Math.random() * 200 -100));
            const day1 = Math.round(Math.random()*29 + 1);



            const curentYear = new Date().getFullYear();
            const date = `${day1.toString().padStart(2, '0')}/${curentMonth.toString().padStart(2, '0')}/${curentYear}`;
            const trasaction = new Transaction (id, uid, date, amount)  ;
            this.transactionList.push(trasaction);
        }
        return this.transactionList;


    }
    totalByUser () {

        let list = [];
        for ( let n = 1; n <=5 ; n++){
            let total = 0;
            for ( let m = 0; m <=this.transactionList.length; m++){
                if ( this.transactionList[m]?.uid === n){
                    total += this.transactionList[m].amount;}
            }
            list.push({uid : n,total})
        }
        return JSON.stringify(list);
    }
    totalByDate (){

        let list1 =[];
        const curentMonth = new Date().getMonth()+1;
        const curentYear = new Date().getFullYear();
        for ( let p = 1; p <=30 ; p++){
            let total = 0;
            for ( let q = 0; q <=this.transactionList.length; q++){
                if ( this.transactionList[q]?.date === `${p.toString().padStart(2, '0')}/${curentMonth.toString().padStart(2, '0')}/${curentYear}`){
                    total += this.transactionList[q].amount;}
            }
            list1.push({date : `${p.toString().padStart(2, '0')}/${curentMonth.toString().padStart(2, '0')}/${curentYear}`,total})
        }
        return JSON.stringify(list1);
    }
}
const eu = new TransactionService;

console.log(eu.generateList());
console.log(eu.totalByUser());
console.log(eu.totalByDate());
