import ImageService from "../services/image-service.js";
import store from "../store.js";

function _drawImage() {
  let image = store.State.image;
  document.body.style.backgroundImage = `url('${image.image}')`;

  // document.getElementById("bg-image").innerHTML = image.imageTemplate;
  console.log("this is the image draw", image.image);
}
//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image)
export default class ImageController {
  constructor() {
    store.subscribe("image", _drawImage);
    ImageService.getImageAsync();
  }
}
