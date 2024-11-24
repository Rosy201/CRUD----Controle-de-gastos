function logout() {
    firebase.auth().signOut().then(() => {
        window.location.href = "../../index.html";
    }).catch(() => {
        alert("Erro ao fazer logout");
    })
}

findTransactions();

function findTransactions() {
    setTimeout(() => {
        addtransactionsToScreen(fakeTransactions);
    }, 1000)
}

function addtransactionsToScreen(transaction) {
    const orderList = document.createElement('li');
    li.classList.add(transaction.type);

    const date = document.createElement('p');
    date.innerHTML = formatDate(transaction.date);
    li.appendChild(date);

    const money = document.createElement('p');
    money.innerHTML = formatMoney(transaction.money);
    li.appendChild(money);

    const type = document.createElement('p');
    type.innerHTML = transaction.transactionType;
    li.appendChild(type);

    if (transaction.description) {
        const description = document.createElement('p');
        description.innerHTML = transaction.description;
        li.description(description);
    }
    orderList.appendChild(li);
}

function formatDate(date) {
    return new Date(date).toLocaleDateString('pt-br');
}

function formatMoney(money) {
    return `${money.currency} ${money.value.toFixed(2)}`
}
const fakeTransactions = [{
    type: 'expense',
    date: '2022-01-04',
    money: {
        currency: 'R$',
        value: 10
    },
    transactionType: 'Salario'
}, {
    type: 'income',
    date: '2022-01-04',
    money: {
        currency: 'EUR',
        value: 5000
    },
    transactionType: 'Salario',
    description: 'Empresa A'
}, {
    type: 'expense',
    date: '2022-01-04',
    money: {
        currency: 'R$',
        value: 10
    },
    transactionType: 'Transporte',
    description: 'Metrô ida e volta'
}, {
    type: 'expense',
    date: '2022-01-04',
    money: {
        currency: 'USD',
        value: 600
    },
    transactionType: 'Aluguel',
    description: 'Mensalidade'
}]