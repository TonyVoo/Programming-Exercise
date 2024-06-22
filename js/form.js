document.addEventListener('DOMContentLoaded', () => {
  // Handle sign-in form submission
  const signInForm = document.querySelector('form[action="http://localhost:3000/api/auth/login"]');
  if (signInForm) {
      signInForm.addEventListener('submit', async (e) => {
          e.preventDefault();
          const emailOrUsername = document.getElementById('email-username').value;
          const password = document.getElementById('password').value;
          try {
              const response = await fetch('http://localhost:3000/api/auth/login', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ emailOrUsername, password }),
              });
              if (response.ok) {
                  const data = await response.json();
                  localStorage.setItem('token', data.token);
                  alert('Sign in successful!');
                  window.location.href = '/protected-page.html';
              } else {
                  alert('Sign in failed. Please check your credentials.');
              }
          } catch (error) {
              console.error('Error:', error);
              alert('An error occurred. Please try again.');
          }
      });
  }

  // Handle sign-up form submission
  const signUpForm = document.querySelector('form[action="http://localhost:3000/api/auth/register"]');
  if (signUpForm) {
      signUpForm.addEventListener('submit', async (e) => {
          e.preventDefault();
          const emailOrUsername = document.getElementById('email-username').value;
          const password = document.getElementById('password').value;
          const confirmedPassword = document.getElementById('confirmed-password').value;
          if (password !== confirmedPassword) {
              alert('Passwords do not match. Please try again.');
              return;
          }
          try {
              const response = await fetch('http://localhost:3000/api/auth/register', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ emailOrUsername, password }),
              });
              if (response.ok) {
                  alert('Sign up successful! Please sign in.');
                  window.location.href = '/sign-in.html';
              } else {
                  alert('Sign up failed. Please try again.');
              }
          } catch (error) {
              console.error('Error:', error);
              alert('An error occurred. Please try again.');
          }
      });
  }
});
