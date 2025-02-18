import React from 'react';
import { MapContainer, TileLayer, CircleMarker, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const SalesMapping = () => {
  const salesData = [
    { name: "United States", coordinates: [37, -95], value: "65%", color: "#FFB547" },
    { name: "Brazil", coordinates: [-14, -51], value: "45%", color: "#FF5B5B" },
    { name: "China", coordinates: [35, 105], value: "55%", color: "#884DFF" },
    { name: "Saudi Arabia", coordinates: [24, 45], value: "35%", color: "#00E096" },
    { name: "Indonesia", coordinates: [-5, 120], value: "40%", color: "#02E096" }
  ];

  return (
    <div className="card bg-white p-4 md:p-6 rounded-2xl">
      <h3 className="font-semibold text-lg mb-4">Sales Mapping by Country</h3>
      <div className="h-[250px] md:h-[300px] w-full">
        <MapContainer
          center={[10, 0]}
          zoom={0.8}
          style={{ height: "100%", width: "100%" }}
          zoomControl={false}
          dragging={false}
          doubleClickZoom={false}
          scrollWheelZoom={false}
          attributionControl={false}
          minZoom={0.4}
          maxZoom={0.8}
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png"
            noWrap={true}
          />
          {salesData.map((country) => (
            <CircleMarker
              key={country.name}
              center={country.coordinates}
              radius={4}
              fillColor={country.color}
              fillOpacity={0.8}
              stroke={true}
              weight={1}
              color="white"
            >
              <Tooltip permanent direction="left" offset={[0, -7]}>
                <div className="text-xs font-semibold text-center" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.4)' }}>
                  {country.value}
                </div>
              </Tooltip>
            </CircleMarker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default SalesMapping;
