
export interface VolunteeringItem {
  id: string;
  title: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  imageUrl?: string;
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
  },
  {
    id: "vol2",
    title: "Hackathon Organizer",
    organization: "Tech for Good Foundation",
    location: "Virtual",
    startDate: "Oct 2023",
    endDate: "Dec 2023",
    description: "Helped organize a virtual hackathon focused on developing solutions for environmental issues. Mentored participants and judged final submissions.",
  },
  {
    id: "vol3",
    title: "Website Developer",
    organization: "Animal Shelter",
    location: "City, State",
    startDate: "Jun 2023",
    endDate: "Aug 2023",
    description: "Designed and developed a new website for a local animal shelter, implementing features to showcase adoptable pets and process online donations.",
  },
  {
    id: "vol4",
    title: "Tech Support Volunteer",
    organization: "Elderly Care Center",
    location: "City, State",
    startDate: "Mar 2023",
    endDate: "May 2023",
    description: "Provided technical support and taught basic computer skills to seniors. Created simplified guides and hosted weekly tech help sessions.",
  }
];
