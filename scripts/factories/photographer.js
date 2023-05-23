function photographerFactory(data) {
    const { name, id, city, country, tagline, price, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement("article");
        const img = document.createElement("img");
        const h2 = document.createElement("h2");
        const h3 = document.createElement("h3");
        const p = document.createElement("p");
        const h4 = document.createElement("h4");
        const a = document.createElement("a");

        img.setAttribute("src", picture);
        h2.textContent = name;
        h3.textContent = `${city} , ${country}`;
        p.textContent = tagline;
        h4.innerText = `${price} € / jour`;
        a.setAttribute("href", `photographer.html?id=${id}`);
        a.setAttribute("aria-label", `Lien vers le portfolio de ${name}`);

        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(p);
        article.appendChild(h4);
        a.appendChild(article);

        return (a);
    }
    return { id, name, picture, city, price, country, medias, getUserCardDOM, }
}