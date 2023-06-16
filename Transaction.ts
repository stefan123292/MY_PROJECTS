export class Transaction {
    id: number;
    uid: number;
    date: string;
    amount: number;

    constructor(id: number, uid: number, date: string, amount: number) {
        if (!Number.isInteger(id) || id <= 0) {
            throw new Error('Invalid id. Must be a positive integer.');
        }
        if (!Number.isInteger(uid) || uid <= 0) {
            throw new Error('Invalid uid. Must be a positive integer.');
        }
        if (typeof (amount) !== 'number'){
            throw new Error('Invalid amount. Must be a float number.')
        }
        const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
        if (!date.match(dateRegex)) {
            throw new Error('Proprietatea "date" trebuie să fie în formatul "DD/MM/YYYY".');
        }

        this.id = id;
        this.uid = uid;
        this.date = date;
        this.amount = amount;
    }


}