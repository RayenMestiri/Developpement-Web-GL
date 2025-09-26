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
    // Afficher une animation de chargement
    taskList.innerHTML = `
        <div class="text-center p-5">
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Chargement...</span>
            </div>
            <p class="mt-3 text-muted">Chargement des tâches...</p>
        </div>
    `;
    
    // Simulation d'un délai de chargement pour voir l'animation
    setTimeout(() => {
        try {
            const savedData = localStorage.getItem('tasks');
            
            if (savedData) {
                // Vérifier si les données sont au nouveau format ou à l'ancien format
                const parsedData = JSON.parse(savedData);
                
                if (parsedData && typeof parsedData === 'object' && parsedData.tasks) {
                    // Nouveau format avec timestamp
                    taskArray = parsedData.tasks;
                    
                    // Afficher la date de dernière modification
                    const lastModified = new Date(parsedData.lastModified);
                    const options = { 
                        day: 'numeric', 
                        month: 'short', 
                        hour: '2-digit', 
                        minute: '2-digit' 
                    };
                    const formattedDate = lastModified.toLocaleDateString('fr-FR', options);
                    
                    // Créer un indicateur de dernière sauvegarde
                    const lastSavedIndicator = document.createElement('small');
                    lastSavedIndicator.className = 'text-muted d-block text-center mt-2';
                    lastSavedIndicator.textContent = `Dernière sauvegarde: ${formattedDate}`;
                    
                    // Ajouter après le compteur de tâches
                    const taskCounter = document.getElementById('taskCounter');
                    if (taskCounter && !document.querySelector('.last-saved-indicator')) {
                        lastSavedIndicator.classList.add('last-saved-indicator');
                        taskCounter.insertAdjacentElement('afterend', lastSavedIndicator);
                    }
                } else {
                    // Ancien format (tableau simple)
                    taskArray = parsedData;
                }
            } else {
                // Si pas de données, utiliser des tâches d'exemple
                taskArray = [
                    { text: "Acheter du lait", done: false },
                    { text: "Aller à la gym", done: false }
                ];
                
                // Créer un indicateur de bienvenue
                const welcomeMessage = document.createElement('div');
                welcomeMessage.className = 'alert alert-info mb-4';
                welcomeMessage.innerHTML = `
                    <h5><i class="fas fa-info-circle me-2"></i>Bienvenue dans votre gestionnaire de tâches!</h5>
                    <p class="mb-0">Nous avons ajouté deux tâches d'exemple pour vous aider à démarrer.</p>
                `;
                
                // Ajouter avant le formulaire
                const inputGroup = document.querySelector('.input-group:has(#taskInput)');
                if (inputGroup) {
                    const container = inputGroup.closest('.row');
                    container.parentNode.insertBefore(welcomeMessage, container);
                    
                    // Disparaître après 5 secondes
                    setTimeout(() => {
                        welcomeMessage.style.opacity = '0';
                        welcomeMessage.style.height = welcomeMessage.offsetHeight + 'px';
                        welcomeMessage.style.transition = 'all 0.5s ease';
                        welcomeMessage.style.overflow = 'hidden';
                        
                        setTimeout(() => {
                            welcomeMessage.style.height = '0';
                            welcomeMessage.style.padding = '0';
                            welcomeMessage.style.margin = '0';
                            
                            setTimeout(() => {
                                welcomeMessage.remove();
                            }, 500);
                        }, 500);
                    }, 5000);
                }
            }
            
            afficherTaches();
            updateCounters();
            
        } catch (error) {
            console.error("Erreur lors du chargement des tâches:", error);
            
            // Afficher une erreur à l'utilisateur
            taskList.innerHTML = `
                <div class="alert alert-danger m-3">
                    <h5><i class="fas fa-exclamation-triangle me-2"></i>Erreur de chargement</h5>
                    <p>Impossible de charger vos tâches. Essayez de recharger la page.</p>
                    <button class="btn btn-sm btn-outline-danger" onclick="location.reload()">
                        <i class="fas fa-sync-alt me-1"></i>Recharger
                    </button>
                </div>
            `;
        }
    }, 500); // Un délai de 500ms pour montrer l'animation
}

