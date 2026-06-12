let balance = 5000;

function login()
{
    let email =
    document.getElementById("email").value;

    let password =
    document.getElementById("password").value;

    if(email !== "" && password !== "")
    {
        window.location.href =
        "home.html";
    }
    else
    {
        alert("Enter Email and Password");
    }
}

function checkBalance()
{
    document.getElementById("balance")
    .innerHTML = "₹" + balance;
}

function transferMoney()
{
    let receiver =
    document.getElementById("receiver").value;

    let amount =
    parseInt(document.getElementById("amount").value);

    if(amount > balance)
    {
        document.getElementById("transferMsg")
        .innerHTML = "Insufficient Balance";
        return;
    }

    balance = balance - amount;

    document.getElementById("transferMsg")
    .innerHTML =
    "₹" + amount +
    " transferred to " +
    receiver;
}