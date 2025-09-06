
import { useState } from "react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "../ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import news1 from '../../assets/news1.jpeg';
import news2 from '../../assets/news2.jpeg';
import news3 from '../../assets/news3.jpeg';
import news4 from '../../assets/news4.jpeg';
import news5 from '../../assets/news5.jpeg';
import news6 from '../../assets/news6.jpeg';
import news7 from '../../assets/news7.jpeg';
import news8 from '../../assets/news8.jpeg';
import news9 from '../../assets/news9.jpeg';
import news10 from '../../assets/news10.jpeg';
import news11 from '../../assets/news11.jpeg';
import news12 from '../../assets/news12.jpeg';
import news13 from '../../assets/news13.jpeg';
import news14 from '../../assets/news14.jpeg';
import news15 from '../../assets/news15.jpeg';
import news16 from '../../assets/news16.jpeg';

export function NewsCuttingsSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const carouselImages = [
    { src: news1, alt: "News Cutting 1" },
    { src: news2, alt: "News Cutting 2" },
    { src: news3, alt: "News Cutting 3" },
    { src: news4, alt: "News Cutting 4" },
    { src: news5, alt: "News Cutting 5" },
  ];

  const newsArticles = [
    { image: news6, category: "Academic Achievement", description: "Board exam results published in leading daily." },
    { image: news7, category: "Science & Innovation", description: "Students win at district science fair." },
    { image: news8, category: "Cultural Event", description: "Annual cultural fest coverage." },
    { image: news9, category: "Sports Achievement", description: "Sports team wins championship." },
    { image: news10, category: "Alumni Recognition", description: "Alumni featured for professional success." },
    { image: news11, category: "Community Service", description: "Students lead community service drive." },
    { image: news12, category: "Academic Competition", description: "Math olympiad winners announced." },
    { image: news13, category: "Technology Initiative", description: "Digital literacy program in news." },
    { image: news14, category: "Academic Event", description: "Debate competition highlights." },
    { image: news15, category: "Special Feature", description: "Special feature on school achievements." },
    { image: news16, category: "Press Release", description: "Official press release published." },
    { image: news3, category: "General News", description: "General news coverage." },
    { image: news4, category: "General News", description: "General news coverage." },
    { image: news5, category: "General News", description: "General news coverage." },
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl mb-6">In the News</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Our achievements and events as featured in leading newspapers and media outlets, 
            showcasing the excellence and recognition of Rajkumar Janta Inter College.
          </p>
        </div>

        {/* News Carousel */}
        <div className="mb-16">
          <h2 className="text-3xl text-center mb-8">Latest Press Coverage</h2>
          <div className="max-w-4xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {carouselImages.map((image, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-2">
                      <Card className="overflow-hidden">
                        <div className="aspect-[4/3] relative">
                          <ImageWithFallback
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform"
                            onClick={() => setSelectedImage(image.src)}
                          />
                        </div>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>

        {/* News Grid */}
        <div className="mb-16">
          <h2 className="text-3xl text-center mb-12">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 cursor-pointer" onClick={() => setSelectedImage(article.image)}>
                  <ImageWithFallback
                    src={article.image}
                    alt={article.description}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="secondary" className="text-xs">{article.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {article.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Press Contact */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h2 className="text-2xl mb-4">Press & Media Contact</h2>
              <p className="text-muted-foreground mb-6">
                For media inquiries, interviews, or press releases, please contact our administration office.
              </p>
              <div className="space-y-2 text-sm">
                <p><strong>Phone:</strong> +91-8439109503</p>
                <p><strong>Email:</strong> media@rajkumarjantacollege.edu.in</p>
                <p><strong>Address:</strong> Faloda, Block Purkaji, District Muzaffarnagar 251307</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] p-0">
            <DialogTitle className="sr-only">News Article Image</DialogTitle>
            <DialogDescription className="sr-only">
              Full size view of newspaper cutting or press coverage image
            </DialogDescription>
            <div className="relative">
              <ImageWithFallback
                src={selectedImage}
                alt="News article"
                className="w-full h-auto max-h-[85vh] object-contain"
              />
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}