export default function Navigation({ activeSection, setActiveSection }) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="sticky top-0 bg-white shadow-sm z-10">
      <div className="container mx-auto px-4">
        <ul className="flex overflow-x-auto py-4 space-x-6">
          {navItems.map(item => (
            <li key={item.id}>
              <button
                onClick={() => setActiveSection(item.id)}
                className={`whitespace-nowrap px-3 py-2 rounded-md transition-colors ${
                  activeSection === item.id 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}