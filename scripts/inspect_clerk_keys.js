const { esES } = require('@clerk/localizations');

function searchKey(obj, targetValue, currentPath = '') {
    for (const key in obj) {
        const newPath = currentPath ? `${currentPath}.${key}` : key;
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            searchKey(obj[key], targetValue, newPath);
        } else if (typeof obj[key] === 'string') {
            if (obj[key].includes(targetValue)) {
                console.log(`FOUND KEY: ${newPath}`);
                console.log(`VALUE: ${obj[key]}`);
            }
        }
    }
}

console.log("Searching for key...");
// Search for a unique part of the string to avoid mismatch
// 'Estás iniciando sesión desde un dispositivo nuevo'
searchKey(esES, "Estás iniciando sesión desde un dispositivo nuevo");
