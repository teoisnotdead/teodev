import { menuItem } from "../../data";

export const MenuItem = ({ onClick }: { onClick?: () => void }) => {
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      if (onClick) onClick();
    }
  };

  return (
    <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
      {menuItem.map((item, index) => (
        <li key={index}>
          <button
            onClick={() => handleScroll(item.url)}
            className="text-xl font-semibold hover:text-primary cursor-pointer"
          >
            {item.title}
          </button>
        </li>
      ))}
    </ul>
  );
};
