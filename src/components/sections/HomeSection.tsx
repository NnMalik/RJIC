import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import bannerImage from 'figma:asset/76e95507ee100442fb23cd2a31aa28212dbc2b56.png';

export function HomeSection() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src={bannerImage}
            alt="Rajkumar Janta Inter College Students"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl mb-6">
            Welcome to Rajkumar Janta Inter College
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Empowering Students for Higher Education Success
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-gray-100">
            Learn More About Us
          </Button>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-3xl mb-2 text-primary">15+</h3>
                <p>Years of Excellence</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-3xl mb-2 text-primary">2500+</h3>
                <p>Students Graduated</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-3xl mb-2 text-primary">45+</h3>
                <p>Qualified Teachers</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-3xl mb-2 text-primary">95%</h3>
                <p>Board Pass Rate</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-8">Our Mission</h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed">
            At Rajkumar Janta Inter College, we are committed to providing quality intermediate education 
            that prepares students for higher studies and competitive exams. We focus on building strong 
            foundations in Science, Commerce, and Arts streams to help students achieve their academic goals.
          </p>
        </div>
      </section>
    </div>
  );
}