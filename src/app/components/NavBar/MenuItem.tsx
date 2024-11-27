
const menuItem = [
  {
    title: 'Inicio',
    url: '/'
  },
  {
    title: 'Projectos',
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
]

export const MenuItem = () => {
  return (
    <div className="flex">
      <ul className="flex flex-row space-x-4">
        {
          menuItem.map((item, index) => (
            <li key={index}>
              <a href="#"
                className="text-xl font-semibold text-secondary hover:text-primary dark:text-white dark:hover:text-primary">
                {item.title}
              </a>
            </li>
          ))
        }
      </ul>
    </div >
  )
}
