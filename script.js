fetch("http://localhost:5000/api/transfer/send", {
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({
        sender:"user1@gmail.com",
        receiver:"user2@gmail.com",
        amount:1000
    })
})
.then(res=>res.json())
.then(data=>{
    alert(data.message);
});
