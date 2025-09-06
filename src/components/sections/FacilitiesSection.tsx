import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export function FacilitiesSection() {
  const facilities = [
    {
      title: "Modern Library",
      image: "https://images.unsplash.com/photo-1674653760708-f521366e5cde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsaWJyYXJ5JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU3MDUyNzA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Well-stocked library with over 5,000 books, reference materials, and study spaces for students.",
      features: ["Textbooks & References", "Study Hall", "Newspapers & Magazines", "Exam Preparation Material"]
    },
    {
      title: "Advanced Laboratories",
      image: "https://images.unsplash.com/photo-1582273953509-3972288b909e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwbGFib3JhdG9yeSUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NTcwODExMjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Well-equipped science laboratories for Physics, Chemistry, and Biology practical sessions.",
      features: ["Physics Lab Equipment", "Chemistry Lab Setup", "Biology Specimens", "Safety Equipment"]
    },
    {
      title: "Sports Complex",
      image: "https://images.unsplash.com/photo-1754878206374-f78eac63ff29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwc3BvcnRzJTIwZmFjaWxpdGllc3xlbnwxfHx8fDE3NTcwODExMzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Sports facilities promoting physical fitness and healthy competition among students.",
      features: ["Playground", "Indoor Games", "Sports Equipment", "Annual Sports Meet"]
    }
  ];

  const additionalFacilities = [
    {
      title: "Modern Classrooms",
      description: "Well-ventilated classrooms with proper seating and teaching aids.",
      icon: "📚"
    },
    {
      title: "Wi-Fi Campus",
      description: "High-speed internet connectivity throughout the campus for seamless learning.",
      icon: "📶"
    },
    {
      title: "Cafeteria",
      description: "Spacious dining facility serving nutritious and hygienic meals.",
      icon: "🍽️"
    },
    {
      title: "Medical Center",
      description: "On-campus healthcare facility with qualified medical professionals.",
      icon: "⚕️"
    },
    {
      title: "Assembly Hall",
      description: "Multi-purpose hall for morning assembly, events, and cultural programs.",
      icon: "🎭"
    },
    {
      title: "Parking",
      description: "Secure parking facilities for students, faculty, and visitors.",
      icon: "🚗"
    },
    {
      title: "Hostel",
      description: "Comfortable accommodation with modern amenities for outstation students.",
      icon: "🏠"
    },
    {
      title: "Transport",
      description: "College bus service connecting major areas of the city.",
      icon: "🚌"
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl mb-6">World-Class Facilities</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Our campus is designed to provide students with the best possible environment 
            for learning, research, and personal development.
          </p>
        </div>

        {/* Main Facilities */}
        <div className="space-y-16 mb-16">
          {facilities.map((facility, index) => (
            <div 
              key={index} 
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <h2 className="text-3xl mb-4">{facility.title}</h2>
                <p className="text-lg mb-6">{facility.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {facility.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <ImageWithFallback
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Additional Facilities Grid */}
        <div className="mb-16">
          <h2 className="text-3xl text-center mb-12">Additional Campus Amenities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFacilities.map((facility, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-4xl mb-2">{facility.icon}</div>
                  <CardTitle className="text-lg">{facility.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {facility.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Infrastructure Stats */}
        <div className="bg-muted rounded-lg p-8">
          <h2 className="text-3xl text-center mb-8">Campus Infrastructure</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <h3 className="text-2xl text-primary mb-2">20+</h3>
              <p>Classrooms & Labs</p>
            </div>
            <div>
              <h3 className="text-2xl text-primary mb-2">2</h3>
              <p>Acres Campus</p>
            </div>
            <div>
              <h3 className="text-2xl text-primary mb-2">800+</h3>
              <p>Student Capacity</p>
            </div>
            <div>
              <h3 className="text-2xl text-primary mb-2">Safe</h3>
              <p>Learning Environment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}