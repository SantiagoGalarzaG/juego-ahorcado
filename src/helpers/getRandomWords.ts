let words: string[]=[
    'COMPUTADORA','LINTERNA', 'ESCALERA', 
    'TIBURÓN', 'CAMELLO', 'ARCOÍRIS', 'ZAPATILLA', 
    'ELEFANTE', 'MURCIÉLAGO', 'MARIPOSA', 'RELOJ', 
    'CASTILLO', 'DRAGÓN', 'SILENCIO', 'PISTACHO',
    'JARDÍN','LIBRO', 'CAFÉ', 'SOL', 'NUBE', 'RÍO', 
    'GUITARRA', 'NAVE', 'BOSQUE', 'RUIDO', 
    'FANTASMA', 'LLAVE', 'CIELO', 'TORRE', 
    'MONEDA','TECLADO', 'MONITOR', 'IMPRESORA', 
    'MOUSE', 'PANTALLA', 'CÁMARA', 'MICRÓFONO', 
    'PARLANTE', 'ROUTER', 'MÓDEM', 'PROCESADOR', 
    'MEMORIA', 'DISCO', 'CONECTOR',

];
export function getRandomWord(){

    const randomIndex = Math.floor( Math.random() * words.length);
    return words[randomIndex];
}