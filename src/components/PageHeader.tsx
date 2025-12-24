interface PageHeaderProps {
  imageUrl: string;
  imageAlt: string;
  /** Optional percentage to shift the image upward from the bottom (0-100). */
  verticalShiftPercent?: number;
}

export function PageHeader({ imageUrl, imageAlt, verticalShiftPercent }: PageHeaderProps) {
  const clampedShift = Math.min(Math.max(verticalShiftPercent ?? 0, 0), 100);
  const verticalPosition = 100 - clampedShift; // 100% = bottom, lower values move the image up

  return (
    <div className="relative h-[250px] md:h-[350px] lg:h-[477px] overflow-hidden w-full">
      <img 
        src={imageUrl}
        alt={imageAlt}
        className="w-full h-full object-cover"
        style={{ objectPosition: `center ${verticalPosition}%` }}
      />
      <div
        className="absolute inset-0 bg-#00D100"
        style={{
         
        }}
      />
    </div>
  );
}