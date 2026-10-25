export type Difficulty = 'beginner' | 'intermediate' | 'advanced';
export type Status = 'not-started' | 'in-progress' | 'completed';
export type Lesson = { id:string; slug:string; title:string; summary:string; level:Difficulty; topic:string; minutes:number; prerequisites:string[]; objectives:string[]; content:string; terms:string[]; tags:string[]; resources:string[] };
export type Term = { id:string; term:string; acronym?:string; definition:string; explanation:string; category:string; level:Difficulty; example:string; related:string[]; lessons:string[]; tags:string[] };
export type Resource = { id:string; title:string; description:string; url:string; type:string; topic:string; level:Difficulty; publisher:string; duration?:number; tags:string[]; personal?:boolean; status?:string; notes?:string };
export type Note = { id:string; title:string; content:string; linkedEntityType?:string; linkedEntityId?:string; createdAt:string; updatedAt:string };
export type LocalData = { schemaVersion:1; lessons:Record<string,{status:Status;bookmarked:boolean;confidence?:number;needsReview:boolean;personalNotes:string;lastOpenedAt?:string;completedAt?:string}>; notes:Note[]; resources:Resource[]; roadmapDone:string[]; activity:string[] };
