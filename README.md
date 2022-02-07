# Codedamn Projects - Quiz App

![main image](https://github.com/JealousGx/100daysofcode/blob/quiz-app/images/startcard.png?raw=true)

## Hello developer!

This is one of the many projects available on [codedamn](https://codedamn.com/projects) to reinforce your learning by building. If you want to become a frontend developer and learn by practicing, feel free to attempt this challenge. Feel free to check out the codedamn [frontend web developer learning path](https://codedamn.com/learning-paths) to learn more about how to become an awesome frontend developer.

## Project Overview

### The header

The header of the application should contain two elements spaced between.

1. View Highscores
   On clicking on the view highscores all the highscores saved in the local storage should be shown

   Use the following classes for adding the Left hand icon `fas fa-hand-point-left fa-lg` beside the `View Highscores`. Favicon is already setup in the `<head>` element.

   ![highscores](https://github.com/JealousGx/100daysofcode/blob/quiz-app/images/highscores.png?raw=true)

1. Time
   Currently no time is shown as the quiz is not started yet

### Start Quiz

On clicking on the start quiz button the timer should be set to 50 seconds and the countdown of the timer should begin.

The question as four options are shown
![quiz question](https://github.com/JealousGx/100daysofcode/blob/quiz-app/images/question.png?raw=true)

### Points

On clicking on the correct option the question the next question should appear and correct text should be shown below the question, there will be no change in the timer it will continue to countdown

![correct-question](https://github.com/JealousGx/100daysofcode/blob/quiz-app/images/correct-answer.png?raw=true)

If the answer is wrong then you have to subtract 10 seconds from the current time left to answer the questions

![incorrect-answer](https://github.com/JealousGx/100daysofcode/blob/quiz-app/images/incorrect-answer.png?raw=true)

### Results

If the timer reaches 0 or the user completes the questions, the box should show `All done!` and the final score of the user and should let the user enter their initials and submit.

![all done](https://github.com/JealousGx/100daysofcode/blob/quiz-app/images/all-done.png?raw=true)

When submitted the the score should be added to the highscores.

![show highscores](https://github.com/JealousGx/100daysofcode/blob/quiz-app/images/show-highscores.png?raw=true)

#### Live demo
[Live site](https://jealous-quiz.netlify.app)
