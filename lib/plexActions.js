
module.exports = (plex)=>{
  return {
    getLibrarySections() {
      return plex.query('/library/sections')
      .then((data)=>{
        return data.MediaContainer.Directory.map(({title,uuid,key}) => {
          return {
            title,uuid,key
          };
        })
      })
    },
    getPlaylists() {
      return plex.query("/playlists/all")
      .then((data) => {
        return data.MediaContainer.Metadata.map(({title, key, guid}) => {
          return {
            title, key, guid
          }
        })
      })
    },
    createPlaylist({}){},
    get(query){
      return plex.query(query);
    }
  }
};