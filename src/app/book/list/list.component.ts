import {Component, OnInit} from '@angular/core';
import {BookService} from '../book.service';
import {IBook} from '../IBook';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  books: IBook[] = [];
  addForm;

  constructor(private bookService: BookService, private fb: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    this.addForm = this.fb.group({
      name: [''],
    });
    this.getall();
  }

  updateStatusBook(index) {
    let book: IBook = this.books[index];
    book.read = true;
    this.bookService.updateBook(book).subscribe(data => {
      this.books.splice(index, 1);
    });
    this.router.navigate(['list']);
  }
  onSubmit(value) {
    let book: IBook = {
      name: value.name,
      read: false
    };
    if (value.name) {
      this.bookService.addBook(book).subscribe(next => {
        this.books.push(book);
      });
      this.router.navigate(['/list']);
    }
  }

  getall() {
    this.bookService.getListBooks().subscribe(data => {
      for (const book of data) {
        if (book.read === false) {
          this.books.push(book);
        }
      }
    });
  }
}
