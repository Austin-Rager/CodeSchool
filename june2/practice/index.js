const students = [];

const johnathan = {
    name: "Johnathan",
    age: 25,
    id: "4234552",
    favorite_books: [
        {
            name: "The Martian",
            author: "Andy Weir",
        },
        {
            name: "Animorphs",
            author: "K.A. Applegate",
        },
    ],

};


students.push(johnathan);

const first_student = students[0];

console.log(first_student);

const first_book = first_student.favorite_books[0];

for (let i = 0; i < first_student.favorite_books.length; i++){
    console.log(first_student.favorite_books[i].author);
}