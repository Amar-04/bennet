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

//^ Manufacturing Page
export async function getManufacturingPage() {
  return client.fetch(`*[_type == "manufacturingpage"][0]{
      "image": herosection.image.asset->url
    }`);
}

//^ Careers Page
export async function getCareersPage() {
  return client.fetch(
    `*[_type == "careerspage"][0]{
      herosection {
        "image": image.asset->url
      },
      contactImageSlider[] {
        "image": asset->url,
        alt
      }
    }`
  );
}

//^ Life At Bennet Page
export async function getLifeAtBennetPage() {
  return client.fetch(
    `*[_type == "lifeatbennetpage"][0]{
      herosection {
        "image": image.asset->url
      },
      imagegallerysection[] {
        title,
        description,
        images[] {
          "image": asset->url
        }
      },
      testimonialsection[] {
        "image": image.asset->url,
        testimonial
      }
    }`
  );
}
