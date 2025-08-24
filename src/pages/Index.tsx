import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, MessageSquare, Search, MapPin, ArrowRight, Star, Trophy, Zap } from 'lucide-react';
import campusHero from '@/assets/campus-hero.jpg';

const Index = () => {
  const quickActions = [
    { to: '/events', label: 'Upcoming Events', icon: Calendar, count: '12+', color: 'bg-campus-blue' },
    { to: '/clubs', label: 'Active Clubs', icon: Users, count: '25+', color: 'bg-campus-green' },
    { to: '/forum', label: 'Forum Posts', icon: MessageSquare, count: '150+', color: 'bg-campus-purple' },
    { to: '/lost-found', label: 'Lost Items', icon: Search, count: '8', color: 'bg-campus-orange' },
  ];

  const featuredEvents = [
    {
      title: "Alegria 2024",
      date: "Feb 1-7",
      type: "Festival",
      participants: "50K+ Students"
    },
    {
      title: "CodeVita Season 9", 
      date: "Apr 20",
      type: "Competition",
      participants: "500+ Coders"
    },
    {
      title: "Maker's Day",
      date: "Mar 15", 
      type: "Workshop",
      participants: "2K+ Innovators"
    }
  ];

  const topClubs = [
    {
      name: "Hyperion Racing",
      type: "Technical",
      members: 45
    },
    {
      name: "GDG-PCE",
      type: "Technical", 
      members: 120
    },
    {
      name: "NSS PCE",
      type: "Social",
      members: 200
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${campusHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero bg-opacity-80"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-24 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-campus-orange to-yellow-300 bg-clip-text text-transparent">
                Campus Connect
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Your central hub for everything at Pillai College of Engineering. 
              Connect, explore, and engage with campus life like never before.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/events">
                  Explore Events
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary">
                <Link to="/clubs">Join Clubs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Quick Access</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <Link key={index} to={action.to}>
                <Card className="group hover:shadow-floating transition-smooth cursor-pointer bg-gradient-card border-0">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center shadow-primary`}>
                        <action.icon className="w-6 h-6 text-white" />
                      </div>
                      <Badge variant="secondary" className="text-lg font-bold">
                        {action.count}
                      </Badge>
                    </div>
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-smooth">
                      {action.label}
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Featured Events */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold">Featured Events</h2>
                <Button variant="outline" asChild>
                  <Link to="/events">View All</Link>
                </Button>
              </div>
              <div className="space-y-4">
                {featuredEvents.map((event, index) => (
                  <Card key={index} className="group hover:shadow-card transition-smooth bg-gradient-card border-0">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="font-semibold text-lg group-hover:text-primary transition-smooth">
                              {event.title}
                            </h3>
                            <Badge variant="outline" className="bg-campus-blue text-white border-0">
                              {event.type}
                            </Badge>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <span className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {event.date}
                            </span>
                            <span className="flex items-center">
                              <Users className="w-4 h-4 mr-1" />
                              {event.participants}
                            </span>
                          </div>
                        </div>
                        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-smooth" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Top Clubs */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold">Top Clubs</h2>
                <Button variant="outline" asChild>
                  <Link to="/clubs">View All</Link>
                </Button>
              </div>
              <div className="space-y-4">
                {topClubs.map((club, index) => (
                  <Card key={index} className="group hover:shadow-card transition-smooth bg-gradient-card border-0">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="font-semibold text-lg group-hover:text-primary transition-smooth">
                              {club.name}
                            </h3>
                            <Badge variant="outline" className="bg-campus-green text-white border-0">
                              {club.type}
                            </Badge>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Users className="w-4 h-4 mr-1" />
                            {club.members} Members
                          </div>
                        </div>
                        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-smooth" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Campus by Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-primary">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-primary">25+</h3>
              <p className="text-muted-foreground">Active Clubs</p>
            </div>
            <div className="space-y-2">
              <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4 shadow-secondary">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-campus-orange">100+</h3>
              <p className="text-muted-foreground">Annual Events</p>
            </div>
            <div className="space-y-2">
              <div className="w-16 h-16 bg-campus-purple rounded-full flex items-center justify-center mx-auto mb-4 shadow-floating">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-campus-purple">5000+</h3>
              <p className="text-muted-foreground">Active Students</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
