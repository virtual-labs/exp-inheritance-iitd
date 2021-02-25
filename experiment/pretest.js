
// Don't touch the below code

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  

// Don't touch the above code




// Write your MCQs here --- Start --- --------------------

  const myQuestions = [
    {
      question: "Q1. Which inheritance in java programming is not supported",
      answers: {
        a: "Multiple inheritance using classes",
        b: " Multiple inheritance using interfaces",
        c: "Multilevel inheritance",
        d: "Single inheritance"
      },
      correctAnswer: "a"
    },

    {
      question: "Q2. What is subclass in java?",
      answers: {
        a: "A subclass is a class that extends another class",
        b: " A subclass is a class declared inside a class",
        c: " Both above.",
        d: "None of the above."
      },
      correctAnswer: "a"
    },

    {
      question: "Q3. If class B is subclassed from class A then which is the correct syntax",
      answers: {
        a: " class B:A{}",
        b: "class B extends A{}",
        c: "class B extends class A{}",
        d: " class B implements A{}"
      },
      correctAnswer: "b"
    },
	
	{
      question: "Q4. Inheritance relationship in Java language is",
      answers: {
        a: "Association",
        b: "Is-A",
        c: "Has-A",
        d: "None"
      },
      correctAnswer: "b"
    },
	
	{
      question: "Q5. Advantage of inheritance in java programming is/are",
      answers: {
        a: " Code Re-usability",
        b: " Class Extendibility",
        c: " Save development time",
        d: " All"
      },
      correctAnswer: "d"
    },
  ];




// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
