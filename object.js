class BankAccount {
    constructor(accountNumber, accountHolder, balance) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited $${amount} into account ${this.accountNumber}`);
    }

    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(`Withdrawn $${amount} from account ${this.accountNumber}`);
        } else {
            console.log(`Insufficient funds in account ${this.accountNumber}`);
        }
    }

    getBalance() {
        return this.balance;
    }

    toString() {
        return `Account Number: ${this.accountNumber}, Account Holder: ${this.accountHolder}, Balance: $${this.balance}`;
    }
}

class Bank {
    constructor() {
        this.accounts = [];
    }

    addAccount(account) {
        this.accounts.push(account);
    }

    getAccount(accountNumber) {
        return this.accounts.find(account => account.accountNumber === accountNumber) || null;
    }
}

function main() {
    const bank = new Bank();

    // Create accounts
    const account1 = new BankAccount("123456", "John Doe", 1000.0);
    const account2 = new BankAccount("789012", "Jane Smith", 500.0);

    bank.addAccount(account1);
    bank.addAccount(account2);

    while (true) {
        console.log("\n1. Deposit\n2. Withdraw\n3. Check Balance\n4. Exit");
        const choice = prompt("Enter your choice: ");

        switch (parseInt(choice)) {
            case 1:
                const depositAccountNumber = prompt("Enter account number: ");
                const depositAmount = parseFloat(prompt("Enter deposit amount: $"));
                const depositAccount = bank.getAccount(depositAccountNumber);
                if (depositAccount) {
                    depositAccount.deposit(depositAmount);
                } else {
                    console.log("Account not found");
                }
                break;

            case 2:
                const withdrawAccountNumber = prompt("Enter account number: ");
                const withdrawAmount = parseFloat(prompt("Enter withdrawal amount: $"));
                const withdrawAccount = bank.getAccount(withdrawAccountNumber);
                if (withdrawAccount) {
                    withdrawAccount.withdraw(withdrawAmount);
                } else {
                    console.log("Account not found");
                }
                break;

            case 3:
                const checkBalanceAccountNumber = prompt("Enter account number: ");
                const checkBalanceAccount = bank.getAccount(checkBalanceAccountNumber);
                if (checkBalanceAccount) {
                    console.log(`Balance: $${checkBalanceAccount.getBalance()}`);
                } else {
                    console.log("Account not found");
                }
                break;

            case 4:
                console.log("Exiting the program. Thank you!");
                return;

            default:
                console.log("Invalid choice. Please enter a valid option.");
        }
    }
}

main();
