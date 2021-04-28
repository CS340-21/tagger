# EZScore

Team members

  - Sam Baumann, Rob Bray, Brandan Roachell, Taylor Rogers

# Introduction
This project is a scorekeeping application for baseball coaches. The main taggers currently competing on the market both have the same limited flexibility. This project idea is not novel, but it fills the need of the market by introducing more flexibility within the app that competitors lack, such as splitting rosters. It resembles iScore and GameChanger, two widely used scorekeeping apps for multiple sports, including baseball. This app will be different as it will focus on baseball and provide options for tagging intrasquad scrimmages.

# Customer value
There were no changes regarding customer value from our project proposal.

# Technology
### Architecture 
The software will keep track of everything that happens during a scrimmage and what time-stamp it happened at, storing everything in SQL tables. The user will input each pitch, whether it was hit or not, and if it was, what kind of ball it was. The user will also input what base the hitter made it to, and will progress runners on the bases throughout the game. These inputs will be with simple buttons within submenus for each category (pitch, ball, etc.). The software will save the game's tags to be viewed again later. The website will host everything, making it highly portable. The website will have the ability to start a new game, enter rosters (or choose from existing rosters), and start tagging. It will also have accounts so the user can move their data from one device to another. Each game will use an SQL table to store tags and scores.

![image](https://github.com/CS340-21/tagger/blob/master/Screenshot_20210211_144540.png?raw=true)
### The Minimum System
A minimal system that would remain valuable to the customer includes significant flexibility for intrasquad and scrimmage-style situations. Since there are widespread scorekeeping applications for traditional games, the most vital part of our system is its flexibility. A possible enhancement for our scorekeeping application could be the ability for others to livestream games.
### Testing the System
We can test the app in the environment in which it was made for, since we have access to a baseball team doing actual intrasquad scrimmages.
### Tools for Building
We plan to use Django, which is a Python-based web framework. Using a web application will make it more portable. We also plan to use SQL to build our database for rosters and tagging data. In addition to Django, we could use react to help with our front-end.

# Our Team
Our team maintained fairly static roles throughout the semester. These included:

  - Sam: helped design structure and front-end design, including tagging interface
  - Rob: designed backend Django models, co-designed frontend modals & communicating with database
  - Brandan: assisted with front end implementation by creating/linking elements on the front end to the database
  - Taylor: designed interfaces, advocated for and received feedback from users

# Project Management
Like most software projects, ours did not complete all of our goals. We have no implemented a fully functional system as we initially proposed. This can be attributed to time constraints and conflicts, as well as significant learning curves for the technologies we used. Also, our ideal solution was much more involved than we first expected. For these practical reasons, we were unable to implement features such as roster splitting and the ability to tag a complete game. Our pitcher and hitter fields were left limited, and the UI design was not implemented. 

# Reflection
Although we had consistent planning over the semester, our final project did not align with our ideal solution. Development was slow at times due to learning curves, and our team communication could have been better at times. Despite these expected or reasonable areas for improvement, we feel that this was a successful project overall. We gained experience with GitHub, Django, and React; saw practical applications of the theories and policies for software engineering discussed in class; and learned that expectations/deadlines cannot always realistically be met and project timelines require adaptation. 
