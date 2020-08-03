const getPuzzle = (wordCount) => new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    
    request.addEventListener('readystatechange', (e) => {
        if(e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText);
            resolve(data.puzzle);
            // callback(undefined, data.puzzle);
        } else if (e.target.readyState === 4) {
            reject('An error occured');
            // callback('An error occured', undefined);
            // console.log('An error occured');
        }
    });
    
    request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
    request.send();
}); 

    

