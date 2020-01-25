export const getAllList = () => ({
    type: "GET_LIST",
});

export const addNewList = (name) => ({
    type: "ADD_LIST",
    name
});

export const addNewCard = (name) => ({
    type: "ADD_CARD",
    name
})

export const archieveList = (id) => ({
    type: "ARCHIEVE_LIST",
    id,
});

export const editList = (id, name) => ({
    type: "EDIT_LIST_NAME",
    id, name
})