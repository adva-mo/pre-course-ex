const capitalize = (word)=>{ 
    let chars = {'y':'Y','o':'O','i':'I','u':'U','a':'A','e':'E'};
    word = word.replace(/[yoiuae]/g, m => chars[m]);
    return word
}