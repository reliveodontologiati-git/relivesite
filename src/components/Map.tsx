import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Card } from "@/components/ui/card";

// Fix for default markers in Leaflet with Vite
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<L.Map | null>(null);

  // Coordinates for the clinic location
  const clinicCoordinates: [number, number] = [-22.954927688391734, -46.54106191135096];

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    // Initialize the map
    map.current = L.map(mapContainer.current).setView(clinicCoordinates, 16);

    // Add OpenStreetMap tiles (free!)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map.current);

    // Create custom marker icon
    const customIcon = L.divIcon({
      html: `<div style="background-color: #8B4513; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 3px solid white; box-shadow: 0 2px 10px rgba(0,0,0,0.3);">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      </div>`,
      className: 'custom-marker',
      iconSize: [30, 30],
      iconAnchor: [15, 30],
      popupAnchor: [0, -30]
    });

    // Add marker for the clinic
    const marker = L.marker(clinicCoordinates, { icon: customIcon }).addTo(map.current);
    
    // Add popup to marker
    marker.bindPopup(`
      <div style="text-align: center; padding: 8px;">
        <h3 style="margin: 0 0 8px 0; color: #8B4513; font-weight: 600;">Relive - Sorrisos & Beleza</h3>
        <p style="margin: 0; color: #666; font-size: 14px;">Nossa clínica odontológica</p>
        <p style="margin: 4px 0 0 0; color: #666; font-size: 12px;">São Paulo, SP</p>
      </div>
    `);

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  return (
    <Card className="border-0 shadow-elegant overflow-hidden">
      <div 
        ref={mapContainer} 
        className="h-96 w-full"
        style={{ minHeight: '400px' }}
      />
    </Card>
  );
};

export default Map;