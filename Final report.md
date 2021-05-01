# EZScore

Team members

  - Sam Baumann, Rob Bray, Brandan Roachell, Taylor Rogers

# Introduction
This project is a scorekeeping application for baseball coaches. The main taggers currently competing on the market both have the same limited flexibility. This project idea is not novel, but it fills the need of the market by introducing more flexibility within the app that competitors lack, such as splitting rosters. It resembles iScore and GameChanger, two widely used scorekeeping apps for multiple sports, including baseball. Our focus for the app was to differentiate it from existing options on the market by filling needs that existing options do not fulfill, such as supporting intrasquad scrimmages. 

For a flexible application that can work on many different devices, we chose to create a web app, using Django for the backend and react for the frontend. Only one of us had used either of these technologies before, so there was a bit of a learning curve, but once we all felt comfortable with the technologies, we created the backend models, then the frontend.

We did not accomplish all of our goals for this project. Between learning the technologies and creating the backend, not much time was left to work on the frontend, especially the tagging interface. While we did not meet all of our goals, we still feel like this project was a success because we learned a lot.

# Customer value
There were no changes regarding customer value from our project proposal.

# Technology
### Architecture 
The software will keep track of everything that happens during a scrimmage and what time-stamp it happened at, storing everything in SQL tables. The user will input each pitch, whether it was hit or not, and if it was, what kind of ball it was. The user will also input what base the hitter made it to, and will progress runners on the bases throughout the game. These inputs will be with simple buttons within submenus for each category (pitch, ball, etc.). The software will save the game's tags to be viewed again later. The website will host everything, making it highly portable. The website will have the ability to start a new game, enter rosters (or choose from existing rosters), and start tagging. It will also have accounts so the user can move their data from one device to another. Each game will use an SQL table to store tags and scores.
There were no changes to our system architecture from our initial plan.

![image](https://github.com/CS340-21/tagger/blob/master/Screenshot_20210211_144540.png?raw=true)

### Tools for Building
We used Django, a Python-based web framework, because a web application allows it to be more portable. We used Django's built-in SQLite database for rosters, players, games, and other tagging data, as well as Django's REST API for quicker access to . In addition to this, we used the React JavaScript library in our front-end for dynamic elements such as lists pulled from the database.

### What Works and What Doesn't?
We were able to load lists of rosters and players from the database and render their details in modals using React. Here is an example of two rosters, each with a list of associated players:  
![example1](https://user-images.githubusercontent.com/54821737/116767024-a11f4a80-a9fb-11eb-9114-b9178f5bd8c8.gif)  
and the corresponding entries in the REST API:  
![example1-api](https://i.gyazo.com/536387e91b59e0e782ec369f4bf9c785.png)  

We also support creating new rosters (and new players in the separate Player List page):  
![example2](https://user-images.githubusercontent.com/54821737/116767155-463a2300-a9fc-11eb-9b41-1877d85e1796.gif)  
and the changes as seen in the API:  
![example2-api](https://i.gyazo.com/6f7c6237a4d2a2e7f8bba97710d52583.png)  

Deleting and editing existing rosters (note that edits are only saved upon using the Save button):
![example3](https://user-images.githubusercontent.com/54821737/116767206-cc566980-a9fc-11eb-9a12-5b4050b90fc4.gif)
![example4](https://user-images.githubusercontent.com/54821737/116767217-e2fcc080-a9fc-11eb-870b-a2d705e82879.gif)

Editing existing player sets in a roster will update the preview live (but will not make a database request until saved):  
![example5](https://user-images.githubusercontent.com/54821737/116767277-31aa5a80-a9fd-11eb-9985-d3d2e6ac02ba.gif)  

Finally, our application supports creation of new games&mdash;two teams are selected, and the name of the game and start times are auto-generated in the database:
![example6](https://user-images.githubusercontent.com/54821737/116767351-a54c6780-a9fd-11eb-95a2-aaddd60a4861.gif)  
![example6-api](https://i.gyazo.com/f3e13a3072f69ac54825b8be67bfc1bd.png)  

Other features such as selecting a game from a dropdown of existing games pulled from the database, tagging the new/selected game by adding "pitch events" using the buttons, and rendering the game's information (such as the title and date at the top, two rosters on the left, and the list of events on the right) all do not work. Players also are only allowed to be on one roster currently (with how Django model linking works), but we planned to support multiple per player, though we believe we were close to implementing this.

### Testing the System
We tested the app incrementally as we implemented its different features in the same way showcased above. We constantly made use of the API to ensure that the changes we were making with the forms and buttons on the front-end were properly linked with the database. Before the front-end, Rob made a simple HTML site that accessed the Django database directly in order to test the newly-created models (Roster, Player, and Game objects). The results of our tests were two things: whether a GET/POST/PUT request was made to the server, and if so, whether the database was updated accordingly based on what we tried to do.

# Our Team
Our team maintained fairly static roles throughout the semester. These included:

  - Sam: helped design structure and front-end design, including tagging interface
  - Rob: designed backend Django models, co-designed frontend modals & communicating with database
  - Brandan: assisted with front end implementation by creating/linking elements on the front end to the database
  - Taylor: designed interfaces, advocated for and received feedback from users

# Project Management
Like most software projects, ours did not complete all of our goals on schedule. We have not implemented a fully functional system as we initially proposed. This can be attributed to time constraints and conflicts, as well as significant learning curves for the technologies we used. Also, our ideal solution was much more involved than we first expected. For these practical reasons, we were unable to implement features such as roster splitting and the ability to tag a complete game. Our pitcher and hitter fields were left limited, and the UI design was not implemented. 

Instead of creating goals with rigid deadlines, we maintained a running list of goals. We focused on a few things for each sprint, and if goals were not completed by their respective deadlines, we rolled them over to the next sprint. 

# Reflection
Although we had consistent planning over the semester, our final project did not align with our ideal solution. Development was slow at times due to learning curves, and our team communication could have been better at times. Despite these expected or reasonable areas for improvement, we feel that this was a successful project overall. We gained experience with GitHub, Django, and React; saw practical applications of the theories and policies for software engineering discussed in class; and learned that expectations/deadlines cannot always realistically be met and project timelines require adaptation.
