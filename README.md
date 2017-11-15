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

## License ##
MIT License

Copyright (c) 2017 Anne Canoune

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
