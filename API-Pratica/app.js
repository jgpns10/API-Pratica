function searchPlayers(playerName) {
  if (!playerName) {
    alert("Digite o nome de um jogador!");
    return;
  }

  const url = `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${encodeURIComponent(playerName)}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.player) {
        const player = data.player[0];

        document.getElementById("playerName").innerText = player.strPlayer;
        document.getElementById("team").innerText = "Time atual: " + (player.strTeam || "Sem clube");
        document.getElementById("nationality").innerText = "Nacionalidade: " + player.strNationality;
        document.getElementById("playerImage").src = player.strThumb || "";
      } else {
        document.getElementById("playerName").innerText = "Jogador não encontrado!";
        document.getElementById("team").innerText = "";
        document.getElementById("nationality").innerText = "";
        document.getElementById("playerImage").src = "";
      }
    })
    .catch(error => {
      console.error("Erro na busca:", error);
    });
}
