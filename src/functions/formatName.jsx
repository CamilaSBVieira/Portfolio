
export function formatName(unformated) {
    const pattern = new RegExp("(?=.*[A-Z])");
    let formatedName;
    
    if(unformated.includes('-')) {
        formatedName = unformated.split('-');
        formatedName = formatedName.map(word => {
            return word.slice(0, 1).toUpperCase() + word.slice(1);
        })
        return formatedName.join(' ');
    } else if (pattern.test(unformated)) {
        formatedName = unformated.split(/(?=[A-Z])/);
        return formatedName.join(' ');
    } else {
        return unformated.slice(0, 1).toUpperCase() + unformated.slice(1);
    }
}