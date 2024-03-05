import * as PIXI from "pixi.js";
import "@pixi/graphics-extras";
import { sound } from "@pixi/sound";
import select from "./assets/sounds/select.mp3";

sound.add("select", select);

const background_colour = 0x1b2223;
const main_colour = 0xf4faff;
const sub_colour = 0xffc145;

// Create a PixiJS application
const app = new PIXI.Application({
  resizeTo: window,
  backgroundColor: background_colour,
});
document.body.appendChild(app.view);

const gameState = {
  current: "start",
  change: (newState) => {
    gameState.current = newState;
    handleState(newState);
  },
};

const handleState = (state) => {
  switch (state) {
    case "start":
      startScreen();
      break;
    case "round_start":
      roundStart();
      break;
    case "game":
      startGame();
      break;
    case "round_end":
      roundEnd();
      break;
    case "end":
      endScreen();
      break;
    default:
      console.error("Unknown state: ", state);
      break;
  }
};

const add_lines = () => {
  const top_line = new PIXI.Graphics();
  top_line.lineStyle(10, main_colour, 1);
  top_line.moveTo(0, app.screen.height * 0.1);
  top_line.lineTo(app.screen.width, app.screen.height * 0.1);

  const bottom_line = new PIXI.Graphics();
  bottom_line.lineStyle(10, main_colour, 1);
  bottom_line.moveTo(0, app.screen.height * 0.9);
  bottom_line.lineTo(app.screen.width, app.screen.height * 0.9);

  app.stage.addChild(bottom_line);
  app.stage.addChild(top_line);
};

const draw_arrow = (x, y, rotation) => {
  const arrow = new PIXI.Graphics();
  arrow.lineStyle(2, main_colour, 1);
  arrow.beginFill(main_colour, 1);
  arrow.drawRect(0, 0, 40, 60);
  arrow.drawRegularPolygon(20, -20, 55, 3, 0);
  arrow.endFill();
  arrow.x = x;
  arrow.y = y;
  arrow.rotation = rotation;
  app.stage.addChild(arrow);
};

const center_text = (text) => {
  text.anchor.set(0.5);
  text.x = app.screen.width / 2;
  text.y = app.screen.height / 2;
};

const clear = () => {
  app.stage.removeChildren();
};

const startScreen = () => {
  clear();
  add_lines();
  const start_message = new PIXI.Text("Press to start", {
    fontFamily: "Silkscreen",
    fontSize: 72,
    fill: main_colour,
  });
  center_text(start_message);
  start_message.eventMode = "static";
  start_message.on("pointertap", () => {
    sound.play("select");
    gameState.change("round_start");
  });

  app.stage.addChild(start_message);
};

const roundStart = () => {
  clear();
  add_lines();
  let countdown = 3;
  const round_message = new PIXI.Text("Get Ready", {
    fontFamily: "Silkscreen",
    fontSize: 72,
    fill: main_colour,
  });
  center_text(round_message);
  app.stage.addChild(round_message);

  const countdownInterval = setInterval(() => {
    countdown--;
    if (countdown === 0) {
      clearInterval(countdownInterval);
      gameState.change("game");
    }
  }, 1000);
};

const startGame = () => {
  clear();
  add_lines();
  const game_message = new PIXI.Text("Game started", {
    fontFamily: "Silkscreen",
    fontSize: 72,
    fill: main_colour,
  });
  center_text(game_message);
  draw_arrow(app.screen.width / 2, app.screen.height * 0.8, 0);
  draw_arrow(app.screen.width * 0.6, app.screen.height * 0.8, Math.PI);
  app.stage.addChild(game_message);
};

if ("fonts" in document) {
  document.fonts
    .load('1em "Silkscreen"')
    .then(function (fonts) {
      if (fonts.length >= 1) {
        handleState(gameState.current);
      } else {
        console.error("Font failed to load");
      }
    })
    .catch(function (error) {
      console.error("Font loading error:", error);
    });
} else {
  handleState(gameState.current);
}
