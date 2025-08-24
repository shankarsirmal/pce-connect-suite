import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { MessageSquare, ThumbsUp, Search, Plus, Clock, User } from 'lucide-react';

const Forum = () => {
  const categories = [
    { name: 'General Discussion', posts: 45, color: 'bg-campus-blue' },
    { name: 'Academic Help', posts: 32, color: 'bg-campus-green' },
    { name: 'Project Collaboration', posts: 28, color: 'bg-campus-purple' },
    { name: 'Campus Life', posts: 19, color: 'bg-campus-orange' },
  ];

  const recentPosts = [
    {
      id: 1,
      title: "Looking for teammates for CodeVita 2024",
      content: "Hi everyone! I'm looking for 2-3 teammates for the upcoming CodeVita competition. I have experience in C++ and Python...",
      author: "Ravi Kumar",
      category: "Project Collaboration",
      replies: 12,
      likes: 8,
      timeAgo: "2 hours ago",
      isResolved: false
    },
    {
      id: 2,
      title: "Best study spots on campus?",
      content: "Can anyone recommend quiet places to study on campus? The library gets too crowded during exam season.",
      author: "Shreya Patel",
      category: "Campus Life",
      replies: 18,
      likes: 15,
      timeAgo: "4 hours ago",
      isResolved: true
    },
    {
      id: 3,
      title: "Help with Digital Signal Processing assignment",
      content: "I'm struggling with the DSP assignment on filter design. Can someone explain the concept of FIR filters?",
      author: "Amit Singh",
      category: "Academic Help",
      replies: 6,
      likes: 4,
      timeAgo: "6 hours ago",
      isResolved: false
    },
    {
      id: 4,
      title: "Alegria 2024 - Volunteer opportunities",
      content: "The organizing committee is looking for volunteers for Alegria 2024. Great way to get involved and meet new people!",
      author: "Priya Sharma",
      category: "General Discussion",
      replies: 23,
      likes: 31,
      timeAgo: "8 hours ago",
      isResolved: false
    }
  ];

  const getCategoryColor = (category: string) => {
    const cat = categories.find(c => c.name === category);
    return cat ? cat.color : 'bg-muted';
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-4">
          Discussion Forum
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Connect with your peers, ask questions, and share knowledge
        </p>
      </div>

      {/* Search and Create Post */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input 
            placeholder="Search discussions..." 
            className="pl-10"
          />
        </div>
        <Button variant="campus" className="md:w-auto">
          <Plus className="w-4 h-4 mr-2" />
          Create Post
        </Button>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {categories.map((category, index) => (
          <Card key={index} className="group hover:shadow-card transition-smooth cursor-pointer bg-gradient-card border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <div className={`w-10 h-10 ${category.color} rounded-lg flex items-center justify-center shadow-primary`}>
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <Badge variant="secondary">{category.posts}</Badge>
              </div>
              <h3 className="font-semibold group-hover:text-primary transition-smooth">
                {category.name}
              </h3>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Posts */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Recent Discussions</h2>
        {recentPosts.map((post) => (
          <Card key={post.id} className="group hover:shadow-card transition-smooth cursor-pointer bg-gradient-card border-0">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <CardTitle className="text-lg group-hover:text-primary transition-smooth">
                      {post.title}
                    </CardTitle>
                    {post.isResolved && (
                      <Badge variant="outline" className="bg-campus-green text-white border-0">
                        Resolved
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.timeAgo}
                    </div>
                    <Badge className={`${getCategoryColor(post.category)} text-white border-0`}>
                      {post.category}
                    </Badge>
                  </div>
                </div>
              </div>
              <CardDescription className="text-sm leading-relaxed">
                {post.content}
              </CardDescription>
            </CardHeader>

            <CardContent className="pt-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                    <MessageSquare className="w-4 h-4 mr-1" />
                    {post.replies} Replies
                  </Button>
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                    <ThumbsUp className="w-4 h-4 mr-1" />
                    {post.likes} Likes
                  </Button>
                </div>
                <Button variant="outline" size="sm">
                  View Discussion
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Guidelines */}
      <div className="mt-12">
        <Card className="bg-gradient-card border-0 shadow-card">
          <CardHeader>
            <CardTitle>Community Guidelines</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Be Respectful</h4>
                <p>Treat all community members with respect and kindness.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Stay On Topic</h4>
                <p>Keep discussions relevant to the category and campus life.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Help Others</h4>
                <p>Share your knowledge and help fellow students succeed.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">No Spam</h4>
                <p>Avoid repetitive posts and irrelevant content.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Forum;