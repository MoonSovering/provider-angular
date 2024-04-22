import { Photo } from "./interfaces/images-api.interfaces";


export interface IBuyProduct {
  id: string;
  name:        string;
  price:       number;
  stock:       number;
  libraryType: string;
  photo?: Photo
}
