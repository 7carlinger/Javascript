//ejercicio 3 de Banco
class Bank {
    accounts = [];
    accountNumber = 1;

    constructor(name) {
        this.name = name;
    }
    
    
    static get AccountTypes() {
        return {
            account: 1,
            savingAccount: 2,
            currentAccount: 3
        };
    }
   
    agregarCuenta(accountType) {
        switch (accountType) {
            /*            case Bank.getAccountTypes().account://// esto te devuelve el nro 1 */
            case Bank.AccountType.account://// esto te devuelve el nro 1
                const account = new Account(this.accountNumber);
                this.accounts.push(account);
                this.accountNumber++;
                break;
            case Bank.AccountType.savingAccount:/// esto te devuelve el nro 2
                const savingAccount = new SavingsAccount(this.accountNumber, this.interest);
                this.accounts.push(savingAccount);
                this.accountNumber++;
                break;
            case Bank.AccountType.currentAccount:/// esto te devuelve el nro 3//// estoy usando el getter
                const currentAccount = new CurrentAccount(this.accountNumber);
                this.accounts.push(currentAccount);
                this.accountNumber++;
                break;
        }
    };


    CloseAccount(accountNumber) { /// le pasa un nro de cuenta para filtarr el nro de cta a cerrar
        this.accounts = this.accounts.filter(elemento => accountNumber !== elemento.accountNumber);
    }
}

const banco = new Bank();/// es una instancia de banco
//banco.agregarCuenta(Bank.getAccountType().currentAccount)//// con objeto 
//banco.agregarCuenta(Bank.getAccountType()[2])///// con array
banco.agregarCuenta(Bank.AccountTypes.account)//// con getter

banco.agregarCuenta(1)//// NOOOO es dinamico

class Account {
    balance = 0.0;  //Balance
    accountNumber;  //Numero de cuenta


    constructor(accountNumber) {
        this.accountNumber = accountNumber;
    }

    deposit(sum) {/// sum es un nro
        if (sum < 0) throw new Error("No se puede hacer deposito negativo.");
        this.balance += sum;/// this.balance = this.balance + sum (siendo balance lo que tengo en la cuenta)
    }

    withdraw(sum) { // retirar
        if (sum < 0) throw new Error("No se puede retirar una cantidad negativa.");
        this.balance -= sum;//// this.balance = this.balance - sum (siendo balance lo que tengo en la cuenta)
    }

    toString() {
        return "Acc " + this.accountNumber + ": " + "balance = " + this.balance;
    }
}

class SavingsAccount extends Account { //caja de ahorro
    constructor(accountNumber, interest) {
        super(accountNumber);
        this.interest = interest;
    }
    getinterest(accountNumber, interest) {
        if (accountNumber.balance < 0) throw new Error("No posee dinero suficiente para retirar");
        this.balance = this.balance + interest;
        return this.balance;
    }

    withdraw(sum) { // retirar
        if (this.balance < sum) throw new Error("Tu saldo es insuficiente.");
        super.withdraw(sum) /// llamar a otra funcion que extendemos
    }
}

class CurrentAccount extends Account { //Cuenta Corriente podes retirar dinero neg pero no te genera interes
    constructor(accountNumber) {
        super(accountNumber);
    }
    withdraw(sum) { // retirar
        super.withdraw(sum) /// llamar a otra funcion que extendemos
        if (sum > 0) console.log(`Su balance es de ${this.balance}`)
        else {
            if (sum < 0) console.log(`Su balance es de - ${this.balance}`);
        }
    }
}

/* static getAccountType() {
        return {
            account: 1,
            savingAccount: 2,
            currentAccount: 3
        };
    } */  //SHIT+ALT+A para comentar un bloque. comentado porque queda mas legible con un getter que esta mas arriba
    