import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users, ExternalLink } from 'lucide-react';

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Alegria – The Festival of Joy",
      description: "PCE's flagship cultural fest featuring Bollywood performances, live music, creative competitions, and workshops.",
      date: "February 1-7, 2024",
      location: "PCE Campus",
      attendees: "50,000+ Students",
      type: "Festival",
      status: "Upcoming",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Maker's Day",
      description: "Annual celebration of innovation and creativity where students showcase technical projects and prototypes.",
      date: "March 15, 2024",
      location: "Engineering Block",
      attendees: "2,000+ Students",
      type: "Workshop",
      status: "Registration Open",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "CodeVita Season 9",
      description: "National-level coding contest organized in partnership with TCS, conducted on campus as one of five nodal centers in India.",
      date: "April 20, 2024",
      location: "Computer Lab A",
      attendees: "500+ Participants",
      type: "Competition",
      status: "Registration Open",
      image: "/placeholder.svg"
    },
    {
      id: 4,
      title: "Resume Building Workshop",
      description: "Expert webinar for placement preparedness including 'The Interview' sessions and professional development.",
      date: "February 28, 2024",
      location: "Auditorium",
      attendees: "300+ Students",
      type: "Seminar",
      status: "Upcoming",
      image: "/placeholder.svg"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Festival': return 'bg-gradient-secondary';
      case 'Workshop': return 'bg-campus-green';
      case 'Competition': return 'bg-campus-purple';
      case 'Seminar': return 'bg-primary';
      default: return 'bg-muted';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Registration Open': return 'bg-campus-green text-white';
      case 'Upcoming': return 'bg-campus-blue text-white';
      case 'Live': return 'bg-campus-orange text-white';
      default: return 'bg-muted';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-4">
          Campus Events
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover exciting events, workshops, and competitions happening at Pillai College of Engineering
        </p>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <Card key={event.id} className="group hover:shadow-floating transition-smooth cursor-pointer bg-gradient-card border-0">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between mb-3">
                <Badge className={`${getTypeColor(event.type)} text-white border-0`}>
                  {event.type}
                </Badge>
                <Badge variant="outline" className={getStatusColor(event.status)}>
                  {event.status}
                </Badge>
              </div>
              <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                {event.title}
              </CardTitle>
              <CardDescription className="text-sm">
                {event.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Users className="w-4 h-4" />
                  <span>{event.attendees}</span>
                </div>
              </div>

              <div className="flex space-x-2 pt-4">
                <Button 
                  size="sm" 
                  className="flex-1"
                  variant="campus"
                >
                  Register Now
                </Button>
                <Button 
                  size="sm" 
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <div className="bg-gradient-card rounded-2xl p-8 shadow-card">
          <h2 className="text-2xl font-bold mb-4">Host Your Own Event</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Have an idea for a workshop, seminar, or competition? Submit your event proposal and bring your vision to life on campus.
          </p>
          <Button variant="hero" size="lg">
            Submit Event Proposal
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Events;