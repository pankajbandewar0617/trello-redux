export const getAllList = () => ({
    type: "GET_LIST",
});

export const addNewList = (name) => ({
    type: "ADD_LIST",
    name
});

export const addNewCard = (id, name) => ({
    type: "ADD_CARD",
    id, name
})

export const archieveList = (id) => ({
    type: "ARCHIEVE_LIST",
    id,
});

export const editList = (id, name) => ({
    type: "EDIT_LIST_NAME",
    id, name
})