function ajouterTache() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        // Feedback visuel au lieu d'une alerte
        taskInput.classList.add('is-invalid');
        taskInput.style.animation = 'shake 0.5s';
        
        // Ajouter temporairement une classe d'animation
        if (!document.getElementById('shake-keyframes')) {
            const style = document.createElement('style');
            style.id = 'shake-keyframes';
            style.innerHTML = `
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
                    20%, 40%, 60%, 80% { transform: translateX(5px); }
                }
            `;
            document.head.appendChild(style);
        }
        
        setTimeout(() => {
            taskInput.classList.remove('is-invalid');
            taskInput.style.animation = '';
        }, 500);
        return;
    }
    
    // Vérifier si la tâche existe déjà
    const exists = taskArray.some(task => 
        task.text.toLowerCase() === taskText.toLowerCase()
    );
    
    if (exists) {
        // Animation de secousse pour l'élément existant
        const existingTaskIndex = taskArray.findIndex(
            task => task.text.toLowerCase() === taskText.toLowerCase()
        );
        
        const existingLi = taskList.children[existingTaskIndex];
        if (existingLi) {
            existingLi.style.animation = 'pulse 0.5s ease';
            existingLi.style.backgroundColor = 'rgba(255, 193, 7, 0.2)';
            
            setTimeout(() => {
                existingLi.style.animation = '';
                setTimeout(() => {
                    existingLi.style.backgroundColor = '';
                }, 1000);
            }, 500);
            
            taskInput.value = "";
            return;
        }
    }
    
    // Effet visuel sur le bouton d'ajout
    addButton.classList.add('active');
    setTimeout(() => {
        addButton.classList.remove('active');
    }, 200);
    
    // Ajouter la tâche
    taskArray.push({ text: taskText, done: false });
    taskInput.value = "";
    
    // Mettre le focus sur l'input pour ajouter rapidement plusieurs tâches
    taskInput.focus();
    
    // Effet de transition lors de l'ajout
    const wasEmpty = taskArray.length === 1;
    
    if (wasEmpty) {
        taskList.innerHTML = ""; // Supprimer l'état vide si présent
    }
    
    afficherTaches();
    sauvegarderTaches();
    updateCounters();
    
    // Faire défiler vers le bas pour voir la nouvelle tâche
    taskList.scrollTop = taskList.scrollHeight;
}

function supprimerTache(index) {
    taskArray.splice(index, 1);
    afficherTaches();
    sauvegarderTaches();
    updateCounters();
}

function terminerTache(index) {
    // Trouver l'élément correspondant dans le DOM
    const taskItem = taskList.children[index];
    if (taskItem) {
        // Animation de transition
        const isCompleting = !taskArray[index].done;
        
        if (isCompleting) {
            taskItem.classList.add('completing');
            // Ajouter temporairement une classe d'animation
            if (!document.getElementById('completing-keyframes')) {
                const style = document.createElement('style');
                style.id = 'completing-keyframes';
                style.innerHTML = `
                    .completing .task-text {
                        animation: strikeThrough 0.3s ease forwards;
                    }
                    @keyframes strikeThrough {
                        from { text-decoration: none; }
                        to { text-decoration: line-through; }
                    }
                `;
                document.head.appendChild(style);
            }
        } else {
            // Animation pour démarquer la tâche
            taskItem.classList.add('uncompleting');
        }
    }
    
    // Mettre à jour l'état
    taskArray[index].done = !taskArray[index].done;
    
    // Attendre la fin de l'animation avant de réafficher
    setTimeout(() => {
        afficherTaches();
        sauvegarderTaches();
        updateCounters();
    }, 300);
    
    // Mettre à jour le compteur immédiatement pour une réaction plus rapide
    const total = taskArray.length;
    const completed = taskArray.filter(task => task.done).length;
    const pending = total - completed;
    
    totalCountElement.textContent = total;
    completedCountElement.textContent = completed;
    pendingCountElement.textContent = pending;
}

