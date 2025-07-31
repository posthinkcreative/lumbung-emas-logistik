import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hubungi Kami',
  description: 'Hubungi tim Lumbung Emas Logistik. Dapatkan alamat kantor, email, dan nomor WhatsApp untuk pertanyaan atau permintaan penawaran harga pengiriman Anda.',
};

export default function ContactPage() {
  return (
    <div>
      <section className="relative w-full aspect-video">
        <Image
          src="https://placehold.co/1920x800.png"
          alt="Map to office"
          layout="fill"
          objectFit="cover"
          data-ai-hint="office location"
        />
      </section>

      <div className="container mx-auto max-w-6xl py-12 px-4 md:px-6">
        <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary">
              Hubungi Kami
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground">
                Tim kami siap menjawab pertanyaan dan memberikan solusi terbaik untuk kebutuhan logistik Anda. Jangan ragu untuk menghubungi kami melalui informasi di bawah ini.
            </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-primary" />
                  Alamat Kantor
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">Head Office / Kantor Operasional:</p>
                <p className="text-muted-foreground">
                  Jalan Perak Timur No. 246 RT.001/RW.003, <br />
                  Kelurahan Perak Timur, Kecamatan Pabean Cantian <br />
                  Kota Surabaya 60164 – Jawa Timur
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Mail className="h-6 w-6 text-primary" />
                  Email & WhatsApp
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold">Alamat Email:</h4>
                  <p className="text-muted-foreground">lumbungemaslogistik@gmail.com</p>
                </div>
                 <div>
                  <h4 className="font-semibold mb-2">Pesan Cepat (Respon Tercepat):</h4>
                  <p className="text-muted-foreground mb-3">Untuk pertanyaan atau permintaan penawaran mendesak, cara tercepat untuk menghubungi kami adalah melalui WhatsApp.</p>
                  <Button asChild className="w-full bg-green-500 hover:bg-green-600 text-white">
                      <Link href="https://wa.me/6287859000800" target="_blank">
                          <MessageCircle className="mr-2"/>
                          Chat di WhatsApp
                      </Link>
                  </Button>
                 </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex items-center justify-center">
             <Image
              src="https://placehold.co/600x400.png"
              width={600}
              height={400}
              alt="Customer service team"
              data-ai-hint="customer service team"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
            />
          </div>

        </div>
      </div>
    </div>
  );
}
