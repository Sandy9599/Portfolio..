
$(document).ready(function() {
  // Check if a theme preference is stored in local storage
  const currentTheme = localStorage.getItem('theme');

  // Set initial theme based on stored preference or default to light theme
  if (currentTheme) {
    $('body').addClass(currentTheme);
  } else {
    $('body').addClass('dark-theme'); // Default to light theme
  }

  // Theme toggle button click event
  $('.theme-toggle').click(function() {
    // Toggle between light and dark themes
    $('body').toggleClass('light-theme dark-theme');

    // Update theme preference in local storage
    const theme = $('body').hasClass('dark-theme') ? 'dark-theme' : 'light-theme';
    localStorage.setItem('theme', theme);
  });
});


$(document).ready(function() {
  // Get reference to the scroll-to-top button element
  let $scrollToTopBtn = $("#scrollToTopBtn");

  // Show/hide the scroll-to-top button based on scroll position
  $(window).scroll(function() {
    if ($(this).scrollTop() > 20) {
      $scrollToTopBtn.fadeIn();
    } else {
      $scrollToTopBtn.fadeOut();
    }
  });

  // Smooth scroll to top when scroll-to-top button is clicked
  $scrollToTopBtn.click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });
});



function typeEffect(targetElement, text, speed) {
  let index = 0;
  const typingInterval = setInterval(() => {
    if (index <= text.length) {
      targetElement.textContent = text.slice(0, index);
      index++;
    } else {
      clearInterval(typingInterval); // Stop the interval once typing is complete
    }
  }, speed);
}

window.onload = function() {
  const name = "Sandeep Gautam";
  const welcomeMessage = "Welcome to my portfolio. I'm a passionate and aspiring Web Designer and Developer with a strong desire to create innovative solutions. With a deep love for coding and problem-solving, I am constantly seeking opportunities to learn and grow in this ever-evolving field.";

  const nameElement = document.getElementById('name');
  const welcomeElement = document.getElementById('welcome-message');

  typeEffect(nameElement, name, 65); // Slower speed for smoother start
  typeEffect(welcomeElement, welcomeMessage, 60); // Slightly faster speed for welcome message
};

document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  const nameInput = document.getElementById('nameInput');
  const emailInput = document.getElementById('emailInput');

  // Function to set cookie
  function setCookie(name, value, days) {
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      const expires = "expires=" + date.toUTCString();
      document.cookie = name + "=" + value + ";" + expires + ";path=/";
  }

  // Function to get cookie value by name
  function getCookie(name) {
      const cookieName = name + "=";
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
          let cookie = cookies[i].trim();
          if (cookie.indexOf(cookieName) === 0) {
              return cookie.substring(cookieName.length, cookie.length);
          }
      }
      return "";
  }

  // Function to handle form submission
  contactForm.addEventListener('submit', function(event) {
      event.preventDefault();

      // Get values from form inputs
      const name = nameInput.value;
      const email = emailInput.value;

      // Set cookies for name and email
      setCookie('contactName', name, 30); // Cookie expires in 30 days
      setCookie('contactEmail', email, 30);

      // Display success message
      showMessage('Message sent successfully!');
  });

  // Function to display message in message area
  function showMessage(message) {
      const messageArea = document.getElementById('message-area');
      messageArea.textContent = message;

      // Reset message after 3 seconds
      setTimeout(function() {
          messageArea.textContent = '';
      }, 3000);
  }

  // Populate name and email inputs from cookies (if available)
  nameInput.value = getCookie('contactName');
  emailInput.value = getCookie('contactEmail');
});


document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('hourlyRateForm');
  const hourlyRateInput = document.getElementById('hourlyRate');
  const hoursWorkedInput = document.getElementById('hoursWorked');
  const resultContainer = document.getElementById('result');

  form.addEventListener('submit', function(event) {
      event.preventDefault();

      // Get the hourly rate and hours worked entered by the user
      const hourlyRate = parseFloat(hourlyRateInput.value);
      const hoursWorked = parseFloat(hoursWorkedInput.value);

      if (isNaN(hourlyRate) || isNaN(hoursWorked) || hourlyRate <= 0 || hoursWorked <= 0) {
          // Display error message if input is invalid
          resultContainer.textContent = 'Please enter valid positive numbers for both fields.';
      } else {
          // Calculate the total cost
          const totalCost = (hourlyRate * hoursWorked).toFixed(2); // Calculate total cost and format to two decimal places
          resultContainer.textContent = `Total Cost: €${totalCost}`;
      }
  });
});

