# google-signed-url #

A utility to sign static map URLs.

Inspired by [url-signer](https://github.com/kamilwaheed/url-signer).

## Usage ##

You must first initialize the singleton:
```javascript
var urlSign = require('google-signed-url');

urlSign.init({
    latitude: sitereport.latitude,
    longitude: sitereport.longitude,
    zoom: 19,
    size: '600x600',
    maptype: 'hybrid',
    markerColor: markerColor,
    client: process.env.GOOGLE_STATIC_MAPS_CLIENT_ID,
    privateKey: process.env.GOOGLE_MAPS_PRIVATE_KEY
  });
```
Then you can sign the URL:
```javascript
var signedUrl = urlSign.getSignedUrl();
```
You don't need to pass in any additional parameters.
