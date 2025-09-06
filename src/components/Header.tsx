import { Button } from "./ui/button";
import logo from '../assets/logo.jpg';

interface HeaderProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function Header({ activeSection, onSectionChange }: HeaderProps) {
  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'toppers', label: 'Toppers' },
    { id: 'facilities', label: 'Facilities' },
    { id: 'achievers', label: 'Proud Achievers' },
    { id: 'news', label: 'News' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <img src={logo} alt="College Logo" className="h-12 w-12 mr-3 rounded-full border border-gray-300 bg-white object-contain" />
            <h1 className="text-xl font-semibold text-primary">Rajkumar Janta Inter College</h1>
          </div>

          <nav className="hidden md:flex items-center space-x-1">
            {sections.map((section) => (
              <Button
                key={section.id}
                variant={activeSection === section.id ? "default" : "ghost"}
                onClick={() => onSectionChange(section.id)}
                className="px-4 py-2"
              >
                {section.label}
              </Button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <select
              value={activeSection}
              onChange={(e) => onSectionChange(e.target.value)}
              className="bg-background border border-border rounded-md px-3 py-2"
            >
              {sections.map((section) => (
                <option key={section.id} value={section.id}>
                  {section.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </header>
  );
}