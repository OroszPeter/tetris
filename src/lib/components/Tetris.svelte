<script>
    import { onMount } from 'svelte';
    
    const BOARD_WIDTH = 10;
    const BOARD_HEIGHT = 20;
    const BLOCK_SIZE = 30;
    
    // Calculate dimensions for CSS
    const boardWidth = BOARD_WIDTH * BLOCK_SIZE;
    const boardHeight = BOARD_HEIGHT * BLOCK_SIZE;
    
    let board = Array(BOARD_HEIGHT).fill().map(() => Array(BOARD_WIDTH).fill(0));
    let currentPiece = null;
    let currentPieceType = null;
    let currentPosition = { x: 0, y: 0 };
    let gameOver = false;
    let score = 0;
    let highScore = 0;
    let gameLoop;
    
    const TETROMINOES = {
        I: [
            [0, 0, 0, 0],
            [1, 1, 1, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        O: [
            [1, 1],
            [1, 1]
        ],
        T: [
            [0, 1, 0],
            [1, 1, 1],
            [0, 0, 0]
        ],
        S: [
            [0, 1, 1],
            [1, 1, 0],
            [0, 0, 0]
        ],
        Z: [
            [1, 1, 0],
            [0, 1, 1],
            [0, 0, 0]
        ],
        J: [
            [1, 0, 0],
            [1, 1, 1],
            [0, 0, 0]
        ],
        L: [
            [0, 0, 1],
            [1, 1, 1],
            [0, 0, 0]
        ]
    };
    
    const COLORS = {
        I: '#00f0f0',
        O: '#f0f000',
        T: '#a000f0',
        S: '#00f000',
        Z: '#f00000',
        J: '#0000f0',
        L: '#f0a000'
    };
    
    onMount(() => {
        highScore = localStorage.getItem('tetrisHighScore') || 0;
        startGame();
        
        // Set CSS variables
        document.documentElement.style.setProperty('--board-width', `${boardWidth}px`);
        document.documentElement.style.setProperty('--board-height', `${boardHeight}px`);
        document.documentElement.style.setProperty('--block-size', `${BLOCK_SIZE}px`);
        
        return () => {
            if (gameLoop) clearInterval(gameLoop);
        };
    });
    
    function startGame() {
        board = Array(BOARD_HEIGHT).fill().map(() => Array(BOARD_WIDTH).fill(0));
        score = 0;
        gameOver = false;
        spawnPiece();
        gameLoop = setInterval(update, 1000);
    }
    
    function spawnPiece() {
        const pieces = Object.keys(TETROMINOES);
        const randomPieceType = pieces[Math.floor(Math.random() * pieces.length)];
        currentPieceType = randomPieceType;
        currentPiece = TETROMINOES[randomPieceType];
        currentPosition = {
            x: Math.floor(BOARD_WIDTH / 2) - Math.floor(currentPiece[0].length / 2),
            y: 0
        };
        
        if (checkCollision()) {
            gameOver = true;
            clearInterval(gameLoop);
            if (score > highScore) {
                highScore = score;
                localStorage.setItem('tetrisHighScore', highScore);
            }
        }
    }
    
    function checkCollision() {
        for (let y = 0; y < currentPiece.length; y++) {
            for (let x = 0; x < currentPiece[y].length; x++) {
                if (currentPiece[y][x]) {
                    const newX = currentPosition.x + x;
                    const newY = currentPosition.y + y;
                    
                    if (newX < 0 || newX >= BOARD_WIDTH || newY >= BOARD_HEIGHT || 
                        (newY >= 0 && board[newY][newX])) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
    
    function mergePiece() {
        for (let y = 0; y < currentPiece.length; y++) {
            for (let x = 0; x < currentPiece[y].length; x++) {
                if (currentPiece[y][x]) {
                    const newY = currentPosition.y + y;
                    if (newY >= 0) {
                        board[newY][currentPosition.x + x] = Object.keys(TETROMINOES).indexOf(currentPieceType) + 1;
                    }
                }
            }
        }
    }
    
    function clearLines() {
        let linesCleared = 0;
        for (let y = BOARD_HEIGHT - 1; y >= 0; y--) {
            if (board[y].every(cell => cell)) {
                board.splice(y, 1);
                board.unshift(Array(BOARD_WIDTH).fill(0));
                linesCleared++;
                y++;
            }
        }
        score += linesCleared * 100;
    }
    
    function update() {
        if (gameOver) return;
        
        currentPosition.y++;
        if (checkCollision()) {
            currentPosition.y--;
            mergePiece();
            clearLines();
            spawnPiece();
        }
    }
    
    function rotatePiece() {
        if (gameOver) return;
        
        const rotated = currentPiece[0].map((_, i) =>
            currentPiece.map(row => row[i]).reverse()
        );
        
        const oldPiece = currentPiece;
        currentPiece = rotated;
        
        if (checkCollision()) {
            currentPiece = oldPiece;
        }
    }
    
    function movePiece(direction) {
        if (gameOver) return;
        
        currentPosition.x += direction;
        if (checkCollision()) {
            currentPosition.x -= direction;
        }
    }
    
    function handleKeyDown(event) {
        // Prevent default behavior for arrow keys to stop page scrolling
        if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key)) {
            event.preventDefault();
        }
        
        switch (event.key) {
            case 'ArrowLeft':
                movePiece(-1);
                break;
            case 'ArrowRight':
                movePiece(1);
                break;
            case 'ArrowDown':
                currentPosition.y++;
                if (checkCollision()) {
                    currentPosition.y--;
                }
                break;
            case 'ArrowUp':
                rotatePiece();
                break;
        }
    }
</script>

<svelte:window on:keydown={handleKeyDown} />

<div class="game-container">
    <div class="score-container">
        <div class="score">Pontszám: {score}</div>
        <div class="high-score">Rekord: {highScore}</div>
    </div>
    
    <div class="game-board" class:game-over={gameOver}>
        {#each board as row, y}
            {#each row as cell, x}
                <div class="cell" 
                     style="background-color: {cell ? COLORS[Object.keys(TETROMINOES)[cell - 1]] : '#000'};
                            left: {x * BLOCK_SIZE}px;
                            top: {y * BLOCK_SIZE}px;">
                </div>
            {/each}
        {/each}
        
        {#if currentPiece}
            {#each currentPiece as row, y}
                {#each row as cell, x}
                    {#if cell}
                        <div class="cell piece" 
                             style="background-color: {COLORS[currentPieceType]};
                                    left: {(currentPosition.x + x) * BLOCK_SIZE}px;
                                    top: {(currentPosition.y + y) * BLOCK_SIZE}px;">
                        </div>
                    {/if}
                {/each}
            {/each}
        {/if}
        
        {#if gameOver}
            <div class="game-over">
                <h2>Játék Vége</h2>
                <button on:click={startGame}>Új Játék</button>
            </div>
        {/if}
    </div>
</div>

<style>
    :global(body) {
        margin: 0;
        padding: 0;
        overflow: hidden;
    }
    
    .game-container {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background-color: #1a1a1a;
    }
    
    .score-container {
        position: absolute;
        left: 20px;
        top: 20px;
        color: white;
        font-size: 1.5em;
    }
    
    .game-board {
        position: relative;
        width: var(--board-width);
        height: var(--board-height);
        background-color: #000;
        border: 2px solid #333;
        margin: 0 auto;
    }
    
    .cell {
        position: absolute;
        width: var(--block-size);
        height: var(--block-size);
        border: 1px solid #333;
    }
    
    .piece {
        z-index: 1;
    }
    
    .game-over {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;
    }
    
    .game-over button {
        margin-top: 20px;
        padding: 10px 20px;
        font-size: 1.2em;
        background-color: #4CAF50;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
    
    .game-over button:hover {
        background-color: #45a049;
    }
</style> 