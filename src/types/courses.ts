export interface CourseModule {
  title: string;
  duration: string;
  summary: string;
}

export interface Course {
  id: string;
  title: string;
  slug: string;
  subtitle: string;
  description: string;
  targetOutcome: string;
  duration: string;
  level: string;
  workload: string;
  instructorName: string;
  instructorRole: string;
  modules: CourseModule[];
  badgeText: string;
  enrolmentUrl?: string;
  priceInfo: string;
}
