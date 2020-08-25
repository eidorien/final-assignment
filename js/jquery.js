//1. accordion script #
$(function () {
  $("#accordion").accordion();

});

// 2. autocomplete
$(function () {

  var availableTags = [
    "ActionScript",
    "AppleScript",
    "Asp",
    "BASIC",
    "C",
    "C++",
    "Clojure",
    "COBOL",
    "ColdFusion",
    "Erlang",
    "Java",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python",
    "Ruby",
    "Scala",
    "Scheme",
    "Step",
    "Progress",
    "Test",
    "ITC",
    "Category",
    "Number",
    "Thank You For This Quarter Kyrra",
  ];
  $("#tags").autocomplete({
    source: availableTags
  });
});

// 3. tabs
$(function () {
  $("#tabs").tabs();
});

// 4. Progress Bar
$(function () {
  $("#progressbar").progressbar({
    value: 95
  });
});

// #5 Effect changer
$(function () {
  // run the currently selected effect
  function runEffect() {
    // get effect type from
    var selectedEffect = $("#effectTypes").val();

    // Most effect types need no options passed by default
    var options = {};
    // some effects have required parameters
    if (selectedEffect === "scale") {
      options = { percent: 50 };
    } else if (selectedEffect === "size") {
      options = { to: { width: 280, height: 185 } };
    }

    // Run the effect
    $("#effect").show(selectedEffect, options, 500, callback);
  };

  //callback function to bring a hidden box back
  function callback() {
    setTimeout(function () {
      $("#effect:visible").removeAttr("style").fadeOut();
    }, 1000);
  };

  // Set effect from select menu value
  $("#button").on("click", function () {
    runEffect();
  });

  $("#effect").hide();
});

// #6 Date Picker
$(function () {
  $("#datepicker").datepicker();
});

// #7 Dialog Box
$(function () {
  $("#dialog").dialog();
});