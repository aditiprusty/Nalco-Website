// Card options for Digital Business
var linkArray = [
    { text: 'Admin', url: '#' },
    { text: 'Change Password', url: '#' },
    { text: 'Profile', url: '#c' },
    { text: 'CLMS', url: '#' },
    { text: 'eGreetings ->', url: '#', submenu: [
      {text: 'option1', url: '#'},
      {text: 'option2', url: '#'},
      {text: 'option3', url: '#'}
      ] }
  ];
  
      // Iterate through the array and generate list items with links
      for (var i = 0; i < linkArray.length; i++) {
        var linkItem = linkArray[i];
        var listItem = '<li><a href="' + linkItem.url + '">' + linkItem.text + '</a>';
        
        if (linkItem.submenu) {
          listItem += '<ul class="submenu">';
          for (var j = 0; j < linkItem.submenu.length; j++) {
            var submenuItem = linkItem.submenu[j];
            listItem += '<li><a href="' + submenuItem.url + '">' + submenuItem.text + '</a></li>';
          }
          listItem += '</ul>';
        }
      
        listItem += '</li>';
        
        $('#card1').append(listItem);
      }
      
      // Hover toggle for submenu visibility
      $('.submenu').parent().hover(
        function() {
          $(this).children('.submenu').fadeIn('fast');
  },
  function() {
    $(this).children('.submenu').fadeOut('fast');
  }
);


    
      
      


  var linkArray = [
    { text: 'Admin', url: '#' },
      { text: 'Change Password', url: '#' },
      { text: 'Hrms', url: '#' },
      { text: 'eGreetings ->', url: '#', submenu: [
        { text: 'option1', url: '#' },
        { text: 'option2', url: '#' },
        { text: 'option3', url: '#' }
      ] }
  ];

  // Iterate through the array and generate list items with links
  for (var i = 0; i < linkArray.length; i++) {
    var linkItem = linkArray[i];
    var listItem = '<li><a href="' + linkItem.url + '"';
    
    if (linkItem.submenu) {
      listItem += ' class="submenu-toggle"'; // Add submenu-toggle class
    }
    
    listItem += '>' + linkItem.text + '</a>';
    
    if (linkItem.submenu) {
      listItem += '<ul class="submenu">';
      for (var j = 0; j < linkItem.submenu.length; j++) {
        var submenuItem = linkItem.submenu[j];
        listItem += '<li><a href="' + submenuItem.url + '">' + submenuItem.text + '</a></li>';
      }
      listItem += '</ul>';
    }

    listItem += '</li>';
  
    $('#card2').append(listItem);
  }
  
  // Hover toggle for submenu visibility
  $('.submenu').parent().hover(
    function() {
      $(this).children('.submenu').fadeIn('fast');
    },
    function() {
      $(this).children('.submenu').fadeOut('fast');
    }
  );









var linkArray = [
  { text: 'Admin', url: '#' },
  { text: 'CLMS', url: '#' },
  { text: 'Change Password', url: '#' },
  { text: 'Profile', url: '#c' },
  { text: 'eGreetings ->', url: '#', submenu: [
    { text: 'option1', url: '#' },
    { text: 'option2', url: '#' },
    { text: 'option3', url: '#' }
  ] }
];

// Iterate through the array and generate list items with links
for (var i = 0; i < linkArray.length; i++) {
var linkItem = linkArray[i];
var listItem = '<li><a href="' + linkItem.url + '"';

if (linkItem.submenu) {
  listItem += ' class="submenu-toggle"'; // Add submenu-toggle class
}

listItem += '>' + linkItem.text + '</a>';

if (linkItem.submenu) {
  listItem += '<ul class="submenu">';
  for (var j = 0; j < linkItem.submenu.length; j++) {
    var submenuItem = linkItem.submenu[j];
    listItem += '<li><a href="' + submenuItem.url + '">' + submenuItem.text + '</a></li>';
  }
  listItem += '</ul>';
}

listItem += '</li>';

$('#card3').append(listItem);
}

