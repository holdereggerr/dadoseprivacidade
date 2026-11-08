export interface RadarCard {
  id: string;
  category: string;
  headline: string;
  takeaway: string;
  practicalImpact: string;
  readingTime: string;
  sourceName: string;
  sourceUrl: string;
}

export interface RadarIssue {
  issueNumber: number;
  publishDate: string;
  title: string;
  editorialNote: string;
  cards: RadarCard[];
}
