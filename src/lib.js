const encode = s => {
    const s2 = Buffer.from(s, 'ascii').toString('base64')
    let hash = 0
    if (s2.length === 0) return hash;
    for (let i = 0; i < s2.length; i++) {
        hash = ((hash << 5) - hash) + s2.charCodeAt(i);
        hash |= 0;
    }
    return Buffer.from(hash.toString(), 'ascii').toString('base64');
}

module.exports = {
    encode
}