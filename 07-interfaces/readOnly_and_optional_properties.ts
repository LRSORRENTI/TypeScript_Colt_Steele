// We can make optional props 
// like :

 interface Person {
    readonly id: number
    first: string,
     last: string, 
     nickname?: string
 }

 const thomas: Person = {
    id: 124,
    first: 'Thomas',
    last: 'Shelby',
    nickname: 'Tommy'
 }

 const tom: Person = {
    id: 456,
    first: 'thomas',
    last: 'hardy'
 }

 tom.first = 'Tomas'

 // we can change the string value to 
 // whatever, but we cannot mutate the 
 // readonly id value, since we used readonly

 tom.id = 212