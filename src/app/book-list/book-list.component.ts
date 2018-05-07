import { BookStoreService } from './../shared/book-store.service';
import { Component, OnInit } from '@angular/core';

import { Book } from '../shared/book';


@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html'
})
export class BookListComponent implements OnInit {
  books: Book[];
  // @Output() showDetailsEvent = new EventEmitter<Book>();

  constructor(private bs: BookStoreService) { }

  ngOnInit() {
      this.bs.getAll().subscribe(res => {this.books = res; console.log(res); });
  }

  // showDetails(book: Book) {
  //   this.showDetailsEvent.emit(book);
  // }
}
