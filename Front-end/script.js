async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    // inicialmente eu tenho uma função que faz conexão com a api, ela está inserida em uma estrutura chamada await fetch, estrutura que permite tratamento de erro no código
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const users = await response.json();
    displayUsers(users);
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
  }
}

function displayUsers(users) {
  const userList = document.getElementById("user-list");
  userList.innerHTML = ""; // Limpa a lista existente

  users.forEach((user) => { 
    // essa função ela captura o id do ul e cria 5 sub-itens sendo eles nome, email, endereço, telefone e site
    const listItem = document.createElement("li");
    listItem.textContent = user.name;
    listItem.onclick = () => showUserDetails(user);
    userList.appendChild(listItem);
  });
}

fetchUsers(); // Chama a função ao carregar a página

function showUserDetails(user) {
  // essa função pega o id da div, com as informações da api ela cria 5 tag que são 1 h2 e 4 paragrafo.
  const userDetails = document.getElementById("user-details");
  userDetails.innerHTML = `
        <h2>${user.name}</h2>
        <p>Email: ${user.email}</p>
        <p>Phone: ${user.phone}</p>
        <p>Website: <a href="http://${user.website}" target="_blank">${user.website}</a></p>
        <p>Address: ${user.address.street}, ${user.address.city}</p>
    `;
}
