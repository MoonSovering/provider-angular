import { Injectable } from "@angular/core";
import { IPexelImages, Photo } from "../models/interfaces/images-api.interfaces";


@Injectable({
  providedIn: 'root'
})
export class GetPexelMapper {
  map(payload: any): IPexelImages {
    return {
      photos: payload.photos.map((photo: any) => ({
        url: photo.src ? photo.src.tiny : '',
        alt: photo.alt
      }))
    }
  }
}
