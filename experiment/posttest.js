
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
      question: "Q1. What will be the output of the following Java program?",

      answers: {
        a: "2 2",
        b: "3 3",
        c: "2 3",
        d: "3 2"
      },
      correctAnswer: "c"
    },

    {
      question: "Q2. Which of these is correct way of inheriting class A by class B?",
      
      answers: {
        a: " class B + class A {}",
        b: "class B extends A {}",
        c: " class B inherits class A {}",
        d: " class B extends class A {}"
      },
      correctAnswer: "b"
    },

    {
    question: "Q3.  Which of these keywords is used to refer to member of base class from a sub class?  ",
    
    answers: {
        a: "upper",
        b: "super" ,
        b: "this" ,
        b: " none of the mentioned"        
      },
      correctAnswer: "b"

    },
	
	{
      question: "Q4. Multiple inheritance means,",
      answers: {
        a: "one class inheriting from more super classes",
        b: "more classes inheriting from one super class",
        c: "more classes inheriting from more super classes",
        d: "None of the above"
 
      },
	 correctAnswer: "b"	
    },	
	
	{
      question: "Q5. What is the output of the following program?",
      
      answers: {
        a: "22",
        b: "33",
        c: "23",
        d: "32"
 

      },
      correctAnswer: "a"
    },
  ];




// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
