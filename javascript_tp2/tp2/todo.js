// Étape 2 : Premiers scripts JavaScript
// Message de bienvenue dans la console
console.log("Bienvenue dans votre application de gestion de tâches!");

let taskArray = [
    { text: "Acheter du lait", done: false },
    { text: "Aller à la gym", done: false }
];

const taskList = document.getElementById('taskList');
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addBtn');
const clearAllButton = document.getElementById('clearAllBtn');
const searchInput = document.getElementById('searchInput');

const totalCountElement = document.getElementById('totalCount');
const completedCountElement = document.getElementById('completedCount');
const pendingCountElement = document.getElementById('pendingCount');

function chargerTaches() {
    const saved = localStorage.getItem('tasks');
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            if (Array.isArray(parsed)) {
                taskArray = parsed;
            } else if (parsed && Array.isArray(parsed.tasks)) {
                taskArray = parsed.tasks;
            } else {
                taskArray = [];
            }
        } catch (e) {
            taskArray = [];
        }
    }
    afficherTaches();
    updateCounters();
}

function ajouterTache() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Veuillez entrer une tâche valide.");
        return;
    }
    taskArray.push({ text: taskText, done: false });
    taskInput.value = "";
    afficherTaches();
    sauvegarderTaches();
    updateCounters();
}

function supprimerTache(index) {
    taskArray.splice(index, 1);
    afficherTaches();
    sauvegarderTaches();
    updateCounters();
}

function terminerTache(index) {
    taskArray[index].done = !taskArray[index].done;
    afficherTaches();
    sauvegarderTaches();
    updateCounters();
}

function supprimerToutesLesTaches() {
    if (confirm("Êtes-vous sûr de vouloir supprimer toutes les tâches ?")) {
        taskArray = [];
        afficherTaches();
        sauvegarderTaches();
        updateCounters();
    }
}    

function rechercherTaches() {
    const searchText = searchInput.value.toLowerCase();
    if (searchText === "") {
        afficherTaches();
        return;
    }
    const filteredTasks = taskArray.filter(task => 
        task.text.toLowerCase().includes(searchText)
    );
    afficherTachesFiltered(filteredTasks);
}

function afficherTaches() {
    taskList.innerHTML = "";
    taskArray.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = 'list-group-item' + (task.done ? ' completed' : '');
        const span = document.createElement('span');
        span.className = 'task-text';
        span.textContent = task.text;
        if (task.done) {
            span.classList.add('text-muted');
        }
        const controls = document.createElement('div');
        controls.className = 'task-controls';
        const doneBtn = document.createElement('button');
        doneBtn.type = 'button';
        doneBtn.className = 'btn btn-sm ' + (task.done ? 'btn-outline-secondary' : 'btn-outline-success');
        doneBtn.innerHTML = task.done 
            ? '<i class="fas fa-undo"></i> Annuler' 
            : '<i class="fas fa-check"></i> Terminer';
        doneBtn.addEventListener('click', () => terminerTache(index));
        const delBtn = document.createElement('button');
        delBtn.type = 'button';
        delBtn.className = 'btn btn-sm btn-outline-danger';
        delBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
        delBtn.addEventListener('click', () => supprimerTache(index));
        controls.appendChild(doneBtn);
        controls.appendChild(delBtn);
        li.appendChild(span);
        li.appendChild(controls);
        taskList.appendChild(li);
    });
}

function afficherTachesFiltered(filteredTasks) {
    taskList.innerHTML = "";
    if (filteredTasks.length === 0) {
        const li = document.createElement('li');
        li.className = 'list-group-item text-center text-muted';
        li.textContent = "Aucune tâche trouvée";
        taskList.appendChild(li);
        return;
    }
    filteredTasks.forEach((task, originalIndex) => {
        const index = taskArray.findIndex(t => t.text === task.text);
        const li = document.createElement('li');
        li.className = 'list-group-item' + (task.done ? ' completed' : '');
        const span = document.createElement('span');
        span.className = 'task-text';
        span.textContent = task.text;
        if (task.done) {
            span.classList.add('text-muted');
        }
        const controls = document.createElement('div');
        controls.className = 'task-controls';
        const doneBtn = document.createElement('button');
        doneBtn.type = 'button';
        doneBtn.className = 'btn btn-sm ' + (task.done ? 'btn-outline-secondary' : 'btn-outline-success');
        doneBtn.innerHTML = task.done 
            ? '<i class="fas fa-undo"></i> Annuler' 
            : '<i class="fas fa-check"></i> Terminer';
        doneBtn.addEventListener('click', () => terminerTache(index));
        const delBtn = document.createElement('button');
        delBtn.type = 'button';
        delBtn.className = 'btn btn-sm btn-outline-danger';
        delBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
        delBtn.addEventListener('click', () => supprimerTache(index));
        controls.appendChild(doneBtn);
        controls.appendChild(delBtn);
        li.appendChild(span);
        li.appendChild(controls);
        taskList.appendChild(li);
    });
}

function updateCounters() {
    const total = taskArray.length;
    const completed = taskArray.filter(task => task.done).length;
    const pending = total - completed;
    totalCountElement.textContent = total;
    completedCountElement.textContent = completed;
    pendingCountElement.textContent = pending;
}

function sauvegarderTaches() {
    try {
        localStorage.setItem('tasks', JSON.stringify(taskArray));
    } catch (e) {
        console.error('Impossible de sauvegarder les tâches dans localStorage', e);
    }
}

addButton.addEventListener('click', ajouterTache);

taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        ajouterTache();
    }
});

searchInput.addEventListener('input', rechercherTaches);

clearAllButton.addEventListener('click', supprimerToutesLesTaches);

chargerTaches();