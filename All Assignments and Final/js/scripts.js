// scripts.js

// Function to toggle more features in index.html
document.getElementById('moreFeaturesBtn').addEventListener('click', function() {
    const moreFeatures = document.getElementById('moreFeatures');
    if (moreFeatures.style.display === 'none') {
        moreFeatures.style.display = 'block';
    } else {
        moreFeatures.style.display = 'none';
    }
});

function toggleContent(id, button) {
    const content = document.getElementById(id);
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
        button.textContent = 'Show Less';
    } else {
        content.style.display = 'none';
        button.textContent = 'Learn More';
    }
}

// Example: Variables of different data types
const numberVar = 10;
const stringVar = 'Bloodborne';
const booleanVar = true;
const arrayVar = ['Central Yharnam', 'Cathedral Ward', 'Old Yharnam'];
const objectVar = {
    name: 'Hunter',
    weapon: 'Saw Cleaver',
    health: 100
};

// Function to demonstrate scope
function demoScope() {
    let localVar = 'This is a local variable';
    console.log(localVar); // Accessible within the function
}
demoScope();
// console.log(localVar); // Uncaught ReferenceError: localVar is not defined

// Example: Conditionals
function checkHealth(health) {
    if (health > 50) {
        return 'Healthy';
    } else if (health > 0) {
        return 'Injured';
    } else {
        return 'Dead';
    }
}
console.log(checkHealth(objectVar.health));

// Example: Loops
arrayVar.forEach(function(area) {
    console.log(area);
});

// Example: Objects and Events
document.getElementById('healthCheckBtn').addEventListener('click', function() {
    const healthInput = document.getElementById('healthInput').value;
    const healthStatus = checkHealth(parseInt(healthInput));
    document.getElementById('healthOutput').innerText = 'Health Status: ' + healthStatus;
});

// Common Errors: Example of avoiding an undefined variable error
try {
    console.log(nonExistentVar);
} catch (error) {
    console.log('Caught an error: ' + error.message);
}
