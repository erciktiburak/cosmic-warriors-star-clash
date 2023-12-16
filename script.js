document.addEventListener("DOMContentLoaded", function() {
    const startGameBtn = document.getElementById("startGameBtn");
    const settingsBtn = document.getElementById("settingsBtn");
    const leaderboardBtn = document.getElementById("leaderboardBtn");
  
    startGameBtn.addEventListener("click", function() {
      // Redirect to the game start page.
      console.log("Game started!");
    });
  
    settingsBtn.addEventListener("click", function() {
      // Redirect to the settings page or open a modal.
      console.log("Settings opened.");
    });
  
    leaderboardBtn.addEventListener("click", function() {
      // Redirect to the leaderboard page.
      console.log("Leaderboard opened.");
    });
  });
  