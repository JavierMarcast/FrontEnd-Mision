const fetchPokemon = () =>{
    const pokeName = document.getElementById("nombrePoke");
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        if(res.status != "200"){
            pokeImage("./media/none.jpg");
        } else {
        return res.json();
        }
    }).then((data) =>{
        let img = data.sprites.other.home.front_default;
        pokeImage(img);
        infoPoke(data);
        console.log(data)
        

    })
}
const pokeImage = (url) =>{
    const pokeImg = document.getElementById("imgePoke");
    pokeImg.src = url;

}

const infoPoke = (data) =>{
    let name = data.name;
    let ide = data.id ;
    const pokeName = document.getElementById("name");
    const id = document.getElementById("numero");
    pokeName.innerHTML = name;
    id.innerHTML = ide;


}

var counterVal = 0;

function incrementClick() {
    updateDisplay(++counterVal);
}

function resetCounter() {
    updateDisplay(counterVal = counterVal-1);
}

function updateDisplay(val) {
    if (val >=0){
    const url = `https://pokeapi.co/api/v2/pokemon/${val}`;
    fetch(url).then((res)=>{
        if (res.status != "200") {
            pokeImage("./media/none.jpg");
        } else {
            return res.json();
        }
    }).then((data) => {
        let img = data.sprites.other.home.front_default;
        pokeImage(img);
        infoPoke(data);
    })
    } else {
        pokeImage("./media/none.jpg");
        counterVal = 0;
    }
}