// Hover toggle for submenu visibility
$('.submenu').parent().hover(
function() {
  $(this).children('.submenu').fadeIn('fast');
},
function() {
  $(this).children('.submenu').fadeOut('fast');
}
);






    var linkArray = [
      { text: 'Admin', url: '#' },
      { text: 'Change Password', url: '#' },
      { text: 'Profile', url: '#c' },
      { text: 'CLMS', url: '#' },
      { text: 'eGreetings ->', url: '#', submenu: [
        { text: 'option1', url: '#' },
        { text: 'option2', url: '#' },
        { text: 'option3', url: '#' }
      ] }
    ];
    
    // Iterate through the array and generate list items with links
    for (var i = 0; i < linkArray.length; i++) {
    var linkItem = linkArray[i];
    var listItem = '<li><a href="' + linkItem.url + '"';
    
    if (linkItem.submenu) {
      listItem += ' class="submenu-toggle"'; // Add submenu-toggle class
    }
    
    listItem += '>' + linkItem.text + '</a>';
    
    if (linkItem.submenu) {
      listItem += '<ul class="submenu">';
      for (var j = 0; j < linkItem.submenu.length; j++) {
        var submenuItem = linkItem.submenu[j];
        listItem += '<li><a href="' + submenuItem.url + '">' + submenuItem.text + '</a></li>';
      }
      listItem += '</ul>';
    }
    
    listItem += '</li>';
    
    $('#card4').append(listItem);
    }
    
    // Hover toggle for submenu visibility
    $('.submenu').parent().hover(
    function() {
      $(this).children('.submenu').fadeIn('fast');
    },
    function() {
      $(this).children('.submenu').fadeOut('fast');
    }
    );





  
    var linkArray = [
      { text: 'Admin', url: '#' },
        { text: 'Change Password', url: '#' },
        { text: 'Hrms', url: '#' },
        { text: 'eGreetings ->', url: '#', submenu: [
          { text: 'option1', url: '#' },
          { text: 'option2', url: '#' },
          { text: 'option3', url: '#' }
        ] }
      ];
      
      // Iterate through the array and generate list items with links
      for (var i = 0; i < linkArray.length; i++) {
      var linkItem = linkArray[i];
      var listItem = '<li><a href="' + linkItem.url + '"';
      
      if (linkItem.submenu) {
        listItem += ' class="submenu-toggle"'; // Add submenu-toggle class
      }
      
      listItem += '>' + linkItem.text + '</a>';
      
      if (linkItem.submenu) {
        listItem += '<ul class="submenu">';
        for (var j = 0; j < linkItem.submenu.length; j++) {
          var submenuItem = linkItem.submenu[j];
          listItem += '<li><a href="' + submenuItem.url + '">' + submenuItem.text + '</a></li>';
        }
        listItem += '</ul>';
      }
      
      listItem += '</li>';
      
      $('#card5').append(listItem);
      }
      
      // Hover toggle for submenu visibility
      $('.submenu').parent().hover(
      function() {
        $(this).children('.submenu').fadeIn('fast');
      },
      function() {
        $(this).children('.submenu').fadeOut('fast');
      }
      );








  
  var linkArray = [
    { text: 'Admin', url: '#' },
    { text: 'CLMS', url: '#' },
    { text: 'Change Password', url: '#' },
    { text: 'Profile', url: '#c' },
    { text: 'eGreetings ->', url: '#', submenu: [
      { text: 'option1', url: '#' },
      { text: 'option2', url: '#' },
      { text: 'option3', url: '#' }
    ] }
  ];
  
  // Iterate through the array and generate list items with links
  for (var i = 0; i < linkArray.length; i++) {
  var linkItem = linkArray[i];
  var listItem = '<li><a href="' + linkItem.url + '"';
  
  if (linkItem.submenu) {
    listItem += ' class="submenu-toggle"'; // Add submenu-toggle class
  }
  
  listItem += '>' + linkItem.text + '</a>';
  
  if (linkItem.submenu) {
    listItem += '<ul class="submenu">';
    for (var j = 0; j < linkItem.submenu.length; j++) {
      var submenuItem = linkItem.submenu[j];
      listItem += '<li><a href="' + submenuItem.url + '">' + submenuItem.text + '</a></li>';
    }
    listItem += '</ul>';
  }
  
  listItem += '</li>';
  
  $('#card6').append(listItem);
  }
  
  // Hover toggle for submenu visibility
  $('.submenu').parent().hover(
  function() {
    $(this).children('.submenu').fadeIn('fast');
  },
  function() {
    $(this).children('.submenu').fadeOut('fast');
  }
  );









      var linkArray = [
        { text: 'Admin', url: '#' },
        { text: 'CLMS', url: '#' },
        { text: 'Change Password', url: '#' },
        { text: 'Profile', url: '#c' },
        { text: 'eGreetings ->', url: '#', submenu: [
          { text: 'option1', url: '#' },
          { text: 'option2', url: '#' },
          { text: 'option3', url: '#' }
        ] }
      ];
      
      // Iterate through the array and generate list items with links
      for (var i = 0; i < linkArray.length; i++) {
      var linkItem = linkArray[i];
      var listItem = '<li><a href="' + linkItem.url + '"';
      
      if (linkItem.submenu) {
        listItem += ' class="submenu-toggle"'; // Add submenu-toggle class
      }
      
      listItem += '>' + linkItem.text + '</a>';
      
      if (linkItem.submenu) {
        listItem += '<ul class="submenu">';
        for (var j = 0; j < linkItem.submenu.length; j++) {
          var submenuItem = linkItem.submenu[j];
          listItem += '<li><a href="' + submenuItem.url + '">' + submenuItem.text + '</a></li>';
        }
        listItem += '</ul>';
      }
      
      listItem += '</li>';
      
      $('#card7').append(listItem);
      }
      
      // Hover toggle for submenu visibility
      $('.submenu').parent().hover(
      function() {
        $(this).children('.submenu').fadeIn('fast');
      },
      function() {
        $(this).children('.submenu').fadeOut('fast');
      }
      );








          var linkArray = [
            { text: 'Admin', url: '#' },
            { text: 'Change Password', url: '#' },
            { text: 'Profile', url: '#c' },
            { text: 'CLMS', url: '#' },
            { text: 'eGreetings ->', url: '#', submenu: [
              { text: 'option1', url: '#' },
              { text: 'option2', url: '#' },
              { text: 'option3', url: '#' }
            ] }
          ];
          
          // Iterate through the array and generate list items with links
          for (var i = 0; i < linkArray.length; i++) {
          var linkItem = linkArray[i];
          var listItem = '<li><a href="' + linkItem.url + '"';
          
          if (linkItem.submenu) {
            listItem += ' class="submenu-toggle"'; // Add submenu-toggle class
          }
          
          listItem += '>' + linkItem.text + '</a>';
          
          if (linkItem.submenu) {
            listItem += '<ul class="submenu">';
            for (var j = 0; j < linkItem.submenu.length; j++) {
              var submenuItem = linkItem.submenu[j];
              listItem += '<li><a href="' + submenuItem.url + '">' + submenuItem.text + '</a></li>';
            }
            listItem += '</ul>';
          }
          
          listItem += '</li>';
          
          $('#card8').append(listItem);
          }
          
          // Hover toggle for submenu visibility
          $('.submenu').parent().hover(
          function() {
            $(this).children('.submenu').fadeIn('fast');
          },
          function() {
            $(this).children('.submenu').fadeOut('fast');
          }
          );





        
        
          var linkArray = [
            { text: 'Admin', url: '#' },
              { text: 'Change Password', url: '#' },
              { text: 'Hrms', url: '#' },
              { text: 'eGreetings ->', url: '#', submenu: [
                { text: 'option1', url: '#' },
                { text: 'option2', url: '#' },
                { text: 'option3', url: '#' }
              ] }
            ];
            
            // Iterate through the array and generate list items with links
            for (var i = 0; i < linkArray.length; i++) {
            var linkItem = linkArray[i];
            var listItem = '<li><a href="' + linkItem.url + '"';
            
            if (linkItem.submenu) {
              listItem += ' class="submenu-toggle"'; // Add submenu-toggle class
            }
            
            listItem += '>' + linkItem.text + '</a>';
            
            if (linkItem.submenu) {
              listItem += '<ul class="submenu">';
              for (var j = 0; j < linkItem.submenu.length; j++) {
                var submenuItem = linkItem.submenu[j];
                listItem += '<li><a href="' + submenuItem.url + '">' + submenuItem.text + '</a></li>';
              }
              listItem += '</ul>';
            }
            
            listItem += '</li>';
            
            $('#card9').append(listItem);
            }
            
            // Hover toggle for submenu visibility
            $('.submenu').parent().hover(
            function() {
              $(this).children('.submenu').fadeIn('fast');
            },
            function() {
              $(this).children('.submenu').fadeOut('fast');
            }
            );







        
        var linkArray = [
          { text: 'Admin', url: '#' },
          { text: 'CLMS', url: '#' },
          { text: 'Change Password', url: '#' },
          { text: 'Profile', url: '#c' },
          { text: 'eGreetings ->', url: '#', submenu: [
    { text: 'option1', url: '#' },
    { text: 'option2', url: '#' },
    { text: 'option3', url: '#' }
  ] }
];

