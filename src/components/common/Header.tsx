
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from 'next/image';
import { useState, useEffect } from 'react';

const navLinks = [
  { href: '/', label: 'Beranda' },
  { href: '/profil', label: 'Profil' },
  { 
    href: '/layanan', 
    label: 'Layanan',
    subLinks: [
      { href: '/layanan/darat', label: 'Jasa Kargo Darat' },
      { href: '/layanan/laut', label: 'Jasa Kargo Laut' },
      { href: '/layanan/udara', label: 'Jasa Kargo Udara' },
      { href: '/layanan/lainnya', label: 'Layanan Lainnya' },
    ]
  },
  { href: '/tarif', label: 'Tarif' },
  { href: '/kontak', label: 'Kontak' },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLayananOpen, setIsLayananOpen] = useState(false);

  // Close mobile menu on pathname change
  useEffect(() => {
    if (isMobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  }, [pathname]);


  // Close mobile menu when switching to desktop view
   useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  const NavLink = ({ href, children, className, onClick }: { href: string; children: React.ReactNode, className?: string, onClick?: () => void }) => (
    <Link
      href={href}
      className={cn(
        "text-sm font-medium transition-colors hover:text-primary",
        pathname === href ? "text-primary" : "text-muted-foreground",
        className
      )}
      onClick={onClick}
    >
      {children}
    </Link>
  );
  
  const ServiceDropdown = () => (
     <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className={cn(
          "text-sm font-medium transition-colors hover:text-primary px-0 hover:bg-transparent",
          pathname.startsWith('/layanan') ? "text-primary" : "text-muted-foreground"
        )}>
          Layanan <ChevronDown className="ml-1 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem asChild>
          <Link href="/layanan">Semua Layanan</Link>
        </DropdownMenuItem>
        {navLinks.find(l => l.href === '/layanan')?.subLinks?.map(sublink => (
            <DropdownMenuItem key={sublink.href} asChild>
                <Link href={sublink.href}>{sublink.label}</Link>
            </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b bg-background shadow-sm"
    )}>
      <div className="container mx-auto flex h-14 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Truck className="h-8 w-8 text-primary" />
          <span className="font-bold text-lg inline-block">Lumbung Emas Logistik</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            link.subLinks ? <ServiceDropdown key={link.href} /> : <NavLink key={link.href} href={link.href}>{link.label}</NavLink>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end md:hidden">
          <Button 
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="sr-only">Buka atau tutup menu</span>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full w-full border-b bg-background animate-in slide-in-from-top-2">
          <nav className="grid gap-2 p-4">
            {navLinks.map((link) => (
              !link.subLinks ? (
                <NavLink
                  key={link.href}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="flex w-full items-center space-x-2 rounded-md p-3 text-base font-medium hover:bg-accent hover:text-accent-foreground"
                >
                  {link.label}
                </NavLink>
              ) : (
                <div key={link.href}>
                  <button
                    onClick={() => setIsLayananOpen(!isLayananOpen)}
                    className={cn(
                      "flex w-full items-center justify-between space-x-2 rounded-md p-3 text-base font-medium hover:bg-accent hover:text-accent-foreground",
                        pathname.startsWith(link.href) ? "text-primary" : "text-muted-foreground"
                    )}
                  >
                    <span>{link.label}</span>
                    <ChevronDown className={cn("h-5 w-5 transition-transform", isLayananOpen && "rotate-180")} />
                  </button>
                  {isLayananOpen && (
                    <div className="mt-2 space-y-2 pl-8">
                      <NavLink 
                        href="/layanan"
                        onClick={closeMobileMenu}
                        className="block rounded-md p-2 text-muted-foreground hover:bg-accent/50"
                      >
                          Semua Layanan
                      </NavLink>
                        {link.subLinks.map(sublink => (
                        <NavLink 
                          key={sublink.href}
                          href={sublink.href}
                          onClick={closeMobileMenu}
                          className="block rounded-md p-2 text-muted-foreground hover:bg-accent/50"
                        >
                            {sublink.label}
                        </NavLink>
                        ))}
                  </div>
                  )}
                </div>
              )
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
