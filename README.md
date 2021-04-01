# code_louisville_2021_AC
Repository for my Code Louisville Project

Hello! Welcome to my project, "Mimi's Memories and Musings". I created this as a tribute o my grandmother who recently wrote many stories and gifted them to our family. They are not all added, but if you would like to read one, feel free to take a look at "What a View". Thank you for taking the time to review!

As for the requirements, please see below.

Page Layout: The base page to begin on is Index.html. Then the rest may be navigated as the user would like. The way my page is laid out is first the header, with links to the home page, as well a link to "Feet to the Fire" homepage, whise is relevant to the website material. Next is the body, which is a picture, then text, which switches between rows and columns depending on the screen width. Next is the list of stories this website was made for, and they can be seen and selected on any page in this website. Following that is a comment section where the reader can leave their name and thoughts if they choose.

CSS Requirement 1: Hamburger Menu- I created a hamburger menu that will be displayed on mobile screens. When the screen size is lower than 700 px, there will be a hambugr menu for the main menu in the header.

CSS Requirement 2: Flex-Box- I used flex-box to style the body of each page. It is a responsive layout that will format the story and picture from one column to two based on the users screen size.

CSS back-up Requirement 3: Nth-Child- I used the nth:child the target every other story name in the list under the word "Stories". At the momoent, it alternates the color of each story title within the list.

JS Requirement: Comment section- At the bottom of each page in my website, there is a section where the reader can add comments. There are two inputs, one for their name, which will be entered with a colon and a space, then their comment following immediatly after.

*Note on the Media Queries. I origionally read the requirements as there were two sets of media queries required, not two total. So I ended up putting in 2 sets, 4 media queries total, and they are explained below. Once I got clrification on the requirements, I decided to leave them alone as they work as they currently stand.

Media Query 1: There is a media query on the main menu in the header that allows the spacing of the menu to match the size of the screen. For page min 1000px, it will be in 2 columns, for page min 700 px, it will be in 1 column, and anything less then that will be a hamburger menu. Additionally, at 10000 px, the flexbox will transition from 2 rows, to 2 columns to provide a responsive layout.

Media Query 2: There is also a media query on the list of story names on each page. For page min 800px, it will be in 4 columns, for page-min 600px, it will be in 2 columns, and anything less will be in 1.
