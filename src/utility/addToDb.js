import { toast } from "react-toastify";

const getStoredReadList = () => {
    const storedListStr = localStorage.getItem('read-list')
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr)
        return storedList;
    }
    else {
        return []
    }
}


const addToStoredReadList = (id) => {
    const storedList = getStoredReadList();
    if (storedList.includes(id)) {
        console.log(id, 'id already exist')
    }
    else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList)
        localStorage.setItem('read-list', storedListStr)
        toast('Book added to read list')
    }
}

const getStoredWishList = () => {
    // read-list
    const storedWishListStr = localStorage.getItem('wish-list')
    if (storedWishListStr) {
        const storedWishList = JSON.parse(storedWishListStr)
        return storedWishList;
    }
    else{
        return []
    }
}

const addToStoredWishList = (id) => {
    const storedWishList = getStoredWishList()
    if(storedWishList.includes(id)){
        console.log(id, 'already exist')
    }
    else{
        storedWishList.push(id)
        const storedWishListStr = JSON.stringify(storedWishList)
        localStorage.setItem('wish-list', storedWishListStr)
    }
}

export { addToStoredReadList, addToStoredWishList, getStoredReadList }