function supprimerToutesLesTaches() {
    // Si aucune tâche, ne rien faire
    if (taskArray.length === 0) {
        return;
    }
    
    // Créer une boîte de dialogue personnalisée au lieu de confirm()
    const modal = document.createElement('div');
    modal.className = 'modal fade show';
    modal.style.display = 'block';
    modal.style.backgroundColor = 'rgba(0,0,0,0.5)';
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.zIndex = '1050';
    
    modal.innerHTML = `
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content" style="border-radius: 10px; overflow: hidden; animation: fadeInDown 0.3s ease;">
                <div class="modal-header bg-danger text-white">
                    <h5 class="modal-title">Confirmation</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body p-4">
                    <p>Êtes-vous sûr de vouloir supprimer toutes les tâches ?</p>
                    <p class="mb-0 text-muted"><small>Cette action est irréversible.</small></p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-secondary" id="modalCancelBtn">Annuler</button>
                    <button type="button" class="btn btn-danger" id="modalConfirmBtn">Supprimer tout</button>
                </div>
            </div>
        </div>
        <style>
            @keyframes fadeInDown {
                from { opacity: 0; transform: translateY(-20px); }
                to { opacity: 1; transform: translateY(0); }
            }
        </style>
    `;
    
    document.body.appendChild(modal);
    
    // Gestionnaires d'événements pour les boutons
    const closeModal = () => {
        modal.classList.add('fade');
        setTimeout(() => {
            document.body.removeChild(modal);
        }, 300);
    };
    
    document.getElementById('modalCancelBtn').addEventListener('click', closeModal);
    document.querySelector('.btn-close').addEventListener('click', closeModal);
    
    document.getElementById('modalConfirmBtn').addEventListener('click', () => {
        // Animation de suppression
        const items = taskList.querySelectorAll('.list-group-item');
        items.forEach((item, i) => {
            setTimeout(() => {
                item.style.opacity = '0';
                item.style.transform = 'translateX(20px)';
            }, i * 50);
        });
        
        setTimeout(() => {
            taskArray = [];
            afficherTaches();
            sauvegarderTaches();
            updateCounters();
            closeModal();
        }, items.length * 50 + 300);
    });
}    

function rechercherTaches() {
    const searchText = searchInput.value.toLowerCase().trim();
    
    // Si la recherche est vide, revenir à l'affichage normal
    if (searchText === "") {
        if (document.querySelector('.empty-state')) {
            // Animation de retour si on était dans un état vide
            taskList.style.opacity = '0';
            setTimeout(() => {
                afficherTaches();
                taskList.style.opacity = '1';
            }, 200);
        } else {
            afficherTaches();
        }
        return;
    }
    
    // Algorithme de recherche amélioré avec correspondance partielle de mots
    const filteredTasks = taskArray.filter(task => {
        const taskText = task.text.toLowerCase();
        
        // Correspondance exacte
        if (taskText.includes(searchText)) {
            return true;
        }
        
        // Recherche de mots partiels
        const searchWords = searchText.split(/\s+/);
        return searchWords.every(word => taskText.includes(word));
    });
    
    // Trier les résultats pour mettre en avant les correspondances exactes
    filteredTasks.sort((a, b) => {
        const aContainsExact = a.text.toLowerCase().includes(searchText);
        const bContainsExact = b.text.toLowerCase().includes(searchText);
        
        if (aContainsExact && !bContainsExact) return -1;
        if (!aContainsExact && bContainsExact) return 1;
        
        // Trier par état terminé en second
        if (a.done && !b.done) return 1;
        if (!a.done && b.done) return -1;
        
        return 0;
    });
    
    // Transition fluide
    taskList.style.opacity = '0';
    setTimeout(() => {
        afficherTachesFiltered(filteredTasks);
        taskList.style.opacity = '1';
    }, 200);
}

function afficherTaches() {
    taskList.innerHTML = "";
    
    if (taskArray.length === 0) {
        const emptyState = document.createElement('div');
        emptyState.className = 'empty-state';
        emptyState.innerHTML = `
            <i class="fas fa-clipboard-list"></i>
            <h5>Aucune tâche pour le moment</h5>
            <p>Ajoutez une tâche pour commencer</p>
        `;
        taskList.appendChild(emptyState);
        return;
    }
    
    taskArray.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = 'list-group-item' + (task.done ? ' completed' : '');
        
        // Ajout d'un délai pour l'effet d'animation
        li.style.animationDelay = (index * 0.05) + 's';
        
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
            
        // Animation lors du clic
        doneBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const btn = e.currentTarget;
            btn.style.animation = 'pulse 0.3s';
            setTimeout(() => {
                btn.style.animation = '';
                terminerTache(index);
            }, 300);
        });
        
        const delBtn = document.createElement('button');
        delBtn.type = 'button';
        delBtn.className = 'btn btn-sm btn-outline-danger';
        delBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
        
        delBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const btn = e.currentTarget;
            btn.style.animation = 'pulse 0.3s';
            const parentLi = btn.closest('li');
            parentLi.style.opacity = '0';
            parentLi.style.transform = 'translateX(20px)';
            
            setTimeout(() => {
                supprimerTache(index);
            }, 300);
        });
        
        controls.appendChild(doneBtn);
        controls.appendChild(delBtn);
        li.appendChild(span);
        li.appendChild(controls);
        
        // Permettre de cliquer sur la ligne entière pour marquer comme terminée
        li.addEventListener('click', (e) => {
            if (!e.target.closest('button')) {
                terminerTache(index);
            }
        });
        
        taskList.appendChild(li);
    });
}