// Iterate through the array and generate list items with links
for (var i = 0; i < linkArray.length; i++) {
var linkItem = linkArray[i];
var listItem = '<li><a href="' + linkItem.url + '"';

if (linkItem.submenu) {
  listItem += ' class="submenu-toggle"'; // Add submenu-toggle class
}

listItem += '>' + linkItem.text + '</a>';

if (linkItem.submenu) {
  listItem += '<ul class="submenu">';
  for (var j = 0; j < linkItem.submenu.length; j++) {
    var submenuItem = linkItem.submenu[j];
    listItem += '<li><a href="' + submenuItem.url + '">' + submenuItem.text + '</a></li>';
  }
  listItem += '</ul>';
}

listItem += '</li>';

$('#card10').append(listItem);
}

// Hover toggle for submenu visibility
$('.submenu').parent().hover(
function() {
  $(this).children('.submenu').fadeIn('fast');
},
function() {
  $(this).children('.submenu').fadeOut('fast');
}
);






        
            var linkArray = [
              { text: 'Admin', url: '#' },
              { text: 'Change Password', url: '#' },
              { text: 'Profile', url: '#c' },
              { text: 'CLMS', url: '#' },
              { text: 'eGreetings ->', url: '#', submenu: [
                { text: 'option1', url: '#' },
                { text: 'option2', url: '#' },
                { text: 'option3', url: '#' }
              ] }
            ];
            
            // Iterate through the array and generate list items with links
            for (var i = 0; i < linkArray.length; i++) {
            var linkItem = linkArray[i];
            var listItem = '<li><a href="' + linkItem.url + '"';
            
            if (linkItem.submenu) {
              listItem += ' class="submenu-toggle"'; // Add submenu-toggle class
            }
            
            listItem += '>' + linkItem.text + '</a>';
            
            if (linkItem.submenu) {
              listItem += '<ul class="submenu">';
              for (var j = 0; j < linkItem.submenu.length; j++) {
                var submenuItem = linkItem.submenu[j];
                listItem += '<li><a href="' + submenuItem.url + '">' + submenuItem.text + '</a></li>';
              }
              listItem += '</ul>';
            }
            
            listItem += '</li>';
            
            $('#card11').append(listItem);
            }
            
            // Hover toggle for submenu visibility
            $('.submenu').parent().hover(
            function() {
              $(this).children('.submenu').fadeIn('fast');
            },
            function() {
              $(this).children('.submenu').fadeOut('fast');
            }
            );








          
          
