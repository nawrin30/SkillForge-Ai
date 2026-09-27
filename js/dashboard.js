document.addEventListener("DOMContentLoaded",()=>{
  const s=SF.state,u=s.user;
  document.getElementById("welcomeName").textContent=`Welcome back, ${u.name.split(" ")[0]}!`;
  const avg=s.skills.length?Math.round(s.skills.reduce((a,x)=>a+Number(x.progress),0)/s.skills.length):0;
  const activeCourses=s.courses.filter(x=>x.status==="In Progress").length;
  const completedProjects=s.projects.filter(x=>x.status==="Completed").length;
  const stats=[
    ["Overall progress",avg+"%","Across your skills"],
    ["Skills tracked",s.skills.length,"Keep practicing"],
    ["Active courses",activeCourses,"In progress"],
    ["Projects completed",completedProjects,"Portfolio evidence"]
  ];
  document.getElementById("dashboardStats").innerHTML=stats.map(x=>`<div class="card stat-card"><span>${x[0]}</span><strong>${x[1]}</strong><small>${x[2]}</small></div>`).join("");
  document.getElementById("skillBars").innerHTML=s.skills.slice().sort((a,b)=>b.progress-a.progress).map(x=>`<div class="skill-bar-row"><span>${SF.esc(x.name)}</span><div class="progress"><i style="width:${SF.pct(x.progress)}%"></i></div><b>${x.progress}%</b></div>`).join("")||`<div class="empty-state">No skills yet.</div>`;
  const goal=s.goals.find(x=>x.type==="Career"&&x.status==="Active")||s.goals.find(x=>x.status==="Active");
  document.getElementById("activeGoal").innerHTML=goal?`<div class="goal-highlight"><strong>${SF.esc(goal.title)}</strong><p>${SF.esc(goal.type)} • Due ${SF.formatDate(goal.deadline)}</p><div class="progress-label"><span>Progress</span><b>${goal.progress}%</b></div><div class="progress"><i style="width:${goal.progress}%"></i></div></div>`:`<div class="empty-state">Create your first career goal.</div>`;
  const wg=s.goals.find(x=>x.type==="Weekly"&&x.status==="Active");
  document.getElementById("weeklyGoal").innerHTML=wg?`<div class="goal-highlight"><strong>${SF.esc(wg.title)}</strong><p>Due ${SF.formatDate(wg.deadline)} • ${wg.priority} priority</p><div class="progress-label"><span>Weekly progress</span><b>${wg.progress}%</b></div><div class="progress"><i style="width:${wg.progress}%"></i></div></div>`:`<div class="empty-state">Add a weekly goal.</div>`;
  document.getElementById("recentActivity").innerHTML=s.activityLog.slice(0,5).map(a=>`<div class="activity-item"><span class="activity-icon">${a.icon}</span><div><b>${SF.esc(a.text)}</b><small>${SF.formatDate(a.date)}</small></div></div>`).join("")||`<div class="empty-state">No activity yet.</div>`;
  SF.calculateStreak(); SF.save();
});