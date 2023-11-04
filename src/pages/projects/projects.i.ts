export enum ProjectStatus {
  IDEA = "Idea",
  IN_PROGRESS = "In progress",
  DONE = "Done",
}

export const projectStatusList: ProjectStatus[] = [
  ProjectStatus.IDEA,
  ProjectStatus.IN_PROGRESS,
  ProjectStatus.DONE,
];

export const projectStatusEmoji = {
  [ProjectStatus.IDEA]: "💡",
  [ProjectStatus.IN_PROGRESS]: "🛠️",
  [ProjectStatus.DONE]: "💯",
};
