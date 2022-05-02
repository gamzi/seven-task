# Seven task

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Assumptions and reasons for the chosen approach

* I assume that the data for various shows, including their images, would come from an API. In this implementation i made a dummy representation of that response as `itemList`, for which i import the local images with `require`.

* I assume that the card dimensions are following the 16:9 aspect ratio, my measurements in Photoshop for this were off by a pixel or two but i decided to go with my gut feeling of what the designer wanted (16:9) and implemented a solution for card sizing that follows the aspect ratio no matter what card width we set. In our case there are 3 different hardcoded card widths, as measured in the design files, but the card should now also resize as 16:9 when the screen is less than 375 or we want to add more card widths in the future.

* I added truncating/ellipsis for long show titles as i would expect longer show titles than just the ones in the design (ie. It's Always Sunny in Philadelphia)

* As the provided designs were not in formats like Figma/Sketch but i measured them in photoshop, and as i am not aware of a design system here that would dictate standard sizings (ie. padding, margin..), i went with what seemed to me like logical numbers. Due to this, the size of the 7 logo in the card footer does not perfectly match the one in the design, this is because in my implementation the footer has a padding of 10px and the logo will be as high/large as the leftover space in the footer. This was a conscious decision on my part as i thought i should prioritize the logical/design consistency of the padding and footer sizing.

* The font was not provided so i went left the one from `create-react-app`.

* At a certain screen size the card can only show as one per row, so i decided to center them at that point insted of the `space-between` content justification in the design.

* I am not too opinionated on my coding style, so things like "destructuring props" or "each component property is a new line" are what i thought looks better at the moment but i'd be happy to change if necessary.

* I assumed that we want to close the panel not only when clicking the card inside the panel but also when clicking the same card in the grid. The assignment description wasn't too clear on that but i went with what i thought was right.

### What could you have done better if time was not a constraint

* The panel, regrettably, persists in the DOM even when it is not in use. This is to allow us the 400ms animation when the panel closes instead of instantly removing it. For now i wanted to avoid what i assume would be unecessary complications in the code so didn't think it was worth it to introduce something like `timeout`.
Although i don't think that the simple panel being in the dom is a big issue i would maybe try to find out if there was an elegant solution to remove the panel only AFTER the 400ms animatio ends.

* Tests are i think they my weakest link here and the "hardcoded data" changed what i would have usually tried to do. For example, normally i would have looked into mocking the API response with some sort of mock data, and then used that mock data to check if the correct card was shown.
I would like to spend more time on tests in general.