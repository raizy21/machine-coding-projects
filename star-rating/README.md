# star rating

the StarRating component allows users to select a rating from 1 to 5 stars.
it also includes a hover effect that visually highlights the stars as the user hovers over them, making the interaction more intuitive.

state management:

- rating: tracks the user's selected star rating.
- hover: tracks the star currently being hovered over.

core functions:

- setRating: updates the rating state when a star is clicked, setting the user's selected rating.
- setHover: temporarily updates the hover state as the user hovers over a star.
- onMouseLeave: resets the hover state to the current rating when the mouse leaves the star, so the previously selected rating remains highlighted.

rendering stars:

- the component maps over numbers 1 through 5 to render the stars as buttons. each star is clickable and highlights on hover.
- the class of each star (on or off) is determined based on whether the star's number is less than or equal to the hovered star or selected rating.

styling:

- the stars are rendered as buttons with a star character (★).
- when hovered or selected, the star changes its style to indicate it's active (e.g., a filled star).
- this component is a simple star rating system with interactive visual feedback, created using basic react state and event handling.
