import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import { Dumbbell, Palette, Music, Mountain } from "lucide-react";

const activities = [
  {
    icon: Dumbbell,
    title: "Fitness & Wellness",
    category: "Sports",
    description: "Yoga, CrossFit, Swimming, Martial Arts",
    discount: "Up to 30% off",
  },
  {
    icon: Palette,
    title: "Arts & Crafts",
    category: "Culture",
    description: "Painting, Pottery, Photography, Dance",
    discount: "Special rates",
  },
  {
    icon: Music,
    title: "Performing Arts",
    category: "Culture",
    description: "Music lessons, Theater, Singing workshops",
    discount: "Member exclusive",
  },
  {
    icon: Mountain,
    title: "Outdoor Adventures",
    category: "Sports",
    description: "Hiking, Climbing, Cycling, Team sports",
    discount: "Group discounts",
  },
];

const Activities = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Popular Activities</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our wide range of discounted activities and find your next passion
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity, index) => (
            <Card 
              key={index}
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2"
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center">
                    <activity.icon className="h-6 w-6 text-white" />
                  </div>
                  <Badge variant="secondary">{activity.category}</Badge>
                </div>
                <CardTitle className="text-xl">{activity.title}</CardTitle>
                <CardDescription className="text-sm">
                  {activity.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  {activity.discount}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
