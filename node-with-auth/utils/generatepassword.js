export const generatepassword = (myLength) => {
    const chars =
        "123456789absdefghijklmnopqrxtuvwsyz";
    const randomArray = Array.from(
        { length: myLength },
        (v, k) => chars[Math.floor(Math.random() * chars.length)]
    );

    const randomString = randomArray.join("");
    return randomString;
};