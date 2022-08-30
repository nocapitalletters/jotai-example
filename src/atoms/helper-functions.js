export const deleteAtomFromArrayAtom = (atomConfigToBeDeleted, arrayAtom, arrayAtomSetFunction) => {
    const atomIndex = arrayAtom.indexOf(atomConfigToBeDeleted);
    arrayAtomSetFunction((prev) => {
        const array = [...prev]; 
        array.splice(atomIndex, 1); 
        return array;
    });
}