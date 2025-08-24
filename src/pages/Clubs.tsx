import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Crown, Tag, ExternalLink } from 'lucide-react';

const Clubs = () => {
  const clubs = [
    {
      id: 1,
      name: "Hyperion Racing",
      description: "Formula Student racing team designing and building race cars for international competition, fostering hands-on engineering learning.",
      leader: "Arjun Patel",
      members: 45,
      type: "Technical",
      tags: ["Racing", "Engineering", "Innovation"],
      established: "2018"
    },
    {
      id: 2,
      name: "GDG-PCE",
      description: "Google Developers Group - A student-led tech community facilitating workshops and collaborations with Google-backed technologies.",
      leader: "Priya Sharma",
      members: 120,
      type: "Technical", 
      tags: ["AI", "Cloud", "Android", "Development"],
      established: "2019"
    },
    {
      id: 3,
      name: "Society of Women Engineers",
      description: "Empowering women engineers through leadership programs, networking, and representation in global SWE community.",
      leader: "Sneha Reddy",
      members: 85,
      type: "Professional",
      tags: ["Leadership", "Networking", "Empowerment"],
      established: "2020"
    },
    {
      id: 4,
      name: "Nature Club",
      description: "Organizes environmental initiatives such as poster competitions, awareness drives, and idea campaigns to promote sustainability.",
      leader: "Rahul Kumar",
      members: 60,
      type: "Social",
      tags: ["Environment", "Sustainability", "Awareness"],
      established: "2017"
    },
    {
      id: 5,
      name: "NSS - PCE Chapter",
      description: "National Service Scheme engaging students in community service and social welfare activities sponsored by government youth programs.",
      leader: "Anita Singh",
      members: 200,
      type: "Social",
      tags: ["Community Service", "Social Work", "Volunteering"],
      established: "2015"
    },
    {
      id: 6,
      name: "Spark Racing",
      description: "Automotive team focusing on technical innovation and motorsports with emphasis on electric vehicle development.",
      leader: "Vikash Jain",
      members: 35,
      type: "Technical",
      tags: ["Electric Vehicles", "Innovation", "Motorsports"],
      established: "2021"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Technical': return 'bg-campus-blue text-white';
      case 'Professional': return 'bg-campus-purple text-white';
      case 'Social': return 'bg-campus-green text-white';
      case 'Arts': return 'bg-campus-orange text-white';
      default: return 'bg-muted';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-4">
          Student Clubs & Societies
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Join vibrant communities and explore your interests with fellow students at PCE
        </p>
      </div>

      {/* Filter Section */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {['All', 'Technical', 'Professional', 'Social', 'Arts'].map((filter) => (
          <Button key={filter} variant="outline" size="sm">
            {filter}
          </Button>
        ))}
      </div>

      {/* Clubs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {clubs.map((club) => (
          <Card key={club.id} className="group hover:shadow-floating transition-smooth cursor-pointer bg-gradient-card border-0">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between mb-3">
                <Badge className={`${getTypeColor(club.type)} border-0`}>
                  {club.type}
                </Badge>
                <div className="text-xs text-muted-foreground">
                  Est. {club.established}
                </div>
              </div>
              <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                {club.name}
              </CardTitle>
              <CardDescription className="text-sm">
                {club.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-sm">
                  <Crown className="w-4 h-4 text-campus-orange" />
                  <span className="font-medium">Leader:</span>
                  <span className="text-muted-foreground">{club.leader}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Users className="w-4 h-4 text-campus-blue" />
                  <span className="font-medium">{club.members} Members</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1">
                {club.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="text-xs bg-accent/50">
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex space-x-2 pt-4">
                <Button 
                  size="sm" 
                  className="flex-1"
                  variant="campus"
                >
                  Join Club
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
          <h2 className="text-2xl font-bold mb-4">Start Your Own Club</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Have a passion or interest you'd like to share? Create a new club and build a community around your ideas.
          </p>
          <Button variant="hero" size="lg">
            Register New Club
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Clubs;