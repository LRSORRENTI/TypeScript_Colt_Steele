// let's say we want a tuple to store http status codes along 
// with a message

type HTTPResponse = [number, string]

const goodResponse: HTTPResponse = [200, 'OK']

// and if we change the structure TS will throw an error: 

goodResponse[0] = 'not found'

goodResponse[1] = 404 

// important to note TS won't complain if we use push to add 
// anohter value, even when it doesn't follow the type: 

goodResponse.push(12)

// no error above, and that has to do with how TS was created, 
// there are many stack overflow questions on this very thing, 
// and no easy answer, it's the way TS was implemented, 
// it's a limitation of tuples
goodResponse.pop()
goodResponse.pop()

// same thing with .pop() to remove a value

// Tuples aren't very common practice in current web dev, but 
// they are good to know about for situational code, they 
// can be useful for specific things but most of the time just 
// use an object:

{
    code: 200, 
    msg: 'ok'
}

const responses: HTTPResponse[] = [[404, 'not found'], [200, 'ok']]