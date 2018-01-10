/*  Approximate schema for these seeds
var SongSchema = new Schema({
  name: String,
  trackNumber: Number,
});
*/
var db = require('../models');

var albumList =[];
albumList.push({
              artistName: 'Nine Inch Nails',
              name: 'The Downward Spiral',
              releaseDate: '1994, March 8',
              genres: [ 'industrial', 'industrial metal' ]
            });
albumList.push({
              artistName: 'Metallica',
              name: 'Metallica',
              releaseDate: '1991, August 12',
              genres: [ 'heavy metal' ]
            });
albumList.push({
              artistName: 'The Prodigy',
              name: 'Music for the Jilted Generation',
              releaseDate: '1994, July 4',
              genres: [ 'electronica', 'breakbeat hardcore', 'rave', 'jungle' ]
            });
albumList.push({
              artistName: 'Johnny Cash',
              name: 'Unchained',
              releaseDate: '1996, November 5',
              genres: [ 'country', 'rock' ]
            });

var sampleSongs = [];

sampleSongs.push({name: 'Famous', 				trackNumber: 1});
sampleSongs.push({name: "All of the Lights",	trackNumber: 2});
sampleSongs.push({name: 'Guilt Trip', 			trackNumber: 3});
sampleSongs.push({name: 'Paranoid', 			trackNumber: 4});
sampleSongs.push({name: 'Ultralight Beam', 		trackNumber: 5});
sampleSongs.push({name: 'Runaway', 				trackNumber: 6});
sampleSongs.push({name: 'Stronger', 			trackNumber: 7});

albumList.forEach(function(album) {
	album.songs = sampleSongs;
});

db.Album.remove({}, function(err, albums){
	db.Album.create(albumList, function(err, albums) {
		if (err) console.log('error');
		console.log(' - Albums');
		console.log(albums);
	});
});