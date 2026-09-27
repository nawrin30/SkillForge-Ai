document.addEventListener("DOMContentLoaded",()=>{
 const list=document.getElementById("skillsList"), form=document.getElementById("skillForm");
 function render(){
  const q=SF.val("skillSearch").toLowerCase(),cat=SF.val("skillCategoryFilter"),sort=SF.val("skillSort");
  let data=SF.state.skills.filter(x=>(!q||x.name.toLowerCase().includes(q))&&(!cat||x.category===cat));
  data.sort((a,b)=>sort==="name"?a.name.localeCompare(b.name):sort==="progress-asc"?a.progress-b.progress:b.progress-a.progress);
  list.innerHTML=data.length?data.map(x=>`<article class="card item-card"><div class="item-top"><div><h3>${SF.esc(x.name)}</h3><p>${SF.esc(x.category)} • ${SF.esc(x.level)}</p></div>${SF.badge(x.level)}</div><div><div class="progress-label"><span>Progress</span><b>${x.progress}%</b></div><div class="progress"><i style="width:${x.progress}%"></i></div></div><div class="meta"><span>Last practiced: ${SF.formatDate(x.practice)}</span></div><div class="item-actions"><button class="btn btn-secondary edit" data-id="${x.id}">Edit</button><button class="btn btn-danger del" data-id="${x.id}">Delete</button></div></article>`).join(""):`<div class="empty-state"><strong>No skills found</strong>Add a skill or change your search/filter.</div>`;
  list.querySelectorAll(".edit").forEach(b=>b.onclick=()=>edit(b.dataset.id));list.querySelectorAll(".del").forEach(b=>b.onclick=()=>del(b.dataset.id));
 }
 function edit(id){const x=SF.state.skills.find(a=>a.id===id);document.getElementById("skillModalTitle").textContent="Edit Skill";["Id","Name","Category","Level","Progress","Practice"].forEach(k=>{const e=document.getElementById("skill"+k);if(e)e.value=k==="Id"?id:x[k.toLowerCase()]??""});SF.openModal("skillModal")}
 function del(id){if(confirm("Delete this skill?")){SF.remove("skills",id);SF.recordActivity("Skill deleted","🗑");SF.toast("Skill deleted");render()}}
 form.addEventListener("submit",e=>{e.preventDefault();const id=SF.val("skillId"),data={name:SF.val("skillName"),category:SF.val("skillCategory"),level:SF.val("skillLevel"),progress:SF.pct(SF.val("skillProgress")),practice:SF.val("skillPractice")};id?SF.update("skills",id,data):SF.add("skills",data);SF.recordActivity(`${data.name} skill updated`,"⚡");SF.closeModals();form.reset();document.getElementById("skillId").value="";document.getElementById("skillProgress").value=50;SF.toast("Skill saved");render()});
 ["skillSearch","skillCategoryFilter","skillSort"].forEach(id=>document.getElementById(id).addEventListener("input",render));render();
});