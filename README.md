# Codedamn Projects - Quiz App

![main image](https://raw.githubusercontent.com/JealousGx/100daysofcode/tree/quiz-app/images/startcard.png)

## Hello developer!

This is one of the many projects available on [codedamn](https://codedamn.com/projects) to reinforce your learning by building. If you want to become a frontend developer and learn by practicing, feel free to attempt this challenge. Feel free to check out the codedamn [frontend web developer learning path](https://codedamn.com/learning-paths) to learn more about how to become an awesome frontend developer.

## Project Overview

### The header

The header of the application should contain two elements spaced between.

1. View Highscores
   On clicking on the view highscores all the highscores saved in the local storage should be shown

   Use the following classes for adding the Left hand icon `fas fa-hand-point-left fa-lg` beside the `View Highscores`. Favicon is already setup in the `<head>` element.

   ![highscores](https://raw.githubusercontent.com/JealousGx/100daysofcode/tree/quiz-app/images/highscores.png)

1. Time
   Currently no time is shown as the quiz is not started yet

### Start Quiz

On clicking on the start quiz button the timer should be set to 50 seconds and the countdown of the timer should begin.

The question as four options are shown
![quiz question](https://raw.githubusercontent.com/JealousGx/100daysofcode/tree/quiz-app/images/question.png)

### Points

On clicking on the correct option the question the next question should appear and correct text should be shown below the question, there will be no change in the timer it will continue to countdown

![correct-question](https://raw.githubusercontent.com/JealousGx/100daysofcode/tree/quiz-app/images/correct-answer.png)

If the answer is wrong then you have to subtract 10 seconds from the current time left to answer the questions

![incorrect-answer](https://raw.githubusercontent.com/JealousGx/100daysofcode/tree/quiz-app/images/incorrect-answer.png)

### Results

If the timer reaches 0 or the user completes the questions, the box should show `All done!` and the final score of the user and should let the user enter their initials and submit.

![all done](https://raw.githubusercontent.com/JealousGx/100daysofcode/tree/quiz-app/images/all-done.png)

When submitted the the score should be added to the highscores.

![show highscores](https://raw.githubusercontent.com/JealousGx/100daysofcode/tree/quiz-app/images/show-highscores.png)

## Instructions

Your challenge is to build out this project and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your project should:

- Be responsive for desktop and mobile phones
- Have minimum functionalities and effects working
