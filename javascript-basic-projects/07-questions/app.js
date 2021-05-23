//using selectors inside the element

const questions = document.querySelectorAll(".question");


questions.forEach(function(question){
    const btn = question.querySelector(".question-btn");
    //console.log(question);
    //console.log(btn);
    btn.addEventListener("click", function(){

        question.classList.toggle("show-text");

        questions.forEach(function(questionOuv){
            if(questionOuv !== question){
                questionOuv.classList.remove("show-text");
            }
        })

    })
});
