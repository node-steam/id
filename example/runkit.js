const SteamID = require('@node-steam/id').ID;

const ID = new SteamID('STEAM_0:0:11101');

const x = ID.getSteamID64();

return x;
