import {UserGroupIcon, HomeIcon, DocumentTextIcon} from '@heroicons/react/24/outline'
import Link from 'next/link'

const links = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'Invoices', href: '/invoices', icon: DocumentTextIcon },
    { name: 'Customers', href: '/customers', icon: UserGroupIcon },
]

export default function NavLinks(){
    return(
        <>
        {links.map((link) => {
            const LinkIcon = link.icon;
            return(
                <Link
                    key={link.name}
                    href={link.href}
                    className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium text-gray-700 transition-all duration-300 ease-in-out hover:bg-gray-100 hover:text-gray-900">
                    <LinkIcon className="h-5 w-5 mr-3" />
                    <p className="hidden md:block">{link.name}</p>
                </Link>
            )
        })}
        </>
    )
}