import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import PKT from '../../assets/PKT.jpeg';
import KT from '../../assets/KT.jpeg';
import DrAK from '../../assets/DrAK.jpeg';
import DrAnuj from '../../assets/DrAnuj.jpeg';
import DrVT from '../../assets/DrVT.jpeg';
import KS from '../../assets/KS.jpeg';
import ST from '../../assets/ST.jpeg';
import AshishT from '../../assets/AshishT.jpeg';
import ATF from '../../assets/ATF.jpeg';
import BK from '../../assets/BK.jpeg';
import AT from '../../assets/AT.jpeg';
import DrAT from '../../assets/DrAT.jpeg';
import STAGM from '../../assets/STAGM.jpeg';

export function ProudAchieversSection() {
  const achievers = [
    {
      name: "Parveen Kumar Tyagi",
      achievement: "Director & Founder",
      description: "2i Solutions, a leading IT services company.(CANADA)",
      image: PKT,
    },
    {
      name: "Kapil Tyagi",
      achievement: "Director",
      description: "Niwan times (INDIA)",
      image: KT,
    },
    {
      name: "Kuldeep Sharma",
      achievement: "Software Architect",
      description: "Accenture services pvt ltd. Gurgaon haryana (INDIA)",
      image: KS,
    },
    {
      name: "Amit Tyagi",
      achievement: "Technical Lead",
      description: "Netwest Group",
      image: AT,
    },
    {
      name: "Dr Anurag Tyagi",
      achievement: "Medical Superintendent",
      description: "Department of Medical Health and Family Welfare, Govt. of Uttar Pradesh",
      image: DrAT,
    },
    {
      name: "Ashish Tyagi",
      achievement: "Lead Software Engineer",
      description: "Cognizant Technology Solutions Pvt Ltd",
      image: AshishT,
    },
    {
      name: "Sachin Tyagi",
      achievement: "AGM-HR",
      description: "Vatika Group of Institutions, Gurgaon",
      image: ST,
    },
    {
      name: "Dr Amit Kumar",
      achievement: "(Ph.D, FIAES) Scientist",
      description: "Joint Director, Ministry of Textile, Government of India",
      image: DrAK,
    },
    {
      name: "Dr Anuj Tyagi",
      achievement: "Associate Professor & HOD",
      description: "Rani Lakshmi Bai Central Agricultural University, Jhansi",
      image: DrAnuj,
    },
    {
      name: "Dr Vivek Tyagi",
      achievement: "MBBS, MD(Anaesthesiology)",
      description: "LLRM Medical College, Meerut",
      image: DrVT,
    },
    {
      name: "Babil Kumar",
      achievement: "Station Superintendent",
      description: "Indian Railways",
      image: BK,
    },
    {
      name: "Abhishek Tyagi",
      achievement: "Principal Architect",
      description: "Flipkart India Pvt Ltd",
      image: ATF,
    },
    {
      name: "Sharvan Tyagi",
      achievement: "AGM",
      description: "Plastic Omnium Auto Industries",
      image: STAGM,
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
      count: "54+",
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
              <Card key={index} className="hover:shadow-lg transition-shadow flex flex-col items-center p-4">
                <ImageWithFallback
                  src={achiever.image || "https://images.unsplash.com/photo-1660795468951-0b37051eb1b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwdG9wcGVyJTIwYWNoaWV2ZW1lbnR8ZW58MXx8fHwxNzU3MTM1OTE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"}
                  alt={achiever.name}
                  className="w-20 h-20 min-w-20 min-h-20 max-w-20 max-h-20 rounded-full object-cover border-2 border-primary bg-white mb-3 mx-auto"
                  style={{ aspectRatio: '1 / 1' }}
                />
                <CardTitle className="text-base text-center mb-1">{achiever.name}</CardTitle>
                <h4 className="mb-2 text-primary text-center font-semibold text-sm">{achiever.achievement}</h4>
                <p className="text-xs text-muted-foreground text-center">
                  {achiever.description}
                </p>
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