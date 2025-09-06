import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";

export function ToppersSection() {
  const toppers = [
    {
      name: "Aarav Sharma",
      achievement: "Board Topper 2024",
      percentage: "98.2%",
      stream: "Science (PCM)",
      college: "IIT Delhi",
      description: "Exceptional performance in Physics, Chemistry, and Mathematics. Cracked JEE Advanced with AIR 45."
    },
    {
      name: "Priya Patel", 
      achievement: "District Topper",
      percentage: "97.8%",
      stream: "Science (PCB)",
      college: "AIIMS Delhi",
      description: "Outstanding results in Biology stream. Qualified NEET with excellent ranking for medical admission."
    },
    {
      name: "Rahul Kumar",
      achievement: "School Topper",
      percentage: "96.5%",
      stream: "Commerce",
      college: "Delhi University",
      description: "Excellence in Accountancy and Business Studies. Pursuing B.Com Honors at Shri Ram College."
    },
    {
      name: "Sneha Reddy",
      achievement: "Merit Holder",
      percentage: "95.8%",
      stream: "Science (PCM)",
      college: "NIT Warangal",
      description: "Strong performance in Mathematics and Physics. Selected for Computer Science Engineering."
    },
    {
      name: "Vikram Singh",
      achievement: "Academic Excellence",
      percentage: "94.2%",
      stream: "Arts",
      college: "JNU Delhi",
      description: "Outstanding performance in Humanities subjects. Pursuing Political Science Honors."
    },
    {
      name: "Ananya Gupta",
      achievement: "Science Topper",
      percentage: "93.8%",
      stream: "Science (PCB)",
      college: "BHU Varanasi",
      description: "Excellent results in Biology. Selected for Biotechnology program at prestigious university."
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl mb-6">Board Examination Toppers</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Celebrating our outstanding students who achieved remarkable results in Class 12 
            board examinations and secured admissions in prestigious colleges.
          </p>
        </div>

        <div className="relative mb-16">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1653250198948-1405af521dbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkdWF0aW9uJTIwc3R1ZGVudHMlMjBjZWxlYnJhdGluZ3xlbnwxfHx8fDE3NTcwODExMjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Graduation Celebration"
            className="w-full h-64 md:h-96 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center">
            <h2 className="text-white text-2xl md:text-4xl text-center">
              Class 12 Results Celebration 2024
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {toppers.map((topper, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="mb-4">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1660795468951-0b37051eb1b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwdG9wcGVyJTIwYWNoaWV2ZW1lbnR8ZW58MXx8fHwxNzU3MTM1OTE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt={topper.name}
                      className="w-20 h-20 rounded-full mx-auto object-cover"
                    />
                  </div>
                  <h3 className="text-xl mb-2">{topper.name}</h3>
                  <Badge variant="secondary" className="mb-2">{topper.achievement}</Badge>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Percentage:</span>
                    <span className="font-medium">{topper.percentage}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Stream:</span>
                    <span className="font-medium">{topper.stream}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>College:</span>
                    <span className="font-medium text-primary">{topper.college}</span>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mt-4">
                  {topper.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-muted rounded-lg p-8">
          <h2 className="text-3xl text-center mb-8">Academic Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <h3 className="text-2xl text-primary mb-2">8+</h3>
              <p>District Rank Holders</p>
            </div>
            <div>
              <h3 className="text-2xl text-primary mb-2">25+</h3>
              <p>90+ Percentage Achievers</p>
            </div>
            <div>
              <h3 className="text-2xl text-primary mb-2">15+</h3>
              <p>IIT/NEET Qualifiers</p>
            </div>
            <div>
              <h3 className="text-2xl text-primary mb-2">100%</h3>
              <p>College Admissions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}