var linkArray = [
              { text: 'Admin', url: '#' },
                { text: 'Change Password', url: '#' },
                { text: 'Hrms', url: '#' },
                { text: 'eGreetings ->', url: '#', submenu: [
                  { text: 'option1', url: '#' },
                  { text: 'option2', url: '#' },
                  { text: 'option3', url: '#' }
                ] }
              ];
              
              // Iterate through the array and generate list items with links
              for (var i = 0; i < linkArray.length; i++) {
              var linkItem = linkArray[i];
              var listItem = '<li><a href="' + linkItem.url + '"';
              
              if (linkItem.submenu) {
                listItem += ' class="submenu-toggle"'; // Add submenu-toggle class
              }
              
              listItem += '>' + linkItem.text + '</a>';
              
              if (linkItem.submenu) {
                listItem += '<ul class="submenu">';
                for (var j = 0; j < linkItem.submenu.length; j++) {
                  var submenuItem = linkItem.submenu[j];
                  listItem += '<li><a href="' + submenuItem.url + '">' + submenuItem.text + '</a></li>';
                }
                listItem += '</ul>';
              }
              
              listItem += '</li>';
              
              $('#card12').append(listItem);
              }
              
              // Hover toggle for submenu visibility
              $('.submenu').parent().hover(
              function() {
                $(this).children('.submenu').fadeIn('fast');
              },
              function() {
                $(this).children('.submenu').fadeOut('fast');
              }
              );







// Card options for Digital Business
            var linkArray = [
              { text: 'Admin', url: '#' },
              { text: 'Change Password', url: '#' },
              { text: 'Profile', url: '#c' },
              { text: 'CLMS', url: '#' },
              { text: 'eGreetings ->', url: '#', submenu: [
                { text: 'option1', url: '#' },
                { text: 'option2', url: '#' },
                { text: 'option3', url: '#' }
              ] }
            ];
            
            // Iterate through the array and generate list items with links
            for (var i = 0; i < linkArray.length; i++) {
            var linkItem = linkArray[i];
            var listItem = '<li><a href="' + linkItem.url + '"';
            
            if (linkItem.submenu) {
              listItem += ' class="submenu-toggle"'; // Add submenu-toggle class
            }
            
            listItem += '>' + linkItem.text + '</a>';
            
            if (linkItem.submenu) {
              listItem += '<ul class="submenu">';
              for (var j = 0; j < linkItem.submenu.length; j++) {
                var submenuItem = linkItem.submenu[j];
                listItem += '<li><a href="' + submenuItem.url + '">' + submenuItem.text + '</a></li>';
              }
              listItem += '</ul>';
            }
            
            listItem += '</li>';
            
            $('#card_1').append(listItem);
            }
            
            // Hover toggle for submenu visibility
            $('.submenu').parent().hover(
            function() {
              $(this).children('.submenu').fadeIn('fast');
            },
            function() {
              $(this).children('.submenu').fadeOut('fast');
            }
            );







          
          
            var linkArray = [
              { text: 'Admin', url: '#' },
                { text: 'Change Password', url: '#' },
                { text: 'Hrms', url: '#' },
                { text: 'eGreetings ->', url: '#', submenu: [
                  { text: 'option1', url: '#' },
                  { text: 'option2', url: '#' },
                  { text: 'option3', url: '#' }
                ] }
              ];
              
              // Iterate through the array and generate list items with links
              for (var i = 0; i < linkArray.length; i++) {
              var linkItem = linkArray[i];
              var listItem = '<li><a href="' + linkItem.url + '"';
              
              if (linkItem.submenu) {
                listItem += ' class="submenu-toggle"'; // Add submenu-toggle class
              }
              
              listItem += '>' + linkItem.text + '</a>';
              
              if (linkItem.submenu) {
                listItem += '<ul class="submenu">';
                for (var j = 0; j < linkItem.submenu.length; j++) {
                  var submenuItem = linkItem.submenu[j];
                  listItem += '<li><a href="' + submenuItem.url + '">' + submenuItem.text + '</a></li>';
                }
                listItem += '</ul>';
              }
              
              listItem += '</li>';
              
              $('#card_2').append(listItem);
              }
              
              // Hover toggle for submenu visibility
              $('.submenu').parent().hover(
              function() {
                $(this).children('.submenu').fadeIn('fast');
              },
              function() {
                $(this).children('.submenu').fadeOut('fast');
              }
              );








          
          var linkArray = [
            { text: 'Admin', url: '#' },
            { text: 'CLMS', url: '#' },
            { text: 'Change Password', url: '#' },
            { text: 'Profile', url: '#c' },
            { text: 'eGreetings ->', url: '#', submenu: [
    { text: 'option1', url: '#' },
    { text: 'option2', url: '#' },
    { text: 'option3', url: '#' }
  ] }
];

