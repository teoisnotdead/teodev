import Image from "next/image";
import type { TagsProps } from '../types';

export const Tags = ({ iconSrc, tagName }: TagsProps) => {
  return (
    <div className="group flex items-center space-x-2 rounded-md px-4 py-1 mb-4 w-max border border-white hover:border-primary hover:bg-black/40 hover:text-white transition-colors duration-300">
      <div className="relative w-4 h-4">
        <Image
          src={iconSrc}
          alt={tagName}
          fill
          sizes="(max-width: 768px) 16px, (max-width: 1024px) 16px, 16px"
          className="object-contain"
        />
      </div>
      <p className="font-normal text-[16px] group-hover:text-white">{tagName}</p>
    </div>
  );
};
