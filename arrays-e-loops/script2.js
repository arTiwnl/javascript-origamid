// Muito comum usar array e for loop juntos!
var videoGames = ['Switch', 'PS4', 'Xbox'];

for(var item = 0; item < videoGames.length; item++){
    console.log(videoGames[item]);

    if(videoGames[item] === 'PS4'){
        break; //para o código quando acha a variavel
    }
}


var ultimoConsole = videoGames[videoGames.length -1];