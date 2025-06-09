# use memo

this code demonstrates the use of the useMemo hook in react to optimize performance by memoizing the result of an expensive calculation, in this case, calculating the factorial of a number.

1. useState hook:

- inputVal is used to store the number entered by the user, and textVal stores the random text input by the user.
- the setInputVal and setTextVal functions update these values based on user input.

2.  useMemo hook:

    - the useMemo hook memoizes the factorial calculation, meaning the function to calculate the factorial will only run when inputVal changes.
    - it checks if the input value is 0 or 1, in which case the factorial is 1.
    - otherwise, it calculates the factorial by looping through the numbers and multiplying them.
    - this helps prevent recalculating the factorial every time the component renders, especially when the textVal changes.

3.  component explanation:

    - the component renders two input fields:
      - one for entering a number to calculate its factorial and another for random text input.
      - the factorial is displayed on the screen, and it only recalculates when the number input changes, improving performance.

in summary, this code showcases how useMemo can be used to memoize a costly calculation and prevent unnecessary recalculations when unrelated state variables are updated.
