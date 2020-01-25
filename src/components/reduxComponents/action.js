// GET ALL LIST

export const getAllList = () => ({
    type: "GET_LIST",
});

// ADD NEW LIST

export const addNewList = (name) => ({
    type: "ADD_LIST",
    name
});

// ARCHIEVE LIST

export const archieveList = (id) => ({
    type: "ARCHIEVE_LIST",
    id,
});

// EDIT LIST NAME

export const editList = (id, name) => ({
    type: "EDIT_LIST_NAME",
    id, name,

})

// ADD CARD ON LIST

export const addNewCard = (id, name) => ({
    type: "ADD_CARD",
    id, name,
})

// EDIT CARD NAME ON LIST

export const editCard = (id, name) => ({
    type: "EDIT_CARD_NAME",
    id, name,
})

// DELETE CARD ON LIST