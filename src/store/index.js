import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#EFBD48",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "../../public/arcreactor.png",
  fullDecal: "../../public/Shirttexture.jpg",
});

export default state;
