export async function getPhotographers() {

    const response = await fetch("../data/photographers.json");
    if (response.ok) {
        const data = await response.json();
        console.log(data.photographers);
        return ({
            photographers: data.photographers
        })
    } else {
        throw new Error("Données impossibles à atteindre.");
    }
}