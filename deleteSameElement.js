let arr1 = [
    { id: 1, name: "Arshman" },
    { id: 2, name: "Shuja" },
    { id: 3, name: "Hamza" },
    { id: 4, name: "umer" },
    { id: 5, name: "ali" },
]
let arr2 = [
    { id: 4, name: "Asad" },
    { id: 5, name: "Asad" },
]
if (arr1.length > arr2.length) {
    var length = arr1.length;
}
else {
    var length = arr2.length;
}


function checker(arr1) {
    let names = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i].id === arr2[j].id) {
                names.push(arr1[i].name);
            }
        }
    }
    return names;
}
const result = checker(arr1, arr2);
const filteredArr1 = [];
for (let i = 0; i < arr1.length; i++) {
    let isNameExist = result.includes(arr1[i].name);
    if (!isNameExist) {
        filteredArr1.push(arr1[i].name)
    }
}
console.log(filteredArr1);

