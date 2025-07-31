import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Truck, Map, Clock, ShieldCheck, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jasa Transportasi Darat',
  description: 'Solusi pengiriman darat dari Lumbung Emas Logistik yang andal, aman, dan tepat waktu ke seluruh Indonesia. Armada modern dengan pelacakan GPS untuk pengiriman Anda.',
};


export default function LayananDaratPage() {
  return (
    <div>
      <section className="relative w-full aspect-video">
        <Image
          src="https://placehold.co/1920x800.png"
          alt="Truck on a highway"
          layout="fill"
          objectFit="cover"
          data-ai-hint="truck highway"
        />
      </section>

      <div className="container mx-auto max-w-6xl py-12 px-4 md:px-6">
        <header className="text-center mb-12">
            <Truck className="h-16 w-16 mx-auto mb-4 text-primary" />
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary">
                Jasa Transportasi Darat
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground">
                Solusi pengiriman darat yang andal, aman, dan tepat waktu ke seluruh penjuru Indonesia.
            </p>
        </header>

        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">Pengiriman Darat Terpercaya untuk Bisnis Anda</h2>
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                    <p>
                        Kami menyediakan solusi pengiriman darat yang komprehensif untuk memastikan barang Anda sampai tujuan dengan aman dan efisien. Dengan armada modern yang dilengkapi teknologi pelacakan GPS, kami menawarkan keandalan dan ketepatan waktu yang dapat Anda percaya.
                    </p>
                    <p>
                        Layanan transportasi darat kami mencakup berbagai jenis pengiriman, mulai dari pengiriman ekspres, pengiriman terjadwal, hingga pengiriman jarak jauh antar kota dan provinsi. Kami siap melayani kebutuhan logistik Anda, baik untuk skala kecil maupun besar.
                    </p>
                </div>
            </div>
            <div className="space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3">
                            <ShieldCheck className="h-6 w-6 text-primary" />
                            Keunggulan Layanan Darat Kami
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                       <div className="flex items-start gap-4">
                           <Clock className="h-5 w-5 mt-1 text-primary"/>
                           <div>
                               <h4 className="font-semibold">Tepat Waktu</h4>
                               <p className="text-sm text-muted-foreground">Jadwal pengiriman yang fleksibel dan akurat sesuai kebutuhan.</p>
                           </div>
                       </div>
                       <div className="flex items-start gap-4">
                           <Truck className="h-5 w-5 mt-1 text-primary"/>
                           <div>
                               <h4 className="font-semibold">Armada Modern</h4>
                               <p className="text-sm text-muted-foreground">Kendaraan terawat, modern, dan dilengkapi sistem pelacakan GPS.</p>
                           </div>
                       </div>
                       <div className="flex items-start gap-4">
                           <Map className="h-5 w-5 mt-1 text-primary"/>
                           <div>
                               <h4 className="font-semibold">Jangkauan Luas</h4>
                               <p className="text-sm text-muted-foreground">Melayani pengiriman ke seluruh wilayah yang terjangkau di Indonesia.</p>
                           </div>
                       </div>
                    </CardContent>
                </Card>
            </div>
        </div>

        <div className="mt-16 text-center bg-secondary p-8 rounded-lg">
            <h3 className="text-2xl font-bold">Butuh Penawaran Harga?</h3>
            <p className="text-muted-foreground mt-2 mb-4">Hubungi tim kami untuk mendapatkan penawaran terbaik untuk pengiriman darat Anda.</p>
            <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white">
                <Link href="https://wa.me/6287859000800" target="_blank">
                    <MessageCircle className="mr-2"/>
                    Chat via WhatsApp
                </Link>
            </Button>
        </div>

      </div>
    </div>
  );
}
