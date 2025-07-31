
"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from '@/components/ui/input';
import { MessageCircle } from "lucide-react";
import Link from "next/link";

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
        <Card className="w-full max-w-lg mx-auto">
            <CardHeader>
                <CardTitle>Cek Estimasi Tarif</CardTitle>
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

export default function RatesPage() {
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4 md:px-6">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary">Tarif Pengiriman</h1>
        <p className="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground">
          Dapatkan perkiraan biaya pengiriman Anda secara instan atau hubungi kami untuk penawaran khusus.
        </p>
      </header>
      
      <RateCheckForm />

      <Card className="text-center shadow-lg mt-12 bg-secondary/50">
        <CardHeader>
          <CardTitle className="text-2xl">Butuh Penawaran Khusus?</CardTitle>
          <CardDescription>
            Untuk kargo dalam jumlah besar, barang non-standar, atau kebutuhan logistik lainnya, tim kami siap membantu.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-foreground/80">
            Cara tercepat untuk mendapatkan penawaran yang disesuaikan adalah dengan menghubungi kami melalui WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button asChild size="lg" className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white">
              <Link href="https://wa.me/6287859000800" target="_blank">
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat via WhatsApp
              </Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground pt-4">
            Layanan 24/7 untuk kebutuhan bisnis Anda
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
