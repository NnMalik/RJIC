import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export function AboutSection() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl mb-6">About Rajkumar Janta Inter College</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Founded in 1971, Rajkumar Janta Inter College has been dedicated to providing excellent
            intermediate education, preparing students for board examinations and higher studies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl mb-6">Our History: Over Five Decades of Educational Excellence</h2>
            <h3>The Founding Vision</h3>
            <p className="mb-4">
              Established in 1971, Rajkumar Janta Inter College was founded with a pioneering vision: to create a beacon of high-quality, accessible intermediate education for students in a rural landscape. Our founders were driven by the principle that geography should never be a barrier to opportunity. Their goal was to provide an exceptional learning environment for Science, Commerce, and Arts streams right here in Falodha, empowering the youth of the region to achieve their dreams without having to leave their homes.
            </p>
            <h3>A Journey of Growth and Commitment</h3>
            <p className="mb-4">
              From our humble beginnings with just 80 students, our journey over the past 54 years has been one of remarkable growth and unwavering commitment. Decade after decade, we have held true to our founding principles, expanding our infrastructure and academic offerings to meet the evolving needs of our students. This steadfast dedication has helped us grow from a small institution into one of the most trusted and respected colleges in the district, touching the lives of thousands of students and their families.
            </p>
            <h3>Bridging the Divide with Modern Facilities</h3>
            <p className="mb-4">
              A cornerstone of our identity is our commitment to providing state-of-the-art facilities that rival those in any urban centre. We have worked tirelessly to ensure our students have access to the very best resources, including modern computer and science laboratories, well-equipped libraries, smart classrooms for interactive learning, and extensive sports grounds for holistic development. By investing in top-tier infrastructure, we provide our students with a competitive edge and a learning environment where they can truly flourish.
            </p>
            <h3>A Legacy of Success</h3>
            <p>
              Today, our greatest pride lies in our rich legacy of success. Thousands of our alumni have gone on to pursue higher education in prestigious universities and build successful careers across various fields. Their achievements are a living testament to the strong academic and moral foundation they received at our college. For 54 years, Rajkumar Janta Inter College has been more than a school; it has been a launchpad for aspirations. As we look to the future, we continue this journey with renewed vigour, dedicated to crafting the next generation of legends.

Join our community and become a part of our enduring legacy.
            </p>
          </div>

          <div>
            <h2 className="text-3xl mb-6">Why Choose Us</h2>
            <ul className="space-y-3">
              <li className="flex items-start"><span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span><span>Board-aligned curriculum with exam focus</span></li>
              <li className="flex items-start"><span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span><span>Well-equipped science and computer laboratories</span></li>
              <li className="flex items-start"><span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span><span>Experienced teachers with proven track records</span></li>
              <li className="flex items-start"><span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span><span>Regular practice tests and mock examinations</span></li>
              <li className="flex items-start"><span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span><span>Career counseling and college admission guidance</span></li>
              <li className="flex items-start"><span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span><span>Affordable fees with scholarship opportunities</span></li>
              {/* Additional points */}
              <li className="flex items-start"><span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span><span>Modern computer lab for computer education.</span></li>
              <li className="flex items-start"><span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span><span>Smart class facility for students.</span></li>
              <li className="flex items-start"><span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span><span>Annual educational tours for the holistic development of students.</span></li>
              <li className="flex items-start"><span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span><span>Solar system for 24-hour power supply.</span></li>
              <li className="flex items-start"><span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span><span>Modern laboratories for the science stream.</span></li>
              <li className="flex items-start"><span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span><span>Experienced Principal and trained teaching staff.</span></li>
              <li className="flex items-start"><span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span><span>Facilities for electricity, generator, pure drinking water, and toilets.</span></li>
              <li className="flex items-start"><span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span><span>Quality education at a lower fee compared to other schools in the area.</span></li>
              <li className="flex items-start"><span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span><span>Separate toilets for female students.</span></li>
              <li className="flex items-start"><span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span><span>Special focus on English education.</span></li>
              <li className="flex items-start"><span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span><span>Extra classes for students needing academic support.</span></li>
              <li className="flex items-start"><span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span><span>Library facility for the overall development of students.</span></li>
              <li className="flex items-start"><span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span><span>Playground and adequate sports equipment for students.</span></li>
              <li className="flex items-start"><span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span><span>Free health check-ups for students twice a year.</span></li>
              <li className="flex items-start"><span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span><span>100% pass rate in quarterly exams for High School and Intermediate classes.</span></li>
              <li className="flex items-start"><span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span><span>CCTV cameras in all classrooms.</span></li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                To be the leading intermediate college in the region, known for academic excellence
                and preparing students for successful higher education journeys.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                To provide quality intermediate education that builds strong academic foundations,
                develops critical thinking skills, and prepares students for board examinations
                and competitive entrance tests.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Values</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1">
                <li>Excellence in all endeavors</li>
                <li>Integrity and ethical conduct</li>
                <li>Innovation and creativity</li>
                <li>Diversity and inclusion</li>
                <li>Community service</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}