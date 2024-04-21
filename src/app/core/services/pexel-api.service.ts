import { Injectable } from '@angular/core';
import { HttpService } from './generals/http.service';
import { ProductState } from '../state/buy-product.state';
import { URL_RESOURCES } from '../resources/url.resources';
import { Observable, map, tap } from 'rxjs';
import { IPexelImages } from '../models/interfaces/images-api.interfaces';
import { environment } from '../../../environments/environtment.development';
import { HttpHeaders } from '@angular/common/http';
import { GetPexelMapper } from '../mappers/pexel-api.mapper';

@Injectable({
  providedIn: 'root'
})
export class PexelApiService {

  constructor(
    private readonly httpService: HttpService,
    private readonly getPexelMapper: GetPexelMapper
  ) { }

  getImages(page: string): Observable<IPexelImages>{
    const header = new HttpHeaders()
    .append('Content-Type', 'application/json')
    .append('Authorization', `${environment.pexelApiKey}`);

    const url = URL_RESOURCES.pexelApi+`?query=fantasy&page=1&per_page=${page}`;
    const images = this.httpService.get<IPexelImages>(url, header).pipe(
      map((response) => this.getPexelMapper.map(response))
    );
    return images;
  }
}
