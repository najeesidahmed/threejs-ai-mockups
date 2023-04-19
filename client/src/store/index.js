import { proxy } from "valtio";

const state = proxy({
    intro: true,
    color: '#ccc',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './nike-tick.png',
    fullDecal: './nike-tick.png',
});

export default state;