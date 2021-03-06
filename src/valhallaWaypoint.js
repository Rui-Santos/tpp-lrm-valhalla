(function() {
  'use strict';

  var L = require('leaflet');

  module.exports = L.Class.extend({
    options: {
    // lrm-valhalla passes these options of locations to the request call
    // to see more options https://github.com/valhalla/valhalla-docs/blob/master/turn-by-turn/api-reference.md#locations
      type: null, // 'break' or 'through'. If no type is provided, the type is assumed to be a break.
      name: null,
      haeding: null,
      heading_tolerance: null,
      street: null,
      way_id: null,
      minimum_reachability: null,
      radius: null
    },
    initialize: function(latLng, name, options) {
      L.Util.setOptions(this, options);
      this.latLng = L.latLng(latLng);
      this.name = name;
    }
  });
})();
