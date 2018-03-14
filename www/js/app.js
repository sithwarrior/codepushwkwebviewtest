// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'pascalprecht.translate'])

.config(function($translateProvider){

  $translateProvider.useStaticFilesLoader({
      prefix: "translations/",
      suffix: ".json"
  });

  $translateProvider.use('en');
  $translateProvider.fallbackLanguage('en');
  $translateProvider.preferredLanguage('en');

})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      codePush.sync();

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('mainCtrl', function(){
  var ctrl = this;

  ctrl.takePicture = function() {

    let cameraOptions = {
      destinationType	: 1,
      sourceType : 0,
      allowEdit : false,
      encodingType : 0,
      mediaType : 0,
      correctOrientation : true
    }

    navigator.camera.getPicture(function(imageURI) {
      var image = document.getElementById('picture');
      image.src = imageURI.substring(7);

    
    }, function(error) {
      console.log('error!!')
    }, cameraOptions);
  }

})
