const person = { name: "Jack Willian", age: 17, job: "facebooker", gfName: "Ema Watson", address: "Kochu Khet", phone: "01717171710", friends: ['Tom Hancks', 'Tom Cruise', 'Tom Honey']};
// const gfName = person.gfName;
// const phone = person.phone;
const {phone, gfName, address,salary} = person;

// console.log(gfName);
// console.log(phone);
// console.log(address);
console.log(phone, gfName, address, salary);


const friends = ['sakib khan', 'salman khan', 'arbaz khan', 'selim khan'];
// const[chotoFriend, nextFriend] = friends;
// const[chotoFriend, nextFriend,...restFriends] = friends;
const[chotoFriend,...restFriends] = friends;
console.log(restFriends);