import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import bannerImage from '../../assets/banner.png';
import vinodTyagiImg from '../../assets/vinodTyagi.jpeg';
import gauravTyagiImg from '../../assets/Gaurav.jpeg';
import naveenJiImg from '../../assets/NaveenJi.jpg';

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
                <h3 className="text-3xl mb-2 text-primary">54+</h3>
                <p>Years of Excellence</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-3xl mb-2 text-primary">10000+</h3>
                <p>Students passed</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-3xl mb-2 text-primary">15+</h3>
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

      {/* Leadership Messages */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-center mb-12">Message from Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Chairman Message */}
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="mb-4">
                  <ImageWithFallback
                    src={vinodTyagiImg}
                    alt="Chairman"
                    className="w-24 h-24 rounded-full mx-auto object-cover"
                  />
                </div>
                <h3 className="text-xl mb-2">Chairman's Message</h3>
                <h4 className="text-primary mb-3">Dr Vinod Kumar Tyagi</h4>
                <p className="text-sm text-muted-foreground">
                  "Our vision at Rajkumar Janta Inter College is to cultivate well-rounded leaders. We believe a rigorous academic foundation must be balanced with physical activity, as sports are fundamental to building character, resilience, and a spirit of teamwork.

                  To this end, we have developed excellent sports facilities and foster a culture that encourages participation. We are proud when our students achieve high marks in their examinations, and equally proud when they demonstrate their talents on the field, preparing them for success in all aspects of life."
                </p>
              </CardContent>
            </Card>

            {/* Principal Message */}
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="mb-4">
                  <ImageWithFallback
                    src={gauravTyagiImg}
                    alt="Principal"
                    className="w-24 h-24 rounded-full mx-auto object-cover"
                  />
                </div>
                <h3 className="text-xl mb-2">Principal's Message</h3>
                <h4 className="text-primary mb-3">Gaurav Tyagi</h4>
                <p className="text-sm text-muted-foreground">
                  "At Rajkumar Janta Inter College, we operate as a dedicated family, singularly focused on the success of our students. Our educational philosophy is built on two key pillars: empowering our highly-trained faculty to embrace innovative teaching methods, and ensuring a supportive, encouraging environment for all.
                  By constantly evolving our approach, we keep the learning process fresh and effective. We take great pride in seeing our students thrive, fully prepared for their board exams and future pursuits. While we are proud of our achievements, we are always striving to reach new heights.
                  I welcome you to our college and wish you the very best."
                </p>
              </CardContent>
            </Card>

            {/* Manager Message */}
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="mb-4">
                  <ImageWithFallback
                    src={naveenJiImg}
                    alt="Manager"
                    className="w-24 h-24 rounded-full mx-auto object-cover"
                  />
                </div>
                <h3 className="text-xl mb-2">Manager's Message</h3>
                <h4 className="text-primary mb-3">Naveen Kumar Tyagi</h4>
                <p className="text-sm text-muted-foreground">
                  "At Rajkumar Janta Inter College, we believe that meaningful learning extends beyond the classroom. Our primary role is to provide students with practical platforms and exposure that build real-world confidence.
We are committed to offering opportunities on par with those found in any major city. Through a rich calendar of co-curricular activities, competitions, and events, we encourage students to step forward, overcome hesitation, and hone their skills. Our team works to ensure every student, regardless of their interests, is prepared to face future challenges with competence and self-assurance. We are confident our students are well-equipped to make their mark."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-muted">
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