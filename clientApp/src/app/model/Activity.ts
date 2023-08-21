export interface Activity {
  id: string;
  title: string;
  date: Date | null;
  description: string;
  category: string;
  city: string;
  venue: string;
}

export interface NewActivity {
  title: string;
  date: string;
  description: string;
  category: string;
  city: string;
  venue: string;
}
