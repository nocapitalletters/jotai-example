export const deleteAtomFromArrayAtom = (atomConfigToBeDeleted, arrayAtom, arrayAtomSetFunction) => {
    const atomIndex = arrayAtom.indexOf(atomConfigToBeDeleted);
    arrayAtomSetFunction((prev) => {
        const array = [...prev]; 
        array.splice(atomIndex, 1); 
        return array;
    });
}

export const importAtoms = (...atomsArray) => {
    const obj = {}
    atomsArray.forEach((element) => {
        const [data, set] = useAtom(element[0]);
        obj[element[1]] = { data, set };
    });
    return obj;
}

export const importAtomsWriteOnly = (...atomsArray) => {
    const obj = {}
    atomsArray.forEach((element) => {
        const [, set] = useAtom(element[0]);
        obj[element[1]] = { data, set };
    });
    return obj;
}

export const importAtomsReadOnly = (...atomsArray) => {
    const obj = {}
    atomsArray.forEach((element) => {
        const [data] = useAtom(element[0]);
        obj[element[1]] = { data, set };
    });
    return obj;
}
