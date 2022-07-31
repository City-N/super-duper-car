export default function generateRandom(): number {
    let rand = Math.random();

    rand = Math.floor(rand * 2);

    return rand;
}
