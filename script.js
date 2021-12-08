const player = (marker) => {
    return {marker};
    //creates a player.piece that will equal x or o
};

const gameBoard = (() => {
    let board = new Array(9);

    const update = (index, marker) => {
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
            let marker = 'x';
            index = button.dataset.location;
            gameBoard.update(index, marker);
        });
    });
    return {
        buttons,
    };
})();

function updateBoard (index) {
    /* uses index to change array of gameboard
       passes new array to display controller */
    console.log('this index is in the gamboard ' + index);

};
