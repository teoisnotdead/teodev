import { menuItem } from "../../data";

export const MenuItem = () => {
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex">
      <ul className="flex flex-row space-x-4">
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
    </div>
  );
};
