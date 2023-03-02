exports.validateLength = (text, min, max) => {
    if (text.length > max || text.length < min){
        return false
    }
    return true
}
