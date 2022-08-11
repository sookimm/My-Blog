let users = [];

(function getUsersData() {
  fetch("https://reqres.in/api/users?page=1")
    .then((response) => response.json())
    .then((data) => {
      console.log("The fetched data", data);
      users = data.data;
      addEleToCard();
    })
    .catch((error) => console.error(error));
})();

function addEleToCard() {
  const cardContainer = document.querySelector(".cards");

  for (let i = 0; i < users.length; i++) {
    const card = document.createElement("article");
    card.classList.add("card");

    const cardHeader = document.createElement("h2");
    const cardHeaderFirstSpan = document.createElement("span");
    const cardHeaderSecondSpan = document.createElement("span");
    cardHeaderFirstSpan.classList.add("card_content__first-name");
    cardHeaderSecondSpan.classList.add("card_content__last-name");

    const cardImage = document.createElement("img");
    cardImage.classList.add("card_content__avatar");
    cardImage.setAttribute("src", users[i].avatar);
    cardImage.setAttribute("alt", users[i].first_name + users[i].last_name);

    const cardEmail = document.createElement("div");
    cardEmail.classList.add("card_content__email");

    cardContainer.appendChild(card);
    card.appendChild(cardHeader);
    card.appendChild(cardImage);
    card.appendChild(cardEmail);
    cardHeader.appendChild(cardHeaderFirstSpan);
    cardHeader.appendChild(cardHeaderSecondSpan);

    cardHeaderFirstSpan.append(users[i].first_name + " " + users[i].last_name);
    cardEmail.append("Email : " + users[i].email);
  }
}
