import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Anchor, Briefcase, FileText, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Layanan Logistik Tambahan',
  description: 'Layanan pendukung dari Lumbung Emas Logistik: penanganan Cargo Project, Customs Brokerage (bea cukai), dan jasa Undername untuk kelancaran impor & ekspor Anda.',
};


export default function LayananLainnyaPage() {
  return (
    <div>
      <section className="relative w-full aspect-video">
        <Image
          src="https://placehold.co/1920x800.png"
          alt="Cargo project management"
          layout="fill"
          objectFit="cover"
          data-ai-hint="cargo logistics planning"
        />
      </section>

      <div className="container mx-auto max-w-6xl py-12 px-4 md:px-6">
        <header className="text-center mb-12">
            <Briefcase className="h-16 w-16 mx-auto mb-4 text-primary" />
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary">
                Layanan Logistik Tambahan
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground">
              Kami menawarkan layanan pendukung untuk memastikan kelancaran penuh proses logistik Anda dari hulu ke hilir.
            </p>
        </header>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                        <Briefcase className="h-6 w-6 text-primary"/>
                        Cargo Project
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">
                        Kami memiliki keahlian dalam menangani proyek kargo berskala besar dan kompleks. Mulai dari perencanaan, pengelolaan, hingga eksekusi, kami memastikan kargo proyek Anda ditangani secara profesional, aman, dan efisien.
                    </p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                        <FileText className="h-6 w-6 text-primary"/>
                        Customs Brokerage
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">
                        Layanan penanganan bea cukai kami dirancang untuk mempermudah proses impor dan ekspor Anda. Tim ahli kami akan mengurus semua dokumentasi dan prosedur kepabeanan agar barang Anda melintasi perbatasan tanpa hambatan.
                    </p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                        <Anchor className="h-6 w-6 text-primary"/>
                        Undername
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">
                       Kami menyediakan layanan undername (menyewa bendera perusahaan) untuk membantu kelancaran proses impor dan ekspor, khususnya bagi perusahaan yang belum memiliki izin yang diperlukan untuk melakukan kegiatan ekspor-impor.
                    </p>
                </CardContent>
            </Card>
        </div>

         <div className="mt-16 text-center bg-secondary p-8 rounded-lg">
            <h3 className="text-2xl font-bold">Punya Kebutuhan Logistik Khusus?</h3>
            <p className="text-muted-foreground mt-2 mb-4">Diskusikan kebutuhan unik Anda dengan tim ahli kami untuk menemukan solusi logistik yang paling tepat dan efektif.</p>
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