function afficherTachesFiltered(filteredTasks) {
    taskList.innerHTML = "";
    
    // Animation pour indiquer la recherche active
    const searchActive = document.querySelector('.input-group:has(#searchInput)');
    if (searchActive) {
        searchActive.style.boxShadow = '0 0 0 3px rgba(78, 84, 200, 0.3)';
        setTimeout(() => {
            searchActive.style.boxShadow = '';
        }, 600);
    }
    
    if (filteredTasks.length === 0) {
        const emptyState = document.createElement('div');
        emptyState.className = 'empty-state';
        emptyState.innerHTML = `
            <i class="fas fa-search"></i>
            <h5>Aucune tâche trouvée</h5>
            <p>Essayez avec un autre terme de recherche</p>
        `;
        taskList.appendChild(emptyState);
        return;
    }
    
    // Mettre en évidence les termes de recherche
    const searchTerm = searchInput.value.toLowerCase();
    
    filteredTasks.forEach((task, originalIndex) => {
        const index = taskArray.findIndex(t => t.text === task.text);
        const li = document.createElement('li');
        li.className = 'list-group-item' + (task.done ? ' completed' : '');
        
        // Délai pour l'animation
        li.style.animationDelay = (originalIndex * 0.05) + 's';
        
        const span = document.createElement('span');
        span.className = 'task-text';
        
        // Mettre en surbrillance les termes de recherche
        if (searchTerm.trim() !== '') {
            const regex = new RegExp(`(${searchTerm.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')})`, 'gi');
            span.innerHTML = task.text.replace(regex, '<mark style="background-color: rgba(78, 84, 200, 0.2); padding: 0 2px; border-radius: 2px;">$1</mark>');
        } else {
            span.textContent = task.text;
        }
        
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
        
        doneBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const btn = e.currentTarget;
            btn.style.animation = 'pulse 0.3s';
            setTimeout(() => {
                btn.style.animation = '';
                terminerTache(index);
            }, 300);
        });
        
        const delBtn = document.createElement('button');
        delBtn.type = 'button';
        delBtn.className = 'btn btn-sm btn-outline-danger';
        delBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
        
        delBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const parentLi = e.currentTarget.closest('li');
            parentLi.style.opacity = '0';
            parentLi.style.transform = 'translateX(20px)';
            
            setTimeout(() => {
                supprimerTache(index);
            }, 300);
        });
        
        controls.appendChild(doneBtn);
        controls.appendChild(delBtn);
        li.appendChild(span);
        li.appendChild(controls);
        
        // Permettre de cliquer sur la ligne entière pour marquer comme terminée
        li.addEventListener('click', (e) => {
            if (!e.target.closest('button')) {
                terminerTache(index);
            }
        });
        
        taskList.appendChild(li);
    });
}

