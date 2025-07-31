import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plane, Zap, Globe, ShieldCheck, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jasa Kargo Udara (Air Freight)',
  description: 'Solusi pengiriman kargo udara cepat dan andal dari Lumbung Emas Logistik untuk rute domestik & internasional. Layanan door-to-door, konsolidasi, dan penanganan kargo khusus.',
};

export default function LayananUdaraPage() {
  return (
    <div>
      <section className="relative w-full aspect-video">
        <Image
          src="https://placehold.co/1920x800.png"
          alt="Cargo plane in the sky"
          layout="fill"
          objectFit="cover"
          data-ai-hint="cargo plane sky"
        />
      </section>

      <div className="container mx-auto max-w-6xl py-12 px-4 md:px-6">
        <header className="text-center mb-12">
            <Plane className="h-16 w-16 mx-auto mb-4 text-primary" />
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary">
                Jasa Kargo Udara
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground">
                Kecepatan dan keandalan untuk pengiriman mendesak Anda, baik untuk rute domestik maupun internasional.
            </p>
        </header>

        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">Pengiriman Udara Cepat dan Aman</h2>
                 <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                    <p>
                        Ketika waktu adalah prioritas utama, layanan kargo udara kami adalah solusi yang paling tepat. Kami menyediakan pengiriman yang cepat dan dapat diandalkan untuk barang-barang yang membutuhkan penanganan segera.
                    </p>
                    <p>
                        Dengan jaringan maskapai penerbangan global yang solid, kami menawarkan layanan dari pintu ke pintu (door-to-door), konsolidasi udara, serta penanganan kargo khusus. Tim kami juga memastikan proses kepabeanan berjalan lancar untuk pengiriman internasional.
                    </p>
                </div>
            </div>
            <div className="space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3">
                            <ShieldCheck className="h-6 w-6 text-primary" />
                            Keunggulan Layanan Udara Kami
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                       <div className="flex items-start gap-4">
                           <Zap className="h-5 w-5 mt-1 text-primary"/>
                           <div>
                               <h4 className="font-semibold">Pengiriman Ekspres</h4>
                               <p className="text-sm text-muted-foreground">Solusi tercepat untuk kargo yang sensitif terhadap waktu.</p>
                           </div>
                       </div>
                       <div className="flex items-start gap-4">
                           <Globe className="h-5 w-5 mt-1 text-primary"/>
                           <div>
                               <h4 className="font-semibold">Jaringan Global</h4>
                               <p className="text-sm text-muted-foreground">Akses ke semua rute penerbangan kargo utama di seluruh dunia.</p>
                           </div>
                       </div>
                       <div className="flex items-start gap-4">
                           <ShieldCheck className="h-5 w-5 mt-1 text-primary"/>
                           <div>
                               <h4 className="font-semibold">Layanan Door-to-Door</h4>
                               <p className="text-sm text-muted-foreground">Kemudahan pengiriman dari alamat asal hingga ke tujuan akhir.</p>
                           </div>
                       </div>
                    </CardContent>
                </Card>
            </div>
        </div>

        <div className="mt-16 text-center bg-secondary p-8 rounded-lg">
            <h3 className="text-2xl font-bold">Butuh Pengiriman Udara Segera?</h3>
            <p className="text-muted-foreground mt-2 mb-4">Diskusikan kebutuhan kargo udara Anda dengan tim kami untuk mendapatkan solusi pengiriman terbaik.</p>
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
