import { distinctUntilChanged, switchMap, debounceTime, tap } from 'rxjs/operators';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Book } from '../shared/book';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';

import { BookStoreService } from '../shared/book-store.service';


@Component({
  selector: 'bm-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  @Output() bookSelected = new EventEmitter<Book>();

  foundBooks: Book[] = [];
  keyup = new EventEmitter<string>();
  isLoading = false;

  constructor(private bs: BookStoreService) { }

  ngOnInit() {
    this.keyup
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        tap( () => this.isLoading = true),
        switchMap(searchTerm => this.bs.getAllSearch(searchTerm)),
        tap( () => this.isLoading = false),
      )
      .subscribe(books => this.foundBooks = books );
  }

}
