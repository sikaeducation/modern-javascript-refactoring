import { createGame, getScore } from "./index"
const allStates = [
  [0, 0, "Love-All"],
  [1, 1, "Fifteen-All"],
  [2, 2, "Thirty-All"],
  [3, 3, "Deuce"],
  [4, 4, "Deuce"],

  [1, 0, "Fifteen-Love"],
  [0, 1, "Love-Fifteen"],
  [2, 0, "Thirty-Love"],
  [0, 2, "Love-Thirty"],
  [3, 0, "Forty-Love"],
  [0, 3, "Love-Forty"],
  [4, 0, "Win for player1"],
  [0, 4, "Win for player2"],

  [2, 1, "Thirty-Fifteen"],
  [1, 2, "Fifteen-Thirty"],
  [3, 1, "Forty-Fifteen"],
  [1, 3, "Fifteen-Forty"],
  [4, 1, "Win for player1"],
  [1, 4, "Win for player2"],

  [3, 2, "Forty-Thirty"],
  [2, 3, "Thirty-Forty"],
  [4, 2, "Win for player1"],
  [2, 4, "Win for player2"],

  [4, 3, "Advantage player1"],
  [3, 4, "Advantage player2"],
  [5, 4, "Advantage player1"],
  [4, 5, "Advantage player2"],
  [15, 14, "Advantage player1"],
  [14, 15, "Advantage player2"],

  [6, 4, "Win for player1"],
  [4, 6, "Win for player2"],
  [16, 14, "Win for player1"],
  [14, 16, "Win for player2"]
]; 

allStates.forEach(([player1Score, player2Score, expectedResult]) => {
  test(`${player1Score} and ${player2Score} results in "${expectedResult}"`, () => {
    const game = createGame("player1", "player2")
    for (let count = 0; count < player1Score; count++) {
      game.score("player1")
    }
    for (let count = 0; count < player2Score; count++) {
      game.score("player2")
    }
    const result = getScore(game)
    console.log(result)
    expect(result).toBe(expectedResult)
  })
})

test("Game IDs are unique", () => {
  const game1 = createGame("player1", "player2")
  const game2 = createGame("player1", "player2")

  expect(game1.id).not.toBe(game2.id)
})

test("smoke", () => {
  expect(true).toBe(true)
})
