let a =19

try {
    if(a > 18){
        throw new  SyntaxError ("YOUR ERROR GOES HERE")
    }
} catch (error) {
    console.log(error);
}