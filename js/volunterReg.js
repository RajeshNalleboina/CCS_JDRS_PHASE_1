
//jQuery time
var vRcurrent_fs, vRnext_fs, vRprevious_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches
var name = email = phone =citizen= gender= dob = homeadress = country = state = city = pincode = '';

$(document).on("click", ".next", function () {
  name = $('.name').val();
  email = $('.email').val();
  phone = $('.mobile').val();
  dob = $('.dob').val();
  citizen=$('.citizen').val();
  grnder=$('.gender').val();
  homeadress =$('.homeaddress').val();
  country = $('.country').val();
  state =$('.state').val();
   city =$('.city').val();
    pincode=$('.pincode').val();
  if (name != '' && email != '' && phone != '' &&dob!=''&& citizine!=''&& gender!=''&&  homeadress!='' && state!='' && city!='' && pincode!='') {
    var db = openDatabase('DBNAME', 'IFVersion', 'DESCRIPTION', "SIZE"); 
    var msg; 
// POST
    db.transaction(function (tx) { 
      if(tx) {
        tx.executeSql('INSERT INTO TABLENAME (name,email,phone,dob,gender,citizen,homeaddress,country,state,city) VALUES (?, ?,?,?,?,?,?,?,?,?'), [name,email,phone,dob,gender,citizine,homeaddress,country,state,city];
      } else {
        alert("DB not found")
      }
    });

// GET its req at list of volunters js file
    // db.transaction(function (tx) { 
    //    tx.executeSql('SELECT * FROM TABLENAME', [], function (tx, results) { 
    //       var len = results.rows.length, i; 
    //       msg = "<p>Found rows: " + len + "</p>"; 
    //       document.querySelector('#status').innerHTML +=  msg; 
 
    //       for (i = 0; i < len; i++) { 
    //          msg = "<p><b>" + results.rows.item(i).log + "</b></p>"; 
    //          document.querySelector('#status').innerHTML +=  msg; 
    //       } 
    //    }, null); 
    // }); 

    // if (animating) return false;
    // animating = true;

    // vRcurrent_fs = $(this).parent();
    // vRnext_fs = $(this).parent().next();

    // //activate next step on progressbar using the index of vRnext_fs
    // $("#progressbar li").eq($("fieldset").index(vRnext_fs)).addClass("active");

    // //show the next fieldset
    // vRnext_fs.show();
    // //hide the current fieldset with style
    // vRcurrent_fs.animate({ opacity: 0 }, {
    //   step: function (now, mx) {
    //     //as the opacity of vRcurrent_fs reduces to 0 - stored in "now"
    //     //1. scale vRcurrent_fs down to 80%
    //     scale = 1 - (1 - now) * 0.2;
    //     //2. bring vRnext_fs from the right(50%)
    //     left = (now * 50) + "%";
    //     //3. increase opacity of vRnext_fs to 1 as it moves in
    //     opacity = 1 - now;
    //     vRcurrent_fs.css({
    //       'transform': 'scale(' + scale + ')',
    //       'position': 'absolute'
    //     });
    //     vRnext_fs.css({ 'left': left, 'opacity': opacity });
    //   },
    //   duration: 800,
    //   complete: function () {
    //     vRcurrent_fs.hide();
    //     animating = false;
    //   },
    //   //this comes from the custom easing plugin
    //   easing: 'easeInOutBack'
    // });
  } else {alert("fill all data")}
});

$(".previous").click(function () {
  if (animating) return false;
  animating = true;

  vRcurrent_fs = $(this).parent();
  vRprevious_fs = $(this).parent().prev();

  //de-activate current step on progressbar
  $("#progressbar li").eq($("fieldset").index(vRcurrent_fs)).removeClass("active");

  //show the previous fieldset
  vRprevious_fs.show();
  //hide the current fieldset with style
  vRcurrent_fs.animate({ opacity: 0 }, {
    step: function (now, mx) {
      //as the opacity of vRcurrent_fs reduces to 0 - stored in "now"
      //1. scale vRprevious_fs from 80% to 100%
      scale = 0.8 + (1 - now) * 0.2;
      //2. take vRcurrent_fs to the right(50%) - from 0%
      left = ((1 - now) * 50) + "%";
      //3. increase opacity of vRprevious_fs to 1 as it moves in
      opacity = 1 - now;
      vRcurrent_fs.css({ 'left': left });
      vRprevious_fs.css({ 'transform': 'scale(' + scale + ')', 'opacity': opacity });
    },
    duration: 800,
    complete: function () {
      vRcurrent_fs.hide();
      animating = false;
    },
    //this comes from the custom easing plugin
    easing: 'easeInOutBack'
  });
});

$(document).on("click", ".submit", function () {
  let {name:name, email:email} = {name: "Rajesh", email: "Email"}
  // return false;
  alert("My name is : "+name + " " + email)
})
