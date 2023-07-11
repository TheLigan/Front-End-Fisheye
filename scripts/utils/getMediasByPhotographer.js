import { getPhotographers } from "./getPhotographers.js";



export async function getMediasByPhotographer() {
  const { media } = await getPhotographers();
  const params = (new URL(document.location).searchParams);
  const id = parseInt(params.get("id"));

  const medias =  media.filter(media => media.photographerId === id)
  return medias
}