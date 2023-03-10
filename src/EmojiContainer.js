import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./App.css";
const emojis = [
  "๐",
  "๐",
  "๐",
  "๐",
  "๐",
  "๐",
  "๐คฃ",
  "๐",
  "๐",
  "๐",
  "๐",
  "๐",
  "๐",
  "๐ฅฐ",
  "๐",
  "๐คฉ",
  "๐",
  "๐",
  "๐",
  "๐",
  "๐",
  "๐",
  "๐",
  "๐",
  "๐คช",
  "๐คจ",
  "๐ง",
  "๐ค",
  "๐",
  "๐คฉ",
  "๐ฅณ",
  "๐",
  "๐",
  "๐",
  "๐",
  "๐",
  "๐",
  "๐",
  "โน๏ธ",
  "๐ฃ",
  "๐",
  "๐ซ",
  "๐ฉ",
  "๐ฅบ",
  "๐ข",
  "๐ญ",
  "๐ค",
  "๐ ",
  "๐ก",
  "๐คฌ",
  "๐คฏ",
  "๐ณ",
  "๐ฅต",
  "๐ฅถ",
  "๐ฑ",
  "๐จ",
  "๐ฐ",
  "๐ฅ",
  "๐",
  "๐ค",
  "๐ค",
  "๐คญ",
  "๐คซ",
  "๐คฅ",
  "๐ถ",
  "๐",
  "๐",
  "๐ฌ",
  "๐",
  "๐ฏ",
  "๐ฆ",
  "๐ง",
  "๐ฎ",
  "๐ฒ",
  "๐ด",
  "๐คค",
  "๐ช",
  "๐ต",
  "๐ค",
  "๐ฅด",
  "๐คข",
  "๐คฎ",
  "๐ค",
  "๐ฅณ",
  "๐ท",
  "๐ค",
  "๐ค",
  "๐ค",
  "๐ค ",
  "๐",
  "๐ฟ",
  "๐น",
  "๐บ",
  "๐",
  "๐ป",
  "๐ฝ",
  "๐ค",
  "๐ฉ",
  "๐บ",
  "๐ธ",
  "๐น",
  "๐ป",
  "๐ผ",
  "๐ฝ",
  "๐",
  "๐ฟ",
  "๐พ",
];
const RandomEmojiGenerator = () => {
  const [emoji, setEmoji] = useState("");
  function generate() {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    setEmoji(emojis[randomIndex]);
  }
  return (
    <>
      <div style={{ fontSize: "30px", textAlign: "center" }}>
        <h1>Random Emoji Generator</h1>
        <Stack spacing={2} direction="center">
          <Button onClick={generate} variant="contained">
            Generate Emoji
          </Button>
        </Stack>
        <h3> {emoji && <p>{emoji}</p>} </h3>
      </div>
    </>
  );
};
export default RandomEmojiGenerator;
