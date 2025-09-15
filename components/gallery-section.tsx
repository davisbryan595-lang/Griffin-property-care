"use client"

import { useState } from "react"
import { X } from "lucide-react"

const galleryImages = [
  {
    src: "/beautiful-landscaped-front-yard-with-colorful-flow.jpg",
    alt: "Landscaped front yard",
    category: "Landscaping",
  },
  {
    src: "/professional-tree-trimming-work-with-clean-cuts-an.jpg",
    alt: "Tree trimming service",
    category: "Tree Care",
  },
  {
    src: "/fall-cleanup-with-leaf-removal-and-garden-bed-prep.jpg",
    alt: "Fall cleanup service",
    category: "Seasonal",
  },
  {
    src: "/snow-removal-from-driveway-and-walkways-in-winter.jpg",
    alt: "Snow removal service",
    category: "Winter",
  },
  {
    src: "/elegant-garden-design-with-stone-pathways-and-orna.jpg",
    alt: "Garden design project",
    category: "Design",
  },
  {
    src: "/well-maintained-commercial-property-landscaping-wi.jpg",
    alt: "Commercial landscaping",
    category: "Commercial",
  },
  {
    src: "/backyard-transformation-with-patio-and-landscape-l.jpg",
    alt: "Backyard transformation",
    category: "Landscaping",
  },
  {
    src: "/spring-lawn-care-with-fresh-green-grass-and-edged-.jpg",
    alt: "Lawn maintenance",
    category: "Maintenance",
  },
  {
    src: "/mulching-and-garden-bed-maintenance-with-fresh-mul.jpg",
    alt: "Garden bed maintenance",
    category: "Maintenance",
  },
]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1)
    }
  }

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Work Gallery</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Take a look at some of our recent projects and see the quality craftsmanship that sets Griffin's Property
            Care apart.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/80 to-transparent">
                <span className="inline-block px-2 py-1 text-xs font-medium bg-accent text-accent-foreground rounded">
                  {image.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm">
            <div className="relative max-w-4xl max-h-[90vh] mx-4">
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 p-2 bg-background/80 rounded-full text-foreground hover:bg-background transition-colors"
              >
                <X className="h-6 w-6" />
              </button>

              <img
                src={galleryImages[selectedImage].src || "/placeholder.svg"}
                alt={galleryImages[selectedImage].alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />

              <div className="absolute bottom-4 left-4 right-4 text-center">
                <span className="inline-block px-3 py-1 bg-background/80 text-foreground rounded-full text-sm">
                  {selectedImage + 1} of {galleryImages.length}
                </span>
              </div>

              {/* Navigation buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-background/80 rounded-full text-foreground hover:bg-background transition-colors"
              >
                ←
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-background/80 rounded-full text-foreground hover:bg-background transition-colors"
              >
                →
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