// Iterate through the array and generate list items with links
for (var i = 0; i < linkArray.length; i++) {
var linkItem = linkArray[i];
var listItem = '<li><a href="' + linkItem.url + '"';

if (linkItem.submenu) {
  listItem += ' class="submenu-toggle"'; // Add submenu-toggle class
}

listItem += '>' + linkItem.text + '</a>';

if (linkItem.submenu) {
  listItem += '<ul class="submenu">';
  for (var j = 0; j < linkItem.submenu.length; j++) {
    var submenuItem = linkItem.submenu[j];
    listItem += '<li><a href="' + submenuItem.url + '">' + submenuItem.text + '</a></li>';
  }
  listItem += '</ul>';
}

listItem += '</li>';

$('#card_3').append(listItem);
}

// Hover toggle for submenu visibility
$('.submenu').parent().hover(
function() {
  $(this).children('.submenu').fadeIn('fast');
},
function() {
  $(this).children('.submenu').fadeOut('fast');
}
);
     






              var linkArray = [
                { text: 'Admin', url: '#' },
                { text: 'Change Password', url: '#' },
                { text: 'Profile', url: '#c' },
                { text: 'CLMS', url: '#' },
                { text: 'eGreetings ->', url: '#', submenu: [
                  { text: 'option1', url: '#' },
                  { text: 'option2', url: '#' },
                  { text: 'option3', url: '#' }
                ] }
              ];
              
              // Iterate through the array and generate list items with links
              for (var i = 0; i < linkArray.length; i++) {
              var linkItem = linkArray[i];
              var listItem = '<li><a href="' + linkItem.url + '"';
              
              if (linkItem.submenu) {
                listItem += ' class="submenu-toggle"'; // Add submenu-toggle class
              }
              
              listItem += '>' + linkItem.text + '</a>';
              
              if (linkItem.submenu) {
                listItem += '<ul class="submenu">';
                for (var j = 0; j < linkItem.submenu.length; j++) {
                  var submenuItem = linkItem.submenu[j];
                  listItem += '<li><a href="' + submenuItem.url + '">' + submenuItem.text + '</a></li>';
                }
                listItem += '</ul>';
              }
              
              listItem += '</li>';
              
              $('#card_4').append(listItem);
              }
              
              // Hover toggle for submenu visibility
              $('.submenu').parent().hover(
              function() {
                $(this).children('.submenu').fadeIn('fast');
              },
              function() {
                $(this).children('.submenu').fadeOut('fast');
              }
              );







            
              var linkArray = [
                { text: 'Admin', url: '#' },
                  { text: 'Change Password', url: '#' },
                  { text: 'Hrms', url: '#' },
                  { text: 'eGreetings ->', url: '#', submenu: [
    { text: 'option1', url: '#' },
    { text: 'option2', url: '#' },
    { text: 'option3', url: '#' }
  ] }
];

// Iterate through the array and generate list items with links
for (var i = 0; i < linkArray.length; i++) {
var linkItem = linkArray[i];
var listItem = '<li><a href="' + linkItem.url + '"';

if (linkItem.submenu) {
  listItem += ' class="submenu-toggle"'; // Add submenu-toggle class
}

listItem += '>' + linkItem.text + '</a>';

if (linkItem.submenu) {
  listItem += '<ul class="submenu">';
  for (var j = 0; j < linkItem.submenu.length; j++) {
    var submenuItem = linkItem.submenu[j];
    listItem += '<li><a href="' + submenuItem.url + '">' + submenuItem.text + '</a></li>';
  }
  listItem += '</ul>';
}

listItem += '</li>';

$('#card_5').append(listItem);
}

