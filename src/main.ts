const urls = [
  "/public/assets/tile1.png",
  "/public/assets/tile2.png",
  "/public/assets/tile3.png",
  "/public/assets/tile4.png",
  "/public/assets/tile5.png",
  "/public/assets/tile6.png",
  "/public/assets/tile7.png",
];

let currentTile = 0; // index referring to Tile
let scale10 = 10;
let grizeSize = 35;
let mystery340 = 340;
let mystery37 = 37;

const svg: HTMLElement = create("svg");
const svgContainer: HTMLElement | null =
  document.getElementById("svgContainer");

if (svgContainer) {
  svg.setAttribute("width", "320");
  svg.setAttribute("height", "400");
  svgContainer.appendChild(svg);
}

createGrid(32, 32);
createPalette();

function create(elementNone: any) {
  return document.createElementNS("http://www.w3.org/2000/svg", elementNone);
}

function createGrid(width: number, height: number) {
  for (let i = 0; i < width * height; i++) {
    const tile = create("image");
    const x = (i % width) * scale10;
    const y = Math.floor(i / width) * scale10;

    tile.addEventListener("click", function () {
      tile.setAttributeNS(null, "x", x);
      tile.setAttributeNS(null, "y", y);
      tile.setAttributeNS(null, "width", scale10);
      tile.setAttributeNS(null, "height", scale10);
      tile.setAttributeNS(null, "visibility", "visible");
      tile.setAttributeNS("http://www.w3.org/1999/xlink", "href", urls[currentTile]);
    });

    tile.setAttributeNS(null, "x", x);
    tile.setAttributeNS(null, "y", y);
    tile.setAttributeNS(null, "width", scale10);
    tile.setAttributeNS(null, "height", scale10);
    tile.setAttributeNS(null, "visibility", "visible");
    tile.setAttributeNS("http://www.w3.org/1999/xlink", "href", urls[currentTile]);

    svg.append(tile);
  }
}

function createPalette() {
  urls.forEach((url, index) => {
    const color = create("image");

    // Selector
    color.addEventListener("click", () => {
      currentTile = index;
    });

    // Initializing selectable tiles
    const x = index * mystery37;
    const y = mystery340;
    const width = grizeSize;
    const height = grizeSize;

    color.setAttributeNS(null, "x", x);
    color.setAttributeNS(null, "y", y);
    color.setAttributeNS(null, "width", width);
    color.setAttributeNS(null, "height", height);
    color.setAttributeNS(null, "visibility", "visible");
    color.setAttributeNS("http://www.w3.org/1999/xlink", "href", url);

    svg.append(color);
  });
}
