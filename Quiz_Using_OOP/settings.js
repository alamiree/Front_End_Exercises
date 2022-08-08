class Settings{
    constructor(){
        this.settingsDom = document.querySelector(".settings");
        this.quizDom = document.querySelector(".quiz");
        this.startBtn = document.querySelector("#start");
        this.categoryDom = document.querySelector("#category");
        this.NumOfQuestion = document.querySelector("#nQuestion");
        this.difficulityLevel = document.getElementsByName("difficulty");

        // Calling the toggle function
        this.startBtn.addEventListener("click", this.startQuizApp);
    }

    startQuizApp = async () => {
        try{
            const selectedCategory = this.categoryDom.value;
            const numberOfQuestions = this.getNumberOfQuestions();
            const difficulityLevel = this.getTheDifficulityLevel();

            console.log(selectedCategory);
            console.log(numberOfQuestions);
            console.log(difficulityLevel);
            
            const url = `https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${selectedCategory}&difficulty=${difficulityLevel}`

            let {results} = await this.fetchData(url);
            if(results){
                this.toggleQuiz();
            }
            console.log(results)
        }catch(err){
            alert(err);
        }
    }

    // When You click on this function,The settingDom disappears and the quizDom display
    toggleQuiz = () => {
        this.settingsDom.style.display = "none";
        this.quizDom.style.display = "block";
    }
    
    // Get the number of questions and validate it
    getNumberOfQuestions = () => {
        let qAmount = this.NumOfQuestion.value;
        if(qAmount > 0 && qAmount < 21){
            return qAmount;
        }else{
            alert("Please enter the number of question (must be between 1 and 20)");
        }
    }

    // Get the difficulty level
    getTheDifficulityLevel = () => {
        let difficulity = Array.from(this.difficulityLevel).filter(ele => ele.checked)
        return difficulity[0].id;
    }

    fetchData = async (url) => {
        const response = await fetch(url);
        const results = await response.json();
        return results;
    }

}

export default new Settings();