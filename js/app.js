(()=>{
    let firstName,
        lastName,
        age,
        tabUsers
    firstName = String(prompt("Votre nom s'il vous plait ?", ""));
    lastName = String(prompt("Votre prénom s'il vous plait ?", ""));
    age = Number(parseInt(prompt("Votre age s'il vous plait ?", "")));
    tabUsers = [];
    tabUsers.push(firstName, lastName, age);
    console.table(tabUsers);
})()