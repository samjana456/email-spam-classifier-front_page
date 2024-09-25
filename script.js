document.getElementById('lstmButton').addEventListener('click', () => {
    classifyEmail('LSTM');
});

document.getElementById('svmButton').addEventListener('click', () => {
    classifyEmail('SVM');
});

function classifyEmail(model) {
    const emailText = document.getElementById('emailInput').value;
    if (!emailText) {
        alert("Please enter an email!");
        return;
    }

    // Here you'd typically send the email text to your backend for classification.
    // For now, we'll simulate the result.
    const result = (model === 'LSTM') ? "Spam (LSTM)" : "Not Spam (SVM)";
    
    document.getElementById('result').innerText = `Result: ${result}`;
}