function updateCounters() {
    const total = taskArray.length;
    const completed = taskArray.filter(task => task.done).length;
    const pending = total - completed;
    
    // Animations pour les compteurs
    animateCounter(totalCountElement, total);
    animateCounter(completedCountElement, completed);
    animateCounter(pendingCountElement, pending);
    
    // Mettre à jour la couleur du compteur en fonction des tâches terminées
    const taskCounter = document.getElementById('taskCounter');
    if (taskCounter) {
        // Calculer la progression en pourcentage
        const progress = total > 0 ? (completed / total) : 0;
        
        // Changer la couleur en fonction de la progression
        if (progress === 1 && total > 0) {
            // Toutes les tâches sont terminées
            taskCounter.style.backgroundColor = 'rgba(40, 167, 69, 0.2)';
            taskCounter.style.color = '#28a745';
            
            // Animation de célébration
            if (!document.querySelector('.celebration-animation')) {
                const celebration = document.createElement('div');
                celebration.className = 'celebration-animation';
                celebration.style.position = 'absolute';
                celebration.style.top = '0';
                celebration.style.left = '0';
                celebration.style.width = '100%';
                celebration.style.pointerEvents = 'none';
                celebration.innerHTML = `
                    <style>
                        @keyframes confetti {
                            0% { transform: translateY(0) rotate(0deg); opacity: 1; }
                            100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
                        }
                    </style>
                `;
                
                // Ajouter des confettis
                for (let i = 0; i < 50; i++) {
                    const confetti = document.createElement('div');
                    confetti.style.position = 'absolute';
                    confetti.style.width = '10px';
                    confetti.style.height = '10px';
                    confetti.style.backgroundColor = ['#4e54c8', '#8f94fb', '#28a745', '#ffc107'][Math.floor(Math.random() * 4)];
                    confetti.style.left = Math.random() * 100 + '%';
                    confetti.style.top = '-10px';
                    confetti.style.opacity = '1';
                    confetti.style.animation = `confetti ${1 + Math.random() * 2}s ease-out forwards ${Math.random() * 3}s`;
                    confetti.style.transform = 'rotate(' + Math.random() * 360 + 'deg)';
                    celebration.appendChild(confetti);
                }
                
                document.body.appendChild(celebration);
                
                setTimeout(() => {
                    document.body.removeChild(celebration);
                }, 5000);
            }
            
        } else if (progress > 0.7) {
            taskCounter.style.backgroundColor = 'rgba(40, 167, 69, 0.1)';
            taskCounter.style.color = '#28a745';
        } else if (progress > 0.3) {
            taskCounter.style.backgroundColor = 'rgba(255, 193, 7, 0.1)';
            taskCounter.style.color = '#ffc107';
        } else {
            taskCounter.style.backgroundColor = 'rgba(78, 84, 200, 0.1)';
            taskCounter.style.color = '#4e54c8';
        }
    }
}

// Animation pour les compteurs
function animateCounter(element, newValue) {
    const currentValue = parseInt(element.textContent) || 0;
    if (currentValue !== newValue) {
        // Classe pour l'animation
        element.classList.add('counter-change');
        
        // Ajouter le style pour l'animation si ce n'est pas déjà fait
        if (!document.getElementById('counter-animation-style')) {
            const style = document.createElement('style');
            style.id = 'counter-animation-style';
            style.innerHTML = `
                .counter-change {
                    animation: pulse 0.5s ease;
                }
                @keyframes pulse {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.2); }
                    100% { transform: scale(1); }
                }
            `;
            document.head.appendChild(style);
        }
        
        setTimeout(() => {
            element.textContent = newValue;
            setTimeout(() => {
                element.classList.remove('counter-change');
            }, 500);
        }, 100);
    } else {
        element.textContent = newValue;
    }
}

function sauvegarderTaches() {
    // Ajout d'un timestamp pour suivre la dernière modification
    const data = {
        tasks: taskArray,
        lastModified: new Date().toISOString()
    };
    localStorage.setItem('tasks', JSON.stringify(data));
    
    // Animation de feedback pour la sauvegarde
    const saveIndicator = document.createElement('div');
    saveIndicator.textContent = 'Sauvegardé';
    saveIndicator.style.position = 'fixed';
    saveIndicator.style.bottom = '20px';
    saveIndicator.style.right = '20px';
    saveIndicator.style.backgroundColor = 'rgba(40, 167, 69, 0.9)';
    saveIndicator.style.color = 'white';
    saveIndicator.style.padding = '8px 15px';
    saveIndicator.style.borderRadius = '20px';
    saveIndicator.style.fontSize = '0.8rem';
    saveIndicator.style.opacity = '0';
    saveIndicator.style.transform = 'translateY(10px)';
    saveIndicator.style.transition = 'all 0.3s ease';
    saveIndicator.style.zIndex = '1000';
    
    document.body.appendChild(saveIndicator);
    
    setTimeout(() => {
        saveIndicator.style.opacity = '1';
        saveIndicator.style.transform = 'translateY(0)';
        
        setTimeout(() => {
            saveIndicator.style.opacity = '0';
            saveIndicator.style.transform = 'translateY(10px)';
            
            setTimeout(() => {
                document.body.removeChild(saveIndicator);
            }, 300);
        }, 1000);
    }, 10);
}

// Fonction pour filtrer les tâches par état
function filtrerTaches(filtre) {
    switch(filtre) {
        case 'active':
            const activeItems = taskArray.filter(task => !task.done);
            afficherTachesFiltered(activeItems);
            break;
        case 'completed':
            const completedItems = taskArray.filter(task => task.done);
            afficherTachesFiltered(completedItems);
            break;
        default:
            afficherTaches();
    }
    
    // Mettre à jour l'état des options de filtrage
    document.querySelectorAll('.filter-option').forEach(option => {
        if (option.dataset.filter === filtre) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });
}

