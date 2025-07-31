import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Ship, Plane, Truck, Package, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Layanan Logistik Komprehensif',
  description: 'Jelajahi semua solusi logistik kami di Lumbung Emas Logistik: jasa kargo udara, laut, darat, distribusi, bea cukai, dan penanganan proyek kargo untuk semua kebutuhan pengiriman.',
};

export default function ServicesPage() {
  const services = [
    {
      id: "udara",
      icon: Plane,
      title: "Jasa Kargo Udara (Air Freight)",
      description: "Layanan pengangkutan udara yang dapat disesuaikan untuk pengiriman kargo darurat dan segera. Jaringan agensi kami di seluruh dunia dan domestik memastikan pengiriman tepat waktu.",
      link: "/layanan/udara"
    },
    {
      id: "laut",
      icon: Ship,
      title: "Jasa Kargo Laut (Sea Freight)",
      description: "Sangat cocok untuk pengiriman kapasitas besar dengan harga terjangkau. Jaringan di pelabuhan utama dunia dan domestik memastikan keamanan dan ketepatan waktu.",
      link: "/layanan/laut"
    },
    {
      id: "darat",
      icon: Truck,
      title: "Jasa Transportasi Darat",
      description: "Solusi pengiriman darat yang tepat waktu dan terpercaya di dalam negeri dengan berbagai pilihan armada.",
      link: "/layanan/darat"
    },
    {
      id: "lainnya",
      icon: CheckCircle,
      title: "Layanan Lainnya",
      description: "Solusi logistik terintegrasi termasuk penanganan Cargo Project, Bea Cukai, dan layanan Undername.",
      link: "/layanan/lainnya"
    },
    {
        id: "distribusi",
        icon: Package,
        title: "Jasa Distribusi",
        description: "Layanan distribusi barang yang dirancang untuk memberikan solusi pengiriman yang tepat waktu dan terpercaya untuk kebutuhan distribusi Anda di seluruh wilayah Indonesia.",
        link: "#" // No dedicated page for now
      },
  ];

  return (
    <div className="bg-background">
      <div className="container mx-auto max-w-6xl py-12 px-4 md:px-6">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary">Layanan Kami</h1>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground">
            Solusi komprehensif untuk semua kebutuhan logistik dan pengiriman Anda.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(service => (
            <Card key={service.id} id={service.id} className="flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <service.icon className="h-10 w-10 text-primary" />
                  <CardTitle>{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
              {service.link !== "#" && (
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href={service.link}>
                      Lihat Detail <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
