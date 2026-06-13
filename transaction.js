async function loadHistory() {

    const response = await fetch(
        "http://localhost:5000/api/history"
    );

    const data = await response.json();

    let html = "";

    data.reverse().forEach(item => {

        html += `
        <tr>
            <td>${item.sender}</td>
            <td>${item.receiver}</td>
            <td>₹${item.amount}</td>
            <td>${new Date(item.date).toLocaleString()}</td>
        </tr>
        `;
    });

    document.getElementById("historyTable").innerHTML = html;
}

loadHistory();

// Refresh every 3 seconds
setInterval(loadHistory, 3000);
async function sendMoney() {

    const sender = document.getElementById("sender").value;
    const receiver = document.getElementById("receiver").value;
    const amount = document.getElementById("amount").value;

    await fetch("http://localhost:5000/api/transaction", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            sender,
            receiver,
            amount
        })
    });

    alert("Money Sent Successfully");
}
