export type ProjectGalleryCategory = {
  name: string;
  images: string[];
};

export interface ProjectData {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  client: string;
  area: string;
  scope: string;
  heroImage: string;
  concept: string;
  narrative: string[];
  materials: { name: string; image: string }[];
  quote: string;
  galleries: ProjectGalleryCategory[];
}

export const projects: ProjectData[] = [
  {
    id: "om-traders",
    title: "Om Traders",
    category: "Interiors",
    location: "Raipur",
    year: "2023",
    client: "Confidential",
    area: "Variable",
    scope: "Interiors",
    heroImage: "https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_09655.jpg",
    concept: "Om Traders, A Hardware Boutique situated in the middle of the city has the overall hardware solution along with varieties of veneer, plywood and lamin...",
    narrative: [
      "Om Traders, A Hardware Boutique situated in the middle of the city has the overall hardware solution along with varieties of veneer, plywood and laminates. A minimal material palette is used with interesting ways, enhancing the overall Design. The flooring is done with Jaisalmer full body tiles. A neutral colour of tiles has been cut in such a way which creates an interesting pattern right in the center of the display spaces. The Ceiling has been kept exposed and painted with ochre colour. To create emphasis over the ceiling, the plywood black painted pattern has been hanged over. The display units are made with exposed plyboard which could be removable. The drawers are covered with blue laminate balancing the whole theme all together."
    ],
    materials: [
      { name: "Natural Stone", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80" },
      { name: "Premium Wood", image: "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&q=80" }
    ],
    quote: "Design is not just what it looks like, it's how it works.",
    galleries: [
      {
        name: "Gallery",
        images: ["https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_09668.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_09669.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_09667.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_09647.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_09650.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_09649.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_09652.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_09664.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_09662.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_09659.jpg"]
      }
    ]
  },
  {
    id: "mr-siddharth-shrivastav",
    title: "Mr. Siddharth Shrivastav",
    category: "Interiors",
    location: "Raipur",
    year: "2023",
    client: "Confidential",
    area: "Variable",
    scope: "Interiors",
    heroImage: "https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_09723.jpg",
    concept: "A contemporary approach to spatial design, balancing aesthetics and functionality.",
    narrative: [
      "A contemporary approach to spatial design, balancing aesthetics and functionality."
    ],
    materials: [
      { name: "Natural Stone", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80" },
      { name: "Premium Wood", image: "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&q=80" }
    ],
    quote: "Design is not just what it looks like, it's how it works.",
    galleries: [
      {
        name: "Gallery",
        images: ["https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_09748.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_09702.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_09722.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_09739.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_09717.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_09705.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_09711.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_09715.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_09707-Edit.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_09677.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_09686.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_09675.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_09676.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_09673.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_09719.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_09735.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_09736.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG209768.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG209767.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_09731.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_09733.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_09732.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_09743.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_09746.jpg"]
      }
    ]
  },
  {
    id: "mr-deepam-shah",
    title: "Mr. Deepam Shah",
    category: "Architecture & Interiors",
    location: "Raipur",
    year: "2023",
    client: "Confidential",
    area: "Variable",
    scope: "Architecture & Interiors",
    heroImage: "https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_07767.jpg",
    concept: "A 3,620 sq. ft. Of bungalow consists of 4 bedrooms, living, dining, kitchen, seating area music room and garden area. Conceived on the two levels, the...",
    narrative: [
      "A 3,620 sq. ft. Of bungalow consists of 4 bedrooms, living, dining, kitchen, seating area music room and garden area. Conceived on the two levels, the house embraces interiors that are graceful, Opulent, and stylish. The client had a simple requirement of luxurious interior that would make the house unique. The Spaces in the ground floor are divided by an intricately carved leaf enhancing the theme. This carved ‘Leaf’ is so placed that it efficiently segregates the family and dining space. The function of all these spaces is distinct yet tied together. The passage of the first floor is elegantly proportioned and circulates to the 2 bedroom along with music room serving the private needs of the family. There is a separate audio-visual room that has mood lighting for special family sessions."
    ],
    materials: [
      { name: "Natural Stone", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80" },
      { name: "Premium Wood", image: "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&q=80" }
    ],
    quote: "Design is not just what it looks like, it's how it works.",
    galleries: [
      {
        name: "Gallery",
        images: ["https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_08043-min.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_07798-min.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_07803-min.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_07809-min.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_07810-HDR-min.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_07815-min.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_07825-min.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_07835-min.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_07865-min.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_07876-min.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_07839-min.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_07822-min.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_07827-min.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_07891-min.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_07879-min.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_07896-min.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_07938-min.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_07945-min.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_07947-min.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_07952-min.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_08004.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_08000.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_07910-min.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_07983-min.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_07977-min.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_08006-min.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_08016-min.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_08051-min.jpg"]
      }
    ]
  },
  {
    id: "dr-ajit-mishra",
    title: "Dr. Ajit Mishra",
    category: "Interiors",
    location: "Raipur",
    year: "2023",
    client: "Confidential",
    area: "Variable",
    scope: "Interiors",
    heroImage: "https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_07604-HDR.jpg",
    concept: "? The Residence has been designed in a contemporary style carrying a Modern and Ethnic fusion based in an enhanced Luxury Living. The ground floor con...",
    narrative: [
      "? The Residence has been designed in a contemporary style carrying a Modern and Ethnic fusion based in an enhanced Luxury Living. The ground floor consists of a mandir, living room, dining area, a kitchen, utility, and parent’s bedroom. The zoning of the first floor level shows a distinct delineation between private spaces with the help of passage. It has master bedroom and kid’s bedroom separated with a home theatre."
    ],
    materials: [
      { name: "Natural Stone", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80" },
      { name: "Premium Wood", image: "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&q=80" }
    ],
    quote: "Design is not just what it looks like, it's how it works.",
    galleries: [
      {
        name: "Gallery",
        images: ["https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_07586-HDR-min.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_07590-min.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_07596-min.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_07595-min.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_07596-HDR-min.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_07618-min.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_07727-min.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_07738-min.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_07708-min.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_07630-min.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_07622-min.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_07677-min.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_07666-min.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_07661-min.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_07662-min.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_07697-min.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_07633-min.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_07652-min.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_07745-min.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_07739-min.jpg"]
      }
    ]
  },
  {
    id: "the-flower-story",
    title: "The Flower Story",
    category: "Interiors",
    location: "Raipur",
    year: "2023",
    client: "Confidential",
    area: "Variable",
    scope: "Interiors",
    heroImage: "https://www.swapniljaggiarchitects.com/admin/uploads/project_section/DSC08865.JPG",
    concept: "The client came up with a concept project of Flower Boutique - a luxury retail outlet. The owner intends selling the exclusive flowers bought from dif...",
    narrative: [
      "The client came up with a concept project of Flower Boutique - a luxury retail outlet. The owner intends selling the exclusive flowers bought from different parts of the country. The idea was to create a space with contemporary yet modern style of Interior design. Since modern design embodies minimal and linear geometric pattern, adding classical arched openings creates a visual contrast, animating the façade and structure as a whole. The concept was to bring out the nature of the use of space in the design."
    ],
    materials: [
      { name: "Natural Stone", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80" },
      { name: "Premium Wood", image: "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&q=80" }
    ],
    quote: "Design is not just what it looks like, it's how it works.",
    galleries: [
      {
        name: "Gallery",
        images: ["https://www.swapniljaggiarchitects.com/admin/uploads/project_section/NND09217-min.JPG","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/NND09083-min.JPG","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/NND09072-min.JPG","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/NND09167-min.JPG","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/NND09089-min.JPG","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/NND09209-min.JPG","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/NND09203-min.JPG","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/NND09173-min.JPG","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/NND09068-min.JPG","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/NND09101-min.JPG"]
      }
    ]
  },
  {
    id: "the-monochrome-house",
    title: "The Monochrome House",
    category: "Architecture",
    location: "Raipur",
    year: "2023",
    client: "Confidential",
    area: "Variable",
    scope: "Architecture",
    heroImage: "https://www.swapniljaggiarchitects.com/admin/uploads/project_section/69a76885-abc4-426f-9955-5a2cb259bd41.jpg",
    concept: "The Monochrome House is situated in Kamal Vihar, Raipur with plot area of 773 Sq. Ft. The site retains a spacious aesthetic thanks to an innovative ve...",
    narrative: [
      "The Monochrome House is situated in Kamal Vihar, Raipur with plot area of 773 Sq. Ft. The site retains a spacious aesthetic thanks to an innovative vertical approach to architecture. The design implemented the creative home in response to the needs of a young family with a strong desire for simple and efficient living. It's amazing what kind of innovation can come from such a restricted canvas! If you're looking for inspiration in your quest for minimalism or just want to get the most functionality out of a limited floor plan, this gorgeously streamlined space is a delightful breath of fresh air. The colour palette chosen in the cool shade of monochrome. All the windows are covered with patterned jails which comes out as a cuboid from the building."
    ],
    materials: [
      { name: "Natural Stone", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80" },
      { name: "Premium Wood", image: "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&q=80" }
    ],
    quote: "Design is not just what it looks like, it's how it works.",
    galleries: [
      {
        name: "Gallery",
        images: ["https://www.swapniljaggiarchitects.com/admin/uploads/project_section/monochrome%20house%201.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/monochrome%20house.jpg"]
      }
    ]
  },
  {
    id: "mr-ritesh-bhawnani",
    title: "Mr. Ritesh Bhawnani",
    category: "Architecture & Interiors",
    location: "Raipur",
    year: "2023",
    client: "Confidential",
    area: "Variable",
    scope: "Architecture & Interiors",
    heroImage: "https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_08463.jpg",
    concept: "A contemporary approach to spatial design, balancing aesthetics and functionality.",
    narrative: [
      "A contemporary approach to spatial design, balancing aesthetics and functionality."
    ],
    materials: [
      { name: "Natural Stone", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80" },
      { name: "Premium Wood", image: "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&q=80" }
    ],
    quote: "Design is not just what it looks like, it's how it works.",
    galleries: [
      {
        name: "Gallery",
        images: ["https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_08838.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_08869.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_08816-HDR-min.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_08805-min.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_08801-min.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_08880.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_08798-HDR.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_08776.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_08812.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_08808.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_08774.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_08569.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_08565.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_08558.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_08548.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_08536%20(1).jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_08535.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_08532.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_08521.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_08513.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_08510.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_08501-HDR.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_08483.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/111112.jpg"]
      }
    ]
  },
  {
    id: "khushboo-enterprises",
    title: "Khushboo Enterprises",
    category: "Interiors",
    location: "Raipur",
    year: "2023",
    client: "Confidential",
    area: "Variable",
    scope: "Interiors",
    heroImage: "https://www.swapniljaggiarchitects.com/admin/uploads/project_section/khushboo%20enterprises.jpg",
    concept: "The entire office follows the sober color pallet of hues of browns which transforms the space into a seamless collaboration of aesthetics and function...",
    narrative: [
      "The entire office follows the sober color pallet of hues of browns which transforms the space into a seamless collaboration of aesthetics and functionality. The space speaks the language of opulence due to the powerful wooden framework and array of reflective dark walls with a tinge of gold, stimulating the effect. Combination of Elegant wooden flooring with reflective tile spells extravagance. Artificial lightening adds a touch of warmth and flair to the luxurious office space where visitors are greeted by comfortable seating furniture in bright fabric. Potted indoor plants bring a soothing element of green and enhance the visual perception of the office space for the visitors and users alike."
    ],
    materials: [
      { name: "Natural Stone", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80" },
      { name: "Premium Wood", image: "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&q=80" }
    ],
    quote: "Design is not just what it looks like, it's how it works.",
    galleries: [
      {
        name: "Gallery",
        images: ["https://www.swapniljaggiarchitects.com/admin/uploads/project_section/773f0bcd-828f-4138-b637-e437db0f40fb.jpeg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/e471d2ff-ad3d-4546-b52d-98ddb52f99d9.jpeg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/abcfb979-5d21-48e5-b155-8eb9bd56d3a2.jpeg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/e98ca529-0c07-45bd-99e0-56d99b644c89.jpeg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/43ac42b0-1f3c-4125-b5f3-df25e09d44b1.jpeg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/2.jpeg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/5dff2858-a9b5-451e-9fcc-6470a16b5e7c.jpeg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/097cd602-ce39-4387-8ec4-3ecb945dd083.jpeg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/b7976568-6976-4d17-89bd-830662d142a1.jpeg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/87d35c6d-21b4-4bc9-b876-9c5e984f3713.jpeg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/de31135f-b32c-4b09-aac5-f0b295dfba00.jpeg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/9a0581a8-f074-476e-838f-8228828cdf26.jpeg"]
      }
    ]
  },
  {
    id: "bougainvillea",
    title: "Bougainvillea",
    category: "Architecture & Interiors",
    location: "Raipur",
    year: "2023",
    client: "Confidential",
    area: "Variable",
    scope: "Architecture & Interiors",
    heroImage: "https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_04854%20(2).jpg",
    concept: "The project has Built up Area of 1600 sq. Ft. The Entrance of the villa is decorated with a dummy window with rose gold tinted mirror, giving a vintag...",
    narrative: [
      "The project has Built up Area of 1600 sq. Ft. The Entrance of the villa is decorated with a dummy window with rose gold tinted mirror, giving a vintage appeal. Regardless of the size, the living room should be able to function as a space for relaxation and entertainment. Brick texture is given to the wall which provides a neutral background for the brightly colored upholstery. Printed tiles and wooden flooring is given to separate living from dining, allowing interesting pieces to stand out giving vintage and contemporary feel to the place. Open Pooja Room is divine at home, radiating positive energy and aura. The water body brings natural feel to the Mender. The interior was remodeled to create an open living area that blends into the kitchen and dining area. Open kitchen narrates a story about togetherness, about family and gatherings. The striking feature through these spaces is the presence of ample natural light, brought in via skylight, which is used to give the home a warm and fresh feel. Apart from tempering the climate, the skylight helps set a passive ventilation system for the house. The master bedroom features these M.S. glass frames with gorgeous self-printed curtains, giving a view to the living room . Lower bed with charcoal leather upholstery, giving a masculine touch which is enhanced by warm lighting, giving a wider look to the room. F iller slab is used in the terrace to give a raw feel to the space which also brings down the temperature. Pine wood is used in furniture, wood works with simple and straight craftsmanship. In the Guest Bedroom, a wooden texture laminate has been used, with light colored curtains, to give a modern yet contemporary look. Boys dream about being a superhero, therefore the the theme of the bedroom is derived from the kids favorite character ‘Batman’. Which is the center piece in the bedroom. The study table has a chalkboard backdrop for scribbling. Speaking about the wall décor black and white strips are painted on the walls."
    ],
    materials: [
      { name: "Natural Stone", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80" },
      { name: "Premium Wood", image: "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&q=80" }
    ],
    quote: "Design is not just what it looks like, it's how it works.",
    galleries: [
      {
        name: "Gallery",
        images: ["https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_05010.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_05003.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_04904.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_04883.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_04881.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_04870.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_04988.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_04947.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_04950.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_04862.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_04860.jpg"]
      }
    ]
  },
  {
    id: "mr-rishabh-dhariwal",
    title: "Mr. Rishabh Dhariwal",
    category: "Interiors",
    location: "Raipur",
    year: "2023",
    client: "Confidential",
    area: "Variable",
    scope: "Interiors",
    heroImage: "https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_00724.jpg",
    concept: "The Project has a living room with dining nd 4 bedrooms. The design of living room gives a feeling of relaxation having separated wooden cubical windo...",
    narrative: [
      "The Project has a living room with dining nd 4 bedrooms. The design of living room gives a feeling of relaxation having separated wooden cubical window seating. The walls are coloured in neutral colour and bright coloured upholstery with vintage mirror makes the space looks wider. The master bedroom's coloured in teal-grey shade adding floral elements to it ,makes it a contemporary look. The son's bedroom is themed in car racers. The wooden flooring and the bright yellow colour keeps the room energized. The daughter's bedroom is coloured in pink and pastel according to her requirements."
    ],
    materials: [
      { name: "Natural Stone", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80" },
      { name: "Premium Wood", image: "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&q=80" }
    ],
    quote: "Design is not just what it looks like, it's how it works.",
    galleries: [
      {
        name: "Gallery",
        images: ["https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_00790.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_00794.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_00781%20(1).jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_00775.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_00774.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_00771.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_00767.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_00758.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_00748.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_00730.jpg"]
      }
    ]
  },
  {
    id: "siesto-systems",
    title: "Siesto Systems",
    category: "Interiors",
    location: "Raipur",
    year: "2023",
    client: "Confidential",
    area: "Variable",
    scope: "Interiors",
    heroImage: "https://www.swapniljaggiarchitects.com/admin/uploads/project_section/NIL00772.jpg",
    concept: "A contemporary approach to spatial design, balancing aesthetics and functionality.",
    narrative: [
      "A contemporary approach to spatial design, balancing aesthetics and functionality."
    ],
    materials: [
      { name: "Natural Stone", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80" },
      { name: "Premium Wood", image: "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&q=80" }
    ],
    quote: "Design is not just what it looks like, it's how it works.",
    galleries: [
      {
        name: "Gallery",
        images: ["https://www.swapniljaggiarchitects.com/admin/uploads/project_section/NIL00217.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/NIL00244.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/NIL00242.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/NIL00212.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/NIL00215.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/NIL00264.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/NIL00269.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/NIL00321.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/NIL00418.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/NIL00276-Edit.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/NIL00422.jpg"]
      }
    ]
  },
  {
    id: "mr-sachin-khandelwal",
    title: "Mr. Sachin Khandelwal",
    category: "Interiors",
    location: "Raipur",
    year: "2023",
    client: "Confidential",
    area: "Variable",
    scope: "Interiors",
    heroImage: "https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_06523-HDR.jpg",
    concept: "The Project is inspired by Scandinavian interiors in which simplicity is the beauty. It is a clear summary of clean lines and a minimalistic aesthetic...",
    narrative: [
      "The Project is inspired by Scandinavian interiors in which simplicity is the beauty. It is a clear summary of clean lines and a minimalistic aesthetic with traditional craftsmanship and multifunctional element. In the double-height living room, natural light contributes to well-being and happiness. The role of large windows is to let natural daylight in and to provide direct a view to the nature outside. Neutral color palette that favors brighter hues makes the design more sophisticated. Designed furniture with intricate flooring makes the space more luxury."
    ],
    materials: [
      { name: "Natural Stone", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80" },
      { name: "Premium Wood", image: "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&q=80" }
    ],
    quote: "Design is not just what it looks like, it's how it works.",
    galleries: [
      {
        name: "Gallery",
        images: ["https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_06689.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_06661.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_06581.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_06663.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_06657.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_06643.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_06633.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_06592.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_06575.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_06662.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_06557-HDR.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_06551-HDR.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_06545-HDR.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_06542.jpg"]
      }
    ]
  },
  {
    id: "vishal-the-coiffeur",
    title: "Vishal The Coiffeur",
    category: "Architecture & Interiors",
    location: "Raipur",
    year: "2023",
    client: "Confidential",
    area: "Variable",
    scope: "Architecture & Interiors",
    heroImage: "https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_07423.jpg",
    concept: "VTC – “Vishal the Coiffeur” an all luxury salon is a masterpiece in itself. The salon is a part of residential building that has been modified to brin...",
    narrative: [
      "VTC – “Vishal the Coiffeur” an all luxury salon is a masterpiece in itself. The salon is a part of residential building that has been modified to bring the feeling of newness and to create a set up that blends perfectly with the settings of an exclusive professional salon inclusively merging with the essence of the locality. To start with, the entrance of the salon is the focal point of the building from outside because you see a big blue coloured door standing alone . With the blue door popping out like a symbol to the salon, the salon name is also engraved in the front façade of the building and is filled with glass bricks which acts as a path for daylight to enter into the interiors of the salon. The mood board of the interior of the salon is very fresh inspired by the ocean and the architect felt it was important to break away from the expected aesthetic of salons and into a celebration of color and materials in much understated way. The ceiling is ?ller slab made with earthen pots providing heat insulation inside the salon. Along with the filler slab technique the ceiling has another feature of skylight in which the logo of the salon is included and which makes an appearance around the studio with the rotation of the sun."
    ],
    materials: [
      { name: "Natural Stone", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80" },
      { name: "Premium Wood", image: "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&q=80" }
    ],
    quote: "Design is not just what it looks like, it's how it works.",
    galleries: [
      {
        name: "Gallery",
        images: ["https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG201137.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG201126.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG201125.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG201122.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_07428.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_07407-HDR.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_07389-HDR.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_07344-HDR-Edit-2.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_07374-HDR.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_07341-HDR.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_07427.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_05313.jpg"]
      }
    ]
  },
  {
    id: "mithya",
    title: "Mithya",
    category: "Architecture & Interiors",
    location: "Raipur",
    year: "2023",
    client: "Confidential",
    area: "Variable",
    scope: "Architecture & Interiors",
    heroImage: "https://www.swapniljaggiarchitects.com/admin/uploads/project_section/IMG_E0892.JPG",
    concept: "This project was conceived using affordable materials and parts of an existing building to keep project costs down. We wanted to create a cozy environ...",
    narrative: [
      "This project was conceived using affordable materials and parts of an existing building to keep project costs down. We wanted to create a cozy environment where people can enjoy their Leisure time and food of course. To achieve this, we chose to use materials in its raw form such as exposed brick, patterned tiling, metal pipes and added plenty of vegetation. The exposed ceiling and a thin fold of fabric covers the ceiling plays a gigantic game of checkers in the semi-covered space. The open lawn full of greenery with Kund and pool adds soothing effect in the outdoor seating space."
    ],
    materials: [
      { name: "Natural Stone", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80" },
      { name: "Premium Wood", image: "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&q=80" }
    ],
    quote: "Design is not just what it looks like, it's how it works.",
    galleries: [
      {
        name: "Gallery",
        images: ["https://www.swapniljaggiarchitects.com/admin/uploads/project_section/IMG_1237.JPG","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/IMG_1203.JPG","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/IMG_1230.JPG","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/IMG_0970.JPG","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/IMG_0645.JPG","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/IMG_0194.JPG","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/IMG_1275.JPG"]
      }
    ]
  },
  {
    id: "bukhari-office",
    title: "Bukhari Office",
    category: "Interiors",
    location: "Raipur",
    year: "2023",
    client: "Confidential",
    area: "Variable",
    scope: "Interiors",
    heroImage: "https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_07025.jpg",
    concept: "The idea was to design a place which doesn’t gives a monotony of a Formal office but surely have a decency of being A classy one with the Aura of Mode...",
    narrative: [
      "The idea was to design a place which doesn’t gives a monotony of a Formal office but surely have a decency of being A classy one with the Aura of Modernism. We came up with very innovative ideas for everything in the space, from ceiling design , work table design , flooring ideas , wall design , furniture design , light design . Each and every element in the office was Designed with a Out of the box Element on it and also Executed at site itself ."
    ],
    materials: [
      { name: "Natural Stone", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80" },
      { name: "Premium Wood", image: "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&q=80" }
    ],
    quote: "Design is not just what it looks like, it's how it works.",
    galleries: [
      {
        name: "Gallery",
        images: ["https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_07035.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_07033-HDR.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_07023.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_07020.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_07019-HDR.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_07017.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_07011.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_07009.jpg"]
      }
    ]
  },
  {
    id: "frameland",
    title: "Frameland",
    category: "Interiors",
    location: "Raipur",
    year: "2023",
    client: "Confidential",
    area: "Variable",
    scope: "Interiors",
    heroImage: "https://www.swapniljaggiarchitects.com/admin/uploads/project_section/442A9846.jpg",
    concept: "? A place for outdoor and indoor photoshoot. We have inbuilt spaces like The Royal bedroom setup, Wooden Blocks Setup, The Grand Piano Room, Venice St...",
    narrative: [
      "? A place for outdoor and indoor photoshoot. We have inbuilt spaces like The Royal bedroom setup, Wooden Blocks Setup, The Grand Piano Room, Venice Street, Greece Mykonos Street, Round Tunnel , Kitchen Setup, Venice walls , Mykonos Open Library, Love Locks , Bushwick street art, Darkroom With Mystical Flames , Bonfire setup , London Street and many more for the perfect shoot."
    ],
    materials: [
      { name: "Natural Stone", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80" },
      { name: "Premium Wood", image: "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&q=80" }
    ],
    quote: "Design is not just what it looks like, it's how it works.",
    galleries: [
      {
        name: "Gallery",
        images: ["https://www.swapniljaggiarchitects.com/admin/uploads/project_section/442A9845.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/442A9843.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/442A9841.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/442A9840.jpg"]
      }
    ]
  },
  {
    id: "kumra-dental-clinic",
    title: "Kumra Dental Clinic",
    category: "Interiors",
    location: "Raipur",
    year: "2023",
    client: "Confidential",
    area: "Variable",
    scope: "Interiors",
    heroImage: "https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_09429.jpg",
    concept: "The space is designed in such a way that the patients don’t get the ordinary feel of being in a facility. The advancement of this spot originates from...",
    narrative: [
      "The space is designed in such a way that the patients don’t get the ordinary feel of being in a facility. The advancement of this spot originates from the negligible utilization of surfaces, textures and patterns and not many hues. Utilization of the shading; blue and white makes this space look bright and calming to the eyes. The geometric formed gathering table is altogether different from a common one. The mirror with angular profile light on roof of the section causes the space to show up long and rich. The glass etching is done with the goal that it coordinates the instruments of a dental specialist."
    ],
    materials: [
      { name: "Natural Stone", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80" },
      { name: "Premium Wood", image: "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&q=80" }
    ],
    quote: "Design is not just what it looks like, it's how it works.",
    galleries: [
      {
        name: "Gallery",
        images: ["https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_09459.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_09460.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_09450.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_09451.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_09448.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_09457.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_09436.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_09441.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_09445.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_09434.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_09428-HDR.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_09426.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_09425-HDR.jpg"]
      }
    ]
  },
  {
    id: "jp-associates",
    title: "J.P. Associates",
    category: "Interiors",
    location: "Raipur",
    year: "2023",
    client: "Confidential",
    area: "Variable",
    scope: "Interiors",
    heroImage: "https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_09666.jpg",
    concept: "\"Real comfort, visual and physical, is vital to every room.\" The intent of this design is to combine the multiple spaces into one and make one large o...",
    narrative: [
      "\"Real comfort, visual and physical, is vital to every room.\" The intent of this design is to combine the multiple spaces into one and make one large open space, taking advantage of the office’s classic architecture to bring in additional natural light. In this stunning style, neutrals; grey, black and white colour schemes reign accented with teal blue, as does the use of clean, smooth lines and geometric shapes, done by the strategy of Punning to cut down the absolute expense."
    ],
    materials: [
      { name: "Natural Stone", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80" },
      { name: "Premium Wood", image: "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&q=80" }
    ],
    quote: "Design is not just what it looks like, it's how it works.",
    galleries: [
      {
        name: "Gallery",
        images: ["https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_09737.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_09713.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_09646.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_09672.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_09724.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_09682.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_09679.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_09674.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_09657.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_09638.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_09637.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_09633.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_09630.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_09624.jpg"]
      }
    ]
  },
  {
    id: "vacation-connection",
    title: "Vacation Connection",
    category: "Interiors",
    location: "Raipur",
    year: "2023",
    client: "Confidential",
    area: "Variable",
    scope: "Interiors",
    heroImage: "https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_06295.jpg",
    concept: "A very innovative idea of Office designing in a space of only 330 sq.ft. - creating innovative designs out of basic building materials was the main in...",
    narrative: [
      "A very innovative idea of Office designing in a space of only 330 sq.ft. - creating innovative designs out of basic building materials was the main intention behind the Project - Colour theory of using Bright colour like Yellow has given an impact to the whole space and boost the Design to the max ! - Optimizing the space with planning techniques make the design functional."
    ],
    materials: [
      { name: "Natural Stone", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80" },
      { name: "Premium Wood", image: "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&q=80" }
    ],
    quote: "Design is not just what it looks like, it's how it works.",
    galleries: [
      {
        name: "Gallery",
        images: ["https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_06305.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_06329-HDR.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_06273.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_06268.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_06325-Edit.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_06254.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_06252-Edit.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_06249.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_06245-Edit.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_06350.jpg"]
      }
    ]
  },
  {
    id: "mr-navin-jadwani",
    title: "Mr. Navin Jadwani",
    category: "Architecture & Interiors",
    location: "Raipur",
    year: "2023",
    client: "Confidential",
    area: "Variable",
    scope: "Architecture & Interiors",
    heroImage: "https://www.swapniljaggiarchitects.com/admin/uploads/project_section/SHS_2183.JPG",
    concept: "“Architecture is a Visual Art and the building speaks about themselves “ The site is situated in Panchsheel Nagar, Raipur having site area of 4980 sq....",
    narrative: [
      "“Architecture is a Visual Art and the building speaks about themselves “ The site is situated in Panchsheel Nagar, Raipur having site area of 4980 sq. ft. The living arrangement houses two families with same arrangement of necessities and comparative spaces. We have attempted to characterize both the spaces with same measurements however with various feel by planning the spaces in like manner. Characterizing the space with various plan language can totally change how one sees the space. One space is characterized with an Indian plan language and different approach has been used with modern style according to the likeness of the client. The spaces have been planned according to the usage and cross ventilation and natural lighting were also kept in mind."
    ],
    materials: [
      { name: "Natural Stone", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80" },
      { name: "Premium Wood", image: "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&q=80" }
    ],
    quote: "Design is not just what it looks like, it's how it works.",
    galleries: [
      {
        name: "Gallery",
        images: ["https://www.swapniljaggiarchitects.com/admin/uploads/project_section/SHS_2426-min.JPG","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/SHS_2057-min.JPG","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/SHS_2411-min.JPG","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/SHS_2125-min.JPG","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/SHS_2075-min.JPG","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/SHS_1741-min.JPG","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/SHS_1878-min.JPG","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/SHS_1872-min.JPG","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/SHS_1785-min.JPG","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/SHS_1674-min.JPG","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/SHS_2342-min.JPG","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/SHS_2208-min.JPG","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/SHS_2050-min.JPG","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/10.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/9.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/8.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/7.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/5.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/4.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/2.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/1.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/3.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/SHS_2175-min.JPG","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/SHS_1646-min.JPG"]
      }
    ]
  },
  {
    id: "absolute-skin-clinic",
    title: "Absolute Skin Clinic",
    category: "Interiors",
    location: "Raipur",
    year: "2023",
    client: "Confidential",
    area: "Variable",
    scope: "Interiors",
    heroImage: "https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_06485-HDR-Edit.jpg",
    concept: "The Skin Clinic has a unique aura which makes patents feel Lively ,Calm and Relaxed. Contemporary Design makes the space attractive with the harmony o...",
    narrative: [
      "The Skin Clinic has a unique aura which makes patents feel Lively ,Calm and Relaxed. Contemporary Design makes the space attractive with the harmony of pastel color scheme. T urquoise blue enhances the whole space and helps to complete the whole composition. Installation of illustration on the wall defines the treatments being delivered by the clinic. Each cabin and Laser rooms are designed considering the psychological impact on the patent as well as on the Doctors."
    ],
    materials: [
      { name: "Natural Stone", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80" },
      { name: "Premium Wood", image: "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&q=80" }
    ],
    quote: "Design is not just what it looks like, it's how it works.",
    galleries: [
      {
        name: "Gallery",
        images: ["https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_06596.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_06629.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_06582.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_06553.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_06550-Edit.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_06535.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_06525-HDR.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_06520.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_06511-Edit.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_06505-Edit.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_06488.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_06499.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_06491.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_06483-HDR.jpg"]
      }
    ]
  },
  {
    id: "posh-town",
    title: "POSH TOWN",
    category: "Architecture",
    location: "Raipur",
    year: "2023",
    client: "Confidential",
    area: "Variable",
    scope: "Architecture",
    heroImage: "https://www.swapniljaggiarchitects.com/admin/uploads/project_section/DJI_0009.jpg",
    concept: "a",
    narrative: [
      "a"
    ],
    materials: [
      { name: "Natural Stone", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80" },
      { name: "Premium Wood", image: "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&q=80" }
    ],
    quote: "Design is not just what it looks like, it's how it works.",
    galleries: [
      {
        name: "Gallery",
        images: ["https://www.swapniljaggiarchitects.com/admin/uploads/project_section/DJI_0005.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/DJI_0030.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/posh%20town%203.png"]
      }
    ]
  },
  {
    id: "rajendra-jain",
    title: "Rajendra Jain",
    category: "Architecture & Interiors",
    location: "Raipur",
    year: "2023",
    client: "Confidential",
    area: "Variable",
    scope: "Architecture & Interiors",
    heroImage: "https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_02320.jpg",
    concept: "A small but Cozy residence!!!",
    narrative: [
      "A small but Cozy residence!!!"
    ],
    materials: [
      { name: "Natural Stone", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80" },
      { name: "Premium Wood", image: "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&q=80" }
    ],
    quote: "Design is not just what it looks like, it's how it works.",
    galleries: [
      {
        name: "Gallery",
        images: ["https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_02339.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_02186-HDR.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_02164-HDR.jpg"]
      }
    ]
  },
  {
    id: "prasanan-ji",
    title: "Prasanan Ji",
    category: "Architecture & Interiors",
    location: "Raipur",
    year: "2023",
    client: "Confidential",
    area: "Variable",
    scope: "Architecture & Interiors",
    heroImage: "https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_00231-Edit.jpg",
    concept: "Contemporary Exterior with Elegant Interiors ï»¿!!!",
    narrative: [
      "Contemporary Exterior with Elegant Interiors ï»¿!!!"
    ],
    materials: [
      { name: "Natural Stone", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80" },
      { name: "Premium Wood", image: "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&q=80" }
    ],
    quote: "Design is not just what it looks like, it's how it works.",
    galleries: [
      {
        name: "Gallery",
        images: ["https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_00290.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_00269.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_00244.jpg"]
      }
    ]
  },
  {
    id: "hipsters",
    title: "Hipsters",
    category: "Interiors",
    location: "Raipur",
    year: "2023",
    client: "Confidential",
    area: "Variable",
    scope: "Interiors",
    heroImage: "https://www.swapniljaggiarchitects.com/admin/uploads/project_section/IH1A7406.jpg",
    concept: "Designing on Site!!!",
    narrative: [
      "Designing on Site!!!"
    ],
    materials: [
      { name: "Natural Stone", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80" },
      { name: "Premium Wood", image: "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&q=80" }
    ],
    quote: "Design is not just what it looks like, it's how it works.",
    galleries: [
      {
        name: "Gallery",
        images: ["https://www.swapniljaggiarchitects.com/admin/uploads/project_section/IH1A8126.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/IH1A7421.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/IH1A7639.jpg"]
      }
    ]
  },
  {
    id: "ford",
    title: "Ford",
    category: "Architecture & Interiors",
    location: "Raipur",
    year: "2023",
    client: "Confidential",
    area: "Variable",
    scope: "Architecture & Interiors",
    heroImage: "https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_01440.jpg",
    concept: "Our second automobile showroom!!!",
    narrative: [
      "Our second automobile showroom!!!"
    ],
    materials: [
      { name: "Natural Stone", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80" },
      { name: "Premium Wood", image: "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&q=80" }
    ],
    quote: "Design is not just what it looks like, it's how it works.",
    galleries: [
      {
        name: "Gallery",
        images: ["https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_01503.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_01502.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_01501.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_01500.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_01493.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_01488.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_01467.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_01444.jpg"]
      }
    ]
  },
  {
    id: "azra",
    title: "AZRA",
    category: "Interiors",
    location: "Raipur",
    year: "2023",
    client: "Confidential",
    area: "Variable",
    scope: "Interiors",
    heroImage: "https://www.swapniljaggiarchitects.com/admin/uploads/project_section/IH1A1352.jpg",
    concept: "Designers' Workspace",
    narrative: [
      "Designers' Workspace"
    ],
    materials: [
      { name: "Natural Stone", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80" },
      { name: "Premium Wood", image: "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&q=80" }
    ],
    quote: "Design is not just what it looks like, it's how it works.",
    galleries: [
      {
        name: "Gallery",
        images: ["https://www.swapniljaggiarchitects.com/admin/uploads/project_section/IH1A1436.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/IH1A1444.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/IH1A1346.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/IH1A1328.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/IH1A1311.jpg"]
      }
    ]
  },
  {
    id: "adda-express",
    title: "Adda Express",
    category: "Interiors",
    location: "Raipur",
    year: "2023",
    client: "Confidential",
    area: "Variable",
    scope: "Interiors",
    heroImage: "https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_08311.jpg",
    concept: "U niquely designed space in the city",
    narrative: [
      "U niquely designed space in the city"
    ],
    materials: [
      { name: "Natural Stone", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80" },
      { name: "Premium Wood", image: "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&q=80" }
    ],
    quote: "Design is not just what it looks like, it's how it works.",
    galleries: [
      {
        name: "Gallery",
        images: ["https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_08327.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_08319.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_08317.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_08288.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_08301.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_08315.jpg"]
      }
    ]
  },
  {
    id: "mr-goel",
    title: "Mr. Goel",
    category: "Interiors",
    location: "Raipur",
    year: "2023",
    client: "Confidential",
    area: "Variable",
    scope: "Interiors",
    heroImage: "https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_02409.jpg",
    concept: "The impact of the combining Open and Closed Spaces",
    narrative: [
      "The impact of the combining Open and Closed Spaces"
    ],
    materials: [
      { name: "Natural Stone", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80" },
      { name: "Premium Wood", image: "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&q=80" }
    ],
    quote: "Design is not just what it looks like, it's how it works.",
    galleries: [
      {
        name: "Gallery",
        images: ["https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_02517.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_02477.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_02425.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_02414.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_02411.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_02402.jpg"]
      }
    ]
  },
  {
    id: "naresh-patel",
    title: "Naresh Patel",
    category: "Architecture & Interiors",
    location: "Raipur",
    year: "2023",
    client: "Confidential",
    area: "Variable",
    scope: "Architecture & Interiors",
    heroImage: "https://www.swapniljaggiarchitects.com/admin/uploads/project_section/IH1A1007.jpg",
    concept: "A Vibrant House",
    narrative: [
      "A Vibrant House"
    ],
    materials: [
      { name: "Natural Stone", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80" },
      { name: "Premium Wood", image: "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&q=80" }
    ],
    quote: "Design is not just what it looks like, it's how it works.",
    galleries: [
      {
        name: "Gallery",
        images: ["https://www.swapniljaggiarchitects.com/admin/uploads/project_section/IH1A1058.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/IH1A1227.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/IH1A1232.jpg"]
      }
    ]
  },
  {
    id: "bani-decor",
    title: "Bani Decor",
    category: "Interiors",
    location: "Raipur",
    year: "2023",
    client: "Confidential",
    area: "Variable",
    scope: "Interiors",
    heroImage: "https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_06451.jpg",
    concept: "A refreshed idea for a commercial space.",
    narrative: [
      "A refreshed idea for a commercial space."
    ],
    materials: [
      { name: "Natural Stone", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80" },
      { name: "Premium Wood", image: "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&q=80" }
    ],
    quote: "Design is not just what it looks like, it's how it works.",
    galleries: [
      {
        name: "Gallery",
        images: ["https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_06444.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_06443.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_06414.jpg"]
      }
    ]
  },
  {
    id: "gulabistro",
    title: "Gulabistro",
    category: "Interiors",
    location: "Raipur",
    year: "2023",
    client: "Confidential",
    area: "Variable",
    scope: "Interiors",
    heroImage: "https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_01725.jpg",
    concept: "The Pink Courtyard Bistro in the City !!",
    narrative: [
      "The Pink Courtyard Bistro in the City !!"
    ],
    materials: [
      { name: "Natural Stone", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80" },
      { name: "Premium Wood", image: "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&q=80" }
    ],
    quote: "Design is not just what it looks like, it's how it works.",
    galleries: [
      {
        name: "Gallery",
        images: ["https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_01786.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_01742.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_01618.jpg"]
      }
    ]
  },
  {
    id: "samrat-corporation",
    title: "Samrat Corporation",
    category: "Interiors",
    location: "Raipur",
    year: "2023",
    client: "Confidential",
    area: "Variable",
    scope: "Interiors",
    heroImage: "https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_05238-Edit.jpg",
    concept: "\" An another brick in the wall \"",
    narrative: [
      "\" An another brick in the wall \""
    ],
    materials: [
      { name: "Natural Stone", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80" },
      { name: "Premium Wood", image: "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&q=80" }
    ],
    quote: "Design is not just what it looks like, it's how it works.",
    galleries: [
      {
        name: "Gallery",
        images: ["https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_05218.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_05229.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_05234.jpg"]
      }
    ]
  },
  {
    id: "trikona",
    title: "Trikona",
    category: "Interiors",
    location: "Raipur",
    year: "2023",
    client: "Confidential",
    area: "Variable",
    scope: "Interiors",
    heroImage: "https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_01836.jpg",
    concept: "A chill place to hangout with friends and family",
    narrative: [
      "A chill place to hangout with friends and family"
    ],
    materials: [
      { name: "Natural Stone", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80" },
      { name: "Premium Wood", image: "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&q=80" }
    ],
    quote: "Design is not just what it looks like, it's how it works.",
    galleries: [
      {
        name: "Gallery",
        images: ["https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_01760-HDR.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_01765-HDR.jpg","https://www.swapniljaggiarchitects.com/admin/uploads/project_section/WG_01787.jpg"]
      }
    ]
  },
];
