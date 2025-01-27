export function mediaFactory(media) {
  const { id, image, video, likes, photographerId, title } = media;

  function createMediaElement(type, source) {
      const thumbnail = `./assets/photographers/${photographerId}/${source}`;
      const button = document.createElement("button");
      button.classList.add("media__btn");
      button.setAttribute("aria-label", `${title} - closup view`);

      if (type === "image") {
          const img = document.createElement("img");
          img.classList.add("media__img");
          img.setAttribute("loading", "lazy");
          img.setAttribute("src", thumbnail);
          img.setAttribute("alt", title);
          button.appendChild(img);
      } else if (type === "video") {
          const vid = document.createElement("video");
          vid.setAttribute("src", thumbnail);
          vid.setAttribute("type", "video/mp4");
          vid.className += "media__video";
          button.appendChild(vid);
      }

      return button;
  }

  function getMediaCardDom() {
      const article = document.createElement("article");
      article.classList.add("media");
      article.id = id;
      const mediaSection = document.querySelector(".photographer__content");
      mediaSection.appendChild(article);

      if (image) {
          const imgButton = createMediaElement("image", image);
          article.appendChild(imgButton);
      }
      if (video) {
          const vidButton = createMediaElement("video", video);
          article.appendChild(vidButton);
      }

      const mediaInfo = document.createElement("div");
      mediaInfo.classList.add("media__info");
      article.appendChild(mediaInfo);

      const mediaTitle = document.createElement("p");
      mediaTitle.classList.add("media__title");
      mediaTitle.innerText = title;
      mediaInfo.appendChild(mediaTitle);

      const mediaLike = document.createElement("div");
      mediaLike.classList.add("media__likes");
      const para = document.createElement("p");
      para.classList.add("media__likeNumber");
      para.innerText = likes;
      const icon = document.createElement("i");
      icon.classList.add("fa-regular", "fa-heart", "media__likeIcon");
      icon.setAttribute("tabindex", 0);
      mediaInfo.appendChild(mediaLike);
      mediaLike.appendChild(para);
      mediaLike.appendChild(icon);

      return article;
  }

  return { title, likes, getMediaCardDom };
}
