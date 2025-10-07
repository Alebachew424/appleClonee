// // custom.js

// // Run the code only after the whole page is loaded
// Wait until the DOM is fully loaded before running any code
// $(document).ready(function () {
//   // Function to set up footer behavior based on screen size
//   function setupFooter() {
//     // Check if the screen width is 768px or less (mobile view)
//     if ($(window).width() <= 768) {
//       // Mobile view behavior

//       // 1. Hide all sub-links (<ul> under each <h3>) initially
//       $(".footer-links-wrapper ul").hide();

//       // 2. Add "+" signs to each <h3> if not already added
//       $(".footer-links-wrapper h3").each(function () {
//         // Check if this <h3> already has a span with class "toggle-icon"
//         // to avoid adding multiple "+" signs when resizing the window
//         if ($(this).find(".toggle-icon").length === 0) {
//           // Append a span element with "+" as content to act as the toggle icon
//           $(this).append('<span class="toggle-icon">+</span>');
//         }
//       });

//       // 3. Attach a click event to each <h3> in the footer
//       $(".footer-links-wrapper h3")
//         .off("click") // Remove any previously attached click events to avoid duplicates
//         .on("click", function () {
//           // Get the toggle icon span inside the clicked <h3>
//           let $icon = $(this).find(".toggle-icon");

//           // Get the <ul> directly following this <h3>
//           let $submenu = $(this).next("ul");

//           // Slide toggle the <ul> (show if hidden, hide if visible)
//           $submenu.slideToggle();

//           // Switch the icon between "+" and "x" when clicked
//           if ($icon.text() === "+") {
//             $icon.text("x");
//           } else {
//             $icon.text("+");
//           }
//         });
//     } else {
//       // Desktop / Tablet view behavior

//       // Always show all sub-links
//       $(".footer-links-wrapper ul").show();

//       // Remove any toggle icons because we don't need them on desktop/tablet
//       $(".footer-links-wrapper .toggle-icon").remove();

//       // Unbind any click events on <h3> to prevent accidental toggling
//       $(".footer-links-wrapper h3").off("click");
//     }
//   }

//   // Run the setup function once when the page loads
//   setupFooter();

//   // Run the setup function again whenever the window is resized
//   // This ensures the footer behaves correctly if the user switches between mobile and desktop sizes
//   $(window).resize(function () {
//     setupFooter();
//   });
// });

// ============================2nd ways using custom.js

// // Run the code only after the whole page is loaded
// $(document).ready(function () {
//   // Function to check screen size and apply footer behavior
//   function setupFooter() {
//     if ($(window).width() <= 768) {
//       //  Mobile view behavior

//       // 1 Hide all sub-links initially
//       $(".footer-links-wrapper ul").hide();

//       // 2 Add "+" signs if not already added
//       $(".footer-links-wrapper h3").each(function () {
//         // Avoid duplicate icons when resizing window
//         if ($(this).find(".toggle-icon").length === 0) {
//           // Add <span> inside <h3> → example: <h3>Title <span class="toggle-icon">+</span></h3>
//           $(this).append('<span class="toggle-icon">+</span>');
//         }
//       });

//       // 3 Attach click event to each footer heading
//       $(".footer-links-wrapper h3")
//         .off("click") // remove old click handlers (avoid duplicates when resizing)
//         .on("click", function () {
//           let $icon = $(this).find(".toggle-icon"); // The + or x icon
//           let $submenu = $(this).next("ul"); // The <ul> under the clicked <h3>

//           // Slide toggle the corresponding list
//           $submenu.slideToggle();

//           // Switch between "+" and "x"
//           if ($icon.text() === "+") {
//             $icon.text("x");
//           } else {
//             $icon.text("+");
//           }
//         });
//     } else {
//       //  Desktop / Tablet view behavior

//       // Always show all sub-links
//       $(".footer-links-wrapper ul").show();

//       // Remove toggle icons when not needed
//       $(".footer-links-wrapper .toggle-icon").remove();

//       // Unbind click events to prevent accidental triggers
//       $(".footer-links-wrapper h3").off("click");
//     }
//   }

//   // Run setup once when page loads
//   setupFooter();

//   // Run setup again whenever window is resized
//   $(window).resize(function () {
//     setupFooter();
//   });
// });

//=========================3rd ways
// ================== ADDED JS START FOR FOOTER COLLAPSE ==================
// $(document).ready(function () {
//   $(".footer-links-wrapper h3").click(function () {
//     if ($(window).width() <= 768) {
//       $(this).toggleClass("iconRotator"); // + -> x
//       $(this).next("ul").slideToggle(); // show/hide sub-links
//     }
//   });
// });

// ================== ADDED JS END FOR FOOTER COLLAPSE ==================





//======4th ways
// Wait until the DOM is fully loaded before executing any jQuery code
$(document).ready(function () {

  // Define a function to reset the visibility of footer links based on screen width
  function resetFooterLinks() {
    //  (i.e., desktop view)
    if ($(window).width() > 768) {
      // Show all <ul> elements inside .footer-links-wrapper (make sub-links visible)
      $(".footer-links-wrapper ul").show();

      // Remove the 'iconRotator' class from all <h3> elements (reset icon state)
      $(".footer-links-wrapper h3").removeClass("iconRotator");
    } else {
      // If in mobile view (≤768px), hide all <ul> elements (collapse sub-links)
      $(".footer-links-wrapper ul").hide();
    }
  }

  // Run the resetFooterLinks function once when the page first loads
  resetFooterLinks();

  // Attach an event listener to the window resize event
  $(window).resize(function () {
    // Re-run the resetFooterLinks function whenever the window is resized
    resetFooterLinks();
  });

  // Attach a click event listener to all <h3> elements inside .footer-links-wrapper
  $(".footer-links-wrapper h3").click(function () {
    // Only execute the toggle logic if the screen width is 768px or less (mobile view)
    if ($(window).width() <= 768) {
      // Toggle the 'iconRotator' class on the clicked <h3> (e.g., rotate plus icon to X)
      $(this).toggleClass("iconRotator");

      // Toggle the visibility of the next <ul> element (expand/collapse sub-links)
      $(this).next("ul").slideToggle();
    }
  });

});
