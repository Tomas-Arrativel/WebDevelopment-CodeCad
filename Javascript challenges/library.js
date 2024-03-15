class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratings() {
    return this._ratings;
  }

  set isCheckedOut(newValue) {
    this._isCheckedOut = newValue;
  }

  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }
  getAverageRating() {
    this._ratings.reduce((a, b) => a + b, 0);
  }
  addRating(rating) {
    this._ratings.push(rating);
  }
}

class Book extends Media {
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director() {
    return this._director;
  }

  get runTime() {
    return this._runTime;
  }
}

const historyOfEverything = new Book(
  'Bill Bryson',
  'A Short History of Nearly Everything',
  544,
);

historyOfEverything.toggleCheckOutStatus();

console.log(historyOfEverything.isCheckedOut);
