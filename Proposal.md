# EZScore

Team members

  - Sam Baumann, Rob Bray, Brandan Roachell, Taylor Rogers

# Introduction
This project is a baseball tagger, which is a scorekeeping application for baseball coaches. The main taggers currently competing on the market both have the same limited flexibility. This project idea is not novel, but it fills the need of the market by introducing more flexibility within the app that competitors lack, such as splitting rosters. It resembles iScore and GameChanger, two widely used scorekeeping apps for multiple sports, including baseball. This app will be different as it will focus on baseball and provide options for tagging intrasquad scrimmages.

### Team Background
Sam: Have experience with Django and other web development tools such as HTML/CSS/JS.

Rob: Basic knowledge of SQL, new to Python and web development.

Brandan: I have some background with website development and a little bit with database management. Never used Python before.

Taylor: Basic knowledge of SQL, HTML, and CSS. No experience building an app, but experience with baseball scoring software.

# Customer value
### Primary Customer
The primary customer of this application is a baseball coach. Since our solution is designed specifically with scrimmage-style scenarios in mind, teams that utilize the preseason for development will be more inclined to use this. Collegiate baseball coaches will be our largest customers, including those at junior colleges and all four-year institutions. These coaches desire software that grants them the flexibility to effectively keep statistics on intrasquad scrimmages. Current tagging software is not capable of easily splitting a roster, which is important for ease of tagging intrasquad scrimmages. There is also a lack of flexibility in setting up the start of a match, i.e. having a smaller starting line-up. There is an existing market, and there are two established competitors. This software will not entirely replace either of these, but works more as a supplementary application.
### Proposed Solution
Customers will be able to easily keep score during baseball intra-squads. This app, unlike others, will deliver users the ability to split a single roster, begin a half inning with a number of outs and/or ghost runners, and take other scrimmage-style situations into account. Customers will greatly benefit from the increased flexibility provided by our application. Stats from scrimmages and other pre-season practices are important to a team's development. Our solution enables customers to track these things accurately and easily. Current shortcomings in the market discourage coaches from tracking these stats, so team development has been limited. Development will be improved with the ability to effectively keep score with our solution. The app will be much more flexible than traditional scorekeeping applications for baseball. Flexibility in rosters and situations will make tagging scrimmages much more efficient. 
### Measure of Success
The idea of our solution has been discussed with a collegiate baseball coach, who originally expressed discontent with current software. He seems excited about the proposed solution. We will get user opinions from short, optional feedback surveys sent out to users within the app. We will ask the customer to rate on a scale of 1-10 how much they agree with statements like &quot;it is easy to find options for pitch results,&quot; much like faculty feedback surveys at UT. We will also be able to get the opinion of the mentioned coach on how the app compares with existing ones.
  
# Proposed Solution & Technology
### The Ideal System
The software will keep track of everything that happens during a scrimmage and what time-stamp it happened at, storing everything in SQL tables. The user will input each pitch, whether it was hit or not, and if it was, what kind of ball it was. The user will also input what base the hitter made it to, and will progress runners on the bases throughout the game. These inputs will be with simple buttons within submenus for each category (pitch, ball, etc.). The software will save the game's tags to be viewed again later. The website will host everything, making it highly portable. The website will have the ability to start a new game, enter rosters (or choose from existing rosters), and start tagging. It will also have accounts so the user can move their data from one device to another. Each game will use an SQL table to store tags and scores.

