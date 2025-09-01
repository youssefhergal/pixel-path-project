
export interface VolunteeringItem {
  id: string;
  title: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  images: Array<{
    original: string;
    thumbnail: string;
    description?: string;
  }>;
}

export const volunteeringData: VolunteeringItem[] = [
  {
    id: "vol1",
    title: "Code Mentor",
    organization: "Local STEM Education Center",
    location: "City, State",
    startDate: "Jan 2024",
    endDate: "Present",
    description: "Teaching programming concepts to underrepresented youth in the community. Organizing weekly coding workshops and helping students with their projects.",
    images: [
      {
        original: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
        thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=200&h=150&fit=crop",
        description: "Teaching coding concepts to students"
      },
      {
        original: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
        thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=200&h=150&fit=crop",
        description: "Group programming session"
      },
      {
        original: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop",
        thumbnail: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=200&h=150&fit=crop",
        description: "Students working on projects"
      }
    ]
  },
  {
    id: "vol2",
    title: "Hackathon Organizer",
    organization: "Tech for Good Foundation",
    location: "Virtual",
    startDate: "Oct 2023",
    endDate: "Dec 2023",
    description: "Helped organize a virtual hackathon focused on developing solutions for environmental issues. Mentored participants and judged final submissions.",
    images: [
      {
        original: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&h=600&fit=crop",
        thumbnail: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=200&h=150&fit=crop",
        description: "Hackathon presentation"
      },
      {
        original: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
        thumbnail: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=150&fit=crop",
        description: "Team collaboration"
      },
      {
        original: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=600&fit=crop",
        thumbnail: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=200&h=150&fit=crop",
        description: "Final judging session"
      }
    ]
  },
  {
    id: "vol3",
    title: "Website Developer",
    organization: "Animal Shelter",
    location: "City, State",
    startDate: "Jun 2023",
    endDate: "Aug 2023",
    description: "Designed and developed a new website for a local animal shelter, implementing features to showcase adoptable pets and process online donations.",
    images: [
      {
        original: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&h=600&fit=crop",
        thumbnail: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=200&h=150&fit=crop",
        description: "Working on the website design"
      },
      {
        original: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&h=600&fit=crop",
        thumbnail: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=200&h=150&fit=crop",
        description: "Meeting with shelter staff"
      },
      {
        original: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&h=600&fit=crop",
        thumbnail: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=200&h=150&fit=crop",
        description: "Testing the website with pets"
      }
    ]
  },
  {
    id: "vol4",
    title: "Tech Support Volunteer",
    organization: "Elderly Care Center",
    location: "City, State",
    startDate: "Mar 2023",
    endDate: "May 2023",
    description: "Provided technical support and taught basic computer skills to seniors. Created simplified guides and hosted weekly tech help sessions.",
    images: [
      {
        original: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop",
        thumbnail: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=200&h=150&fit=crop",
        description: "Teaching computer basics"
      },
      {
        original: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop",
        thumbnail: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=200&h=150&fit=crop",
        description: "One-on-one tech support"
      },
      {
        original: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=800&h=600&fit=crop",
        thumbnail: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=200&h=150&fit=crop",
        description: "Group learning session"
      }
    ]
  }
];
