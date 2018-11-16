const cats = [
    {id: 1, name: 'Max', age: 5},
    {id: 2, name: 'Oscar', age: 4},
    {id: 3, name: 'Tiger', age: 2},
    {id: 4, name: 'Tom', age: 0.5},
    {id: 5, name: 'Coco', age: 3},
    {id: 6, name: 'Billy', age: 4},
    {id: 7, name: 'Jasper', age: 11},
    {id: 8, name: 'Jasmine', age: 8},
    {id: 9, name: 'Kitty', age: 0.4},
];

export const fetchCats = () => cats;
// export const fetchCatById = (id) => cats.find(cat => cat.id === id);

export const asyncFetchCats = (delay = 5000) => {
    return new Promise(function(resolve) {
        setTimeout(resolve, delay, cats);
    });
};