![image](https://github.com/CS340-21/tagger/blob/master/Screenshot_20210211_144540.png?raw=true)
### The Minimum System
A minimal system that would remain valuable to the customer includes significant flexibility for intrasquad and scrimmage-style situations. Since there are widespread scorekeeping applications for traditional games, the most vital part of our system is its flexibility. A possible enhancement for our scorekeeping application could be the ability for others to livestream games.
### Testing the System
We can test the app in the environment in which it was made for, since we have access to a baseball team doing actual intrasquad scrimmages.
### Tools for Building
We plan to use Django, which is a Python-based web framework. Using a web application will make it more portable. We also plan to use SQL to build our database for rosters and tagging data. In addition to Django, we could use react to help with our front-end.
- Section 3: Proposed solution and technology
  - System- technology we deliver
    - From the developer's POV, what will our software do?

The software will keep track of everything that happens during a scrimmage and what time-stamp it happened at, storing everything in SQL tables. The user will input each pitch, whether it was hit or not, and if it was, what kind of ball it was. The user will also input what base the hitter made it to, and will progress runners on the bases throughout the game. These inputs will be with simple buttons within submenus for each category (pitch, ball, etc.). The software will save the game's tags to be viewed again later.

    - What are the main components of your system? What do they do?

The website will host everything, making it highly portable. The website will have the ability to start a new game, enter rosters (or choose from existing rosters), and start tagging. It will also have accounts so the user can move their data from one device to another. Each game will use an SQL table to store tags and scores.

    - What is a high-level block diagram of the architecture of the system?

![image](https://github.com/CS340-21/tagger/blob/master/Screenshot_20210211_144540.png?raw=true)


    - What is a minimal system that would have some value to the customer?

A minimal system that would remain valuable to the customer includes significant flexibility for intrasquad and scrimmage-style situations. Since there are widespread scorekeeping applications for traditional games, the most vital part of our system is its flexibility.

    - What are some possible enhancements that customers would value?

Possible enhancements for our scorekeeping application include the ability for others to livestream games.

    - How will we test our system?

We can test the app in the environment in which it was made for, since we have access to a baseball team doing actual intrasquad scrimmages.

  - Tools- technology we use to build what we deliver
    - What will we use to build the system?

We plan to use Django, which is a Python-based web framework. Using a web application will make it more portable. We also plan to use SQL to build our database for rosters and tagging data.

    - Are there available tools we can leverage?

In addition to Django, we could use react to help with our front-end

- Section 4: Team
  - Skills
    - Has anyone on the team built something like this before?

Only one member (Sam) has built an app before, though not related to baseball.

    - Are the tools known or new to the team?

The tools are generally new to everyone except Sam.

  - Roles
    - What are the roles of the team members?

Taylor - I don't mind taking notes at meetings and on our progress and things. Also, I will be in regular communication with the UT Baseball coaches, so I can discuss our project with them. The other Video/Scouting Managers are business analytics majors, so if we have questions about database stuff, I can talk to them.

Brandan - UI design, in addition to helping with whatever else needs to be done

Rob - Create SQL database and interface with Django backend

Sam - Work on Django backend organization + whatever else needs to be done.

    - Will the roles be fixed or rotating?

Rotating

- Section 5: Project management
  - Schedule
    - Is completion feasible?

_ **Hopefully** _

    - When and how often will we meet?

2-3 times weekly depending on progress.

    - Write a tentative weekly schedule with tasks and deadlines

| Date | Deadline |
| --- | --- |
| 2/11 | Preliminary project proposal |
| 2/18 | Revised proposal |
<<<<<<< HEAD
| 3/4 | Design and implement a minimum viable system. A minimum viable system for this project might be a tagging system that can function on the front-end, without any special features, also write first report |
| 3/11 | Continue adding features and begin testing |
| 3/18 | Add features to the system. (some features to add at this stage could be custom starting scores and saved account information). Write second status report. |
| 4/1 | Refine system and test. At this stage, we will run many tests (possibly by watching baseball games and using our app to do scorekeeping). Write third status report |
| 4/15 | Complete project implementation. At this stage we might hand off our app to the UT baseball team. Write final report |
=======
| 3/4 | Design and implement a minimum viable system. A minimum viable system for this project might be a tagging system that can function on the front-end, without any special features |
| 3/18 | Add features to the system. (some features to add at this stage could be custom starting scores and saved account information) |
| 4/1 | Refine system and test. At this stage, we will run many tests (possibly by watching baseball games and using our app to do scorekeeping) |
| 4/15 | Complete project implementation. At this stage we might hand off our app to the UT baseball team. |
>>>>>>> 2a0ea15 (edited timeline)

  - Constraints
    - Are there regulatory or legal constraints?
      - Must include copyright license for Django somewhere in source code. (same probably goes for any additional API we use)
    - Are there ethical or societal concerns?

No

  - Resources
    - Will we have access to the data we need?

Yes, the data that the app uses will be manually input by the user. We could add a feature later that enables users to upload stats that were not directly kept through the app, but that could be a later consideration.

  - Descoping
    - What happens if full functionality cannot be implemented?
      - Will reduced functionality operate?

Yes, cutting a few of the more complex features would still leave a functional application.

      - Will it be useful (or at least partially solving the problem)?

However, it will not be useful in that it does not add the desired increased flexibility / address the shortcomings of the competitors.

Notes from UT Baseball Coach Sean McCann:

- Overview of current software
  - iScore and GameChanger are two widely used scorekeeping apps for multiple sports, including baseball. Used at all levels - youth through professional sports.
  - In baseball, an individual follows the game and enters information from each pitch (and every ball put in play). After the game, a complete list of statistics from the game is available - a box score as well as individual and team stats. As each game is added, the apps combine the information to create cumulative (season) stats for each team scored - usually one team along with all their opponents.
  - These are both excellent apps with corresponding web app platforms that make scoring and tracking a team's stats easier than the old paper and pencil method, especially when creating cumulative stat rundowns and specialized reports.
- Shortcomings and areas for improvement
  - Unfortunately, these apps do not work when a team is involved in an intrasquad scrimmage season, essentially playing themselves in a practice or showcase situation (college fall/pre-spring, high school-aged fall/summer, MLB spring training).
  - The reasons these apps do not work for intrasquad scrimmage:
    - 1) the user cannot split the roster (ex: Yankees vs. Yankees). In particular, the constant juggling of the team's roster playing itself, its rarely ever the same, so tremendous flexibility is needed;
    - 2) there is no flexibility for standard scrimmage rules - less/more than 9 in a line-up, starting innings with a different number of outs (ex: 1 out), starting innings with ghost runners on base, starting at-bats with a count other than 0-0 (1-0, 3-2, etc.).
  - If there were an app that allowed for all of the scorekeeping and subsequent cumulative reporting of stats PLUS the ability to have intrasquad scrimmage flexibility, it would be the only known one in a market that, albeit not near the size GameChanger and iScore compete in, but easily in the 10,000+ range (colleges would be the biggest market - JUCO and all levels of 4-year schools).
