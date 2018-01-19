import PlexAPI from 'plex-api'
import credentials from 'plex-api-credentials'

const {PLEX_PIN,PLEX_USER,PLEX_PASSWORD} = process.env;

export default (app,next)=>{
  const userAndPass = credentials({
    username: PLEX_USER,
    password: PLEX_PASSWORD,
    managedUser: {    // Required for Plex managed users
      name: PLEX_USER,
      pin: PLEX_PIN // Optional four digit pin code if user is protected
    }
  });

  app.plex = new PlexAPI({
    hostname: '192.168.0.1',
    authenticator: userAndPass
  });

  next();
};