const ages = [12, 14, 16, 13, 17];
const ages2 = [15, 16, 12];
const ages3 = [25, 36, 22, 29];
// const allAges = [...ages, ...ages2, ...ages3];
const allAges = [...ages, ...ages2, 10, ...ages3];
console.log(allAges);

const business = 650;
const minister = 450;
const mp = 250;
const takaPoisha = [650, 450, 250];
// const maximum = Math.max(business, minister, mp);
const maximum = Math.max(...takaPoisha);
console.log(maximum);