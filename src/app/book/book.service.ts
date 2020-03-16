import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {IBook} from './IBook';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  url = 'http://localhost:8081/books';

  constructor(private http: HttpClient, private router: Router) {
  }

  getListBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.url);
  }

  addBook(book: IBook): Observable<IBook> {
    return this.http.post<IBook>(this.url, book);
  }

  findById(id): Observable<IBook> {
    return this.http.get<IBook>(this.url + '/' + id);
  }
  updateBook(book: IBook): Observable<IBook> {
    return this.http.put<IBook>(this.url, book);
  }
}

