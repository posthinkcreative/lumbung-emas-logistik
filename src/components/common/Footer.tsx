
import Link from 'next/link';
import { Mail, Phone, MapPin, Truck } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary/90 text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center space-x-2 mb-2">
              <Truck className="h-8 w-8" />
              <span className="font-bold text-xl">Lumbung Emas Logistik</span>
            </Link>
            <p className="text-sm text-primary-foreground/80">Solusi pengiriman terpercaya untuk segala kebutuhan logistik Anda.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Navigasi</h3>
            <ul className="space-y-2">
              <li><Link href="/profil" className="text-sm hover:underline text-primary-foreground/80">Profil</Link></li>
              <li><Link href="/layanan" className="text-sm hover:underline text-primary-foreground/80">Layanan</Link></li>
              <li><Link href="/tarif" className="text-sm hover:underline text-primary-foreground/80">Tarif</Link></li>
              <li><Link href="/kontak" className="text-sm hover:underline text-primary-foreground/80">Kontak</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Hubungi Kami</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li className="flex items-center gap-2"><MapPin size={16} /> Jalan Perak Timur No. 246, Surabaya</li>
              <li className="flex items-center gap-2"><Mail size={16} /> lumbungemaslogistik@gmail.com</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Jam Operasional</h3>
            <p className="text-sm text-primary-foreground/80">Tim kami siap melayani kebutuhan bisnis Anda 24/7.</p>
          </div>
        </div>
        <div className="mt-8 border-t border-primary-foreground/20 pt-6 text-center text-sm text-primary-foreground/60">
          &copy; {currentYear} Lumbung Emas Logistik. Semua hak dilindungi.
        </div>
      </div>
    </footer>
  );
}
