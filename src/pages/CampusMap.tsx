import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  MapPin, 
  Search, 
  Navigation, 
  Building, 
  Utensils, 
  BookOpen, 
  Car, 
  Wifi,
  Coffee,
  Heart,
  Zap
} from 'lucide-react';

const CampusMap = () => {
  const locations = [
    {
      id: 1,
      name: "Main Administrative Building",
      type: "Administrative",
      description: "Principal's office, admissions, student services",
      icon: Building,
      coordinates: { x: 30, y: 40 },
      amenities: ["WiFi", "AC"],
      status: "open"
    },
    {
      id: 2,
      name: "Engineering Block A",
      type: "Academic",
      description: "Computer Science, IT, and Electronics departments",
      icon: BookOpen,
      coordinates: { x: 50, y: 30 },
      amenities: ["WiFi", "Labs", "AC"],
      status: "open"
    },
    {
      id: 3,
      name: "Engineering Block B",
      type: "Academic", 
      description: "Mechanical, Civil, and Chemical Engineering",
      icon: BookOpen,
      coordinates: { x: 70, y: 35 },
      amenities: ["WiFi", "Workshops", "AC"],
      status: "open"
    },
    {
      id: 4,
      name: "Central Library",
      type: "Academic",
      description: "Main library with study halls and digital resources",
      icon: BookOpen,
      coordinates: { x: 40, y: 60 },
      amenities: ["WiFi", "Quiet Zone", "AC"],
      status: "open"
    },
    {
      id: 5,
      name: "Student Cafeteria",
      type: "Food & Beverage",
      description: "Main dining area with multiple food options",
      icon: Utensils,
      coordinates: { x: 60, y: 70 },
      amenities: ["Food Court", "Seating"],
      status: "open"
    },
    {
      id: 6,
      name: "Sports Complex",
      type: "Recreation",
      description: "Gymnasium, basketball court, and fitness center",
      icon: Heart,
      coordinates: { x: 80, y: 60 },
      amenities: ["Gym", "Courts", "Locker Rooms"],
      status: "open"
    },
    {
      id: 7,
      name: "Main Auditorium",
      type: "Event",
      description: "Large auditorium for events and seminars",
      icon: Building,
      coordinates: { x: 45, y: 45 },
      amenities: ["AC", "Audio/Visual", "Seating 500+"],
      status: "open"
    },
    {
      id: 8,
      name: "Parking Area A",
      type: "Parking",
      description: "Main parking area for students and staff",
      icon: Car,
      coordinates: { x: 20, y: 70 },
      amenities: ["Security", "Covered"],
      status: "open"
    },
    {
      id: 9,
      name: "Innovation Lab",
      type: "Academic",
      description: "Research and innovation center with modern equipment",
      icon: Zap,
      coordinates: { x: 65, y: 20 },
      amenities: ["WiFi", "3D Printing", "Research Equipment"],
      status: "open"
    },
    {
      id: 10,
      name: "Coffee Corner",
      type: "Food & Beverage", 
      description: "Quick snacks and beverages",
      icon: Coffee,
      coordinates: { x: 35, y: 55 },
      amenities: ["Coffee", "Snacks", "WiFi"],
      status: "open"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Academic': return 'bg-campus-blue';
      case 'Administrative': return 'bg-campus-purple';
      case 'Food & Beverage': return 'bg-campus-orange';
      case 'Recreation': return 'bg-campus-green';
      case 'Event': return 'bg-gradient-secondary';
      case 'Parking': return 'bg-muted';
      default: return 'bg-muted';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-4">
          Campus Navigation
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Interactive digital map to help you navigate Pillai College of Engineering campus
        </p>
      </div>

      {/* Search and Quick Actions */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input 
            placeholder="Search for buildings, labs, or facilities..." 
            className="pl-10"
          />
        </div>
        <Button variant="campus">
          <Navigation className="w-4 h-4 mr-2" />
          Get Directions
        </Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Interactive Map */}
        <div className="lg:col-span-2">
          <Card className="bg-gradient-card border-0 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                Campus Map
              </CardTitle>
              <CardDescription>
                Click on any location marker to view details
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative bg-gradient-to-br from-campus-blue/10 to-campus-green/10 rounded-lg h-96 overflow-hidden">
                {/* Map Background */}
                <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
                
                {/* Location Markers */}
                {locations.map((location) => (
                  <div
                    key={location.id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                    style={{
                      left: `${location.coordinates.x}%`,
                      top: `${location.coordinates.y}%`
                    }}
                  >
                    <div className={`w-8 h-8 ${getTypeColor(location.type)} rounded-full flex items-center justify-center shadow-floating group-hover:scale-110 transition-bounce`}>
                      <location.icon className="w-4 h-4 text-white" />
                    </div>
                    
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-card border border-border rounded-lg p-2 shadow-card min-w-max">
                        <div className="text-sm font-medium">{location.name}</div>
                        <div className="text-xs text-muted-foreground">{location.type}</div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Map Legend */}
                <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur rounded-lg p-3 shadow-card">
                  <div className="text-sm font-medium mb-2">Legend</div>
                  <div className="space-y-1 text-xs">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-campus-blue rounded-full"></div>
                      <span>Academic</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-campus-orange rounded-full"></div>
                      <span>Food & Beverage</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-campus-green rounded-full"></div>
                      <span>Recreation</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Locations List */}
        <div className="space-y-6">
          <Card className="bg-gradient-card border-0 shadow-card">
            <CardHeader>
              <CardTitle>Quick Navigation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" size="sm" className="justify-start">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Library
                </Button>
                <Button variant="outline" size="sm" className="justify-start">
                  <Utensils className="w-4 h-4 mr-2" />
                  Cafeteria
                </Button>
                <Button variant="outline" size="sm" className="justify-start">
                  <Building className="w-4 h-4 mr-2" />
                  Admin
                </Button>
                <Button variant="outline" size="sm" className="justify-start">
                  <Car className="w-4 h-4 mr-2" />
                  Parking
                </Button>
              </div>
            </CardContent>
          </Card>

          <div>
            <h3 className="text-lg font-semibold mb-4">All Locations</h3>
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {locations.map((location) => (
                <Card key={location.id} className="group hover:shadow-card transition-smooth cursor-pointer bg-card/50 border-0">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className={`w-8 h-8 ${getTypeColor(location.type)} rounded-lg flex items-center justify-center shadow-primary flex-shrink-0`}>
                        <location.icon className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm group-hover:text-primary transition-smooth">
                          {location.name}
                        </h4>
                        <p className="text-xs text-muted-foreground mb-2">
                          {location.description}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {location.amenities.slice(0, 2).map((amenity, index) => (
                            <Badge key={index} variant="outline" className="text-xs bg-accent/50">
                              {amenity}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Info */}
      <div className="mt-12">
        <Card className="bg-gradient-card border-0 shadow-card">
          <CardHeader>
            <CardTitle>Emergency Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Security Office</h4>
                <p className="text-muted-foreground">Main Gate, 24/7 available</p>
                <p className="font-medium text-campus-blue">+91 98765 43210</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Medical Center</h4>
                <p className="text-muted-foreground">Near Administrative Building</p>
                <p className="font-medium text-campus-green">+91 98765 43211</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Emergency Services</h4>
                <p className="text-muted-foreground">Fire, Police, Ambulance</p>
                <p className="font-medium text-campus-orange">Emergency: 112</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CampusMap;