export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  label?: string;
  className?: string;
};

export const galleryImages: GalleryImage[] = [
  {
    id: "seafood-salad",
    src: "/images/blue-marlin-seafood-salad.avif",
    alt: "Seafood salad at Blue Marlin Beach Restaurant",
    label: "From the kitchen",
    className: "lg:col-span-2 lg:row-span-2",
  },
  {
    id: "sushi",
    src: "/images/blue-marlin-sushi.jpg",
    alt: "Sushi platter at Blue Marlin Beach Restaurant",
    label: "Sushi bar",
  },
  {
    id: "beach",
    src: "/images/blue-marlin-beach.jpg",
    alt: "Beachfront view at Blue Marlin Beach Restaurant",
    label: "Diani Beach",
  },
  {
    id: "interior",
    src: "/images/blue-marlin-restaurant.jpg",
    alt: "Interior of Blue Marlin Beach Restaurant",
    label: "The restaurant",
  },
  {
    id: "fish",
    src: "/images/blue-marlin-fish.jpg",
    alt: "Fresh fish dish at Blue Marlin Beach Restaurant",
    label: "Fresh from the sea",
  },
];
