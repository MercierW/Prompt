(() => {
    let firstName, lastName, age, tabUsers, btn, documentHTML;

    btn = document.querySelector(".button");
    documentHTML = document.querySelector(".main-article p");
    const callUser = {
        dialog() {
            firstName = String(prompt("Votre nom s'il vous plait ?", ""));
            lastName = String(prompt("Votre prénom s'il vous plait ?", ""));
            age = Number(parseInt(prompt("Votre age s'il vous plait ?", "")));

            tabUsers = [];

            tabUsers.push(firstName, lastName, age);

            const User = {
                stock: tabUsers
            };

            Object.seal(User);

            localStorage.setItem("User", JSON.stringify(User.stock));

            if (firstName && lastName && age) {
                Swal.fire({
                    title: 'Bon travail !',
                    text: 'Tu as cliqué sur le bouton',
                    icon: 'success'
                });
                let unstock = JSON.parse(localStorage.getItem("User"));
                documentHTML.innerText += ` Bonjour ${unstock.join(' / ')} 😁.`;
            } else {
                Swal.fire({
                    title: 'Error !',
                    text: 'Tu as cliqué sur le bouton',
                    icon: 'error'
                });
            }
        }
    };

    btn.addEventListener("click", e => {
        e.stopPropagation();
        callUser.dialog();
    });
})();