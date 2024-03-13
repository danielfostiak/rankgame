"use client";
import Game from "@/client/Game";

const gameData = {
  initial: {
    main: "Two golden records, etched with the sounds of humanity, are sent into space on Voyager 1 and 2.",
    value: "1977",
  },
  upcoming: [
    {
      main: "Pope Nicholas III creates the passetto di borgo, a hidden passage from the Vatican. It will help two popes escape invaders, perhaps saving their lives.",
      value: "1277",
    },
    {
      main: "Stanford and Berkeley play the first women’s intercollegiate basketball game. After the sport is banned, the players have a secret rematch.",
      value: "1896",
    },
    {
      main: "A wave of homo sapiens migrates out of Africa, becoming the ancestors of modern humans in Asia, Europe, the Americas and beyond.",
      value: "60,000 BCE",
    },
    {
      main: "Amelia Earhart, an aviator and fashion designer — who made her own line of practical clothing for women — attempts a round-the-world flight.",
      value: "1937",
    },
    {
      main: "One of the first great libraries in Assyria catches fire. Luckily, the clay tablets, including the “Epic of Gilgamesh,” harden in the heat and become preserved.",
      value: "612 BCE",
    },
    {
      main: "Alain Locke champions the creative and cosmopolitan Black Americans migrating to Harlem, highlighting a renaissance in a seminal essay.",
      value: "1925",
    },
    {
      main: "Running low on copper to produce coins, the Chinese government first issues paper money. It soon has to deal with inflation.",
      value: "Circa 1024",
    },
    {
      main: "The Neanderthals — who paint cave art, create jewelry and make tools like axes and spears — vanish from the earth.",
      value: "40,000 BCE",
    },
  ],
  correct: [
    {
      main: "A wave of homo sapiens migrates out of Africa, becoming the ancestors of modern humans in Asia, Europe, the Americas and beyond.",
      value: "60,000 BCE",
    },
    {
      main: "The Neanderthals — who paint cave art, create jewelry and make tools like axes and spears — vanish from the earth.",
      value: "40,000 BCE",
    },
    {
      main: "One of the first great libraries in Assyria catches fire. Luckily, the clay tablets, including the “Epic of Gilgamesh,” harden in the heat and become preserved.",
      value: "612 BCE",
    },
    {
      main: "Running low on copper to produce coins, the Chinese government first issues paper money. It soon has to deal with inflation.",
      value: "Circa 1024",
    },
    {
      main: "Pope Nicholas III creates the passetto di borgo, a hidden passage from the Vatican. It will help two popes escape invaders, perhaps saving their lives.",
      value: "1277",
    },
    {
      main: "Stanford and Berkeley play the first women’s intercollegiate basketball game. After the sport is banned, the players have a secret rematch.",
      value: "1896",
    },
    {
      main: "Alain Locke champions the creative and cosmopolitan Black Americans migrating to Harlem, highlighting a renaissance in a seminal essay.",
      value: "1925",
    },
    {
      main: "Amelia Earhart, an aviator and fashion designer — who made her own line of practical clothing for women — attempts a round-the-world flight.",
      value: "1937",
    },
    {
      main: "Two golden records, etched with the sounds of humanity, are sent into space on Voyager 1 and 2.",
      value: "1977",
    },
  ],
};

export default function Home() {
  return (
    <div>
      <h1>Rank'em</h1>
      <Game gameData={gameData} />
    </div>
  );
}
