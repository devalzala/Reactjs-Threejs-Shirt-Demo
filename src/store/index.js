import { proxy } from "valtio";
import Logo from "../../public/arcreactor.png"
import texture from "../../public/arcreactor.png"

const state = proxy({
  intro: true,
  color: "#EFBD48",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: Logo,
  fullDecal: texture,
});

export default state;
