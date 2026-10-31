const container = document.querySelectorAll("#user-card");

async function getData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    container.forEach((card, index) => {
      const user = data[index];
      if (!user) return;
      const username = document.createElement("h2");
      username.textContent = user.username;
      const email = document.createElement("p");
      email.textContent = user.email;
      card.appendChild(username);
      card.appendChild(email);
    });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getData();
