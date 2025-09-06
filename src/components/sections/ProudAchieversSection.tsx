import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";

export function ProudAchieversSection() {
  const achievers = [
    {
      name: "Dr. Rajesh Kumar",
      batch: "Batch of 2018",
      achievement: "MBBS Graduate & Practicing Doctor",
      description: "Cleared NEET from our college, completed MBBS from KGMU and now serving at district hospital.",
      college: "KGMU Lucknow",
      field: "Medical"
    },
    {
      name: "Priya Sharma",
      batch: "Batch of 2019", 
      achievement: "Software Engineer at Infosys",
      description: "Completed B.Tech in Computer Science from NIT and working at leading IT company.",
      college: "NIT Allahabad",
      field: "Engineering"
    },
    {
      name: "Arjun Singh",
      batch: "Batch of 2020",
      achievement: "CA Finalist & Banking Professional",
      description: "Pursuing CA while working at State Bank of India as Probationary Officer.",
      college: "Delhi University",
      field: "Commerce & Finance"
    },
    {
      name: "Sneha Gupta",
      batch: "Batch of 2017",
      achievement: "Civil Services Officer (IAS)",
      description: "Cleared UPSC examination and currently serving as Assistant Collector in administration.",
      college: "JNU Delhi",
      field: "Civil Services"
    },
    {
      name: "Amit Verma",
      batch: "Batch of 2021",
      achievement: "Research Scholar at IIT Delhi",
      description: "Pursuing PhD in Biotechnology after completing M.Sc. from prestigious institution.",
      college: "IIT Delhi",
      field: "Research & Development"
    },
    {
      name: "Kavita Singh",
      batch: "Batch of 2016",
      achievement: "Teacher & Education Leader",
      description: "Completed B.Ed and M.Ed, now serving as Principal at government school.",
      college: "BHU Varanasi",
      field: "Education"
    }
  ];

  const achievements = [
    {
      category: "Higher Education",
      count: "500+",
      description: "Alumni in prestigious colleges"
    },
    {
      category: "Government Jobs",
      count: "50+",
      description: "Clearing competitive exams"
    },
    {
      category: "Professional Success",
      count: "200+",
      description: "Working in reputed companies"
    },
    {
      category: "Continuing Legacy", 
      count: "15+",
      description: "Years of student success"
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl mb-6">Proud Alumni</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Our former students have excelled in various fields after completing their higher education, 
            making us proud of their achievements and success stories.
          </p>
        </div>

        <div className="relative mb-16">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1660795468951-0b37051eb1b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwYWNoaWV2ZW1lbnQlMjBhd2FyZHxlbnwxfHx8fDE3NTcwODExMzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Achievement Awards"
            className="w-full h-64 md:h-96 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center">
            <h2 className="text-white text-2xl md:text-4xl text-center">
              Excellence Recognition Ceremony
            </h2>
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <h3 className="text-3xl text-primary mb-2">{achievement.count}</h3>
                <h4 className="mb-2">{achievement.category}</h4>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Notable Alumni */}
        <div className="mb-16">
          <h2 className="text-3xl text-center mb-12">Notable Alumni</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievers.map((achiever, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center text-white">
                      <span className="text-lg">{achiever.name.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <Badge variant="outline">{achiever.batch}</Badge>
                  </div>
                  <CardTitle className="text-lg">{achiever.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <h4 className="mb-3 text-primary">{achiever.achievement}</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    {achiever.description}
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>College:</span>
                      <span className="font-medium">{achiever.college}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Field:</span>
                      <span className="font-medium">{achiever.field}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Success Stories by Field */}
        <div className="bg-muted rounded-lg p-8">
          <h2 className="text-3xl text-center mb-8">Career Paths</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <h3 className="text-xl mb-3">Medical & Healthcare</h3>
              <p className="text-sm text-muted-foreground">
                MBBS, BDS, BAMS graduates serving in hospitals and clinics across the country
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl mb-3">Engineering</h3>
              <p className="text-sm text-muted-foreground">
                B.Tech graduates working in IT companies, manufacturing, and government sectors
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl mb-3">Civil Services</h3>
              <p className="text-sm text-muted-foreground">
                IAS, IPS, PCS officers serving in administrative and police services
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl mb-3">Banking & Finance</h3>
              <p className="text-sm text-muted-foreground">
                Officers in SBI, PNB, and other banks along with CA and CS professionals
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl mb-3">Education</h3>
              <p className="text-sm text-muted-foreground">
                Teachers, principals, and professors contributing to education sector
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl mb-3">Research & Academia</h3>
              <p className="text-sm text-muted-foreground">
                PhD scholars and researchers in prestigious universities and institutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}