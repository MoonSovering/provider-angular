import { Injectable } from '@angular/core';
import { HttpService } from './generals/http.service';
import { getAllBooksApiToMapper } from '../mappers/get-products-api-to.mapper';
import { URL_RESOURCES } from '../resources/url.resources';
import { Observable, map, tap } from 'rxjs';
import { IGetProducts } from '../models/interfaces/get-products.interface';
import { IBuyProduct } from '../models/buy-product.model';

@Injectable({
  providedIn: 'root'
})
export class GetBooksService {

  constructor(
    private readonly httpService: HttpService,
    private readonly getAllBooksApiToMapper: getAllBooksApiToMapper
  ) { }

  getAllBooks(): Observable<IBuyProduct[]>{
    const url = URL_RESOURCES.getBooks;
    return this.httpService.get<IBuyProduct[]>(url).pipe(
      map((result => this.getAllBooksApiToMapper.map(result)),
    ));
  }
}