// Hover toggle for submenu visibility
$('.submenu').parent().hover(
function() {
  $(this).children('.submenu').fadeIn('fast');
},
function() {
  $(this).children('.submenu').fadeOut('fast');
}
);








            
            var linkArray = [
              { text: 'Admin', url: '#' },
              { text: 'CLMS', url: '#' },
              { text: 'Change Password', url: '#' },
              { text: 'Profile', url: '#c' },
              { text: 'eGreetings ->', url: '#', submenu: [
                { text: 'option1', url: '#' },
                { text: 'option2', url: '#' },
                { text: 'option3', url: '#' }
              ] }
            ];
            
            // Iterate through the array and generate list items with links
            for (var i = 0; i < linkArray.length; i++) {
            var linkItem = linkArray[i];
            var listItem = '<li><a href="' + linkItem.url + '"';
            
            if (linkItem.submenu) {
              listItem += ' class="submenu-toggle"'; // Add submenu-toggle class
            }
            
            listItem += '>' + linkItem.text + '</a>';
            
            if (linkItem.submenu) {
              listItem += '<ul class="submenu">';
              for (var j = 0; j < linkItem.submenu.length; j++) {
                var submenuItem = linkItem.submenu[j];
                listItem += '<li><a href="' + submenuItem.url + '">' + submenuItem.text + '</a></li>';
              }
              listItem += '</ul>';
            }
            
            listItem += '</li>';
            
            $('#card_6').append(listItem);
            }
            
            // Hover toggle for submenu visibility
            $('.submenu').parent().hover(
            function() {
              $(this).children('.submenu').fadeIn('fast');
            },
            function() {
              $(this).children('.submenu').fadeOut('fast');
            }
            );









          
                var linkArray = [
                  { text: 'Admin', url: '#' },
                  { text: 'CLMS', url: '#' },
                  { text: 'Change Password', url: '#' },
                  { text: 'Profile', url: '#c' },
                  { text: 'eGreetings ->', url: '#', submenu: [
                    { text: 'option1', url: '#' },
                    { text: 'option2', url: '#' },
                    { text: 'option3', url: '#' }
                  ] }
                ];
                
                // Iterate through the array and generate list items with links
                for (var i = 0; i < linkArray.length; i++) {
                var linkItem = linkArray[i];
                var listItem = '<li><a href="' + linkItem.url + '"';
                
                if (linkItem.submenu) {
                  listItem += ' class="submenu-toggle"'; // Add submenu-toggle class
                }
                
                listItem += '>' + linkItem.text + '</a>';
                
                if (linkItem.submenu) {
                  listItem += '<ul class="submenu">';
                  for (var j = 0; j < linkItem.submenu.length; j++) {
                    var submenuItem = linkItem.submenu[j];
                    listItem += '<li><a href="' + submenuItem.url + '">' + submenuItem.text + '</a></li>';
                  }
                  listItem += '</ul>';
                }
                
                listItem += '</li>';
                
                $('#card_7').append(listItem);
                }
                
                // Hover toggle for submenu visibility
                $('.submenu').parent().hover(
                function() {
                  $(this).children('.submenu').fadeIn('fast');
                },
                function() {
                  $(this).children('.submenu').fadeOut('fast');
                }
                );









          
                    var linkArray = [
                      { text: 'Admin', url: '#' },
                      { text: 'Change Password', url: '#' },
                      { text: 'Profile', url: '#c' },
                      { text: 'CLMS', url: '#' },
                      { text: 'eGreetings ->', url: '#', submenu: [
                        { text: 'option1', url: '#' },
                        { text: 'option2', url: '#' },
                        { text: 'option3', url: '#' }
                      ] }
                    ];
                    
                    // Iterate through the array and generate list items with links
                    for (var i = 0; i < linkArray.length; i++) {
                    var linkItem = linkArray[i];
                    var listItem = '<li><a href="' + linkItem.url + '"';
                    
                    if (linkItem.submenu) {
                      listItem += ' class="submenu-toggle"'; // Add submenu-toggle class
                    }
                    
                    listItem += '>' + linkItem.text + '</a>';
                    
                    if (linkItem.submenu) {
                      listItem += '<ul class="submenu">';
                      for (var j = 0; j < linkItem.submenu.length; j++) {
                        var submenuItem = linkItem.submenu[j];
                        listItem += '<li><a href="' + submenuItem.url + '">' + submenuItem.text + '</a></li>';
                      }
                      listItem += '</ul>';
                    }
                    
                    listItem += '</li>';
                    
                    $('#card_8').append(listItem);
                    }
                    
                    // Hover toggle for submenu visibility
                    $('.submenu').parent().hover(
                    function() {
                      $(this).children('.submenu').fadeIn('fast');
                    },
                    function() {
                      $(this).children('.submenu').fadeOut('fast');
                    }
                    );






                  
                  
                    var linkArray = [
                      { text: 'Admin', url: '#' },
                        { text: 'Change Password', url: '#' },
                        { text: 'Hrms', url: '#' },
                        { text: 'eGreetings ->', url: '#', submenu: [
                          { text: 'option1', url: '#' },
                          { text: 'option2', url: '#' },
                          { text: 'option3', url: '#' }
                        ] }
                      ];
                      
                      // Iterate through the array and generate list items with links
                      for (var i = 0; i < linkArray.length; i++) {
                      var linkItem = linkArray[i];
                      var listItem = '<li><a href="' + linkItem.url + '"';
                      
                      if (linkItem.submenu) {
                        listItem += ' class="submenu-toggle"'; // Add submenu-toggle class
                      }
                      
                      listItem += '>' + linkItem.text + '</a>';
                      
                      if (linkItem.submenu) {
                        listItem += '<ul class="submenu">';
                        for (var j = 0; j < linkItem.submenu.length; j++) {
                          var submenuItem = linkItem.submenu[j];
                          listItem += '<li><a href="' + submenuItem.url + '">' + submenuItem.text + '</a></li>';
                        }
                        listItem += '</ul>';
                      }
                      
                      listItem += '</li>';
                      
                      $('#card_9').append(listItem);
                      }
                      
                      // Hover toggle for submenu visibility
                      $('.submenu').parent().hover(
                      function() {
                        $(this).children('.submenu').fadeIn('fast');
                      },
                      function() {
                        $(this).children('.submenu').fadeOut('fast');
                      }
                      );








                  
                  var linkArray = [
                    { text: 'Admin', url: '#' },
                    { text: 'CLMS', url: '#' },
                    { text: 'Change Password', url: '#' },
                    { text: 'Profile', url: '#c' },
                    { text: 'eGreetings ->', url: '#', submenu: [
                      { text: 'option1', url: '#' },
                      { text: 'option2', url: '#' },
                      { text: 'option3', url: '#' }
                    ] }
                  ];
                  
                  // Iterate through the array and generate list items with links
                  for (var i = 0; i < linkArray.length; i++) {
                  var linkItem = linkArray[i];
                  var listItem = '<li><a href="' + linkItem.url + '"';
                  
                  if (linkItem.submenu) {
                    listItem += ' class="submenu-toggle"'; // Add submenu-toggle class
                  }
                  
                  listItem += '>' + linkItem.text + '</a>';
                  
                  if (linkItem.submenu) {
                    listItem += '<ul class="submenu">';
                    for (var j = 0; j < linkItem.submenu.length; j++) {
                      var submenuItem = linkItem.submenu[j];
                      listItem += '<li><a href="' + submenuItem.url + '">' + submenuItem.text + '</a></li>';
                    }
                    listItem += '</ul>';
                  }
                  
                  listItem += '</li>';
                  
                  $('#card_10').append(listItem);
                  }
                  
                  // Hover toggle for submenu visibility
                  $('.submenu').parent().hover(
                  function() {
                    $(this).children('.submenu').fadeIn('fast');
                  },
                  function() {
                    $(this).children('.submenu').fadeOut('fast');
                  }
                  );









                  
                  var linkArray = [
                        { text: 'Admin', url: '#' },
                        { text: 'Change Password', url: '#' },
                        { text: 'Profile', url: '#c' },
                        { text: 'CLMS', url: '#' },
                        { text: 'eGreetings ->', url: '#', submenu: [
                          { text: 'option1', url: '#' },
                          { text: 'option2', url: '#' },
                          { text: 'option3', url: '#' }
                        ] }
                      ];
                      
                      // Iterate through the array and generate list items with links
                      for (var i = 0; i < linkArray.length; i++) {
                      var linkItem = linkArray[i];
                      var listItem = '<li><a href="' + linkItem.url + '"';
                      
                      if (linkItem.submenu) {
                        listItem += ' class="submenu-toggle"'; // Add submenu-toggle class
                      }
                      
                      listItem += '>' + linkItem.text + '</a>';
                      
                      if (linkItem.submenu) {
                        listItem += '<ul class="submenu">';
                        for (var j = 0; j < linkItem.submenu.length; j++) {
                          var submenuItem = linkItem.submenu[j];
                          listItem += '<li><a href="' + submenuItem.url + '">' + submenuItem.text + '</a></li>';
                        }
                        listItem += '</ul>';
                      }
                      
                      listItem += '</li>';
                      
                      $('#card_11').append(listItem);
                      }
                      
                      // Hover toggle for submenu visibility
                      $('.submenu').parent().hover(
                      function() {
                        $(this).children('.submenu').fadeIn('fast');
                      },
                      function() {
                        $(this).children('.submenu').fadeOut('fast');
                      }
                      );






                    
                    
                      var linkArray = [
                        { text: 'Admin', url: '#' },
                          { text: 'Change Password', url: '#' },
                          { text: 'Hrms', url: '#' },
                          { text: 'eGreetings ->', url: '#', submenu: [
                            { text: 'option1', url: '#' },
                            { text: 'option2', url: '#' },
                            { text: 'option3', url: '#' }
                          ] }
                        ];
                        
                        // Iterate through the array and generate list items with links
                        for (var i = 0; i < linkArray.length; i++) {
                        var linkItem = linkArray[i];
                        var listItem = '<li><a href="' + linkItem.url + '"';
                        
                        if (linkItem.submenu) {
                          listItem += ' class="submenu-toggle"'; // Add submenu-toggle class
                        }
                        
                        listItem += '>' + linkItem.text + '</a>';
                        
                        if (linkItem.submenu) {
                          listItem += '<ul class="submenu">';
                          for (var j = 0; j < linkItem.submenu.length; j++) {
                            var submenuItem = linkItem.submenu[j];
                            listItem += '<li><a href="' + submenuItem.url + '">' + submenuItem.text + '</a></li>';
                          }
                          listItem += '</ul>';
                        }
                        
                        listItem += '</li>';
                        
                        $('#card_12').append(listItem);
                        }
                        
                        // Hover toggle for submenu visibility
                        $('.submenu').parent().hover(
                        function() {
                          $(this).children('.submenu').fadeIn('fast');
                        },
                        function() {
                          $(this).children('.submenu').fadeOut('fast');
                        }
                        );







