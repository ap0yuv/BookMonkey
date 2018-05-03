import { Book } from './../shared/book';
import { Component, OnInit } from '@angular/core';
import { BookStoreService } from '../shared/book-store.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'bm-book-details',
  templateUrl: './book-details.component.html',
  styles: []
})
export class BookDetailsComponent {
  // @Input() book: Book;
  // @Output() showListEvent = new EventEmitter<any>();
  book: Book;

  constructor(
    private bs: BookStoreService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const params = this.route.snapshot.params;
    this.book = this.bs.getSingle(params['isbn']);
  }

  getRating(num: Number) {
    return new Array(num);
  }

  // showBookList() {
  //   this.showListEvent.emit();
  // }
}
