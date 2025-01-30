(()=>{
    let firstName,
        lastName,
        age,
        tabUsers,
        btn,
        documentHTML

    btn = document.querySelector(".button");
    documentHTML = document.querySelector(".main-article p")
    const callUser = {
        dialog(){
            firstName = String(prompt("Votre nom s'il vous plait ?", ""));
            lastName = String(prompt("Votre prénom s'il vous plait ?", ""));
            age = Number(parseInt(prompt("Votre age s'il vous plait ?", "")));

            tabUsers = [];

            tabUsers.push(firstName, lastName, age);
            
            const User = {
                stock: tabUsers
            }
            
            Object.seal(User);
            
            localStorage.setItem("User", JSON.stringify(User.stock));
            let unstock = JSON.parse(localStorage.getItem("User"));
            documentHTML.innerText += ` Bonjour ${unstock.join(' / ')} 😁.`
            console.table(unstock);
        }
    }
    
    btn.addEventListener("click", (e)=>{
        e.stopPropagation();
        callUser.dialog();
    })
})()