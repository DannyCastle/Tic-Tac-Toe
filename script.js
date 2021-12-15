const player = (marker) => {
    return {marker};
    //creates a player.piece that will equal x or o
};

const gameBoard = (() => {
    let board = new Array(9);

    const restartButton = document.querySelector('#restart-btn');
    restartButton.addEventListener('click', (e) => clear());
    const clear = () => {
        for (let i = 0; i < 9; ++i){
            board[i] = null;
        };
        displayController.update();
    };

    const update = (index, marker) => {
        while (board[index] != null){
            console.log(board[index]);
            game.currentPlayer();
            return;
        };
        board[index] = marker;
        displayController.update();
    };

    const show = () => console.log(board);

    return {
        board,
        update,
        show,
    };

})();


const displayController = (() => {
    /*take board array and use it to change displayed board */


    const update = () => {
        for (let i = 0; i < 9; ++i){
            field.buttons[i].textContent = gameBoard.board[i];
        }
    };

    return {
        update,
    };
})();

const field = (() => {
    /* listens to field buttons
       identifies which one hit
       sends index to gameBoard
       */
    let index = '';
    const buttons = document.querySelectorAll("#gameboard-ctn button");
    let parse = buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            index = button.dataset.location;
            gameBoard.update(index, game.currentPlayer());
        });
    });
    return {
        buttons,
    };
})();


const game = (() => {
    const player1 = player('X');
    const player2 = player('O');

    let lastMove = 'O';

    let currentPlayer = () => {
        if (lastMove === 'O'){
            lastMove = 'X';
            return player1.marker;
        };
        lastMove = 'O';
        return player2.marker;
    };

    const checkForWin = () => {
        const winningArrays = [
        '012',
        '345',
        '678',
        '036',
        '147',
        '258',
        '048',
        '246'
        ];

        const getPlayerIndices = (mark) => {
            let indices = '';
            for (i = 0; i < gameBoard.board.length; ++i){
                if (gameBoard.board[i] === mark){
                    indices += i;
                };
            };
            return indices;
        };

        let player1Arr = getPlayerIndices(player1.marker);
        let player2Arr = getPlayerIndices(player2.marker);

        let winner = 'No One';

        winningArrays.forEach((array) => {
            if (player1Arr.includes(array)) winner = player1.marker;
            else if (player2Arr.includes(array)) winner = player2.marker;
        });

        console.log(`The Winner is ${winner}!`);

    };


    return{
        checkForWin,
        currentPlayer,
    };

})();
