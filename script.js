// script.js

// --- SINHALA FUNNY PHRASES ---
const mascotPhrases = {
    idle: [ "කෝ බලන්න...", "හිතලා ගහපන්...", "මොකක්ද උත්තරේ?", "ටිකක් හිතපන්...", "හදිස්සියක් නෑ..." ],
    correct: [ "අඩෝ පට්ට!", "උඹ නම් වැඩ්ඩෙක්!", "ගැම්මක් තමයි!", "කොහොමද ඒක!", "ජයයි පුතා!", "මූ නම් යකෙක්!", "යෙස් හුත්තෝ යෙස්" ],
    wrong: [ "තෝට පිස්සුද යකෝ?", "මී හරකා!", "අයියෝ, ගොන්නු ඉන්න රටේ මං ඉන්නේ.", "ගොනා උනාට තණ කන්න එපා.", "නිකන් පලයන් යන්න.", "ගොන් හුත්තා", "මෝඩ යකෙක් තෝ", "උඹට මොළයක් නැද්ද යකෝ", "ගිහින් පාඩම් කරපන්", "කාලකන්නියා", "පලයන් හුත්තෝ යන්න", "පිස්සුද උඹට", "පකක් කරා", "අනේ හුකේ නන්නානේ" ]
};

// --- HIGH SCORE TRACKING (Local Storage) ---
let highScores = JSON.parse(localStorage.getItem('nihongoHighScores')) || {};

function getHighScore(lesson) {
    return highScores[lesson] !== undefined ? highScores[lesson] : 0;
}

function saveHighScore(lesson, scorePercentage) {
    if (scorePercentage > getHighScore(lesson)) {
        highScores[lesson] = scorePercentage;
        localStorage.setItem('nihongoHighScores', JSON.stringify(highScores));
    }
}

// --- GAME STATE VARIABLES ---
let currentQuestionIndex = 0;
let correctAnswersCount = 0; 
let currentLessonQuestions = [];
let userHistory = {}; 
let currentLessonName = "";

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    setupFilterUI();
    filterQuiz();
});

// Helper: Populate the dropdown menu with lessons and high scores
function setupFilterUI() {
    const select = document.getElementById('topic-select');
    select.innerHTML = '';
    
    // Read the keys from minnaNoNihongoData in questions.js
    Object.keys(minnaNoNihongoData).forEach(lesson => {
        const option = document.createElement('option');
        option.value = lesson;
        const highScore = getHighScore(lesson);
        option.innerText = `📚 ${lesson} — (Best: ${highScore}%)`;
        select.appendChild(option);
    });
}

// MAIN FUNCTION: Starts/Restarts based on selected lesson
function filterQuiz() {
    currentLessonName = document.getElementById('topic-select').value;
    
    // Deep copy and shuffle questions for the selected lesson
    currentLessonQuestions = [...minnaNoNihongoData[currentLessonName]];
    currentLessonQuestions.sort(() => Math.random() - 0.5);
    
    // Reset Game State
    currentQuestionIndex = 0;
    correctAnswersCount = 0;
    userHistory = {};
    
    document.getElementById('total-q').innerText = currentLessonQuestions.length;
    document.getElementById('restart-btn').classList.add('d-none');
    document.getElementById('next-btn').classList.add('d-none');
    
    updateMascot('idle');
    loadQuestion();
}

function loadQuestion() {
    if (currentLessonQuestions.length === 0) {
        document.getElementById('question-text').innerText = "Add questions to this lesson!";
        return;
    }
    
    if (currentQuestionIndex >= currentLessonQuestions.length) {
        showEndScreen();
        return;
    }

    const currentQ = currentLessonQuestions[currentQuestionIndex];
    document.getElementById('current-q').innerText = currentQuestionIndex + 1;
    document.getElementById('progress-bar').style.width = `${((currentQuestionIndex) / currentLessonQuestions.length) * 100}%`;

    const qText = document.getElementById('question-text');
    qText.innerText = currentQ.question;
    qText.classList.remove('animate__fadeIn');
    void qText.offsetWidth; 
    qText.classList.add('animate__fadeIn');
    
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    const explanationBox = document.getElementById('explanation-box');
    explanationBox.classList.remove('explanation-visible');
    explanationBox.classList.add('explanation-hidden');
    
    document.getElementById('next-btn').classList.add('d-none');
    const prevBtn = document.getElementById('prev-btn');
    if (currentQuestionIndex > 0) prevBtn.classList.remove('d-none');
    else prevBtn.classList.add('d-none');

    updateMascot('idle');

    currentQ.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'btn option-btn';
        btn.innerText = opt;
        
        if (userHistory[currentQuestionIndex] !== undefined) {
             const savedIndex = userHistory[currentQuestionIndex];
             btn.classList.add('disabled-option');
             if (index === savedIndex) btn.classList.add(savedIndex === currentQ.correctIndex ? 'correct' : 'wrong');
             if (index === currentQ.correctIndex && savedIndex !== currentQ.correctIndex) btn.classList.add('correct');
             setTimeout(() => revealExplanation(savedIndex === currentQ.correctIndex, currentQ), 50);
        } else {
            btn.onclick = () => handleAnswer(index, currentQ.correctIndex, currentQ, btn);
        }
        optionsContainer.appendChild(btn);
    });
}

