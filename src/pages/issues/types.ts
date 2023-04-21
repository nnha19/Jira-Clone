type IssueStatus =
  | "todo"
  | "inProgress"
  | "pendingReview"
  | "done"
  | "reOpened";

export interface Issue {
  key: string;
  title: string;
  description: string;
  assignee: string[];
  reporter: string;
  status: IssueStatus;
  createdAt: Date;
  id: number;
}
