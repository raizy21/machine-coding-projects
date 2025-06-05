# login-and-signup

the login-and-signup component allows users to toggle between a login form and a sign-up form within the same interface.

1. state management:  
   -- the component uses react's useState hook to manage the current form being displayed.  
   -- it starts by setting isLogin to true, which means the login form is displayed initially.  
   -- when isLogin is false, the sign-up form is shown.

2. form toggle buttons:  
   -- there are two buttons: "login" and "signup."  
   clicking on either button updates the isLogin state (true for login and false for sign-up). the active button is highlighted by applying the active class.

3. conditional rendering:  
   -- the component conditionally renders either the login or sign-up form based on the isLogin state.
   -- the login form contains fields for an email address and password, along with a "forgot password?" link.
   -- the sign-up form has fields for an email address, password, and password confirmation.

4. reusable links:  
   -- in the login form, there’s a "signup now" link that switches to the sign-up form when clicked, providing an easy transition between the forms.
