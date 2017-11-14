/**
 * Returns a singleton
 *
 * @module urlsign
*/

var url = require('url');
require("google-closure-library");
goog.require('goog.crypt.Hmac');
goog.require('goog.crypt.Sha1');
goog.require('goog.crypt.base64');

 module.exports = exports = {
   _latitude: "",
   _longitude: "",
   _zoom: "",
   _size: "",
   _maptype: "",
   _markerColor: "",
   _client: "",
   _privateKey: "",

   /**
   * Initialize the urlsign singleton with a privateKey and other options
   *
   * Must be called first with the privateKey before calling any other functions
   *
   * @param {Object} options            The options object
   * @param {String} options.privateKey The private key to hash the URLs with
   */

   init: function(options) {
     this._latitude = options.latitude;
     this._longitude = options.longitude;
     this._zoom = options.zoom;
     this._size = options.size;
     this._maptype = options.maptype;
     this._markerColor = options.markerColor;
     this._client = options.client;
     this._privateKey = options.privateKey;
   },

   getBaseUrl: function() {
     if (!this._latitude.length || !this._longitude.length || !this._zoom || !this._size || !this._maptype || !this._markerColor || !this._client) {
       throw new Error("One or more parameters are missing!");
     }
     return "https://maps.googleapis.com/maps/api/staticmap?center="
                + this._latitude
                + ","
                + this._longitude
                + "&zoom="
                + this._zoom
                + "&size="
                + this._size
                + "&maptype="
                + this._maptype
                + "&markers=color:"
                + this._markerColor
                + "|"
                + this._latitude
                + ","
                + this._longitude
                + "&client="
                + this._client;
   },

   getUrlToSign: function(baseUrl) {
     var parsedUrl = url.parse(inputUrl, true);
     return parsedUrl.path;
   },

   getDecodedKey: function() {
     if (!this._privateKey.length) {
       throw new Error("Call init() with privateKey first");
     }
     try {
        return goog.crypt.stringToByteArray(
            goog.crypt.base64.decodeString(this._privateKey, true));
      } catch (e) {
        return 'Invalid character in Private Key';
      }
   },
   /**
   * Sign a given URL and return the signature
   *
   * @param  {String} urlToSign URL to sign
   * @throws {Error}            If init() is not called first with a privateKey
   * @return {String}           URL signature
   */
  getUrlSignature: function(decodedKey, urlToSign) {
    if (!this._privateKey.length) {
      throw new Error("Call init() with privateKey first");
    }
    // Create a signature using the private key and the URL-encoded
    // String using HMAC SHA1. This signature will be binary.
    var hmac = new goog.crypt.Hmac(new goog.crypt.Sha1(), decodedSecret, 64);
    var signature = hmac.getHmac(urlToSign);
    // Encode the binary signature into base64 for use within a URL.
    return encodedSignature = goog.crypt.base64.encodeString(
        goog.crypt.byteArrayToString(signature), false);
  },

  checkSignature: function (encodedSignature) {
    encodedSignature = encodedSignature.replace(/\+/g, "-");
    return encodedSignature;
  },
  getSignedUrl: function() {
    var baseUrl = getBaseUrl(this._latitude, this._longitude, this._zoom, this._size, this._maptype, this._client);
    var urlToSign = getUrlToSign(baseUrl);
    var decodedKey = getDecodedKey(this._privateKey);
    var encodedSignature = getUrlSignature(decodedKey, urlToSign);
    var encodedSignature = checkSignature(encodedSignature);
    return baseUrl + "&signature=" + encodedSignature;
  }
};
