# [Tribute Page v2]()
An improved version of my original FCC project.

![Screenshot](screenshot.jpg)

## Purpose/Goal
To remake my original tribute page with the skills I've learned over the past couple of years.  
To improve upon the original and display the difference between where I started and where I'm at now.

## Operation
N/A

## Tech/Libraries Used
* HTML
* CSS
* JavaScript
* React

## Problems/Solutions
* Getting the page's scroll information and applying it within React took a little research. I hade to refresh my knowledge about references within React.
* Getting the bullets to slide in from the sides when within the viewable screen area required looking into several different approaches like IntersectionObserver API, using state Hooks for a functional component version of the site, and more. However I settled on using the window's properties and getting the bounding rect of the elements to then let me change the class based on where it was on the screen. I made it a one way change so that the elements stay where they are after they move. This problem was a bit of challenge, but I figured it out.

## More Information
[Color palette from paletton](https://paletton.com/#uid=50Q0u0kt5i6k3qVoYnmzOedKr9-)
