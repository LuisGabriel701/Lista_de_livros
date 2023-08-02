const books = [
    { title: 'Dom Quixote', author: 'Miguel de Cervantes' },
    { title: 'Cem Anos de Solidão', author: 'Gabriel García Márquez' },
    { title: '1984', author: 'George Orwell' },
    { title: 'O Pequeno Príncipe', author: 'Antoine de Saint-Exupéry' }
  ];
  
  const bookList = document.getElementById('book-list');
  
  books.forEach(book => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<strong>${book.title}</strong> - ${book.author}`;
    bookList.appendChild(listItem);
  });
  