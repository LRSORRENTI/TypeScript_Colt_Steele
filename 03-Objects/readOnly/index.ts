// One last thing about object types, 
// we can use the readonly modifier to 
// set properties to readonly, TS will alert 
// if those values change

type User = {
  readonly id: number;
  username: string;

};

const user: User = {
    id: 12234;
    username: "Luke"
}

user.id = 1243124

// above TS alerts that that prop is 
// readonly

// readonly will resurface when learning TS Classes