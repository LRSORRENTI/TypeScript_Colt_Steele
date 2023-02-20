// Last thing on generics for now, we 
// can also write generic classes, 
// let's see an ex where a user can have 
// audio playlists, and video playlists 
// in some kind of app

import { title } from "process";

interface Song{
    title: string;
    artist: string;
    numPlays: number
}

interface Video{
    title: string;
    creator: string;
    numViews: number;
}

class VidPlayList<T, U>{
public videos: Video[] = []
}

class SongPlayList {
    public songs: Song[] = []
}

// below we have a class that's typed
// but uses a generic

class Playlist<T> {
    public queue: T[] = [];
    add(el: T){
        this.queue.push(el)
    }
}

const songz = new Playlist<Song>()

class Song {
    title: string;
    artist: string;
  
    constructor(title: string, artist: string) {
      this.title = title;
      this.artist = artist;
    }
  }
  
  class PlaylistTwo<T> {
    public queue: T[] = [];
  
    add(el: T) {
      this.queue.push(el);
    }
  }
  
  const songs = new PlaylistTwo<Song>();
  const newSong = new Song('Title of the Song', 'Artist Name');
  songs.add(newSong);
  

//   In this example, we first 
// define the Song class
//  with a title and artist property.
 
//  We then define the PlaylistTwo,
//   class with a generic type ,
//   parameter T and an add() 
//   method to add elements to the playlist.

// // We create a new instance 
// of PlaylistTwo<Song> and store 
// it in the songs variable. 

// Then, we create a new Song 
// object and store it in the 
// newSong variable.

// Finally, we call the
//  add() method on the songs object,
//   passing in the newSong object as an argument, 
// to add the new song to the playlist.