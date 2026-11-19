export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  tagline: string;
  summary: string;
  technicalCapabilities: string[];
  deliverables: string[];
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
  colorAccent?: string;
}

export interface IndustryItem {
  id: string;
  slug: string;
  name: string;
  iconName: string;
  shortDesc: string;
  fullDesc: string;
  challenges: string[];
  solutions: string[];
  typicalDeliverables: string[];
  caseStudyHighlight?: string;
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  location: string;
  clientSector: string;
  challenge: string;
  methodology: string;
  technology: string[];
  deliverables: string[];
  stats: {
    label: string;
    value: string;
  }[];
  highlightMetric: string;
}

export interface InsightArticle {
  id: string;
  slug: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  content: string[];
  tags: string[];
}
