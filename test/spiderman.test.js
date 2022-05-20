const Spiderman = require("../app/spiderman");

describe("Unit test for spiderman class", ()=>{
    test('1) Create an spiderman object', ()=>{
        const andrewGarfiel = new Spiderman("Spiderman Sony",31,"Andrew Garfield",2,"Sony");
        //Validación de que el código funciona de la manera esperada
        expect(andrewGarfiel.nombre).toBe("Spiderman Sony");
        expect(andrewGarfiel.edad).toBe(31);
        expect(andrewGarfiel.actor).toBe("Andrew Garfield");
        expect(andrewGarfiel.numero_peliculas).toBe(2);
        expect(andrewGarfiel.estudio).toBe("Sony");
    });
    test('2) Use the method getInfo()', () => {
        const tomHolland = new Spiderman("Spiderman Marvel",25,"Tom Holland",5,"Marvel");
        expect(tomHolland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel studio");
    });
})