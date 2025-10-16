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
      1: { baseX: 15, baseY: 30, columnWidth: 3.5, rowHeight: 8 }, // Book Shelf -1 (9 columns, 5 rows)
      2: { baseX: 10, baseY: 10, columnWidth: 3, rowHeight: 8 }, // Book Shelf -2 (3 columns, 5 rows)
      3: { baseX: 60, baseY: 5, columnWidth: 5, rowHeight: 8 }, // Book Shelf -3 (4 columns, 5 rows)
      4: { baseX: 75, baseY: 30, columnWidth: 3, rowHeight: 8 }, // Book Shelf -4 (17 columns, 5 rows)
      5: { baseX: 75, baseY: 70, columnWidth: 5, rowHeight: 6 }, // Book Shelf -5 (4 columns, 5 rows)
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
