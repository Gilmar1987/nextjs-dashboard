
import Link from 'next/link';

export default function SideNav() {
  const navLinks = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Invoices', href: '/dashboard/invoices' },
    { name: 'Customers', href: '/dashboard/customers' },
  ];

  return (
    <div className="w-64 bg-gray-100 h-screen p-4 border-r border-gray-200 flex flex-col">
      <Link href="/" className="bg-blue-600 p-4 rounded-lg mb-6 hover:bg-blue-700 transition-colors group">
        <p className="text-2xl font-bold text-white group-hover:scale-105 transition-transform">
          Dashboard
        </p>
      </Link>
      
      <nav className="flex flex-col space-y-2">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="flex items-center px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all"
          >
            {link.name}
          </Link>
        ))}
      </nav>
      
      <div className="mt-auto pt-4 border-t border-gray-200">
        <Link 
          href="/" 
          className="flex items-center px-4 py-2 text-sm text-gray-500 hover:text-red-600 transition-colors"
        >
          Sair
        </Link>
      </div>
    </div>
  );
}
