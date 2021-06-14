const db = require("quick.db");
const Discord = require("discord.js")

exports.run = async (bot, message, args) => {

    let user = message.author;
    let money = parseInt(args[1]);
    let moneydb = await db.get(`money_${message.guild.id}_${user.id}`)
      let a = message.author;


      if (args[0] === 'all' || args[0] === 'max') {
          money = moneydb;
      } else {
          money = parseInt(args[0]);
      }

      if (!money || money < 1 || money > moneydb) {
          message.channel.send("Coloque uma numero valido.")
          return
      }

      if (!moneydb) {
          message.channel.send("Você não tem dinheiro")
          return
      }

      // ** BEGIN Javascript blackjack game from echohatch1. Modified for Grape.

      var numCardsPulled = 0;
      var gameOver = false;

      var player = {
          cards: [],
          score: 0
      };
      var dealer = {
          cards: [],
          score: 0
      };

      function getCardsValue(a) {
          var cardArray = [],
              sum = 0,
              i = 0,
              dk = 10.5,
              doubleking = "QQ",
              aceCount = 0;
          cardArray = a;
          for (i; i < cardArray.length; i += 1) {
              if (cardArray[i].rank === "J" || cardArray[i].rank === "Q" || cardArray[i].rank === "K") {
                  sum += 10;
              } else if (cardArray[i].rank === "A") {
                  sum += 11;
                  aceCount += 1;
              } else if (cardArray[i].rank === doubleking) {
                  sum += dk
              } else {
                  sum += cardArray[i].rank;
              }
          }
          while (aceCount > 0 && sum > 21) {
              sum -= 10;
              aceCount -= 1;
          }
          return sum;
      }

      var deck = {
          deckArray: [],
          initialize: function() {
              var suitArray, rankArray, s, r, n;
              suitArray = ["clubes", "Diamantes", "corações", "espadas"];
              rankArray = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
              n = 13;
              for (s = 0; s < suitArray.length; s += 1) {
                  for (r = 0; r < rankArray.length; r += 1) {
                      this.deckArray[s * n + r] = {
                          rank: rankArray[r],
                          suit: suitArray[s]
                      };
                  }
              }
          },
          shuffle: function() {
              var temp, i, rnd;
              for (i = 0; i < this.deckArray.length; i += 1) {
                  rnd = Math.floor(Math.random() * this.deckArray.length);
                  temp = this.deckArray[i];
                  this.deckArray[i] = this.deckArray[rnd];
                  this.deckArray[rnd] = temp;
              }
          }
      };

      deck.initialize();
      deck.shuffle();

      async function bet(outcome) {
        if (outcome === "win") {
          db.add(`money_${message.guild.id}_${user.id}`, money)
        }
        if (outcome === "lose") {
          db.subtract(`money_${message.guild.id}_${user.id}`, money)
        }
    }

      function resetGame() {
          numCardsPulled = 0;
          player.cards = [];
          dealer.cards = [];
          player.score = 0;
          dealer.score = 0;
          deck.initialize();
      }

      function endMsg(title, msg, dealerC) {
          let cardsMsg = "";
          player.cards.forEach(function(card) {
              cardsMsg += "[`" + card.rank.toString();
              if (card.suit == "corações") cardsMsg += "♥"
              if (card.suit == "diamantes") cardsMsg += "♦"
              if (card.suit == "espadas") cardsMsg += "♠"
              if (card.suit == "clubes") cardsMsg += "♣"
              cardsMsg += "`](https://example.com) "
          });
          cardsMsg += " --> " + player.score.toString()

          let dealerMsg = "";
          if (!dealerC) {
              dealerMsg = "[`" + dealer.cards[0].rank.toString();
              if (dealer.cards[0].suit == "corações") dealerMsg += "♥"
              if (dealer.cards[0].suit == "diamantes") dealerMsg += "♦"
              if (dealer.cards[0].suit == "espadas") dealerMsg += "♠"
              if (dealer.cards[0].suit == "clubes") dealerMsg += "♣"
              dealerMsg += " ? ?`](https://dashcord.tech/)"
          } else {
              dealerMsg = "";
              dealer.cards.forEach(function(card) {
                  dealerMsg += "[`" + card.rank.toString();
                  if (card.suit == "corações") dealerMsg += "♥"
                  if (card.suit == "diamantes") dealerMsg += "♦"
                  if (card.suit == "espadas") dealerMsg += "♠"
                  if (card.suit == "clubes") dealerMsg += "♣"
                  dealerMsg += "`](https://dashcord.tech/) "
              });
              dealerMsg += " --> " + dealer.score.toString()
          }

          const gambleEmbed = new Discord.MessageEmbed()
              .setColor('BLACK')
              .setTitle(message.author.username + `'mesa de jogo` + '\n___')
              .addField('SUAS CARTAS', cardsMsg)
               .addField('Dealer\'s Cards', dealerMsg)
              .addField(title, msg)
              .setFooter('Boa sorte');

          message.channel.send(gambleEmbed);
      }

      async function endGame() {
          if (player.score === 21) {
              bet('win');
              gameOver = true;
              await endMsg("VOCÊ GANHOU!", "Você tem 21! Você ganha!", true)
          }
          if (player.score > 21) {
              bet('lose');
              gameOver = true;
              await endMsg("VOCÊ PERDEU", "VOCÊ PASSOU DE 21 :( bust", true)
          }
          if (dealer.score === 21) {
              bet('lose');
              gameOver = true;
              await endMsg("VOCÊ PERDEU!", "O cafetão obteve 21 lmaoo", true)
          }
          if (dealer.score > 21) {
              bet('win');
              gameOver = true;
              await endMsg("VOCÊ GANHOU !!!!", "Cafetão foi preso", true)
          }
          if (dealer.score >= 17 && player.score > dealer.score && player.score < 21) {
              bet('win');
              gameOver = true;
              await endMsg("VOCÊ GANHOU!!!", "Você matou o Cafetão", true)
          }
          if (dealer.score >= 17 && player.score < dealer.score && dealer.score < 21) {
              bet('lose');
              gameOver = true;
              await endMsg("VOCÊ PERDEU", "Cafetão ganhou ", true)
          }
          if (dealer.score >= 17 && player.score === dealer.score && dealer.score < 21) {
              gameOver = true;
              await endMsg("VOCÊ ?", "Humilhou o Cafetão", true)
          }
      }

      function dealerDraw() {

          dealer.cards.push(deck.deckArray[numCardsPulled]);
          dealer.score = getCardsValue(dealer.cards);
          numCardsPulled += 1;
      }

      function newGame() {
          hit();
          hit();
          dealerDraw();
          endGame();
      }

      function hit() {
          player.cards.push(deck.deckArray[numCardsPulled]);
          player.score = getCardsValue(player.cards);

          numCardsPulled += 1;
          if (numCardsPulled > 2) {
              endGame();
          }
      }

      function stand() {
          while (dealer.score < 17) {
              dealerDraw();
          }
          endGame();
      }
      // END Javascript blackjack game from echohatch1. Modified for Grape. **

      newGame();
      async function loop() {
          if (gameOver) return;

          endMsg("BJ", '**Digite ``c`` Para comprar, e ``p`` para parar o jogo!** ', false)

          let filter = m => m.author.id === message.author.id;
          message.channel.awaitMessages(filter, {
              max: 1,
              time: 1200000,
              errors: ['time']
          }).then(message => {
              message = message.first()
              if (message.content === "c") {
                  hit();
                  loop();
                  return
              } else if (message.content === "p") {
                  stand();
                  loop();
                  return
              } else {
                  bet("perder");
                  return
              }
          }).catch(_ => {
              message.channel.send("**Você perdeu todo seu dinheiro**");
              bet("lose");
              return
          })
      }

      await loop()
  };