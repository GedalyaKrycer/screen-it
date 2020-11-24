# screen-it


## Objective 

Recreate the provided movie tracker design using HTML/CSS/JS but preferably with React.  

---



### Trello Board (v1/v2)
https://trello.com/b/s8Ciuzfa


---

## Version 2

*These items were added after the 24 hour deadline.* 

### Deployed Link v2
https://screenit2.netlify.app/

### GitHub Branch 
https://github.com/GedalyaKrycer/screen-it/tree/upgrades

### Figma Link v2
https://www.figma.com/file/54b1hamTwUweFUhBcpyKfP/Planning-Center-V2-Coding-Challenge?node-id=0%3A1


#### Key Features 

* Star Ratings have been refactored from two to one component. 
* Stars Ratings now feature a GSAP3 animation when 5 are selected. 
* Results row demonstrates interactivity with a new css animation hover state and iconography.
* Results row features an improved UI.
* Result tools feature improved icons.
* Edit functionality has been added for results.
* Local storage has been added to preserve entries. 
* Clear All button removes all entries at once and disables when no entries are there. 
* Fixed several bugs from v1.


---


## Version 1

*These items were completed within the 24 hour deadline.* 

### Deployed Link v1
https://screenit.netlify.app/

### Figma Link v1
https://www.figma.com/file/QDFXvzCesbB6eX0gDPSsAQ/Planning-Center-V1-Coding-Challenge?node-id=0%3A1


#### Key Features 

* To help with your evaluation and my production process — the entire project was tracked in the above Trello board. This allows further transparency into my workflows, such as [time spent](https://trello.com/c/te2ZPyp6), [tutorials used](https://trello.com/c/ZQ6hs0bG), and much more. 

* To help simulate my typical design approach, I also rebuilt the provided design in Figma. (Still keeping the original layout spec.) This includes a small design system that has new components, color styles, and font styles. Doing so helped streamline the process in the long run when I had to add to the design for additional features. 

* This app has been built with React and uses ES6+ JS, Hooks, Props, and a Context Provider. I stayed away from using bootstrap and opted to leverage CSS Grid, FlexBox, CSS variables, and other custom styles.

* This site is also a PWA (Progress Web Application), which allows it to be downloaded to a computer or tablet as an offline "app". v1 scores 100% across the board in Google Chrome's Lighthouse report. 
![lighthouse report](./readme-assets/lighthouse-report.png) 

* Attention was paid to adding comments to the code to explain functions and creating TOC in longer style sheets.

* In addition to the 640px size, I also took some liberties and added additional styles for larger / smaller breakpoints. This prevented the layout from breaking, while still staying within the general theme of the design. 
![Responsive Gif](./readme-assets/responsive.gif)  

* Clicking on a movie result will allow you to delete it or visit the IMDB page. This IMDB link is accomplished by combining the OMDB API data (via Axios get request), with a query string on the IMDB URL. 
![Tools Gif](./readme-assets/tools.png)  

* Some simple validation has been added to the filters to make sure they are included and to the API request. If no movie exists, then a placeholder is given.

* Avatars show up the first character of up to the first 3 words. If there are more than two characters the font size gets smaller dynamically. 

* The Movie name hides overflow text and shows an ellipse after a preset width, which changes based on different breakpoints.


