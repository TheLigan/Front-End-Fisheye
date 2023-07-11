export async function getPhotographers() {
    console.log("fetch");
    const response = await fetch("../data/photographers.json");
    const datas = await response.json();
    const { photographers, media} = datas
    return { photographers, media };
  }