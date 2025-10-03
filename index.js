    function registerUser() {
     try{
      const name = prompt("Enter your name:");
      const email = prompt("Enter your email:");
      const age = Number(prompt("Enter your age:"));
      if (!name || !email || !age) {
      throw new Error("All fields must be filled correctly.");
      }
      if (age < 12) {
      throw new Error("You must be at least 12 years old to register.");
      }
      return { name, email, age };
      } catch(err){
        Error.innertext=alert("Error"+err.message);
        return null;
      }
    }

    const questions = [
      {
       question: "Which language is used for web development?",
    options: ["A) JavaScript", "B) French", "C) Spanish", "D) Latin"],
    answer: "A" 
      },
      {
        question: "What is 5 + 3?",
        options: ["A) 6", "B) 8", "C) 7", "D) 9"],
        answer: "B"
      },
      {
        question: "Which planet is known as the Red Planet?",
        options: ["A) Earth", "B) Mars", "C) Jupiter", "D) Venus"],
        answer: "B"
      },
      {
        question: "What is the capital of France?",
        options: ["A) Berlin", "B) Madrid", "C) Paris", "D) Rome"],
        answer: "C"
      },
      {
        question: "Which number is even?",
        options: ["A) 3", "B) 7", "C) 10", "D) 5"],
        answer: "C" 
      }
    ];


    function getRandomQuestions() {
      const shuffled = [...questions].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, 3);
    }


    function askQuiz(randomQuestions) {
      let score = 0;
      for (let i = 0; i < randomQuestions.length; i++) {
       const q = randomQuestions[i];
       const userAnswer = prompt(`${q.question}\n${q.options.join("\n")}`);
       if (userAnswer && userAnswer.toUpperCase() === q.answer) {
        score += 1;
        }
      }
      return score;
    }

    function calculateGrade(score, total) {
      const percentage = (score / total) * 100;
      let grade;
      if (percentage >= 90) grade = 'A';
      else if (percentage >= 75) grade = 'B';
      else if (percentage >= 50) grade = 'C';
      else grade = 'D';

      return { percentage, grade };
    }

    function simulateServerDelay(result) {
      return new Promise((resolve) => {
    alert("Calculating result...");
        setTimeout(() => {
     resolve(result);
        }, 2000 + Math.random() * 1000);
      });
    }
    async function main() {
      const user = registerUser();
      if (!user) return; 

      const selectedQuestions = getRandomQuestions();
      const score = askQuiz(selectedQuestions);
      const total = selectedQuestions.length;
      const { percentage, grade } = calculateGrade(score, total);
      const timestamp = new Date().toLocaleString();

      const result = {
        name: user.name,
        email: user.email,
        age: user.age,
        score: score,
        total: total,
        percentage: percentage.toFixed(2) + "%",
        grade: grade,
        timestamp: timestamp
      };

      try {
        const finalResult = await simulateServerDelay(result);
        alert("Result:\n" + JSON.stringify(finalResult, null, 2));
        console.log(finalResult);
      } catch (err) {
        alert("Error during result processing.");
      }
    }
    main();

  