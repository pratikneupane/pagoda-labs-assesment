const originalObj = {
    name: "Pratik",
    age: 25,
    hobbies: ["Reading", "Coding"],
}

const shallowClone = Object.assign({}, originalObj);

shallowClone.hobbies.push("gaming");

console.log(originalObj.hobbies);