import {Component, OnInit} from '@angular/core';
import {IBook} from '../IBook';
import {BookService} from '../book.service';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-read',
  templateUrl: './list-read.component.html',
  styleUrls: ['./list-read.component.css']
})
export class ListReadComponent implements OnInit {

  books: IBook[] = [];

  constructor(private bookService: BookService, private router: Router) {
  }

  ngOnInit(): void {
    this.getall();
  }

  getall() {
    this.bookService.getListBooks().subscribe(data => {
      for (const book of data) {
        if (book.read === true) {
          this.books.push(book);
        }
      }
    });
  }

  onSubmit(index) {
    let book: IBook = this.books[index];
    book.read = false;
    this.bookService.updateBook(book).subscribe(data => {
      this.books.splice(index, 1);
    });
    this.router.navigate(['/list-read']);
  }

}
