// INTERFACE METHODS

// So far we've only added primitive values to our , 
// interface definitions, but we can also add methods

interface VideoGame { 
    readonly serialNum: number,
    title: string,
    platforms: string[],
    rating?: number,
    // phrase: () => string 

    // Above ^ IS one way to write a method inside an interface

     // below is another way
     phrase(): string
}

const darkSouls: VideoGame = {
   serialNum: 12124,
   title: 'Dark Souls 3',
   platforms: ['Xbox One', 'Playstation 4', 'PC'],
   rating: 9,
   phrase: () => {return 'Praise the sun!'}
}

// We can also add parameters on our interface methods, 
// above our phrase() method didn't have any, it just 
// returns that string when invoked

// Let's demonstrate interface method that does include 
// an argument list

interface DockWorker {
    tool: string, 
    BillsPerHour: number, 
    phrase(param1: string): string
}

const luke: DockWorker = {
    tool: 'Forklift',
    BillsPerHour: 10,
    phrase(name: string){
        return `shut er down ${name}, good job 
        your at ${luke.BillsPerHour} BPH on that ${luke.tool}`
    }
}

luke.phrase('luke')