// Fonction pour trier les tâches
function trierTaches() {
    const sortBtn = document.getElementById('sortBtn');
    const currentDirection = sortBtn.dataset.direction || 'asc';
    
    // Changer l'icône et la direction
    if (currentDirection === 'asc') {
        sortBtn.innerHTML = '<i class="fas fa-sort-alpha-up me-1"></i>Trier';
        sortBtn.dataset.direction = 'desc';
        
        // Trier par ordre alphabétique décroissant
        taskArray.sort((a, b) => b.text.localeCompare(a.text));
    } else {
        sortBtn.innerHTML = '<i class="fas fa-sort-alpha-down me-1"></i>Trier';
        sortBtn.dataset.direction = 'asc';
        
        // Trier par ordre alphabétique croissant
        taskArray.sort((a, b) => a.text.localeCompare(b.text));
    }
    
    afficherTaches();
    sauvegarderTaches();
}

// Gestionnaires d'événements
addButton.addEventListener('click', ajouterTache);

taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        ajouterTache();
    }
});

searchInput.addEventListener('input', rechercherTaches);

// Bouton pour effacer la recherche
document.querySelector('.reset-search').addEventListener('click', function() {
    searchInput.value = '';
    searchInput.focus();
    afficherTaches();
});

clearAllButton.addEventListener('click', supprimerToutesLesTaches);

// Gestionnaire pour les options de filtrage
document.querySelectorAll('.filter-option').forEach(option => {
    option.addEventListener('click', function(e) {
        e.preventDefault();
        const filtre = this.dataset.filter;
        filtrerTaches(filtre);
    });
});

// Gestionnaire pour le tri
document.getElementById('sortBtn').addEventListener('click', trierTaches);

// Initialiser les polyfills pour le support des fonctionnalités modernes
if (!Element.prototype.closest) {
    Element.prototype.closest = function(s) {
        let el = this;
        do {
            if (el.matches(s)) return el;
            el = el.parentElement || el.parentNode;
        } while (el !== null && el.nodeType === 1);
        return null;
    };
}

// Fonctions d'accessibilité
document.addEventListener('keydown', function(e) {
    // Ctrl+F ou Command+F pour le focus sur la recherche
    if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
        e.preventDefault();
        searchInput.focus();
    }
    
    // Alt+N pour ajouter une nouvelle tâche
    if (e.altKey && e.key === 'n') {
        e.preventDefault();
        taskInput.focus();
    }
});

// Animation au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    if (header) {
        header.style.opacity = '0';
        header.style.transform = 'translateY(-20px)';
        
        setTimeout(() => {
            header.style.transition = 'all 0.5s ease';
            header.style.opacity = '1';
            header.style.transform = 'translateY(0)';
        }, 200);
    }
});

// Thème sombre/clair
function setTheme(theme) {
    const themeToggleBtn = document.getElementById('themeToggle');
    
    if (theme === 'dark') {
        document.body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
        if (themeToggleBtn) {
            themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
            themeToggleBtn.setAttribute('title', 'Passer au mode clair');
        }
    } else {
        document.body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
        if (themeToggleBtn) {
            themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
            themeToggleBtn.setAttribute('title', 'Passer au mode sombre');
        }
    }
}

// Gestionnaire d'événement pour le bouton de thème
document.getElementById('themeToggle').addEventListener('click', function() {
    const isDarkTheme = document.body.classList.contains('dark-theme');
    
    // Animation lors du changement
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.backgroundColor = isDarkTheme ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)';
    overlay.style.zIndex = '9999';
    overlay.style.opacity = '0';
    overlay.style.transition = 'opacity 0.3s ease';
    overlay.style.pointerEvents = 'none';
    
    document.body.appendChild(overlay);
    
    setTimeout(() => {
        overlay.style.opacity = '1';
        
        setTimeout(() => {
            setTheme(isDarkTheme ? 'light' : 'dark');
            
            setTimeout(() => {
                overlay.style.opacity = '0';
                
                setTimeout(() => {
                    document.body.removeChild(overlay);
                }, 300);
            }, 100);
        }, 300);
    }, 10);
});

// Vérifier les préférences utilisateur
const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark' || (!savedTheme && userPrefersDark)) {
    setTheme('dark');
}

// Initialiser l'application
chargerTaches();