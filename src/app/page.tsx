import Gallery from "./Components/Gallery";

function Home() {
  const pictureURLS: string[] = [
    "aslfua.jpeg",
    "bigApple.jpeg",
    "greenFlowerWallpaper.jpeg",
    "miae.jpeg",
    "skipLoafer.jpeg",
    "yellowFlowerWallpaper.jpeg",
    "yellowGingham.jpeg"
  ];

  return (
    <>
     <Gallery name="emmaline" images={pictureURLS} />
    </>
  );
}

export default Home