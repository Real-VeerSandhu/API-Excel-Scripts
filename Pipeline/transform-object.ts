// Simple object transformaiton example (used in working-map)

interface FullMap {
key1?: any;
key2?: any;
key3?: any;
// ...
} 

function transformObject(input: FullMap): FullMap {
    const transformedObject: FullMap = {
        key1: null,
        key2: null,
        key3: null,
    };

    for (const key in input) {
        if (Object.prototype.hasOwnProperty.call(input, key)) {
        transformedObject[key] = input[key];
        }
    }

    return transformedObject;
    }

// Example usage
const input1: FullMap = {
key1: "value1",
// key2 is missing
key3: "value3",
// ...
};

const input2: FullMap = {
// key1 is missing
key2: "value2",
key3: "value3",
// ...
};

const transformedInput1 = transformObject(input1);
const transformedInput2 = transformObject(input2);

console.log(transformedInput1);
console.log(transformedInput2);