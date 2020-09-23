// Setup - Collection Object
var collection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Function that accepts the above collection{} object, record id, property name, and property value.
function updateRecords(object, id, prop, value) {
  if (prop !== "tracks" && value !== "") {
    object[id][prop] = value;
  } else if (prop === "tracks" && object[id]["tracks"] === undefined) {
    let tracks = [];
    tracks.push(value);
    object[id]["tracks"] = tracks;
  } else if (prop === "tracks" && value !== "") {
    object[id][prop].push(value);
  } else if (value === "") {
    delete object[id][prop];
  }

  return object;
}

console.log(updateRecords(collection, 1245, 'tracks', 'Addicted to Love'));
// console.log(updateRecords(collection, 5439, "artist", "ABBA"));
// console.log(updateRecords(collection, 5439, "tracks", "Take a Chance on Me"));
// console.log(updateRecords(collection, 2548, "artist", ""));
// console.log(updateRecords(collection, 1245, "albumTitle", "Riptide"));
