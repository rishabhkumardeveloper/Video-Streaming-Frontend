
(function() {
  let sum1=0;
  let sum2=0;
  let sum3=0;
  let sum4=0;
  let sum5=0;
  let sum6=0;
  var a1,a2,a3,a4,a5,b1,b2,b3,b4,b5,c1,c2,c3,c4,c5,d1,d2,d3,d4,d5,e1,e2,e3,e4,e5="";
function buildQuiz() {
  

  // we'll need a place to store the HTML output
  const output = [];

  // for each question...
  myQuestions.forEach((currentQuestion, questionNumber) => {
    // we'll want to store the list of answer choices
    const answers = [];


    // and for each available answer...
    for (string in currentQuestion.answers) {
      // ...add an HTML radio button
      answers.push(
        `<label>
          <input type="radio" name="question${questionNumber}" value="${string}">
          ${string} :
          ${currentQuestion.answers[string]}
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
  let numCorrect = 0

  // for each question...
  myQuestions.forEach((currentQuestion, questionNumber) => {
    // find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // if answer is correct
    if (userAnswer === currentQuestion.c1) {
      // add to the number of correct answers
      sum3=sum3+1;
      answerContainers[questionNumber].style.color = "green";
    }
    else if(userAnswer === currentQuestion.c2)
    {
        sum3=sum3+2;
        answerContainers[questionNumber].style.color = "green";
    }
    else if(userAnswer === currentQuestion.c3)
    {
        sum3=sum3+3;
        answerContainers[questionNumber].style.color = "green";
    }
    else if(userAnswer === currentQuestion.c4)
    {
        sum3=sum3+4;
        answerContainers[questionNumber].style.color = "green";
    }
    else if(userAnswer === currentQuestion.c5)
    {
        sum3=sum3+5;
        answerContainers[questionNumber].style.color = "green";
    }
    else if(userAnswer === currentQuestion.a1)
    {
        sum1=sum1+1;
        answerContainers[questionNumber].style.color = "green";
    }
    else if(userAnswer === currentQuestion.a2)
    {
        sum1=sum1+2;
        answerContainers[questionNumber].style.color = "green";
    }
    else if(userAnswer === currentQuestion.a3)
    {
        sum1=sum1+3;
        answerContainers[questionNumber].style.color = "green";
    }
    else if(userAnswer === currentQuestion.a4)
    {
        sum1=sum1+4;
        answerContainers[questionNumber].style.color = "green";
    }
    else if(userAnswer === currentQuestion.a5)
    {
        sum1=sum1+5;
        answerContainers[questionNumber].style.color = "green";
    }
    else if(userAnswer === currentQuestion.b1)
    {
        sum2=sum2+1;
        answerContainers[questionNumber].style.color = "green";
    }
    else if(userAnswer === currentQuestion.b2)
    {
        sum2=sum2+2;
        answerContainers[questionNumber].style.color = "green";
    }
    else if(userAnswer === currentQuestion.b3)
    {
        sum2=sum2+3;
        answerContainers[questionNumber].style.color = "green";
    }
    else if(userAnswer === currentQuestion.b4)
    {
        sum2=sum2+4;
        answerContainers[questionNumber].style.color = "green";
    }
    else if(userAnswer === currentQuestion.b5)
    {
        sum2=sum2+5;
        answerContainers[questionNumber].style.color = "green";
    }
    else if(userAnswer === currentQuestion.d1)
    {
        sum4=sum4+1;
        answerContainers[questionNumber].style.color = "green";
    }
    else if(userAnswer === currentQuestion.d2)
    {
        sum4=sum4+2;
        answerContainers[questionNumber].style.color = "green";
    }
    else if(userAnswer === currentQuestion.d3)
    {
        sum4=sum4+3;
        answerContainers[questionNumber].style.color = "green";
    }
    else if(userAnswer === currentQuestion.d4)
    {
        sum4=sum4+4;
        answerContainers[questionNumber].style.color = "green";
    }
    else if(userAnswer === currentQuestion.d5)
    {
        sum4=sum4+5;
        answerContainers[questionNumber].style.color = "green";
    }
    else if(userAnswer === currentQuestion.e1)
    {
        sum5=sum5+1;
        answerContainers[questionNumber].style.color = "green";
    }
    else if(userAnswer === currentQuestion.e2)
    {
        sum5=sum5+2;
        answerContainers[questionNumber].style.color = "green";
    }
    else if(userAnswer === currentQuestion.e3)
    {
        sum5=sum5+3;
        answerContainers[questionNumber].style.color = "green";
    }
    else if(userAnswer === currentQuestion.e4)
    {
        sum5=sum5+4;
        answerContainers[questionNumber].style.color = "green";
    }
    else if(userAnswer === currentQuestion.e5)
    {
        sum5=sum5+5;
        answerContainers[questionNumber].style.color = "green";
    }
    else if(userAnswer === currentQuestion.f1)
    {
        sum6=sum6+1;
        answerContainers[questionNumber].style.color = "green";
    }
    else if(userAnswer === currentQuestion.f2)
    {
        sum6=sum6+2;
        answerContainers[questionNumber].style.color = "green";
    }
    else if(userAnswer === currentQuestion.f3)
    {
        sum6=sum6+3;
        answerContainers[questionNumber].style.color = "green";
    }
    else if(userAnswer === currentQuestion.f4)
    {
        sum6=sum6+4;
        answerContainers[questionNumber].style.color = "green";
    }
    else if(userAnswer === currentQuestion.f5)
    {
        sum6=sum6+5;
        answerContainers[questionNumber].style.color = "green";
    }
 
  });
  sum1=(sum1/20)*100;
  sum2=(sum2/20)*100;
  sum3=(sum3/20)*100;
  sum4=(sum4/20)*100;
  sum5=(sum5/20)*100;
  sum6=(sum6/20)*100;

  // show number of correct answers out of total
  resultsContainer.innerHTML = `${sum1}`;
  resultsContainer2.innerHTML = `${sum2}`;
  resultsContainer3.innerHTML = `${sum3}`;
  resultsContainer4.innerHTML = `${sum4}`;
  resultsContainer5.innerHTML = `${sum5}`;
  resultsContainer6.innerHTML = `${sum6}`;
  //if(sum1>45)
  //  resultsContainer.innerHTML = `High level of stress. All the best!`
}

const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results1");
const resultsContainer2 = document.getElementById("results2");
const resultsContainer3 = document.getElementById("results3");
const resultsContainer4 = document.getElementById("results4");
const resultsContainer5 = document.getElementById("results5");
const resultsContainer6 = document.getElementById("results6");
const submitButton = document.getElementById("submit");
const myQuestions = [
  //Stress
  {
    question: " How often do you feel difficulties are  piling up so high that you will not be able to overcome them? ",
    answers: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
      e: "5"
    },
    a1: "a",
    a2: "b",
    a3: "c",
    a4: "d",
    a5: "e"
  },
  {
    question: " How often do you feel nervous and “stressed”?",
    answers: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
      e: "5"
    },
    a1: "a",
    a2: "b",
    a3: "c",
    a4: "d",
    a5: "e"
  },
  {
    question: " How often are  you  able to control irritations in your life?",
    answers: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
      e: "5"
    },
    a1: "a",
    a2: "b",
    a3: "c",
    a4: "d",
    a5: "e"
  },
  {
      question: " How often do you feel confident about your ability to handle your personal problems",
      answers: {
        a: "1",
        b: "2",
        c: "3",
        d: "4",
        e: "5"
      },
      a1: "a",
      a2: "b",
      a3: "c",
      a4: "d",
      a5: "e"
    },
    {//Happy
      question: " How easy it is for you to have good influence on events. And on people around you?",
      answers: {
        a: "1",
        b: "2",
        c: "3",
        d: "4",
        e: "5"
      },
      b1: "a",
      b2: "b",
      b3: "c",
      b4: "d",
      b5: "e"
    },
    {
      question: " How easy it is for you to make decisions?",
      answers: {
        a: "1",
        b: "2",
        c: "3",
        d: "4",
        e: "5"
      },
      b1: "a",
      b2: "b",
      b3: "c",
      b4: "d",
      b5: "e"
    },
    {
      question: " How often do you feel satisfied about everything in your life?",
      answers: {
        a: "1",
        b: "2",
        c: "3",
        d: "4",
        e: "5"
      },
      b1: "a",
      b2: "b",
      b3: "c",
      b4: "d",
      b5: "e"
    },
    {
      question: " How easily  can you fit in (find time for) everything you  want to?",
      answers: {
        a: "1",
        b: "2",
        c: "3",
        d: "4",
        e: "5"
      },
      b1: "a",
      b2: "b",
      b3: "c",
      b4: "d",
      b5: "e"
    },
    {//Anger
    question: "How often do you feel the urge to strike another person?",
    answers: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
      e: "5"
    },
    c1: "a",
    c2: "b",
    c3: "c",
    c4: "d",
    c5: "e"
  },
  {
    question: "How  often do you  find yourself disagreeing with people?",
    answers: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
      e: "5"
    },
    c1: "a",
    c2: "b",
    c3: "c",
    c4: "d",
    c5: "e"
  },
  {
    question: " How often do you get into fights compared to average person?",
    answers: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
      e: "5"
    },
    c1: "a",
    c2: "b",
    c3: "c",
    c4: "d",
    c5: "e"
  },
  {
    question: "How short tempered,impatient are you?",
    answers: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
      e: "5"
    },
    c1: "a",
    c2: "b",
    c3: "c",
    c4: "d",
    c5: "e"
  },
  {//Sad
    question: "How often do you feel the pleasure and joy has gone out of your life?",
    answers: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
      e: "5"
    },
    d1: "a",
    d2: "b",
    d3: "c",
    d4: "d",
    d5: "e"
  },
  {
    question: "How often do you feel fatigued?",
    answers: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
      e: "5"
    },
    d1: "a",
    d2: "b",
    d3: "c",
    d4: "d",
    d5: "e"
  },
  {
    question: " How often do you have unexpected, intense sadness that lasts longer than a few days at a time?",
    answers: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
      e: "5"
    },
    d1: "a",
    d2: "b",
    d3: "c",
    d4: "d",
    d5: "e"
  },
  {
    question: "How often are you using alcohol or drugs to manage your mood? ",
    answers: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
      e: "5"
    },
    d1: "a",
    d2: "b",
    d3: "c",
    d4: "d",
    d5: "e"
  },
  {//Disgust
    question: " How often do you feel disgusted by seeing bits of food stuck in a beard?",
    answers: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
      e: "5"
    },
    e1: "a",
    e2: "b",
    e3: "c",
    e4: "d",
    e5: "e"
  },
  {
    question: "how much does it disturbs you seeing spots and pus?",
    answers: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
      e: "5"
    },
    e1: "a",
    e2: "b",
    e3: "c",
    e4: "d",
    e5: "e"
  },
  {
    question: " How often  do you feel disgusted seeing saliva on the face of a person speaking out loud?",
    answers: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
      e: "5"
    },
    e1: "a",
    e2: "b",
    e3: "c",
    e4: "d",
    e5: "e"
  },
  {
    question: " How often do you feel disgusted seeing greasy stains on clothes? ",
    answers: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
      e: "5"
    },
    e1: "a",
    e2: "b",
    e3: "c",
    e4: "d",
    e5: "e"
  },
  {//Fear
    question: " How much do you worry about what other people will think of you even when you  know it doesn't make any difference.",
    answers: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
      e: "5"
    },
    f1: "a",
    f2: "b",
    f3: "c",
    f4: "d",
    f5: "e"
  },
  {
    question: " How often do you worry that you will say or do the wrong things?",
    answers: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
      e: "5"
    },
    f1: "a",
    f2: "b",
    f3: "c",
    f4: "d",
    f5: "e"
  },
  {
    question: "How  frequently are you  afraid of other people noticing your shortcomings.",
    answers: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
      e: "5"
    },
    f1: "a",
    f2: "b",
    f3: "c",
    f4: "d",
    f5: "e"
  },
  {
    question: "How often are you afraid that others will not approve you?",
    answers: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
      e: "5"
    },
    f1: "a",
    f2: "b",
    f3: "c",
    f4: "d",
    f5: "e"
  },


];

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener("click", showResults);
})();
