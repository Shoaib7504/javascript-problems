// Group an array of objects by a specified property key
const groupByKey = (items, key) => {
    const grouped = items.reduce((acc, item) => {
        const groupVal = item[key];
        if (!acc[groupVal]) {
            acc[groupVal] = [];
        }
        acc[groupVal].push(item);
        return acc;
    }, {});

    return console.log(`Grouped by "${key}":`, grouped);
}

const people = [
    { name: "Alice", role: "developer" },
    { name: "Bob", role: "designer" },
    { name: "Charlie", role: "developer" },
    { name: "Diana", role: "manager" }
];

groupByKey(people, "role");

const products = [
    { name: "Apple", category: "Fruit" },
    { name: "Carrot", category: "Vegetable" },
    { name: "Banana", category: "Fruit" }
];

groupByKey(products, "category");
