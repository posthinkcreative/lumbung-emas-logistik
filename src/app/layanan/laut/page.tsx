import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Ship, Anchor, Globe, ShieldCheck, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jasa Kargo Laut (Sea Freight)',
  description: 'Pengiriman laut ekonomis dan efisien dari Lumbung Emas Logistik untuk kargo FCL & LCL. Jangkauan global dan domestik dengan keamanan terjamin untuk pengiriman skala besar.',
};

export default function LayananLautPage() {
  return (
    <div>
      <section className="relative w-full aspect-video">
        <Image
          src="https://placehold.co/1920x800.png"
          alt="Container ship on the ocean"
          layout="fill"
          objectFit="cover"
          data-ai-hint="container ship ocean"
        />
      </section>

      <div className="container mx-auto max-w-6xl py-12 px-4 md:px-6">
        <header className="text-center mb-12">
            <Ship className="h-16 w-16 mx-auto mb-4 text-primary" />
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary">
                Jasa Kargo Laut
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground">
                Solusi pengiriman laut yang efisien dan hemat biaya untuk kargo skala besar, baik domestik maupun internasional.
            </p>
        </header>

        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">Pengiriman Laut Andal dan Ekonomis</h2>
                 <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                    <p>
                        Layanan kargo laut kami adalah pilihan ideal untuk pengiriman barang dalam jumlah besar yang tidak terlalu sensitif terhadap waktu. Kami menawarkan solusi yang ekonomis dan dapat diandalkan dengan jangkauan global yang luas.
                    </p>
                    <p>
                        Kami melayani pengiriman Full Container Load (FCL) dan Less than Container Load (LCL), serta memiliki keahlian dalam penanganan kargo berbahaya (DG Cargo). Dengan jaringan yang kuat di pelabuhan-pelabuhan utama, kami memastikan barang Anda tiba di tujuan dengan aman.
                    </p>
                </div>
            </div>
            <div className="space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3">
                            <ShieldCheck className="h-6 w-6 text-primary" />
                            Keunggulan Layanan Laut Kami
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                       <div className="flex items-start gap-4">
                           <Anchor className="h-5 w-5 mt-1 text-primary"/>
                           <div>
                               <h4 className="font-semibold">FCL & LCL</h4>
                               <p className="text-sm text-muted-foreground">Pilihan fleksibel untuk muatan penuh atau parsial sesuai volume kargo Anda.</p>
                           </div>
                       </div>
                       <div className="flex items-start gap-4">
                           <Globe className="h-5 w-5 mt-1 text-primary"/>
                           <div>
                               <h4 className="font-semibold">Jangkauan Global</h4>
                               <p className="text-sm text-muted-foreground">Jaringan luas yang mencakup seluruh pelabuhan utama dunia dan domestik.</p>
                           </div>
                       </div>
                       <div className="flex items-start gap-4">
                           <ShieldCheck className="h-5 w-5 mt-1 text-primary"/>
                           <div>
                               <h4 className="font-semibold">Keamanan Terjamin</h4>
                               <p className="text-sm text-muted-foreground">Proses penanganan kargo yang aman dan sesuai standar internasional.</p>
                           </div>
                       </div>
                    </CardContent>
                </Card>
            </div>
        </div>

        <div className="mt-16 text-center bg-secondary p-8 rounded-lg">
            <h3 className="text-2xl font-bold">Butuh Penawaran Kargo Laut?</h3>
            <p className="text-muted-foreground mt-2 mb-4">Hubungi tim kami untuk mendapatkan jadwal kapal dan harga terbaik untuk pengiriman Anda.</p>
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
