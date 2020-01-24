import { put, takeLatest, all, fork } from 'redux-saga/effects';
import { API_KEY, API_TOKEN, BOARD_ID } from '../../config.js'

const idBoard = BOARD_ID;
const api = API_KEY;
const token = API_TOKEN;


// GET ALL LIST AND CARDS


function* getAllList() {
    // console.log('wworking')
    const url = `https://api.trello.com/1/boards/${idBoard}/lists?cards=all&key=${api}&token=${token}`;

    // console.log(url)
    const json = yield fetch(url, {
        method: 'GET'
    }).then(response => {
        return response.json()
    });
    // console.log(json)
    yield put({ type: "DATA_RECEIVED", json });
}

function* actionWatcher1() {
    // console.log('get all director')
    yield takeLatest("GET_LIST", getAllList)
}

// ADD ONE LIST


function* addOneList(data) {
    // console.log(data)
    const listName = data.name
    // console.log(listName)
    const url = `https://api.trello.com/1/lists?name=${listName}&idBoard=${idBoard}&pos=bottom&key=${api}&token=${token}`;
    const json = yield fetch(url, {
        method: 'POST'
    })
}

function* actionWatcher2() {
    yield takeLatest("ADD_LIST", addOneList)
}


// ADD ONE CARD

function* addOneCard(data) {
    // console.log(data)
    const cardName = data.name
    // console.log(cardName)
    // const url = `https://api.trello.com/1/cards?name=${cardName}&idList=${idList}&pos=bottom&key=${api}&token=${token}`;
}

function* actionWatcher3() {
    yield takeLatest("ADD_CARD", addOneCard)
}

export default function* rootSaga() {
    // console.log(434)
    yield all([
        fork(actionWatcher1),
        fork(actionWatcher2),
        fork(actionWatcher3),
        // fork(actionWatcher4),
        // fork(actionWatcher5)
    ]);
}

