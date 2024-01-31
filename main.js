class FootballTeam {
    constructor(teamName) {
      this.teamName = teamName;
      this.players = [];
    }

 
    addPlayer(playerObj) {
      
      this.players.push(playerObj);
      console.log(`Player ${playerObj.playerName} added to ${this.teamName} as ${playerObj.position}.`);
    }



    displayGoalKeeper() {
      console.log(`${this.teamName} Goal Keeper Team Players:`);
      const goalKeeper = this.players.filter(player => player.position === 'Goal Keeper');
      goalKeeper.forEach((player, index) => {
        console.log(`${index + 1}. ${player.playerName}`);
      });
     
    }

    displayDefense() {
      console.log(`${this.teamName} Defensive Team Players:`);
      const defensePlayers = this.players.filter(player => player.position === 'Defense');
      defensePlayers.forEach((player, index) => {
        console.log(`${index + 1}. ${player.playerName}`);
      });
     
    }

    displayMiddleField() {
      console.log(`\n${this.teamName} Midfielder Team Players:`);
      const middleFieldPlayers = this.players.filter(player => player.position === 'Midfielder');
      middleFieldPlayers.forEach((player, index) => {
        console.log(`${index + 1}. ${player.playerName}`);
      });
     
    }

    displayAttack() {
      console.log(`\n${this.teamName} Attack Team Players:`);
      const attackPlayers = this.players.filter(player => player.position === 'Attack');
      attackPlayers.forEach((player, index) => {
        console.log(`${index + 1}. ${player.playerName}`);
      });
     
    }
  
    displayTeam() {
      console.log(`${this.teamName} Team:`);
      this.players.forEach((player, index) => {
        console.log(`${index + 1}. ${player.playerName}`);
      });

      
    }
    
  }

  class Player{
    constructor(playerName, position){
      this.playerName = playerName
      this.position = position

      
    }


  }

  const player1 = new Player("Maldini", "Defense")
 /*  console.log(player1) */
  const player2 = new Player("Otamendi", "Defense")
  /* console.log(player2) */
  const player3 = new Player("Baresi", "Defense")
  /* console.log(player3) */
  const player4 = new Player("Franco Canavarro", "Defense")
  /* console.log(player4) */
  const player5 = new Player("Cafu", "Defense")
  /* console.log(player5) */
  const player6 = new Player("Koeman", "Midfielder")
  /* console.log(player6) */
  const player7 = new Player("Nedved", "Midfielder")
  /* console.log(player7) */
  const player8 = new Player("Platini", "Midfielder")
  /* console.log(player8) */
  const player9 = new Player("Zico", "Midfielder")
  /* console.log(player9) */
  const player10 = new Player("Iniesta", "Midfielder")
 /*  console.log(player10) */
  const player11 = new Player("Van Basten", "Attack")
  /* console.log(player11) */
  const player12 = new Player("Romario", "Attack")
  /* console.log(player12) */
  const player13 = new Player("Eusebio", "Attack")
  /* console.log(player13) */
  const player14 = new Player("Messi", "Attack")
  /* console.log(player14) */
  const player15 = new Player("Peter Cech", "Goal Keeper")
 /*  console.log(player15) */
  const player16 = new Player("Buffon", "Goal Keeper")
/*   console.log(player16) */
  const player17 = new Player("Ronaldo", "Attack")
 /*  console.log(player17) */
 
  
/*  Football team */

  const myTeam = new FootballTeam("The invincible");
  
  /* Players of the team */
  myTeam.addPlayer(player1);
  myTeam.addPlayer(player2);
  myTeam.addPlayer(player3);
  myTeam.addPlayer(player4);
  myTeam.addPlayer(player5);
  myTeam.addPlayer(player6);
  myTeam.addPlayer(player7);
  myTeam.addPlayer(player8);
  myTeam.addPlayer(player9);
  myTeam.addPlayer(player10);
  myTeam.addPlayer(player11);
  myTeam.addPlayer(player12);
  myTeam.addPlayer(player13);
  myTeam.addPlayer(player14);
  myTeam.addPlayer(player15);
  myTeam.addPlayer(player16);
  myTeam.addPlayer(player17);
  
  
 
  
 
  
  
  myTeam.displayTeam();
  myTeam.displayGoalKeeper();
  myTeam.displayDefense();
  myTeam.displayMiddleField();
  myTeam.displayAttack();

