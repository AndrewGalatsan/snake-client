# Snake Client Project

Snake game is a very popular video game. It is a video game concept where the player maneuvers a dot and grows it by ‘eating’ pieces of food. As it moves and eats, it grows and the growing snake becomes an obstacle to smooth maneuvers. The goal is to grow it to become as big as possible without bumping into the side walls, or bumping into itself, upon which it dies.

This is simply a multiplayer take on the genre.

Before you can run this client, you will need to be running the server side which you can download and install from [here.](https://github.com/AndrewGalatsan/snake-client) 

## Summary of Javascript files

Constants.js is a file that contains the stored object of the keys that are used in the snake game, such as movement of up, down, left, right, messages and a name.

Client.js creates a connection to the server and assumes localhost. It then prints 'Welcome' upon successful connection. Sets the snake-name to BOB upon successful connection.

Input.js contains the function that recognizes the keys from the constants file and makes use of them.

Play.js creates a connection with the server.


## Getting Started

- Follow steps inside the snek server repo to run the server side
- Run the development snake client using the `node play.js` command. More instructions found [here.](https://github.com/lighthouse-labs/snek-multiplayer)
