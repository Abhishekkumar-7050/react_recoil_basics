import { atom, selector } from "recoil";


// atom item expect the an arugument as the object
export const  countAtom = atom({
// unique key
key:"countAtom",
default:0

});




// selector

export const evenSelector = selector({
    key :"keySelector",
    get :({get})=>{
        const count =  get(countAtom);
          return count %2 == 0;
    }
})
