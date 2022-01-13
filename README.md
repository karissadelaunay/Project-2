# passport-boilerplate


This is your passport boilerplate.

## Setup 

1. Clone the repo
2. Rename the folder to your Project
3. Delete the `.git` file, when you are in the root of the file, you can press `ls` and you should see a `.git` file, then go ahead and run `rm -rf .git`


#### Setup your git repo
1. in the project root `git init`
2. `git add .` to add all the starter code
3. `git commit -m "setup boilerplate"` 
4. go to github and create your github and create a repo (Without a readme or liscense you can add that later!)
5. copy the remote address
6. In your terminal add the remote `git remote add origin yourGithubRepo'sAddressGoesHere`
7. `git pull origin master` If a screen pulls up asking you to do something just press `:q` and then `enter` (thats vim btw :) )
8. `git push origin master`

#### Setup your login

0. Setup your database connection string
1. Then Setup Your User Model, 
2. Follow the steps from the lesson plan to get your Google login credentials for your `.env` file (create the file if you haven't), or you can just copy the ones from earlier if you want to reuse them.
3. Setup the Code in your config passport 
4. Setup your callback routes in your `routes/index`
5. Setup a view and test your login!

#### Make a commit 

```git commit -m "setup up oauth and User Model"```
# Workout With Me!

#### User Stories (sudo code)

1. I want to be able to create categories for my workouts
2. I want to be able to create workouts within the categories
3. When I click on a category I want to be able to see the workouts I have in that category
4. I want to be able to delete workouts from the category
5. I want to be able to update and check workouts as my favorites

#### Technologies Used

1. mongoDB Atlas
2. Google OAuth
3. node
4. mongoose
5. JavaScript
6. Express
7. CSS
8. HTML

#### WireFrames

<img width="1440" alt="Screen Shot 2022-01-13 at 10 43 11 AM" src="https://user-images.githubusercontent.com/94722723/149400887-8796d2fd-44f8-4e8e-a1a5-9f26fb86cda0.png">

#### ERD

<img width="1440" alt="Screen Shot 2022-01-07 at 11 42 42 AM" src="https://user-images.githubusercontent.com/94722723/149401087-a4d3e6d7-273f-4b65-a26d-aacde592f61a.png">

#### What is Workout With Me?

1. Workout with me is an app that allows you to map out your workouts.  Going to the gym? Don't have a plan for what to do?  Workout With Me can fix that!  Use this app to plan your workout routine and add favorites and change workouts week to week.

#### Screen Shots of app View

<img width="1440" alt="Screen Shot 2022-01-13 at 11 53 43 AM" src="https://user-images.githubusercontent.com/94722723/149401447-2b8c12d6-cc68-415d-85b3-1ac0b5d1dcd4.png">

<img width="1440" alt="Screen Shot 2022-01-13 at 11 53 52 AM" src="https://user-images.githubusercontent.com/94722723/149401542-9d92a3e3-1902-4a18-a06c-66ef25bdb68f.png">

<img width="1440" alt="Screen Shot 2022-01-13 at 11 54 01 AM" src="https://user-images.githubusercontent.com/94722723/149401581-f7b2161a-1005-442e-bddb-ed41361ed6b6.png">

<img width="1440" alt="Screen Shot 2022-01-13 at 11 54 19 AM" src="https://user-images.githubusercontent.com/94722723/149401613-c125413d-d903-431c-b8a1-f2a2ad5accb9.png">

#### Link to app!

https://warm-oasis-98309.herokuapp.com/users

#### Link to Trello

https://trello.com/b/rx8Kv9hx/project-2

#### IceBox Features

1. I want to be able to share my workouts with other users
2. I want to be able to delete categories
3. I want to be able to track my progress with before and after photos and weight tracking
4. I want to be able to get inspirational notifications when I have hit goals
5. I want to be able to set goals for my progress tracking
