
"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Truck, ShieldCheck, Clock, Ship, Plane, ArrowRight, CheckCircle, ChevronLeft, ChevronRight as ChevronRightIcon, PackagePlus, MessageCircle, Star, ThumbsUp, DollarSign, HelpCircle, MapPin, Mail, Phone, PackageCheck, Package } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { ClientOnly } from '@/components/common/ClientOnly';

// SEO Metadata is handled in layout.tsx for the default page title and description

function ServicesSection() {
  const services = [
    {
      href: "/layanan/darat",
      icon: Truck,
      title: "Pengiriman Darat",
      description: "Armada handal untuk jangkauan luas di seluruh wilayah Indonesia.",
    },
    {
      href: "/layanan/laut",
      icon: Ship,
      title: "Pengiriman Laut",
      description: "Solusi ekonomis untuk kargo FCL & LCL antar pulau dan negara.",
    },
    {
      href: "/layanan/udara",
      icon: Plane,
      title: "Pengiriman Udara",
      description: "Kecepatan dan keandalan untuk pengiriman kargo yang mendesak.",
    },
    {
      href: "/layanan/lainnya",
      icon: PackagePlus,
      title: "Layanan Lainnya",
      description: "Termasuk distribusi, bea cukai, dan penanganan proyek kargo.",
    },
  ];

  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  return (
    <section id="layanan" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Layanan Komprehensif Kami</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Dari darat, laut, hingga udara, kami menyediakan berbagai jenis layanan untuk memastikan barang Anda sampai tujuan.
            </p>
          </div>
        </div>
        <div
          ref={ref}
          className="mx-auto grid max-w-5xl items-stretch gap-6 sm:grid-cols-2 md:grid-cols-4 lg:gap-8 mt-12"
        >
          {services.map((service, index) => (
            <Link href={service.href} key={service.href} className="flex">
              <Card className={cn(
                "flex flex-col text-center items-center h-full w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 ease-out",
                "opacity-0 transform-gpu translate-y-4",
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              )} style={{ transitionDelay: `${index * 150}ms` }}>
                <CardHeader className="items-center">
                  <service.icon className="h-10 w-10 text-primary-foreground mb-2" />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-primary-foreground/80 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild>
            <Link href="/layanan">
              Lihat Semua Layanan <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
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
        <Card className="mt-8 text-left">
            <CardContent className="pt-6">
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="grid sm:grid-cols-2 gap-4">
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
                    </div>
                    <Button type="submit" className="w-full">
                        Cek Harga
                    </Button>
                    <p className="text-xs text-center text-muted-foreground pt-2">
                        *Untuk harga final dan penawaran khusus, silakan hubungi tim kami.
                    </p>
                </form>
            </CardContent>
        </Card>
    );
}


export default function Home() {
  const carouselItems = [
    {
      image: "https://placehold.co/1920x800.png",
      hint: "logistics container ship port",
      alt: "Container ship at a busy port",
    },
    {
      image: "https://placehold.co/1920x800.png",
      hint: "air cargo plane tarmac",
      alt: "Air cargo plane being loaded on the tarmac",
    },
    {
      image: "https://placehold.co/1920x800.png",
      hint: "trucks on highway sunset",
      alt: "Fleet of trucks on a highway at sunset",
    }
  ];
  
  const testimonials = [
    {
      name: 'Fadhil Aryadana',
      feedback: 'Ekspedisi terpercaya, pelayanan serta informasi dari admin bagus dan ramah. Kirim motor dari jakarta ke Samarinda, motor sampai dengan selamat tanpa lecet sama sekali. Mantap!',
      avatar: 'https://placehold.co/100x100.png',
      time: 'a year ago'
    },
    {
      name: 'Ahmad Faisal Siregar',
      feedback: 'EKSPEDISI TERBAIK! customer servicenya atas nama SARAH sangat ramah dan diacungi jempol! tidak hanya sarah, semua karyawannya juga ramah. Recommended!',
      avatar: 'https://placehold.co/100x100.png',
      time: '3 years ago'
    },
    {
      name: 'V 19',
      feedback: 'Di luar dugaan estimasi 3 minggu kirim ke waingapu NTT ternyata kurang dari 2 minggu motor sdh sampai ke tangan konsumen, diantar sampai ke rumah pula. Terima kasih banyak!',
      avatar: 'https://placehold.co/100x100.png',
      time: '5 years ago'
    },
    {
      name: 'Client Baru',
      feedback: 'Prosesnya cepat dan mudah. Tim sangat membantu dari awal sampai akhir. Pasti akan menggunakan jasa mereka lagi untuk pengiriman berikutnya.',
      avatar: 'https://placehold.co/100x100.png',
      time: '2 months ago'
    }
  ];


  const faqItems = [
    {
      question: "Apa saja jenis layanan yang ditawarkan?",
      answer: "Kami menawarkan layanan logistik komprehensif, termasuk jasa kargo darat (truk), laut (FCL & LCL), dan udara. Kami juga menyediakan layanan tambahan seperti customs brokerage, cargo project, dan distribusi."
    },
    {
      question: "Bagaimana cara melacak pengiriman saya?",
      answer: "Untuk status pengiriman, Anda dapat menghubungi tim customer service kami melalui WhatsApp dengan menyertakan nomor resi atau detail pengiriman Anda. Kami akan segera memberikan update terkini."
    },
    {
      question: "Area mana saja yang dijangkau?",
      answer: "Kami melayani pengiriman ke seluruh wilayah di Indonesia, dari Sabang hingga Merauke, serta rute-rute internasional utama melalui jaringan mitra global kami."
    },
     {
      question: "Bagaimana cara mendapatkan penawaran harga?",
      answer: "Cara tercepat adalah dengan menghubungi kami melalui tombol WhatsApp yang tersedia di situs ini atau mengunjungi halaman Tarif dan Kontak kami. Tim kami akan segera membantu Anda dengan penawaran harga terbaik sesuai kebutuhan Anda."
    }
  ];

  const galleryImages = [
      { src: 'https://placehold.co/600x400.png', alt: 'Warehouse operations', hint: 'warehouse logistics' },
      { src: 'https://placehold.co/600x400.png', alt: 'Cargo loading onto a truck', hint: 'cargo truck loading' },
      { src: 'https://placehold.co/600x400.png', alt: 'Container ship at the port', hint: 'container port' },
      { src: 'https://placehold.co/600x400.png', alt: 'Air freight ready for departure', hint: 'air freight tarmac' },
      { src: 'https://placehold.co/600x400.png', alt: 'Team coordinating logistics', hint: 'logistics team meeting' },
      { src: 'https://placehold.co/600x400.png', alt: 'Forklift moving pallets', hint: 'forklift warehouse' },
      { src: 'https://placehold.co/600x400.png', alt: 'Truck fleet at depot', hint: 'truck fleet' },
      { src: 'https://placehold.co/600x400.png', alt: 'Customs clearance process', hint: 'customs clearance' },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setCurrentImageIndex(index);
  const closeLightbox = () => setCurrentImageIndex(null);

  const goToNext = () => {
      if (currentImageIndex !== null) {
      setCurrentImageIndex((prevIndex) => (prevIndex! + 1) % galleryImages.length);
      }
  };

  const goToPrevious = () => {
      if (currentImageIndex !== null) {
      setCurrentImageIndex((prevIndex) => (prevIndex! - 1 + galleryImages.length) % galleryImages.length);
      }
  };

  const GoogleIcon = () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#4285F4" d="M21.35 11.1h-9.2v2.7h5.2c-.2 1-1.3 3.1-5.2 3.1-3.1 0-5.7-2.5-5.7-5.7s2.5-5.7 5.7-5.7c1.7 0 2.9.7 3.6 1.4l2.1-2.1C19.2 2.6 16.2 1 12.15 1 7.1 1 3.1 5.1 3.1 10s4 9 9.05 9c5.2 0 8.5-3.6 8.5-8.8 0-.5 0-1-.15-1.5z"/></svg>
  );

  return (
    <div className="flex flex-col">
      <ClientOnly>
        <section className="w-full">
          <Carousel
            className="w-full"
            plugins={[Autoplay({ delay: 5000 })]}
            opts={{ loop: true }}
          >
            <CarouselContent className="-ml-0">
              {carouselItems.map((item, index) => (
                <CarouselItem key={index} className="p-0">
                  <div className="relative w-full aspect-video md:aspect-[2.4/1]">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover"
                      data-ai-hint={item.hint}
                      priority={index === 0}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </section>
      </ClientOnly>

      <section className="w-full py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary">
                    Solusi Logistik Terpercaya, Cepat, dan Efisien
                </h1>
                <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-muted-foreground">
                    Kami siap menjadi mitra andalan untuk semua kebutuhan pengiriman dan distribusi bisnis Anda di seluruh Indonesia.
                </p>
                <Button asChild size="lg" className="mt-8">
                    <Link href="/tarif">Cek Tarif Sekarang</Link>
                </Button>
            </div>
        </div>
      </section>

      <section id="solusi" className="w-full py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-6">
           <div className="text-center space-y-2 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Tantangan Logistik? Kami Punya Solusinya.</h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed">
                Kami memahami masalah yang sering Anda hadapi. Itulah mengapa kami berkomitmen memberikan layanan yang handal.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center space-y-3">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Pengiriman Terlambat?</h3>
                <p className="text-muted-foreground">Dengan manajemen rute yang efisien dan armada modern, kami menjamin pengiriman Anda tiba tepat waktu sesuai jadwal.</p>
              </div>
              <div className="flex flex-col items-center space-y-3">
                 <div className="p-4 bg-primary/10 rounded-full">
                  <PackageCheck className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Khawatir Barang Rusak?</h3>
                <p className="text-muted-foreground">Kami menerapkan standar penanganan barang yang ketat dan profesional untuk memastikan kargo Anda sampai tujuan dalam kondisi sempurna.</p>
              </div>
              <div className="flex flex-col items-center space-y-3">
                 <div className="p-4 bg-primary/10 rounded-full">
                  <DollarSign className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Biaya Tidak Terduga?</h3>
                <p className="text-muted-foreground">Kami memberikan penawaran harga yang transparan dan kompetitif sejak awal, tanpa ada biaya tersembunyi yang merugikan Anda.</p>
              </div>
            </div>
        </div>
      </section>
      
      <ClientOnly>
        <ServicesSection />
      </ClientOnly>

      <ClientOnly>
        <section id="estimasi-ongkir" className="w-full py-16 md:py-24 bg-secondary/50">
          <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-2xl mx-auto text-center">
                   <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Estimasi Biaya Pengiriman</h2>
                   <p className="mt-3 text-muted-foreground md:text-lg">
                      Dapatkan perkiraan biaya untuk pengiriman Anda dengan cepat dan mudah.
                   </p>
                    <RateCheckForm />
              </div>
          </div>
        </section>
      </ClientOnly>
      
      <section id="promo" className="w-full py-16 md:py-24 bg-primary/90 text-primary-foreground">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight">Dapatkan Penawaran Khusus Hari Ini!</h2>
            <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">Hubungi kami sekarang untuk mendapatkan diskon spesial untuk pengiriman pertama Anda atau untuk kebutuhan kargo dalam jumlah besar.</p>
            <Button asChild size="lg" variant="secondary" className="mt-6 bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                <Link href="/kontak">Klaim Penawaran</Link>
            </Button>
          </div>
      </section>
      
      <section id="galeri" className="w-full py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-2 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Aktivitas Kami di Lapangan</h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed">
              Melihat lebih dekat bagaimana kami menangani setiap pengiriman dengan profesional.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, index) => (
              <button key={index} onClick={() => openLightbox(index)} className="relative aspect-video w-full h-full overflow-hidden rounded-lg cursor-pointer group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  data-ai-hint={img.hint}
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              </button>
            ))}
          </div>
        </div>
      </section>

      <ClientOnly>
        <Dialog open={currentImageIndex !== null} onOpenChange={(isOpen) => !isOpen && closeLightbox()}>
          <DialogContent className="max-w-5xl w-full p-2 bg-transparent border-0 flex items-center justify-center">
              {currentImageIndex !== null && (
                  <>
                      <Button variant="ghost" size="icon" onClick={goToPrevious} className="absolute left-2 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-black/50 text-white hover:bg-black/75 z-50">
                          <ChevronLeft className="h-8 w-8" />
                      </Button>
                      <div className="relative w-full max-w-4xl aspect-video">
                          <Image
                              src={galleryImages[currentImageIndex].src}
                              alt={galleryImages[currentImageIndex].alt}
                              layout="fill"
                              objectFit="contain"
                              data-ai-hint={galleryImages[currentImageIndex].hint}
                              className="rounded-lg"
                          />
                          <DialogTitle className="sr-only">{galleryImages[currentImageIndex].alt}</DialogTitle>
                      </div>
                      <Button variant="ghost" size="icon" onClick={goToNext} className="absolute right-2 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-black/50 text-white hover:bg-black/75 z-50">
                          <ChevronRightIcon className="h-8 w-8" />
                      </Button>
                  </>
              )}
          </DialogContent>
        </Dialog>
      </ClientOnly>
      
      <section id="testimoni" className="w-full py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-2 mb-12">
            <p className="font-semibold text-primary">Cerita Dari Pelanggan Kami</p>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Apa Kata Mereka Tentang Kami</h2>
          </div>
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="w-full lg:w-1/3">
              <Card className="flex flex-col items-center justify-center p-6 text-center h-full">
                <Truck className="h-16 w-16 text-primary mb-4" />
                <h3 className="text-xl font-bold">Lumbung Emas Logistik</h3>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-2xl font-bold text-amber-500">4.8</span>
                  <div className="flex text-amber-400">
                    <Star fill="currentColor" className="w-6 h-6" /><Star fill="currentColor" className="w-6 h-6" /><Star fill="currentColor" className="w-6 h-6" /><Star fill="currentColor" className="w-6 h-6" /><Star fill="currentColor" className="w-6 h-6" />
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mt-1">Based on 200+ reviews</p>
                <a href="https://g.page/r/your-business-link/review" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-4 text-sm text-muted-foreground">
                  powered by <GoogleIcon />
                </a>
              </Card>
            </div>

            <div className="w-full lg:w-2/3">
              <ClientOnly>
               <Carousel 
                opts={{
                  align: "start",
                  loop: true,
                }}
                plugins={[Autoplay({ delay: 6000 })]}
                className="w-full"
               >
                <CarouselContent className="-ml-0">
                  {testimonials.map((testimonial, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 p-1">
                      <div className="p-1 h-full">
                         <Card className="h-full flex flex-col">
                            <CardHeader className="flex flex-row justify-between items-start">
                               <div className="flex items-center gap-4">
                                  <Image src={testimonial.avatar} alt={testimonial.name} width={48} height={48} className="rounded-full" data-ai-hint="person avatar"/>
                                  <div>
                                      <h4 className="font-bold text-primary">{testimonial.name}</h4>
                                      <p className="text-xs text-muted-foreground">{testimonial.time}</p>
                                  </div>
                               </div>
                               <a href="https://g.page/r/your-business-link/review" target="_blank" rel="noopener noreferrer">
                                <GoogleIcon/>
                               </a>
                            </CardHeader>
                            <CardContent className="flex-grow">
                               <div className="flex text-amber-400 mb-2">
                                  <Star fill="currentColor" className="w-4 h-4" /><Star fill="currentColor" className="w-4 h-4" /><Star fill="currentColor" className="w-4 h-4" /><Star fill="currentColor" className="w-4 h-4" /><Star fill="currentColor" className="w-4 h-4" />
                               </div>
                               <p className="text-sm text-muted-foreground">"{testimonial.feedback}"</p>
                            </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="hidden md:block">
                  <CarouselPrevious className="absolute -left-6 top-1/2 -translate-y-1/2" />
                  <CarouselNext className="absolute -right-6 top-1/2 -translate-y-1/2" />
                </div>
              </Carousel>
              </ClientOnly>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="w-full py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
           <div className="text-center space-y-2 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Pertanyaan yang Sering Diajukan</h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed">
                Menemukan jawaban cepat untuk pertanyaan umum tentang layanan kami.
              </p>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index + 1}`}>
                  <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                  <AccordionContent>
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
        </div>
      </section>

       <section id="kontak-kami" className="w-full py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="max-w-2xl mx-auto">
                 <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Siap Mengirim Barang Anda?</h2>
                 <p className="mt-3 text-primary-foreground/80 md:text-lg">
                    Tim kami selalu siap sedia untuk menjawab pertanyaan Anda dan memberikan solusi logistik terbaik. Jangan ragu untuk menghubungi kami.
                 </p>
                  <Button asChild size="lg" className="mt-6 bg-green-500 hover:bg-green-600 text-white">
                      <Link href="https://wa.me/6287859000800" target="_blank">
                          <MessageCircle className="mr-2 h-5 w-5" /> Chat via WhatsApp
                      </Link>
                  </Button>
                  <div className="mt-8 text-sm text-primary-foreground/80">
                    <p>Atau hubungi kami melalui:</p>
                    <div className="flex justify-center items-center gap-4 mt-2">
                        <span><Mail className="inline-block mr-1 h-4 w-4"/> lumbungemaslogistik@gmail.com</span>
                    </div>
                  </div>
            </div>
        </div>
      </section>
    </div>
  );
}
