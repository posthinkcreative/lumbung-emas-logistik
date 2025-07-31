import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Building, Target, Zap } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Profil Perusahaan',
  description: 'Tentang Lumbung Emas Logistik. Pelajari sejarah, visi, dan misi kami dalam memberikan layanan freight forwarding, transportasi, dan logistik yang komprehensif.',
};

export default function ProfilePage() {
  return (
    <div>
      <section className="relative w-full aspect-video">
        <Image
          src="https://placehold.co/1920x800.png"
          alt="Logistics fleet"
          layout="fill"
          objectFit="cover"
          data-ai-hint="trucks port"
        />
      </section>

      <div className="container mx-auto max-w-5xl py-12 px-4 md:px-6">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary">
            Tentang Lumbung Emas Logistik
          </h1>
        </header>
        <div className="grid md:grid-cols-5 gap-8 lg:gap-12">
          <div className="md:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="h-6 w-6 text-primary" />
                  Profil Perusahaan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                  <p>
                    Lumbung Emas Logistik mengawali bisnisnya pada tahun 2020 dengan fokus pada Jasa Distribusi di berbagai wilayah strategis di Indonesia.
                  </p>
                  <p>
                    Seiring dengan perkembangan bisnis dan kebutuhan pasar yang dinamis, kami bertransformasi menjadi perusahaan Jasa Freight Forwarding, Transportasi, dan Logistik yang komprehensif.
                  </p>
                  <p>
                    Didukung oleh inovasi berkelanjutan, kami telah berhasil memperluas jangkauan layanan kami untuk melayani pelanggan di seluruh wilayah Indonesia hingga mancanegara, memberikan solusi logistik yang andal dan efisien.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="md:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-6 w-6 text-primary" />
                  Visi Kami
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Menjadi perusahaan freight forwarding terbaik dan terpercaya dengan memberikan layanan yang berkualitas, tepat waktu, dan efisien.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-6 w-6 text-primary" />
                  Misi Kami
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Mengintegrasikan layanan pengiriman dan logistik secara menyeluruh untuk menjangkau seluruh wilayah Indonesia serta mancanegara.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
