import { Injectable } from '@angular/core';
import { HttpService } from './generals/http.service';
import { URL_RESOURCES } from '../resources/url.resources';
import { Observable, map, tap } from 'rxjs';
import { IBuyProduct } from '../models/buy-product.model';
import { BuyProductMapper } from '../mappers/buy-product-api-to.mapper';

@Injectable({
  providedIn: 'root'
})
export class BuyProductService {

  constructor(
    private readonly httpService: HttpService,
    private readonly buyProductMapper: BuyProductMapper
  ) { }


  buyBook(bookData): Observable<IBuyProduct> {
    const url = URL_RESOURCES.buyBook;
    const book = this.httpService.post<IBuyProduct>(url, bookData)
    .pipe(
      map((result) => this.buyProductMapper.map(result)),
      tap( (result) => result)
    );
    return book;
  }

  buyNovel(novelData): Observable<IBuyProduct> {
    const url = URL_RESOURCES.buyNovel;
    const novel = this.httpService.post<IBuyProduct>(url, novelData)
    .pipe(
      map((result) => this.buyProductMapper.map(result)),
      tap( (result) => result)
    );
    return novel;
  }
}
