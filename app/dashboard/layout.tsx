import { ReactNode } from 'react';
import SideNav from '../ui/sidenave';
import styles from './layout.module.css';

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <section className={styles.body}>
      <SideNav />
      <main className={styles.content}>{children}</main>
    </section>
  );
}