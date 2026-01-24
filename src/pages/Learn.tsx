import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { ConceptCard } from '@/components/ConceptCard';
import { WellnessQuiz } from '@/components/WellnessQuiz';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { brandStory, coreValues, qualityPromises, wellnessConcepts } from '@/data/brand';
import { Leaf, BookOpen, Globe, Eye, FlaskConical, Heart, Sparkles, GraduationCap } from 'lucide-react';
import logo from '@/assets/logo.jpeg';

const iconMap: Record<string, React.ElementType> = {
  Leaf,
  BookOpen,
  Globe,
  Eye,
  FlaskConical,
  Heart,
};

const Learn = () => {
  const [activeTab, setActiveTab] = useState('concepts');

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container px-4 md:px-6">
          <div className="flex items-center gap-6 mb-8">
            <img
              src={logo}
              alt="Earthy Concepts"
              className="h-16 w-auto object-contain"
            />
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">Learn & Discover</h1>
              <p className="text-muted-foreground mt-1">
                Explore wellness concepts and find products tailored to your needs
              </p>
            </div>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-3 mb-8">
              <TabsTrigger value="concepts" className="gap-2">
                <Sparkles className="h-4 w-4" />
                Concepts
              </TabsTrigger>
              <TabsTrigger value="quiz" className="gap-2">
                <GraduationCap className="h-4 w-4" />
                Quiz
              </TabsTrigger>
              <TabsTrigger value="philosophy" className="gap-2">
                <BookOpen className="h-4 w-4" />
                Philosophy
              </TabsTrigger>
            </TabsList>

            {/* Wellness Concepts Tab */}
            <TabsContent value="concepts" className="space-y-8">
              <div className="text-center max-w-2xl mx-auto mb-8">
                <h2 className="text-2xl font-bold mb-3">Wellness Concepts</h2>
                <p className="text-muted-foreground">
                  Explore our curated wellness categories to find products that align with your health goals.
                  Each concept brings together carefully selected herbs and formulations.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {wellnessConcepts.map((concept) => (
                  <ConceptCard key={concept.id} concept={concept} />
                ))}
              </div>
            </TabsContent>

            {/* Wellness Quiz Tab */}
            <TabsContent value="quiz">
              <WellnessQuiz />
            </TabsContent>

            {/* Philosophy Tab */}
            <TabsContent value="philosophy" className="space-y-12">
              {/* Brand Story */}
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl font-bold mb-3">{brandStory.tagline}</h2>
                <p className="text-lg text-primary font-medium mb-4">{brandStory.mission}</p>
                <p className="text-muted-foreground whitespace-pre-line">{brandStory.about}</p>
              </div>

              {/* Core Values */}
              <div>
                <h3 className="text-xl font-bold text-center mb-6">Our Core Values</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {coreValues.map((value) => {
                    const Icon = iconMap[value.icon] || Leaf;
                    return (
                      <div
                        key={value.id}
                        className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all"
                      >
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <h4 className="font-semibold mb-2">{value.title}</h4>
                        <p className="text-sm text-muted-foreground">{value.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Quality Promises */}
              <div className="bg-muted/30 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-center mb-6">Our Quality Promise</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {qualityPromises.map((promise, index) => (
                    <div key={index} className="text-center p-4">
                      <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                        <Leaf className="h-5 w-5 text-primary" />
                      </div>
                      <h5 className="font-medium text-sm mb-1">{promise.title}</h5>
                      <p className="text-xs text-muted-foreground">{promise.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <Button asChild size="lg">
                  <Link to="/products">Explore Our Products</Link>
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <WhatsAppButton variant="floating" />
    </Layout>
  );
};

export default Learn;
