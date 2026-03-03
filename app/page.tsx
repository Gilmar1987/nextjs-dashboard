import Link from 'next/link';
import styles from '@/app/ui/home.module.css'

export default function Page(){
  return(
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-50"> 
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Bem-vindo ao Dashboard</h1>
          <p className="mt-2 text-gray-600 text-sm">Gerencie suas faturas e clientes com facilidade.</p>
        </div>
        
        <div className="space-y-4">
          <Link 
            href="/dashboard" 
            className="flex items-center justify-center w-full px-4 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Acessar Dashboard
          </Link>
          
          <div className="grid grid-cols-2 gap-4">
            <Link 
              href="/dashboard/invoices" 
              className="flex items-center justify-center px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-sm font-medium"
            >
              Faturas
            </Link>
            <Link 
              href="/dashboard/customers" 
              className="flex items-center justify-center px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-sm font-medium"
            >
              Clientes
            </Link>
          </div>
        </div>
        
        <div className={styles.shape}></div>
      </div>
    </main>
  )
}
