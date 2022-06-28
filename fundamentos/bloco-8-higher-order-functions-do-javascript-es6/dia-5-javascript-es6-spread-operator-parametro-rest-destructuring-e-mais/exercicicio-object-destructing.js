
const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const trappisEnterprise = {... user, ...jobInfos};

const infos = ({name, age, nationality, profession, squad, squadInitials}) => 
            `Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. 
            I work as a ${profession} and my squad is ${squadInitials}-${squad}`

console.log(trappisEnterprise);

console.log(infos(trappisEnterprise))