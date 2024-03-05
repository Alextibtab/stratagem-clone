# Stratagem

## Overview

This project is a game developed with PIXI.js, leveraging its powerful rendering capabilities to create immersive 2D experiences. In addition to the core PIXI.js library, the project utilizes several PIXI extensions to enhance its features:

PIXI Sound: For rich audio integration, providing an easy-to-use interface for sound effects and music.
PIXI UI: For creating interactive user interfaces within the PIXI environment.
PIXI graphics-extras: To extend the PIXI Graphics class with additional drawing methods, allowing for more complex shapes and designs.
The game is designed to be engaging and visually appealing, harnessing the full potential of PIXI.js and its extensions to deliver a unique gaming experience.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Ensure you have Node.js installed. This project recommends using NVM for managing multiple Node.js versions. If you haven't installed NVM yet, follow the [NVM installation guide](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating).

### Installation

#### 1. Clone the repo

```sh
git clone https://yourrepositorylinkhere.com/yourproject.git
```

#### 2. Switch to the project directory

```sh
cd yourproject
```

#### 3. Use NVM to select the correct Node.js version

If the project requires a specific Node.js version, you can ensure compatibility using NVM. First, check if the required version is installed:

```sh
nvm list
```

If not, install the required version:

```sh
nvm install 20
```

And then switch to it:

```sh
nvm use 20
```

#### 4. Install NPM packages

With the correct Node.js version in use, install the project dependencies:

```sh
npm install
```

#### 5. Running the Application

To launch the game locally, run:

```sh
npm start
```

This command will start a local server using parcel, and you can access the game by navigating to http://localhost:1234 in your web browser.
