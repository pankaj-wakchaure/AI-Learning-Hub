import type {LocalData,Status} from '../types';
export const STORAGE_KEY='ai-learning-hub.data';
export const emptyData=():LocalData=>({schemaVersion:1,lessons:{},notes:[],resources:[],roadmapDone:[],activity:[]});
export function validateData(value:unknown):LocalData {
  if(!value||typeof value!=='object') throw new Error('Backup must be a JSON object.');
  const v=value as Partial<LocalData>;
  if(v.schemaVersion!==1) throw new Error('Unsupported backup version. Expected schemaVersion 1.');
  if(!v.lessons||typeof v.lessons!=='object'||!Array.isArray(v.notes)||!Array.isArray(v.resources)||!Array.isArray(v.roadmapDone)) throw new Error('Backup is missing required data sections.');
  return {schemaVersion:1,lessons:v.lessons,notes:v.notes,resources:v.resources,roadmapDone:v.roadmapDone,activity:Array.isArray(v.activity)?v.activity:[]};
}
export function readData():LocalData { try { const raw=localStorage.getItem(STORAGE_KEY); return raw?validateData(JSON.parse(raw)):emptyData(); } catch { return emptyData(); } }
export function setLessonState(data:LocalData,id:string,patch:Partial<LocalData['lessons'][string]>):LocalData { const old=data.lessons[id]??{status:'not-started' as Status,bookmarked:false,needsReview:false,personalNotes:''};return {...data,lessons:{...data.lessons,[id]:{...old,...patch}}}; }
export function mergeData(current:LocalData,incoming:LocalData,mode:'merge'|'replace'):LocalData { if(mode==='replace')return incoming;return {schemaVersion:1,lessons:{...incoming.lessons,...current.lessons},notes:[...incoming.notes,...current.notes.filter(n=>!incoming.notes.some(x=>x.id===n.id))],resources:[...incoming.resources,...current.resources.filter(r=>!incoming.resources.some(x=>x.id===r.id))],roadmapDone:[...new Set([...incoming.roadmapDone,...current.roadmapDone])],activity:[...new Set([...incoming.activity,...current.activity])].slice(0,100)}; }
export function safeUrl(url:string):boolean { try { return ['https:','http:'].includes(new URL(url).protocol); } catch { return false; } }
export function searchItems<T>(items:T[],query:string,getTitle:(x:T)=>string,getBody:(x:T)=>string):T[] { const q=query.trim().toLocaleLowerCase().replace(/\s+/g,' ');if(!q)return items;return items.map((item,index)=>({item,index,score:getTitle(item).toLocaleLowerCase().includes(q)?2:getBody(item).toLocaleLowerCase().includes(q)?1:0})).filter(x=>x.score>0).sort((a,b)=>b.score-a.score||a.index-b.index).map(x=>x.item); }