// Highlight function for Digital Employees
            $('#i1').click(function() {
              $('.cardd').removeClass('highlighted');
              $('#profile').addClass('highlighted');
            });

            $('#i2').click(function() {
              $('.cardd').removeClass('highlighted');
              $('#mydata').addClass('highlighted');
            });

            $('#i3').click(function() {
              $('.cardd').removeClass('highlighted');
              $('#ls').addClass('highlighted');
            });

            $('#i4').click(function() {
              $('.cardd').removeClass('highlighted');
              $('#mbc').addClass('highlighted');
            });

            $('#i5').click(function() {
              $('.cardd').removeClass('highlighted');
              $('#pfa').addClass('highlighted');
            });

            $('#i6').click(function() {
              $('.cardd').removeClass('highlighted');
              $('#ia').addClass('highlighted');
            });

            $('#i7').click(function() {
              $('.cardd').removeClass('highlighted');
              $('#nms').addClass('highlighted');
            });

            $('#i8').click(function() {
              $('.cardd').removeClass('highlighted');
              $('#pr').addClass('highlighted');
            });

            $('#i9').click(function() {
              $('.cardd').removeClass('highlighted');
              $('#vigilence').addClass('highlighted');
            });

            $('#i10').click(function() {
              $('.cardd').removeClass('highlighted');
              $('#ta').addClass('highlighted');
            });

            $('#i11').click(function() {
              $('.cardd').removeClass('highlighted');
              $('#chs').addClass('highlighted');
            });

            $('#i12').click(function() {
              $('.cardd').removeClass('highlighted');
              $('#em').addClass('highlighted');
            });
            
          
            





