import PlexAPI from 'plex-api'
import credentials from 'plex-api-credentials'

module.exports = (app,next)=>{
  const userAndPass = credentials({
    username: 'MainParentUser',
    password: 'aSecretPassword',
    managedUser: {    // Required for Plex managed users
      name: 'RestrictedFamilyMember',
      pin: '1234' // Optional four digit pin code if user is protected
    }
  });

  app.plex = new PlexAPI({
    hostname: '192.168.0.1',
    authenticator: userAndPass
  });
};