# WordGuessTwo
A hangman style word guessing game based around the Dragon Ball franchise.

# Motivation
The motivation for this project was to engage anyone unfamiliar to Dragon Ball with a simple and easy game. This game is challenging for the Dragon Ball veteran  while creating an entertaining experience for a new audience as well.

# Build Status
game function is working. Letters are replaced with skulls before being pushed to a container in the view. Wrong and right guessed letters are also pushed into containers in a similar fashion to the view. Remaining guesses decrements with every wrong guess, while the score increments with every right name found.

# Issues
On a win or loss, when the game reloads. the containers do not reset as well until a new element is pushed into the array/container. So, on the second round, the player will still be presented with the previous word until they guess a right letter.



