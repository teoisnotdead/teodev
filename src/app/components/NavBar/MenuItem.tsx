const menuItem = [
  {
    title: 'Inicio',
    url: '/'
  },
  {
    title: 'Proyectos',
    url: '#'
  },
  {
    title: 'Experiencias',
    url: '#'
  },
  {
    title: 'Contacto',
    url: '#'
  }
];

export const MenuItem = () => {
  return (
    <div className="flex">
      <ul className="flex flex-row space-x-4">
        {menuItem.map((item, index) => (
          <li key={index}>
            <a href={item.url} className="text-xl font-semibold hover:text-primary">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};