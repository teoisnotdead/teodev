import Image from "next/image";

interface TagsProps {
  iconSrc: string;
  tagName: string;
}

export const Tags = ({ iconSrc, tagName }: TagsProps) => {
  return (
    <div className="group flex items-center space-x-2 rounded-md px-4 py-1 mb-4 w-max border border-white hover:border-primary hover:bg-black/40 hover:text-white transition-colors duration-300">
      <Image className="w-max" src={iconSrc} alt={tagName} width={16} height={16} />
      <p className="font-normal text-[16px] group-hover:text-white">{tagName}</p>
    </div>
  );
};
