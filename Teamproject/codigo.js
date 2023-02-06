
function Book(title, author, page, read) {
    this.title = title
    this.author = author
    this.page = page
    this.read = read
    this.info = function() {
        console.log(title + " by " + author + ", " + page + " pages, " + read)
    }

}

const theHobbit = new Book ("The Hobbit", "J.R.R. Tolkien", 295, "not read")
theHobbit.info()


