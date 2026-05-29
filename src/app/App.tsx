import { Building2, Shield, Car, Dumbbell, UtensilsCrossed, MapPin, Phone, Mail, PlayCircle, FileText, Download } from 'lucide-react';
import { Button } from './components/ui/button';
import { Card } from './components/ui/card';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { TowerDetails } from './components/tower-details';
import { AmenityCard } from './components/amenity-card';
import logoPlazaArtigas from '../imports/Logo-nuevo-azul.png';
import render1Dorm from '../imports/Diseno-sin-titulo-36.png';
import render2Dorm from '../imports/Diseno-sin-titulo-37.png';
import render3Dorm from '../imports/Diseno-sin-titulo-39.png';
import plano1Dorm from '../imports/23.06.09-Apto-004.pdf';
import plano2Dorm from '../imports/23.06.09-Apto-104-1.pdf';
import plano3Dorm from '../imports/23.06.09-Apto-003.pdf';

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ImageWithFallback src={logoPlazaArtigas} alt="Plaza Artigas" className="h-10 w-auto" />
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#inicio" className="hover:text-primary transition-colors">Inicio</a>
            <a href="#complejo" className="hover:text-primary transition-colors">El Complejo</a>
            <a href="#apartamentos" className="hover:text-primary transition-colors">Apartamentos</a>
            <a href="#ubicacion" className="hover:text-primary transition-colors">Ubicación</a>
            <a href="#contacto" className="hover:text-primary transition-colors">Contacto</a>
          </div>
          <Button>Consultar</Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl mb-6">Tu nuevo hogar en el corazón de Durazno</h1>
              <p className="text-muted-foreground mb-8 text-lg">
                84 apartamentos distribuidos en 3 torres modernas. Seguridad de primer nivel,
                amenities exclusivos y beneficios fiscales ANV.
              </p>
              <div className="flex flex-col gap-3 mb-6">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Cochera incluida en todos los apartamentos</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Beneficios fiscales ANV hasta 2035</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Proyecto terminado y habilitado</span>
                </div>
              </div>
              <div className="flex gap-4">
                <Button size="lg">Ver Apartamentos</Button>
                <Button variant="outline" size="lg">Consultar Precios</Button>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden aspect-video shadow-lg">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/wVxjjWqAMFI?autoplay=1&mute=1&loop=1&playlist=wVxjjWqAMFI"
                title="Plaza Artigas - Video del Complejo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="complejo" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-center mb-4">Un Complejo Diseñado para Tu Calidad de Vida</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Proyecto finalizado y habilitado. 3 torres, 84 apartamentos, amenities de primer nivel.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <AmenityCard
              icon={Dumbbell}
              title="Gimnasio Equipado"
              shortDescription="Gimnasio terminado y funcionando con equipamiento completo"
              fullDescription="Gimnasio moderno de última generación, totalmente equipado y listo para tu entrenamiento diario."
              features={[
                "Equipamiento de alta calidad",
                "Amplio espacio con ventilación natural",
                "Máquinas cardiovasculares y de fuerza",
                "Zona de pesas libres",
                "Acceso exclusivo para residentes"
              ]}
              images={[
                "https://images.unsplash.com/photo-1637430308606-86576d8fef3c?w=1080",
                "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=1080"
              ]}
              hoverImage="https://images.unsplash.com/photo-1637430308606-86576d8fef3c?w=800"
            />

            <AmenityCard
              icon={UtensilsCrossed}
              title="Espacios de Reunión"
              shortDescription="Barbacoas y SUM para tus reuniones y eventos"
              fullDescription="Espacios diseñados para compartir momentos inolvidables con familia y amigos."
              features={[
                "1 barbacoa abierta con vista panorámica",
                "2 barbacoas cerradas climatizadas",
                "Sala de usos múltiples (SUM) amplia",
                "Mesas y asientos para eventos",
                "Sistema de reserva online"
              ]}
              images={[
                "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1080"
              ]}
              hoverImage="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800"
            />

            <AmenityCard
              icon={Car}
              title="Cochera Incluida"
              shortDescription="Todos los apartamentos incluyen cochera propia"
              fullDescription="Estacionamiento techado y seguro incluido en cada apartamento, sin costos adicionales."
              features={[
                "Cochera asignada por apartamento",
                "13 m² de espacio cubierto",
                "Acceso directo al edificio",
                "Sistema de seguridad integrado",
                "Iluminación LED"
              ]}
              images={[
                "https://images.unsplash.com/photo-1548343361-02248be15911?w=1080"
              ]}
              hoverImage="https://images.unsplash.com/photo-1548343361-02248be15911?w=800"
            />

            <AmenityCard
              icon={Shield}
              title="Seguridad Integral"
              shortDescription="Video vigilancia y monitoreo 24 horas para tu tranquilidad"
              fullDescription="Sistema de seguridad de última generación para tu tranquilidad y la de tu familia."
              features={[
                "Video vigilancia 24/7",
                "Monitoreo en tiempo real",
                "Control de accesos",
                "Personal de seguridad permanente",
                "Sistema de alarmas integrado"
              ]}
              images={[
                "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1080"
              ]}
              hoverImage="https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800"
            />

            <AmenityCard
              icon={Building2}
              title="84 Apartamentos"
              shortDescription="3 torres modernas con diferentes tipologías"
              fullDescription="Complejo residencial diseñado con criterios de arquitectura contemporánea y máximo confort."
              features={[
                "3 torres independientes",
                "28 apartamentos por torre",
                "1, 2 y 3 dormitorios disponibles",
                "Diferentes orientaciones (SE, NO, NE, SO)",
                "Terminaciones de primera calidad"
              ]}
              images={[
                "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1080"
              ]}
              hoverImage="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800"
            />

            <AmenityCard
              icon={MapPin}
              title="Ubicación Céntrica"
              shortDescription="Lavalleja 1265, Durazno - En el centro de todo"
              fullDescription="Ubicación estratégica con acceso inmediato a todos los servicios que necesitás."
              features={[
                "Centro de Durazno",
                "Comercios a pasos",
                "Transporte público cercano",
                "Instituciones educativas próximas",
                "Centros de salud en la zona"
              ]}
              images={[
                "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=1080"
              ]}
              hoverImage="https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800"
            />
          </div>
        </div>
      </section>

      {/* Apartments Section */}
      <section id="apartamentos" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-center mb-4">Tipologías Disponibles</h2>
          <p className="text-center text-muted-foreground mb-12">
            Elegí el apartamento que mejor se adapte a tus necesidades
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* 1 Dormitorio */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-square overflow-hidden bg-muted">
                <ImageWithFallback
                  src={render1Dorm}
                  alt="Apartamento 1 dormitorio - Plaza Artigas"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-baseline justify-between mb-3">
                  <h3>1 Dormitorio</h3>
                  <span className="text-2xl font-medium text-primary">USD 143,000</span>
                </div>
                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Superficie unidad:</span>
                    <span className="font-medium">45 m²</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Cochera:</span>
                    <span className="font-medium">13 m²</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total:</span>
                    <span className="font-medium">58 m²</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Baños:</span>
                    <span className="font-medium">1</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <Button className="w-full">Consultar Disponibilidad</Button>
                  <a href={plano1Dorm} target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button variant="outline" className="w-full">
                      <FileText className="w-4 h-4 mr-2" />
                      Ver Planos
                    </Button>
                  </a>
                </div>
              </div>
            </Card>

            {/* 2 Dormitorios */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow border-2 border-primary">
              <div className="bg-primary text-primary-foreground text-xs py-1 px-3 text-center font-medium">
                Más solicitado
              </div>
              <div className="aspect-square overflow-hidden bg-muted">
                <ImageWithFallback
                  src={render2Dorm}
                  alt="Apartamento 2 dormitorios - Plaza Artigas"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-baseline justify-between mb-3">
                  <h3>2 Dormitorios</h3>
                  <span className="text-2xl font-medium text-primary">USD 170,000</span>
                </div>
                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Superficie unidad:</span>
                    <span className="font-medium">69 m²</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Cochera:</span>
                    <span className="font-medium">13 m²</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total:</span>
                    <span className="font-medium">82 m²</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Baños:</span>
                    <span className="font-medium">1</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <Button className="w-full">Consultar Disponibilidad</Button>
                  <a href={plano2Dorm} target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button variant="outline" className="w-full">
                      <FileText className="w-4 h-4 mr-2" />
                      Ver Planos
                    </Button>
                  </a>
                </div>
              </div>
            </Card>

            {/* 3 Dormitorios */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-square overflow-hidden bg-muted">
                <ImageWithFallback
                  src={render3Dorm}
                  alt="Apartamento 3 dormitorios - Plaza Artigas"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-baseline justify-between mb-3">
                  <h3>3 Dormitorios</h3>
                  <span className="text-2xl font-medium text-primary">USD 196,000</span>
                </div>
                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Superficie unidad:</span>
                    <span className="font-medium">79 m²</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Cochera:</span>
                    <span className="font-medium">13 m²</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total:</span>
                    <span className="font-medium">92 m²</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Baños:</span>
                    <span className="font-medium">2</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <Button className="w-full" variant="outline">Consultar Disponibilidad</Button>
                  <a href={plano3Dorm} target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button variant="outline" className="w-full">
                      <FileText className="w-4 h-4 mr-2" />
                      Ver Planos
                    </Button>
                  </a>
                </div>
              </div>
            </Card>
          </div>

          {/* Benefits Section */}
          <div className="mt-16 bg-primary/5 rounded-lg p-8">
            <h3 className="text-center mb-6">Beneficios Fiscales ANV</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-medium mb-2">Torre 1</div>
                <p className="text-muted-foreground">Exoneración hasta marzo 2032</p>
              </div>
              <div>
                <div className="text-3xl font-medium mb-2">Torre 3</div>
                <p className="text-muted-foreground">Exoneración hasta marzo 2034</p>
              </div>
              <div>
                <div className="text-3xl font-medium mb-2">Torre 2</div>
                <p className="text-muted-foreground">Exoneración hasta setiembre 2035</p>
              </div>
            </div>
            <p className="text-center text-sm text-muted-foreground mt-6">
              Beneficios de IP e IRPF para propietarios que califiquen bajo la Agencia Nacional de Vivienda
            </p>
          </div>
        </div>
      </section>

      {/* Tower Details Section */}
      <TowerDetails />

      {/* Construction Process Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-center mb-4">El Proceso de Construcción</h2>
          <p className="text-center text-muted-foreground mb-12">
            Mirá cómo se construyó este complejo único en Durazno
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-muted rounded-lg aspect-video flex items-center justify-center cursor-pointer hover:bg-muted/80 transition-colors group">
              <div className="text-center">
                <PlayCircle className="w-16 h-16 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
                <p className="text-muted-foreground">Video Principal</p>
              </div>
            </div>
            <div className="bg-muted rounded-lg aspect-video flex items-center justify-center cursor-pointer hover:bg-muted/80 transition-colors group">
              <div className="text-center">
                <PlayCircle className="w-16 h-16 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
                <p className="text-muted-foreground">Recorrido Virtual</p>
              </div>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-4 gap-4">
            <div className="bg-muted rounded-lg aspect-square flex items-center justify-center">
              <p className="text-muted-foreground text-sm">Galería 1</p>
            </div>
            <div className="bg-muted rounded-lg aspect-square flex items-center justify-center">
              <p className="text-muted-foreground text-sm">Galería 2</p>
            </div>
            <div className="bg-muted rounded-lg aspect-square flex items-center justify-center">
              <p className="text-muted-foreground text-sm">Galería 3</p>
            </div>
            <div className="bg-muted rounded-lg aspect-square flex items-center justify-center">
              <p className="text-muted-foreground text-sm">Galería 4</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="ubicacion" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-center mb-4">Ubicación</h2>
          <p className="text-center text-muted-foreground mb-12">
            Lavalleja 1265, Durazno - Uruguay
          </p>

          <div className="rounded-lg overflow-hidden shadow-lg mb-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3298.892!2d-56.522!3d-33.389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a0c8d8c8d8c8d8%3A0x1234567890abcdef!2sLavalleja%201265%2C%20Durazno%2C%20Uruguay!5e0!3m2!1ses!2suy!4v1234567890123!5m2!1ses!2suy"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Plaza Artigas"
            ></iframe>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <Card className="p-6">
              <MapPin className="w-8 h-8 mx-auto mb-3 text-primary" />
              <h4 className="mb-2">Dirección</h4>
              <p className="text-sm text-muted-foreground">Lavalleja 1265, Durazno</p>
            </Card>
            <Card className="p-6">
              <Building2 className="w-8 h-8 mx-auto mb-3 text-primary" />
              <h4 className="mb-2">En el centro</h4>
              <p className="text-sm text-muted-foreground">Cerca de comercios, servicios y transporte</p>
            </Card>
            <Card className="p-6">
              <Phone className="w-8 h-8 mx-auto mb-3 text-primary" />
              <h4 className="mb-2">Visitanos</h4>
              <p className="text-sm text-muted-foreground">Agenda tu visita al complejo</p>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://maps.app.goo.gl/kFprJhhV4ixE5WAJ7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              <MapPin className="w-4 h-4" />
              Ver en Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-center mb-4">Contacto</h2>
          <p className="text-center text-muted-foreground mb-12">
            Dejanos tus datos y nos comunicaremos a la brevedad
          </p>

          <Card className="p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="nombre">Nombre</label>
                  <Input id="nombre" placeholder="Tu nombre" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="telefono">Teléfono</label>
                  <Input id="telefono" type="tel" placeholder="099 123 456" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email">Email</label>
                <Input id="email" type="email" placeholder="tu@email.com" />
              </div>

              <div className="space-y-2">
                <label htmlFor="mensaje">Mensaje</label>
                <Textarea id="mensaje" placeholder="¿En qué podemos ayudarte?" rows={5} />
              </div>

              <Button className="w-full" size="lg">Enviar Consulta</Button>
            </form>

            <div className="mt-8 pt-8 border-t border-border grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span>099 123 456</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span>info@plazaartigas.com.uy</span>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <ImageWithFallback src={logoPlazaArtigas} alt="Plaza Artigas" className="h-8 w-auto brightness-0 invert" />
              </div>
              <p className="text-sm opacity-80">
                Complejo residencial de primer nivel en Durazno
              </p>
            </div>

            <div>
              <h4 className="mb-4">Navegación</h4>
              <div className="space-y-2 text-sm opacity-80">
                <div><a href="#inicio" className="hover:opacity-100 transition-opacity">Inicio</a></div>
                <div><a href="#complejo" className="hover:opacity-100 transition-opacity">El Complejo</a></div>
                <div><a href="#apartamentos" className="hover:opacity-100 transition-opacity">Apartamentos</a></div>
                <div><a href="#contacto" className="hover:opacity-100 transition-opacity">Contacto</a></div>
              </div>
            </div>

            <div>
              <h4 className="mb-4">Contacto</h4>
              <div className="space-y-2 text-sm opacity-80">
                <div>Lavalleja 1265, Durazno</div>
                <div>Uruguay</div>
                <div>www.plazaartigas.com.uy</div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-sm opacity-80">
            © 2026 Plaza Artigas. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}