function handleAnswer(selectedIndex, correctIndex, currentQ, btn) {
    userHistory[currentQuestionIndex] = selectedIndex;
    const allBtns = document.querySelectorAll('.option-btn');
    allBtns.forEach(b => b.classList.add('disabled-option'));

    const isCorrect = selectedIndex === correctIndex;
    if (isCorrect) {
        btn.classList.add('correct');
        correctAnswersCount++;
        triggerConfetti();
        updateMascot('correct');
    } else {
        btn.classList.add('wrong');
        allBtns[correctIndex].classList.add('correct');
        const card = document.getElementById('quiz-card');
        card.classList.add('animate__headShake');
        setTimeout(() => card.classList.remove('animate__headShake'), 500);
        updateMascot('wrong');
    }
    revealExplanation(isCorrect, currentQ);
}

function revealExplanation(isCorrect, currentQ) {
    const box = document.getElementById('explanation-box');
    const header = document.getElementById('result-header');
    const text = document.getElementById('explanation-text');
    const icon = document.getElementById('result-icon');

    box.classList.remove('explanation-hidden');
    box.classList.add('explanation-visible', 'animate__fadeInUp');

    if (isCorrect) {
        header.innerText = "Correct!";
        header.className = "text-success fw-bold";
        icon.innerText = "✅";
    } else {
        header.innerText = "Incorrect";
        header.className = "text-danger fw-bold";
        icon.innerText = "❌";
    }
    text.innerText = currentQ.explanation;
    document.getElementById('next-btn').classList.remove('d-none');
}

function updateMascot(mood) {
    const mascot = document.getElementById('mascot');
    const bubble = document.getElementById('mascot-bubble');
    let emoji = "🤖";
    let text = "";
    const getPhrase = (key) => mascotPhrases[key][Math.floor(Math.random() * mascotPhrases[key].length)];

    if (mood === 'idle') { emoji = "🤔"; text = getPhrase('idle'); mascot.classList.remove('animate__bounce', 'animate__wobble'); }
    else if (mood === 'correct') { emoji = "😎"; text = getPhrase('correct'); mascot.classList.add('animate__bounce'); }
    else if (mood === 'wrong') { emoji = "😵"; text = getPhrase('wrong'); mascot.classList.add('animate__wobble'); }

    mascot.innerText = emoji;
    bubble.innerText = text;
    bubble.classList.remove('animate__fadeIn');
    void bubble.offsetWidth;
    bubble.classList.add('animate__fadeIn');
}

function triggerConfetti() {
    if (typeof confetti === "function") {
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    }
}

function nextQuestion() { currentQuestionIndex++; loadQuestion(); }
function prevQuestion() { if (currentQuestionIndex > 0) { currentQuestionIndex--; loadQuestion(); } }

function showEndScreen() {
    // Calculate Score Percentage
    const totalQuestions = currentLessonQuestions.length;
    const scorePercentage = Math.round((correctAnswersCount / totalQuestions) * 100);
    
    // Save to Local Storage
    saveHighScore(currentLessonName, scorePercentage);
    
    // Update the UI Dropdown immediately to reflect new high score
    setupFilterUI();
    document.getElementById('topic-select').value = currentLessonName;

    document.getElementById('progress-bar').style.width = `100%`;
    
    document.getElementById('quiz-card').innerHTML = `
        <div class="text-center p-5">
            <div class="display-1 mb-3">🏆</div>
            <h2 class="mb-3">Lesson Complete!</h2>
            <p class="fs-4">You got <strong>${correctAnswersCount}</strong> out of <strong>${totalQuestions}</strong> correct.</p>
            <div class="alert alert-danger fw-bold fs-3 animate__animated animate__heartBeat">Score: ${scorePercentage}%</div>
            <div class="mt-4"><button class="btn btn-dark btn-lg shadow w-100" onclick="filterQuiz()">🔄 Try Lesson Again</button></div>
        </div>
    `;
    
    updateMascot('correct');
    document.getElementById('mascot-bubble').innerText = "ගැම්මක් හුත්තෝ!";
    triggerConfetti();
}