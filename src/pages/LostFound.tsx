import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search, Plus, MapPin, Clock, Tag, Filter } from 'lucide-react';

const LostFound = () => {
  const items = [
    {
      id: 1,
      type: 'lost',
      title: 'Black iPhone 13 Pro',
      description: 'Lost my black iPhone 13 Pro with a clear case. Has a small crack on the screen. Last seen near the library.',
      location: 'Main Library',
      reportedBy: 'Anuj Sharma',
      timeAgo: '2 hours ago',
      status: 'active',
      category: 'Electronics'
    },
    {
      id: 2,
      type: 'found',
      title: 'Blue Adidas Backpack',
      description: 'Found a blue Adidas backpack in the computer lab. Contains some notebooks and a water bottle.',
      location: 'Computer Lab B',
      reportedBy: 'Meera Joshi',
      timeAgo: '4 hours ago',
      status: 'active',
      category: 'Bags'
    },
    {
      id: 3,
      type: 'lost',
      title: 'Silver Casio Watch',
      description: 'Lost my silver Casio digital watch during sports practice. Has sentimental value.',
      location: 'Sports Complex',
      reportedBy: 'Rohit Kumar',
      timeAgo: '1 day ago',
      status: 'active',
      category: 'Accessories'
    },
    {
      id: 4,
      type: 'found',
      title: 'Set of Keys with Keychain',
      description: 'Found a set of keys with a red keychain near the cafeteria. Looks like room keys.',
      location: 'Cafeteria',
      reportedBy: 'Priya Reddy',
      timeAgo: '1 day ago',
      status: 'claimed',
      category: 'Keys'
    },
    {
      id: 5,
      type: 'lost',
      title: 'Red Notebook - Engineering Mathematics',
      description: 'Lost my red notebook with all my Engineering Mathematics notes. Need it urgently for exams.',
      location: 'Classroom 301',
      reportedBy: 'Vikash Singh',
      timeAgo: '2 days ago',
      status: 'active',
      category: 'Books'
    },
    {
      id: 6,
      type: 'found',
      title: 'Prescription Glasses',
      description: 'Found prescription glasses with thick black frames in the auditorium after the seminar.',
      location: 'Main Auditorium',
      reportedBy: 'Sneha Gupta',
      timeAgo: '3 days ago',
      status: 'active',
      category: 'Accessories'
    }
  ];

  const categories = ['All', 'Electronics', 'Books', 'Bags', 'Accessories', 'Keys', 'Others'];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-campus-green text-white';
      case 'claimed': return 'bg-campus-orange text-white';
      case 'expired': return 'bg-muted text-muted-foreground';
      default: return 'bg-muted';
    }
  };

  const getTypeColor = (type: string) => {
    return type === 'lost' ? 'bg-campus-blue' : 'bg-campus-purple';
  };

  const getCategoryIcon = (category: string) => {
    return <Tag className="w-3 h-3" />;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-4">
          Lost & Found
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Help reunite lost items with their owners and find what you're looking for
        </p>
      </div>

      {/* Search and Actions */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input 
            placeholder="Search for items..." 
            className="pl-10"
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button variant="campus">
            <Plus className="w-4 h-4 mr-2" />
            Report Item
          </Button>
        </div>
      </div>

      {/* Categories Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <Button key={category} variant="outline" size="sm">
            {category}
          </Button>
        ))}
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card className="bg-gradient-card border-0 shadow-card">
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-campus-blue mb-2">42</div>
            <div className="text-sm text-muted-foreground">Items Lost</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card border-0 shadow-card">
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-campus-purple mb-2">28</div>
            <div className="text-sm text-muted-foreground">Items Found</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card border-0 shadow-card">
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-campus-green mb-2">15</div>
            <div className="text-sm text-muted-foreground">Successfully Reunited</div>
          </CardContent>
        </Card>
      </div>

      {/* Items List */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Recent Reports</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item) => (
            <Card key={item.id} className="group hover:shadow-card transition-smooth cursor-pointer bg-gradient-card border-0">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <Badge className={`${getTypeColor(item.type)} text-white border-0 capitalize`}>
                      {item.type}
                    </Badge>
                    <Badge variant="outline" className={getStatusColor(item.status)}>
                      {item.status}
                    </Badge>
                  </div>
                  <Badge variant="outline" className="bg-accent/50">
                    {getCategoryIcon(item.category)}
                    <span className="ml-1">{item.category}</span>
                  </Badge>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-smooth">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {item.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>Reported {item.timeAgo} by {item.reportedBy}</span>
                  </div>
                </div>

                <div className="flex space-x-2 pt-4">
                  <Button 
                    size="sm" 
                    className="flex-1"
                    variant={item.type === 'lost' ? 'default' : 'secondary'}
                  >
                    {item.type === 'lost' ? 'I Found This' : 'This is Mine'}
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    Contact
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* How it Works */}
      <div className="mt-12">
        <Card className="bg-gradient-card border-0 shadow-card">
          <CardHeader>
            <CardTitle>How Lost & Found Works</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-campus-blue rounded-full flex items-center justify-center mx-auto mb-4 shadow-primary">
                  <Plus className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Report an Item</h3>
                <p className="text-sm text-muted-foreground">
                  Lost something? Found something? Report it with details and location.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-campus-purple rounded-full flex items-center justify-center mx-auto mb-4 shadow-primary">
                  <Search className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Search & Match</h3>
                <p className="text-sm text-muted-foreground">
                  Browse through reports and find matches for lost or found items.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-campus-green rounded-full flex items-center justify-center mx-auto mb-4 shadow-primary">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Reunite Safely</h3>
                <p className="text-sm text-muted-foreground">
                  Contact each other safely through the platform to arrange pickup.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LostFound;