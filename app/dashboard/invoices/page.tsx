
import styles from '@/app/ui/home.module.css'

export default function Invoices(){
  return(
    <main className = "flex min-h-screen flex-col p-6"> 
    <div className = {styles.shape}>
        <p className = "text-2xl font-bold text-black">
            Página de Faturas
        </p>

    </div>
    </main>
  )
}
