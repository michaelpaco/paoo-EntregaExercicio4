import {
  Component,
  OnInit,
  EventEmitter,
  Output
} from '@angular/core'
import { Book } from '../../interfaces/Book'

@Component({
  selector: 'book-insert',
  templateUrl: './book-insert.component.html',
  styleUrls: ['./book-insert.component.css']
})
export class BookInsertComponent implements OnInit {

  book: Book = {
    id: null,
    title: '',
    author: '',
    pages: null
  }

  @Output() bookAdded = new EventEmitter<Book>()

  constructor() { }

  ngOnInit(): void {
  }

  addBook() {
    this.book.id = Date.now()

    this.bookAdded.emit(this.book)

    this.book = {
      id: null,
      title: '',
      author: '',
      pages: null
    }
  }

}
