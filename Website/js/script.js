$(document).ready(function () {
  $('#fullpage').fullpage({ //initialize
    //set options
    sectionsColor: ['#0767A3', '#0767A3', '#0767A3'],
    // navigation: false,
    // navigationPosition: 'right',
    anchors: ['section1', 'section2', 'section3'],
    afterLoad: function (origin, destination, direction) {
      if (destination.index == 0) {
        moveRocket.play();
        title.play();


      }

      else if (destination.index == 1) {

        header1.play();
        header2.play();
       

      }

      else{

        section3Img1.play();
        header3.play();
        header4.play();

      }


    }

  });

  fullpage_api.setKeyboardScrolling(false);
  fullpage_api.setAllowScrolling(false);


  $('.menu').click(function() {

    document.getElementById("unlock").className = "fas fa-play play";
    document.getElementById("unlockColour").className = "card4";
    
 
    
    
  });



});




tippy('.fyi', {

  content: 'Quizzy is an online quiz app that aims to test children’s knowledge on parts and anatomies of vehicles.',
  placement: 'bottom',

});


tippy('.share', {

  content: 'Share this quiz!',
  placement: 'left',


});

tippy('.name', {

  content: 'Change username',
  placement: 'bottom',


});

var moveRocket = anime({
  targets: '.rocket',
  keyframes: [

    { translateY: -100 },

    { translateY: 15 },

  ],

  duration: 2000,
  easing: 'easeOutElastic(1, .8)',


});


var header1 = anime({
  autoplay: false,
  targets: '.header1',
  translateY: [-2000, 0],
  opacity: [0, 1],
  easing: 'easeInBounce',
  duration: 1000,
  easing: 'easeInSine'

});


var header2 = anime({
  autoplay: false,
  targets: '.header2',
  translateY: [-2000, 0],
  opacity: [0, 1],
  easing: 'easeInOutSine',
  duration: 500 

});

var header3 = anime({

  autoplay: false,
  targets: '.header3',
  translateX: [-1000,0],
  translateX: [1000,0],
  duration: 1000

})

var header4 = anime({

  autoplay: false,
  targets: '.header4',
  translateX: [-1000,0],
  translateX: [1000,0],
  duration: 1500

})


var section3Img1 = anime({
  autoplay: false,
  targets: '.section3Img1',
  translateX: [-1500, 0],
  translateX: [100, 0],
  easing: 'easeInOutSine',
  loop: true,
  duration: 2000
   


});


var title = anime ({

  autoplay: false,
  targets: '.first',
  translateX: [-1000,0],
  translateX: [1000,0],
  duration: 1500

 
   


})


function getData() {

  var name = document.getElementById("name").value;

  document.getElementById("display").innerHTML = "Hello! " + name;
  document.getElementById("displayName").innerHTML = "Hello! " + name;

}


function checkName() {

  var emptyName = true;

  var subject = document.getElementById("name").value;

  if (subject != ""){

    fullpage_api.moveSectionDown();
    getData();


  }


  else{

    document.getElementById("name").placeholder = "Please enter a username before starting the game."
    
  }
}




$('#quiz').quiz({

  counterFormat: 'Question %current of %total',
  allowIncorrect: false,
  questions: [

    {
      'q': 'What is this car part? <img src="images/wheel.svg" class = "veh1" alt="Wheel Picture">',
      'options': [
        'Wheel',
        'Window',
        'Seat',
        'Headlight'
      ],
      'correctIndex': 0,
      'correctResponse': 'Correct answer.',
      'incorrectResponse': 'Incorrect answer. Please try again.'
    },

    {

      'q': 'What is this car part? <img src = "images/steeringwheel.svg" alt = "Steering Wheel Picture"> ',
      'options': [
        'Wheel',
        'Door',
        'Steering wheel',
        'Bumpers'

      ],

      'correctIndex': 2,
      'correctResponse': 'Correct answer.',
      'incorrectResponse': 'Incorrect answer. Please try again.'
    },

    {

      'q': 'What is this car part? <img src = "images/door.svg" alt = "Door Picture">',
      'options': [
        'Headlight',
        'Door',
        'License Plate',
        'Bumpers'

      ],

      'correctIndex': 1,
      'correctResponse': 'Correct answer.',
      'incorrectResponse': 'Incorrect answer. Please try again.'
    },

    {

      'q': 'What is this car part? <img src = "images/speedmeter.svg" alt = "Headlight Picture">',
      'options': [
        'Speed Meter',
        'Door',
        'License Plate',
        'Bumpers'

      ],

      'correctIndex': 0,
      'correctResponse': 'Correct answer.',
      'incorrectResponse': 'Incorrect answer. Please try again.'
    },

    {

      'q': 'A sample question? <img src = "images/carbattery.svg" alt = "Car Battery">',
      'options': [
        'Car Battery',
        'Door',
        'Tailgate',
        'Turn Signal'

      ],

      'correctIndex': 0,
      'correctResponse': 'Correct answer.',
      'incorrectResponse': 'Incorrect answer. Please try again.'
    }
  ]

});



