// Highlight function for Digital Business            
            $('#ii1').click(function() {
              $('.cardd').removeClass('highlighted');
              $('#capex').addClass('highlighted');
            });

            $('#ii2').click(function() {
              $('.cardd').removeClass('highlighted');
              $('#cms').addClass('highlighted');
            });

            $('#ii3').click(function() {
              $('.cardd').removeClass('highlighted');
              $('#hris').addClass('highlighted');
            });

            $('#ii4').click(function() {
              $('.cardd').removeClass('highlighted');
              $('#cem').addClass('highlighted');
            });

            $('#ii5').click(function() {
              $('.cardd').removeClass('highlighted');
              $('#eGreetings').addClass('highlighted');
            });

            $('#ii6').click(function() {
              $('.cardd').removeClass('highlighted');
              $('#perquisites').addClass('highlighted');
            });

            $('#ii7').click(function() {
              $('.cardd').removeClass('highlighted');
              $('#mis').addClass('highlighted');
            });

            $('#ii8').click(function() {
              $('.cardd').removeClass('highlighted');
              $('#hr').addClass('highlighted');
            });

            $('#ii9').click(function() {
              $('.cardd').removeClass('highlighted');
              $('#admin').addClass('highlighted');
            });

            $('#ii10').click(function() {
              $('.cardd').removeClass('highlighted');
              $('#clms').addClass('highlighted');
            });

            $('#ii11').click(function() {
              $('.cardd').removeClass('highlighted');
              $('#prm').addClass('highlighted');
            });

            $('#ii12').click(function() {
              $('.cardd').removeClass('highlighted');
              $('#loans').addClass('highlighted');
            });

 
            




// Search function
            const search = () =>{
              const searchbox = document.getElementById("search-input").value.toUpperCase();
              const storeitems = document.getElementById("container")
              const product = document.querySelectorAll(".product")
              const pname = storeitems.getElementsByTagName("a")
          
              for(var i = 0; i < pname.length; i++){
                  let match = product[i].getElementsByTagName('a')[0];
          
                  if(match){
                      let textvalue = match.textContent || match.innerHTML
          
                      if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                          product[i].style.display = "";
                      }
                      else{
                          product[i].style.display = "none";
                      }
                  }
              }
          }