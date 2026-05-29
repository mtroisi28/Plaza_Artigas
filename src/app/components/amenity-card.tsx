import { useState } from 'react';
import { Card } from './ui/card';
import { LucideIcon } from 'lucide-react';
import { AmenityModal } from './amenity-modal';

interface AmenityCardProps {
  icon: LucideIcon;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  images: string[];
  hoverImage: string;
}

export function AmenityCard({
  icon: Icon,
  title,
  shortDescription,
  fullDescription,
  features,
  images,
  hoverImage,
}: AmenityCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <Card
        className="relative p-6 hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden group"
        onClick={() => setIsModalOpen(true)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background Image on Hover */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${hoverImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/70 to-background/50" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <Icon className="w-12 h-12 mb-4 text-primary transition-transform group-hover:scale-110 duration-300" />
          <h3 className="mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm">{shortDescription}</p>

          {/* "Ver más" on hover */}
          <div
            className={`mt-4 text-primary text-sm font-medium flex items-center gap-1 transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            Ver más →
          </div>
        </div>
      </Card>

      <AmenityModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        description={fullDescription}
        features={features}
        images={images}
      />
    </>
  );
}
