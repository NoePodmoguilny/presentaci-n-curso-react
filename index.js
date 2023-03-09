const btnskills = document.querySelector("#skills");

const arrSkills = ["HTML5", "CSS", "JAVASCRIPT", "BOOTSTRAP", "GIT", "GITHUB", "SCRUM", "SQL", "ANGULAR", "TYPESCRIPT", "JAVA"]
const anclaArr = document.querySelector("#anclaArr");

const fragment = document.createDocumentFragment();

btnskills.addEventListener("click", createSpans);

function createSpans(e) {
    for (let el = 0; el < arrSkills.length; el++) {
        const element = arrSkills[el];
        const span = document.createElement("span");
        span.textContent = element;
        span.classList.add("skill");
        fragment.appendChild(span); 
    };
    
    anclaArr.appendChild(fragment);

    e.target.removeEventListener(e.type, createSpans);
};
