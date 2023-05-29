const originalObj = {
    name: "Pratik",
    age: 25,
    hobbies: ["Reading", "Coding"],
}


const deepclone = JSON.parse(JSON.stringify(originalObj));

deepclone.hobbies.push("gaming");

console.log(originalObj.hobbies)
