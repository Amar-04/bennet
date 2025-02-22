import { client } from "./client";

// Fetch Home Page Data (Server-side)
export async function getAboutPage() {
  return client.fetch(
    `*[_type == "aboutpage"][0]{
        herosection {
            "image": image.asset->url
        },
        leadersection {
            leaders[]{
            "image": image.asset->url
            }
        }
    }`
  );
}
