const pkg = require('../package.json');

// the default timeout of socket connection
const SOCKET_TIMEOUT = 15000;
// the default reconnect interval of ntripcaster
const RECONNECT_INTERVAL = 2000;
// expected response from the ntrip caster
const REPLY_ACCEPT = 'HTTP/1.1 200 OK'  // Ntrip 2.0
const REPLY_LEGACY_ACCEPT = 'ICY 200 OK'; // Ntrip 1.0, shoutcast-style
// the ntripclient userAgent
const USER_AGENT = `NTRIP NtripClientJs/${pkg.version}`;

module.exports = {
  SOCKET_TIMEOUT,
  RECONNECT_INTERVAL,
  REPLY_ACCEPT,
  REPLY_LEGACY_ACCEPT,
  USER_AGENT
};
