/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let letters = magazine
    ransomNote.split("").forEach(letter => letters = letters.replace(letter, ""))
    return magazine.length - letters.length === ransomNote.length
};