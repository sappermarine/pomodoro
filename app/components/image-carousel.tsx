import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageCarouselProps {
  images: string[];
  currentImage: number;
  setCurrentImage: (index: number) => void;
}

interface CarouselButtonProps {
  direction: "left" | "right";
  onClick: () => void;
}

interface ImageIndicatorsProps {
  images: string[];
  currentImage: number;
}

export default function ImageCarousel({ images, currentImage, setCurrentImage }: ImageCarouselProps) {
  const nextImage = () => setCurrentImage((currentImage + 1) % images.length);
  const prevImage = () => setCurrentImage((currentImage - 1 + images.length) % images.length);

  return (
    <div className="relative">
      <img
        src={images[currentImage]}
        alt={`Image ${currentImage + 1}`}
        className="w-full h-auto rounded-lg"
      />
      <button
        onClick={prevImage}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
      >
        <ChevronRight />
      </button>
    </div>
  );
}

function CarouselButton({ direction, onClick }: CarouselButtonProps) {
  const isLeft = direction === "left";
  return (
    <Button
      variant="outline"
      size="icon"
      className={`absolute ${isLeft ? "left-4" : "right-4"} top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white`}
      onClick={onClick}
    >
      {isLeft ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
      <span className="sr-only">{isLeft ? "Previous" : "Next"} image</span>
    </Button>
  );
}

function ImageIndicators({ images, currentImage }: ImageIndicatorsProps) {
  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
      {images.map((_, index) => (
        <div
          key={index}
          className={`w-2 h-2 rounded-full ${index === currentImage ? "bg-white" : "bg-white/50"}`}
        />
      ))}
    </div>
  );
}
