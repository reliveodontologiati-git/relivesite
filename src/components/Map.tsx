import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { MapPin } from "lucide-react";

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(true);

  // Coordinates for the clinic location
  const clinicCoordinates: [number, number] = [-46.54106191135096, -22.954927688391734];

  const initializeMap = (token: string) => {
    if (!mapContainer.current || !token) return;

    try {
      mapboxgl.accessToken = token;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: clinicCoordinates,
        zoom: 16,
        pitch: 45,
      });

      // Add a marker for the clinic
      new mapboxgl.Marker({
        color: '#8B4513' // warm-brown color
      })
        .setLngLat(clinicCoordinates)
        .setPopup(
          new mapboxgl.Popup({ offset: 25 })
            .setHTML('<h3>Relive - Sorrisos & Beleza</h3><p>Nossa clínica odontológica</p>')
        )
        .addTo(map.current);

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl({
          visualizePitch: true,
        }),
        'top-right'
      );

      setShowTokenInput(false);
    } catch (error) {
      console.error('Erro ao inicializar o mapa:', error);
    }
  };

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mapboxToken) {
      initializeMap(mapboxToken);
    }
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  if (showTokenInput) {
    return (
      <Card className="border-0 shadow-elegant p-8">
        <div className="text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-warm-beige flex items-center justify-center mx-auto">
            <MapPin className="h-8 w-8 text-warm-brown" />
          </div>
          <div>
            <h3 className="font-playfair font-semibold text-warm-brown text-xl mb-2">
              Configurar Mapa
            </h3>
            <p className="text-muted-foreground mb-6">
              Para exibir o mapa, insira seu token público do Mapbox. 
              <br />
              <a 
                href="https://mapbox.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-warm-brown hover:underline"
              >
                Obtenha seu token aqui
              </a>
            </p>
          </div>
          <form onSubmit={handleTokenSubmit} className="space-y-4 max-w-md mx-auto">
            <div className="space-y-2">
              <Label htmlFor="mapbox-token">Token Público do Mapbox</Label>
              <Input
                id="mapbox-token"
                type="text"
                value={mapboxToken}
                onChange={(e) => setMapboxToken(e.target.value)}
                placeholder="pk.eyJ1IjoieW91ci11c2VybmFtZSIsImEiOiIuLi4ifQ..."
                required
              />
            </div>
            <Button type="submit" variant="hero" className="w-full">
              Carregar Mapa
            </Button>
          </form>
        </div>
      </Card>
    );
  }

  return (
    <Card className="border-0 shadow-elegant overflow-hidden">
      <div ref={mapContainer} className="h-96 w-full" />
    </Card>
  );
};

export default Map;