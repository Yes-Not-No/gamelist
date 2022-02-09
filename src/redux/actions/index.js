function setGameList(gameData) {
    return {
        type: 'setGameList',
        payload: gameData,
    }
}

function setChoosenGame(game) {
    return {
        type: 'setChoosenGame',
        payload: game,
    }
}

function addGameToDownload(game) {
    return {
        type: 'addToDownload',
        payload: game,
    }
}

export { setGameList, setChoosenGame, addGameToDownload }