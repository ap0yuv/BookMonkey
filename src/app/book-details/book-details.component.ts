import { Book } from './../shared/book';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bm-book-details',
  templateUrl: './book-details.component.html',
  styles: []
})
export class BookDetailsComponent {
  @Input() book: Book;
  @Output() showListEvent = new EventEmitter<any>();

  getRating(num: Number) {
    return new Array(num);
  }

  showBookList() {
    this.showListEvent.emit();
  }
}
