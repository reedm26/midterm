import Image from "../models/image.js";
import store from "../store.js";

// @ts-ignore
const imgApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/images",
  timeout: 8000
});

//TODO create methods to retrieve data trigger the update window when it is complete
class ImageService {
  async getImageAsync() {
    console.log("this is from getImageAsync", store.State.image);
    let res = await imgApi.get("");
    store.commit("image", new Image(res.data));
    console.log(store.State.image);
    // debugger;
  }
}

const imageService = new ImageService();
export default imageService;
