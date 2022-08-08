
class Settings{
    constructor(){
        this.settingsDom = document.querySelector(".settings");
        this.quizDom     = document.querySelector(".quiz");
        this.categoryDom = document.querySelector("#category");
        this.startBtn    = document.querySelector(".start");
        this.difficulityLevel = document.getElementsByName("difficulty");

        this.numOfQuestionsDom = document.querySelector("#nQuestion");

        // When you click on Start Button, call the (startQuiz) function
        this.startBtn.addEventListener("click", this.startQuizApp);
    }


    startQuizApp = async () => {

        try{
            let categoryValue = this.categoryDom.value;
            let diffLevel = this.getTheDifficulityLevel();
            let numOfQuestions = this.getNumberOfQuestions();

            let url = `https://opentdb.com/api.php?amount=${numOfQuestions}&category=${categoryValue}&difficulty=${diffLevel}`;
            
            let {results} = await this.fetchData(url);

            if(results){
                this.toggleVisibility();
            }

            console.log(results)
            
        }catch(error){
            alert(error);
        }

    }

    toggleVisibility = () => {
        this.settingsDom.style.display = "none";
        this.quizDom.style.display = "block";
    }

    getTheDifficulityLevel = () => {
        let selectedDifficulityValue = Array.from(this.difficulityLevel).filter(ele => ele.checked)
        if(selectedDifficulityValue.length > 0){
            return selectedDifficulityValue[0].id;
        }else{
            alert("Please choose the difficulity Level")
        }
    }

    fetchData = async (url) => {
        let response = await fetch(url);
        let results  = await response.json();
        return results
    }

    getNumberOfQuestions = () => {
        let qAmount = this.numOfQuestionsDom.value;
        if(qAmount > 1 && qAmount < 21){
            return qAmount;
        }else{
            alert("Please enter the number of question (must be between 1 and 20)");
        }
    }

}

export default Settings;