const canvas = document.getElementById('mazeCanvas');
const ctx = canvas.getContext('2d');
const nameForm = document.getElementById('nameForm');
const startGameButton = document.getElementById('startGame');
const nameInput = document.getElementById('nameInput');
const timerElement = document.getElementById('timer');

const rows = 9;  
const cols = 9;  
const cellSize = 54;  

let playerName = '';
let currentStage = 1;
const grid = []; 
let canMove = false; 
let timeUp = false; 

function initializeGrid() {
    for (let row = 0; row < rows; row++) {
        grid[row] = [];
        for (let col = 0; col < cols; col++) {
            if (row === 0 || row === rows - 1 || col === 0 || col === cols - 1) {
                grid[row][col] = Math.random() < 0.6 ? 1 : 0;
            } else {
                grid[row][col] = Math.random() < 0.4 ? 1 : 0;
            }
        }
    }
    grid[1][1] = 0;
    grid[rows - 2][cols - 2] = 0;
}

function bfs(start, end) {
    const queue = [start];
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
    visited[start.y][start.x] = true;

    const directions = [
        { x: 0, y: -1 },
        { x: 0, y: 1 },
        { x: -1, y: 0 },
        { x: 1, y: 0 },
    ];

    while (queue.length > 0) {
        const current = queue.shift();

        if (current.x === end.x && current.y === end.y) {
            return true;
        }

        for (const dir of directions) {
            const newX = current.x + dir.x;
            const newY = current.y + dir.y;

            if (newX >= 0 && newX < cols && newY >= 0 && newY < rows && !visited[newY][newX] && grid[newY][newX] === 0) {
                visited[newY][newX] = true;
                queue.push({ x: newX, y: newY });
            }
        }
    }

    return false;
}

function ensureValidPath() {
    const start = { x: 1, y: 1 };
    const end = { x: cols - 2, y: rows - 2 };

    if (!bfs(start, end)) {
        initializeGrid();
        ensureValidPath();
    }
}

function drawMaze() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid[row][col] === 1) {
                if (timeUp) {
                    ctx.fillStyle = 'rgb(0, 1, 7)';
                } else {
                    ctx.fillStyle = 'rgba(255,255, 255, 0.7)'; 
                }
            } else {
                ctx.fillStyle = 'rgb(0, 1, 7)';
            }
            ctx.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);
            ctx.strokeStyle = 'white';
            ctx.lineWidth = 2;
            ctx.strokeRect(col * cellSize, row * cellSize, cellSize, cellSize);
        }
    }

    ctx.fillStyle = 'green';
    ctx.fillRect((cols - 1) * cellSize, (rows - 1) * cellSize, cellSize, cellSize);
}

let player = { x: 1, y: 1 };
const playerRadius = cellSize / 3;

function movePlayer(event) {
    if (!canMove) return;  

    const newPlayer = { ...player };

    switch (event.key) {
        case 'ArrowUp':
            newPlayer.y -= 1;
            break;
        case 'ArrowDown':
            newPlayer.y += 1;
            break;
        case 'ArrowLeft':
            newPlayer.x -= 1;
            break;
        case 'ArrowRight':
            newPlayer.x += 1;
            break;
    }

    if (newPlayer.x >= 0 && newPlayer.x < cols && newPlayer.y >= 0 && newPlayer.y < rows) {
        if (grid[newPlayer.y][newPlayer.x] === 0) {
            player = newPlayer;
        } else {
            alert('You hit a wall');
            player = { x: 1, y: 1 };  
            timeUp = false;  
            canMove = false;  
            startCountdown(); 
            generateMaze();
        }
    }

    if (player.x === cols - 1 && player.y === rows - 1) {
        alert('Congratulations! Stage ' + currentStage + ' completed.');
        currentStage++;
        generateMaze();
        player = { x: 1, y: 1 };
    }

    drawMaze();
    ctx.beginPath();
    ctx.arc(player.x * cellSize + cellSize / 2, player.y * cellSize + cellSize / 2, playerRadius, 0, Math.PI * 2);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.stroke();
}

function generateMaze() {
    initializeGrid();
    ensureValidPath();
    drawMaze();
    drawPlayer();
}

function drawPlayer() {
    ctx.beginPath();
    ctx.arc(player.x * cellSize + cellSize / 2, player.y * cellSize + cellSize / 2, playerRadius, 0, Math.PI * 2);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.stroke();
}

function startCountdown() {
    let countdown = 10;
    const countdownInterval = setInterval(() => {
        timerElement.textContent = `${countdown}s`;
        countdown--;

        if (countdown < 0) {
            clearInterval(countdownInterval);
            timerElement.textContent = "Move Time";
            timeUp = true; 
            canMove = true;
            drawMaze();
        }
    }, 1000);
}

startGameButton.addEventListener('click', () => {
playerName = nameInput.value.trim() || 'Player';
nameForm.style.display = 'none';
canvas.style.display = 'block';
timerElement.style.display = 'block'; 

generateMaze();
startCountdown();

window.addEventListener('keydown', movePlayer);
canMove = false;
});
