import { Card } from './ui/card';
import { Building2, Sun, Compass } from 'lucide-react';

export function TowerDetails() {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-center mb-4">Nuestras Torres</h2>
        <p className="text-center text-muted-foreground mb-12">
          Cada torre ofrece diferentes orientaciones y beneficios únicos
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="w-8 h-8 text-primary" />
              <h3>Torre 1</h3>
            </div>
            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-2 text-sm">
                <Compass className="w-4 h-4 text-muted-foreground" />
                <span>Orientaciones SE y NO</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Sun className="w-4 h-4 text-muted-foreground" />
                <span>Exoneración ANV hasta 03/2032</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              28 apartamentos con excelente iluminación natural en ambas orientaciones
            </p>
          </Card>

          <Card className="p-8 border-2 border-primary">
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="w-8 h-8 text-primary" />
              <h3>Torre 2</h3>
            </div>
            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-2 text-sm">
                <Compass className="w-4 h-4 text-muted-foreground" />
                <span>Orientaciones NE y SO</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Sun className="w-4 h-4 text-muted-foreground" />
                <span>Exoneración ANV hasta 09/2035</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              28 apartamentos. Mayor beneficio fiscal hasta 2035
            </p>
          </Card>

          <Card className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="w-8 h-8 text-primary" />
              <h3>Torre 3</h3>
            </div>
            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-2 text-sm">
                <Compass className="w-4 h-4 text-muted-foreground" />
                <span>Orientaciones SE y NO</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Sun className="w-4 h-4 text-muted-foreground" />
                <span>Exoneración ANV hasta 03/2034</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              28 apartamentos con orientaciones estratégicas para confort térmico
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
