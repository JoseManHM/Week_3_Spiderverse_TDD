class Spiderman{
    constructor(nombre, edad, actor, numero_peliculas, estudio){
        this.nombre = nombre;
        this.edad = edad;
        this.actor = actor;
        this.numero_peliculas = numero_peliculas;
        this.estudio = estudio;
    }
    getInfo(){
        return `Hey, I'm ${this.actor} from ${this.estudio} studio`;
    }
}

module.exports = Spiderman