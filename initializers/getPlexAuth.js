const Promise = require("bluebird");
const PlexAPI = require('plex-api');

const {PLEX_HOST,PLEX_PIN,PLEX_USER,PLEX_PASSWORD} = process.env;

module.exports = (app,next)=>{
  console.log('initializing plex api client');

  app.plex = new PlexAPI({
    hostname: PLEX_HOST,
    port: 32400,
    username: PLEX_USER,
    password: PLEX_PASSWORD
  });

  const plexActions = require("../lib/plexActions")(app.plex);

  Promise.all([
    plexActions.getLibrarySections(),
    plexActions.getPlaylists(),
    plexActions.get('/library/recentlyAdded')
  ])
  .then(([libraries,playlists,info]) => {
    app.playlists = playlists;
    app.libraries = libraries;
    console.log(JSON.stringify(info));
    next();
  })
  .catch((err)=>{
    console.log('Error encountered loading plex data');
    next(err);
  })
};