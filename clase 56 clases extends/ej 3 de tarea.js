
Dada la siguiente Clase

//este ejercicio esta resuelto mas adelante

class Account {
    balance;  //Balance
    accountNumber;  //Numero de cuenta
    
    constructor(accountNumber) {    
      this.balance = 0.0;
      this.accountNumber = accountNumber;
    }
    
    deposit(sum) {
      if (sum < 0) throw new Error("No se puede hacer deposito negativo.");
      this.balance += sum;
    }
    
    withdraw(sum) { // retirar
      if (sum < 0) throw new Error("No se puede retirar una cantidad negativa.");
      this.balance -= sum;
    }
    
    toString() {
	    return "Acc " + this.accountNumber + ": " + "balance = " + this.balance;    
    }
}

class SavingsAccount extends Account {
  interest,
  constructor (balance) => {
    this.interest = 0.0;
    return this.balance += (balance * (1+(interest));
  },


  }
}

class CurrentAccount extends Account {

}

class Bank {
  Accounts = [Account, SavingsAccount,CurrentAccount],
  update ()
}

/**
 * Escribir dos clases derivadas que sean 
 * 1. SavingsAccount (Caja de ahorro)
 *   - Deberia tener una propiedad "interest" (interes, en porcentaje).
 *   - Deberia tener ademas, un metodo que sume ese interes al balance de la cuenta.
 *   - No deberia permitirme retirar mas de lo que tengo disponible en mi balance.
 * 2. CurrentAccount (cuenta corriente)
 * 
 * Crear una clase Bank (banco). El objeto resultante deberia contener un array de Accounts. Las instancias
 * dentro de este array pueden ser de Account, SavingsAccount o CurrentAccount. Crear varios ejemplos para testear.
 * 
 * Escribir un metodo "update" dentro de Bank para iterar por CADA cuenta del array, actualizandolas de la siguiente forma:
 *   - A SavingsAccount se le suma el interes. 
 *   - A CurrentAccount se le "envia una carta" (loogeo un mensaje), si estan en numeros negativos.
 *   
 * Bank deberia tener metodos para abrir y cerrar cuentas, y pagar un dividendo a cada cuenta (Sumar al balance).