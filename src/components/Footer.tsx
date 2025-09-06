export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl mb-4">Rajkumar Janta Inter College</h3>
            <p className="text-sm opacity-90">
              Preparing students for higher education success through quality intermediate education since 2009.
            </p>
          </div>
          
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><a href="#" className="hover:opacity-100">Admissions</a></li>
              <li><a href="#" className="hover:opacity-100">Academics</a></li>
              <li><a href="#" className="hover:opacity-100">Student Life</a></li>
              <li><a href="#" className="hover:opacity-100">Alumni</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4">Departments</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><a href="#" className="hover:opacity-100">Computer Science</a></li>
              <li><a href="#" className="hover:opacity-100">Electronics</a></li>
              <li><a href="#" className="hover:opacity-100">Mechanical</a></li>
              <li><a href="#" className="hover:opacity-100">Biotechnology</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4">Contact Info</h4>
            <div className="space-y-2 text-sm opacity-90">
              <p>📍 Faloda, Block Purkaji, District Muzaffarnagar 251307</p>
              <p>📞 +91 12345 67890</p>
              <p>✉️ rajkumarjantaintercollege@gmail.com</p>
              <p>🌐 https://rjic.ac.in</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-90">
          <p>&copy; 2024 Excellence College. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}