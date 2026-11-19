export interface ProjectGalleryImage {
  url: string;
  caption: string;
  category: 'site' | 'scan' | 'model' | 'deliverable';
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  industry: string;
  location: string;
  heroImage: string;
  clientSector: string;
  shortDesc: string;
  challenge: string;
  methodology: string;
  technology: string[];
  deliverables: string[];
  gallery: ProjectGalleryImage[];
  stats: {
    label: string;
    value: string;
  }[];
  highlightMetric: string;
  verifiedDeliverableAsset?: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  tagline: string;
  summary: string;
  technicalCapabilities: string[];
  deliverables: string[];
  imageAsset: string;
  heroImage?: string;
  deliverableImage?: string;
  workflowSteps: {
    step: string;
    title: string;
    description: string;
  }[];
  specifications: {
    label: string;
    value: string;
  }[];
  applications: string[];
  relatedIndustries: string[];
}

export interface IndustryItem {
  id: string;
  slug: string;
  name: string;
  iconName: string;
  imageAsset: string;
  image?: string;
  shortDesc: string;
  fullDesc: string;
  challenges: string[];
  solutions: string[];
  typicalDeliverables: string[];
  caseStudyHighlight?: string;
}

export interface InsightArticle {
  id: string;
  slug: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  imageAsset?: string;
  content: string[];
  tags: string[];
}
