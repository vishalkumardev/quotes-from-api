


const final = () => {
    const quotes =document.getElementById('quotes');
    const author =document.getElementById('author');
    var  num = Math.floor(Math.random()*1000);
    qoutesdata = data[num];
    quotes.innerText = `${qoutesdata.text}`;
    // author.innerText = "By-"+`${qoutesdata.author}`;
    if (qoutesdata.author === null) {
        author.innerText = "By-Unknown";
    } else {
        author.innerText = "By-"+`${qoutesdata.author}`;
    }
}
 


const getquotes = async() => {
    const api = "https://type.fit/api/quotes";
    try {
        let qdata = await fetch(api);
        data = await qdata.json();
        final();
    } catch (error) {}
}

getquotes();
