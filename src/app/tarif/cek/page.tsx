
"use client";

import { Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Search, Home } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { ClientOnly } from '@/components/common/ClientOnly';

import rates from '@/data/shipping-rates.json';

interface Rate {
  origin: string;
  destination: string;
  service: string;
  price_per_kg: number;
  etd: string;
}

function RateCheckForm() {
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const params = new URLSearchParams();
        params.set('origin', origin);
        params.set('destination', destination);
        window.location.href = `/tarif/cek?${params.toString()}`;
    };
    
    return (
        <Card className="w-full max-w-lg mx-auto mt-12">
            <CardHeader>
                <CardTitle>Cari Rute Lain</CardTitle>
                <CardDescription>Masukkan lokasi asal dan tujuan untuk melihat estimasi biaya.</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <label htmlFor="origin" className="text-sm font-medium">Lokasi Asal</label>
                        <Input 
                            id="origin" 
                            placeholder="Contoh: Jakarta"
                            value={origin}
                            onChange={(e) => setOrigin(e.target.value)}
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="destination" className="text-sm font-medium">Lokasi Tujuan</label>
                        <Input 
                            id="destination" 
                            placeholder="Contoh: Surabaya" 
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
                            required
                        />
                    </div>
                    <Button type="submit" className="w-full">
                        Cek Harga
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}

function RateResults() {
  const searchParams = useSearchParams();
  const origin = searchParams.get('origin') || '';
  const destination = searchParams.get('destination') || '';

  const filteredRates: Rate[] = rates.filter(
    (rate) =>
      rate.origin.toLowerCase().includes(origin.toLowerCase()) &&
      rate.destination.toLowerCase().includes(destination.toLowerCase())
  );
  
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(value).replace(/\s/g, '');
  };

  return (
    <div className="container mx-auto max-w-4xl py-12 px-4 md:px-6">
       <div className="flex justify-between items-center mb-6">
          <Button asChild variant="outline">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Kembali ke Beranda
            </Link>
          </Button>
       </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <Search className="h-6 w-6" />
            Hasil Pencarian Tarif
          </CardTitle>
          <CardDescription>
            Menampilkan hasil untuk rute: <span className="font-semibold text-primary">{origin || 'Semua'}</span> → <span className="font-semibold text-primary">{destination || 'Semua'}</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          {filteredRates.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Layanan</TableHead>
                  <TableHead>Estimasi Waktu</TableHead>
                  <TableHead className="text-right">Harga per KG</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredRates.map((rate, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{rate.service}</TableCell>
                    <TableCell>{rate.etd}</TableCell>
                    <TableCell className="text-right font-semibold">{formatCurrency(rate.price_per_kg)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div className="text-center py-10">
              <AlertTriangle className="mx-auto h-12 w-12 text-yellow-500" />
              <h3 className="mt-2 text-lg font-medium">Rute Tidak Ditemukan</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Maaf, kami tidak menemukan tarif untuk rute yang Anda cari. Silakan hubungi kami untuk penawaran khusus.
              </p>
              <Button asChild className="mt-4">
                <Link href="/kontak">Hubungi Kami</Link>
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
      <p className="text-center text-sm text-muted-foreground mt-4">
        *Harga di atas adalah estimasi dan dapat berubah. Hubungi kami untuk harga final.
      </p>

      <ClientOnly>
        <RateCheckForm />
      </ClientOnly>

    </div>
  );
}


export default function CekTarifPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <RateResults />
        </Suspense>
    )
}
