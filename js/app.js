'use strict';

let randomRGB = () => {
  return (Math.floor(Math.random() * 255));
}

let makeNewColor = () => `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`

let desktopColorsSet = false;
let mobileColorsSet = false;
let breakPoint = 768;

$(function(){
  let elements = [];
  elements.push($('.nav-bar'));
  elements.push($('.details'));
  $('.content-holder').children().each(function(){
    elements.push($(this));
  })
  elements.push($('.main-footer'));

  function makeItColorful(){
    for(var i = 0; i < elements.length; i++){
      elements[i].css('background-color', makeNewColor());
    }
  }

  if ($(window).width() > breakPoint){
    makeItColorful();
    desktopColorsSet = true;
  } else if ($(window).width() <= breakPoint){
    makeItColorful();
    mobileColorsSet = true;
  }

  $(window).on('resize', function(){
    if ( $(this).width() > breakPoint && desktopColorsSet === false ){
      mobileColorsSet = false;
      makeItColorful();
      desktopColorsSet = true;
    } else if ( $(this).width() <= breakPoint && mobileColorsSet === false){
      desktopColorsSet = false;
      makeItColorful();
      mobileColorsSet = true;
    }
  });
})
