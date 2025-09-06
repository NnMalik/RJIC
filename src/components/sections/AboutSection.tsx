import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export function AboutSection() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl mb-6">About Rajkumar Janta Inter College</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Founded in 2009, Rajkumar Janta Inter College has been dedicated to providing excellent 
            intermediate education, preparing students for board examinations and higher studies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl mb-6">Our History</h2>
            <p className="mb-4">
              Rajkumar Janta Inter College was established to provide affordable, quality intermediate 
              education in Science, Commerce, and Arts streams. Starting with just 80 students, 
              we have grown to become one of the most trusted institutions in the district.
            </p>
            <p className="mb-4">
              Over the years, we have consistently maintained high academic standards while ensuring 
              that education remains accessible to students from all backgrounds. Our focus has always 
              been on preparing students for board examinations and competitive entrance tests.
            </p>
            <p>
              Today, hundreds of our alumni are pursuing higher education in prestigious universities 
              and colleges, making us proud of their achievements and our contribution to their success.
            </p>
          </div>

          <div>
            <h2 className="text-3xl mb-6">Why Choose Us</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Board-aligned curriculum with exam focus</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Well-equipped science and computer laboratories</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Experienced teachers with proven track records</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Regular practice tests and mock examinations</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Career counseling and college admission guidance</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Affordable fees with scholarship opportunities</span>
              </li>
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