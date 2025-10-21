import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import libraryMap from "@/assets/library-map.png";

const MapView = () => {
  const [searchParams] = useSearchParams();
  const shelfLocation = searchParams.get("shelf");
  const [markerPosition, setMarkerPosition] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    if (shelfLocation) {
      // Parse shelf location to get coordinates on the map
      const position = getMapPosition(shelfLocation);
      setMarkerPosition(position);
    }
  }, [shelfLocation]);

  const getMapPosition = (location: string): { x: number; y: number } | null => {
    // Parse location format: "Book Shelf -X > Column - Y > Row -Z"
    const shelfMatch = location.match(/Book Shelf -(\d+)/);
    const columnMatch = location.match(/Column - (\d+)/);
    const rowMatch = location.match(/Row -(\d+)/);
    
    if (!shelfMatch) return null;
    
    const shelf = parseInt(shelfMatch[1]);
    const column = columnMatch ? parseInt(columnMatch[1]) : 1;
    const row = rowMatch ? parseInt(rowMatch[1]) : 1;

    // Map coordinates based on the library map image
    const positions: { [key: number]: { baseX: number, baseY: number, columnWidth: number, rowHeight: number } } = {
      1: { baseX: 21.5, baseY: 62, columnWidth: 15, rowHeight: -3 }, // Book Shelf -1 (C1-C9, 5 rows) - left side vertical
      2: { baseX: 2, baseY: 8, columnWidth: 2.5, rowHeight: 14 }, // Book Shelf -2 (3 columns, 5 rows) - top left
      3: { baseX: 82, baseY: 3, columnWidth: 3, rowHeight: 14 }, // Book Shelf -3 (4 columns, 5 rows) - top right
      4: { baseX: 68, baseY: 15, columnWidth: 0.9, rowHeight: 14 }, // Book Shelf -4 (17 columns, 5 rows) - right side vertical
      5: { baseX: 68, baseY: 82, columnWidth: 4, rowHeight: 3 }, // Book Shelf -5 (4 columns, 5 rows) - bottom right horizontal
    };

    const config = positions[shelf];
    if (!config) return null;

    return {
      x: config.baseX + (column - 1) * config.columnWidth,
      y: config.baseY + (row - 1) * config.rowHeight
    };
  };

  return (
    <DashboardLayout>
      <div className="flex items-center gap-4 mb-6">
        <h1 className="text-4xl font-bold">Library Map</h1>
      </div>
      <Card className="p-8">
        <div className="relative inline-block max-w-full">
          <img 
            src={libraryMap} 
            alt="Library Map" 
            className="w-full h-auto rounded-lg"
          />
          {markerPosition && (
            <div 
              className="absolute w-4 h-4 bg-red-500 rounded-full animate-pulse shadow-lg"
              style={{
                left: `${markerPosition.x}%`,
                top: `${markerPosition.y}%`,
                transform: 'translate(-50%, -50%)',
                boxShadow: '0 0 10px rgba(239, 68, 68, 0.8)'
              }}
            />
          )}
        </div>
        {shelfLocation && (
          <div className="mt-4 text-center">
            <p className="text-sm text-muted-foreground">
              Location: <span className="font-semibold">{shelfLocation}</span>
            </p>
          </div>
        )}
      </Card>
    </DashboardLayout>
  );
};

export default MapView;
