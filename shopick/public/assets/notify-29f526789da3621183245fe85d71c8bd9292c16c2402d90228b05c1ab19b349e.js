receta=angular.module("receta",["ngRoute"]);var Controller_=function(o){function l(o){console.log(o)}var n=new google.maps.Geocoder;o.count=0,o.focused=!1,o.loadinglocation=!1,o.location_="",o.clearLocation=function(){o.location_="",o.$apply()},o.showLocation=function(){navigator.geolocation?(o.loadinglocation=!0,navigator.geolocation.getCurrentPosition(function(l){var t={lat:l.coords.latitude,lng:l.coords.longitude},a=new google.maps.LatLng(l.coords.latitude,l.coords.longitude);o.lat_=t.lat,o.lon_=t.lon,console.log(o.lat_),n.geocode({location:a},function(l,n){n===google.maps.GeocoderStatus.OK?l[0].formatted_address?(console.log(l[0].formatted_address),o.location_=l[0].formatted_address,o.loadinglocation=!1,o.$apply()):(console.log("No results found"),o.loadinglocation=!1,o.$apply()):(console.log("Geocoder failed due to: "+n),o.loadinglocation=!1,o.$apply()),o.$apply()})},function(){l(!0)})):l(!1)}};Controller_.$inject=["$scope","ngRoute"],receta.controller("myCtrl",Controller_);