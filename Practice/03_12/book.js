class Book {
  constructor(
    title,
    author,
    publicationDate,
    pageLength,
    bookOpen,
    lastPageRead,
    readStatus
  ) {
    this.title = title;
    this.author = author;
    this.publicationDate = publicationDate;
    this.pageLength = pageLength;
    this.bookOpen = bookOpen;
    this.lastPageRead = lastPageRead;
    this.readStatus = readStatus;
  }
  toggleBook(bookStatus) {
    this.bookOpen = bookStatus;
  }
  updateLastPageRead(newLastPageRead) {
    this.lastPageRead = newLastPageRead;
  }
  updateReadStatus(newReadStatus) {
    this.readStatus = newReadStatus;
  }
}

export default Book;
