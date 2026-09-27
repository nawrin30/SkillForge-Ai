document.addEventListener("DOMContentLoaded",()=>{
 const s=SF.state,avg=s.skills.length?Math.round(s.skills.reduce((a,x)=>a+x.progress,0)/s.skills.length):0;
 const courseDone=s.courses.filter(x=>x.status==="Completed").length,projectDone=s.projects.filter(x=>x.status==="Completed").length,roadDone=s.roadmap.filter(x=>x.status==="Completed").length;
 document.getElementById("analyticsStats").innerHTML=[
  ["Overall skill progress",avg+"%","Average across tracked skills"],
  ["Course completion",s.courses.length?Math.round(courseDone/s.courses.length*100)+"%":"0%","Completed courses"],
  ["Project completion",s.projects.length?Math.round(projectDone/s.projects.length*100)+"%":"0%","Completed projects"],
  ["Learning streak",s.activity.streak+" days",`Longest: ${s.activity.longest} days`]
 ].map(x=>`<div class="card stat-card"><span>${x[0]}</span><strong>${x[1]}</strong><small>${x[2]}</small></div>`).join("");
 document.getElementById("analyticsSkills").innerHTML=s.skills.slice().sort((a,b)=>b.progress-a.progress).map(x=>`<div class="analytics-bar"><span>${SF.esc(x.name)}</span><div class="progress"><i style="width:${x.progress}%"></i></div><b>${x.progress}%</b></div>`).join("");
 const donuts=[["Courses",courseDone,s.courses.length],["Projects",projectDone,s.projects.length],["Roadmap",roadDone,s.roadmap.length]];
 document.getElementById("completionChart").innerHTML=donuts.map(x=>{const p=x[2]?Math.round(x[1]/x[2]*100):0;return `<div class="donut-stat"><div class="donut" style="--value:${p}%"><span>${p}%</span></div><b>${x[0]}</b><small>${x[1]}/${x[2]} complete</small></div>`}).join("");
 const days=[];for(let i=13;i>=0;i--){const d=new Date();d.setDate(d.getDate()-i);days.push(d.toISOString().slice(0,10))}const set=new Set(s.activity.days);
 document.getElementById("activityChart").innerHTML=days.map(d=>`<div class="activity-col"><i style="height:${set.has(d)?Math.min(90,35+Math.random()*55):4}%"></i><span>${d.slice(5)}</span></div>`).join("");
});