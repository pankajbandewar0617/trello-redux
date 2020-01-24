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

// export const deletedata = (id) => ({
//     type: "DELETE",
//     id,
// });

// export const getOneData = (id) => ({
//     type: "GET_ONE",
//     id
// });


// export const getEditData = (id, name) => ({
//     type: "EDIT_ONE",
//     id, name
// });