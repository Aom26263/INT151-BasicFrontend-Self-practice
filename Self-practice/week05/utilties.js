//name export
function echo(msg) {
    return msg
}
//default export
function getLength(str) {
    return str.length
}

class Book {
  constructor(id,title,author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }
  getsummary() {
    return `Book: ${this.title}, Author: ${this.author}, ID: ${this.id}`
  }
}

export {Book, echo, getLength as default}