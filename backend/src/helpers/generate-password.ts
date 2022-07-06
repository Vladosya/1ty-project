import generator from "generate-password";

const generatePassword = (min: number, max: number) => {
    let rand: number = min + Math.random() * (max + 1 - min);
    return generator.generate({
        length: Math.floor(rand),
        numbers: true,
    });
};

export default generatePassword;

