import { put, takeLatest, all, fork } from 'redux-saga/effects';
import { API_KEY, API_TOKEN, BOARD_ID } from '../../config.js';

const idBoard = BOARD_ID;
const api = API_KEY;
const token = API_TOKEN;


// GET ALL LIST AND CARDS


function* getAllList() {

    const url = `https://api.trello.com/1/boards/${idBoard}/lists?cards=all&key=${api}&token=${token}`;

    const json = yield fetch(url, {
        method: 'GET'
    }).then(response => {
        return response.json()
    });
    yield put({ type: "DATA_RECEIVED", json });
}

function* actionWatcher1() {
    yield takeLatest("GET_LIST", getAllList)
}

// ADD ONE LIST


function* addOneList(data) {

    const listName = data.name
    const url = `https://api.trello.com/1/lists?name=${listName}&idBoard=${idBoard}&pos=bottom&key=${api}&token=${token}`;
    const json = yield fetch(url, {
        method: 'POST'
    })
}

function* actionWatcher2() {
    yield takeLatest("ADD_LIST", addOneList)
}

// ARCHIEVE LIST

function* listArchieve(data) {
    const idList = data.id
    const url = `https://api.trello.com/1/lists/${idList}/?closed=true&key=${api}&token=${token}`;
    const json = yield fetch(url, {
        method: 'PUT'
    })
}

function* actionWatcher3() {
    yield takeLatest("ARCHIEVE_LIST", listArchieve)
}


// EDIT LIST NAME 

function* editListName(data) {
    const idList = data.id
    const listname = data.name
    const url = `https://api.trello.com/1/lists/${idList}?name=${listname}&key=${api}&token=${token}`;
    const json = yield fetch(url, {
        method: "PUT"
    })
}

function* actionWatcher4() {
    yield takeLatest("EDIT_LIST_NAME", editListName)
}


// ADD ONE CARD

function* addOneCard(data) {

    const idList = data.id;
    const cardName = data.name;
    const url = `https://api.trello.com/1/cards?name=${cardName}&idList=${idList}&pos=bottom&key=${api}&token=${token}`;
    const json = yield fetch(url, {
        method: "POST"
    })
}

function* actionWatcher5() {
    yield takeLatest("ADD_CARD", addOneCard)
}

// EDIT CARD ON LIST


function* editCardName(data) {

    const idCard = data.id;
    const cardname = data.name;
    const url = `https://api.trello.com/1/cards/${idCard}?name=${cardname}&key=${api}&token=${token}`;
    const json = yield fetch(url, {
        method: "PUT"
    })
}
function* actionWatcher6() {
    yield takeLatest("EDIT_CARD_NAME", editCardName)
}

export default function* rootSaga() {
    // console.log(434)
    yield all([
        fork(actionWatcher1),
        fork(actionWatcher2),
        fork(actionWatcher3),
        fork(actionWatcher4),
        fork(actionWatcher5),
        fork(actionWatcher6),
    ]);
}