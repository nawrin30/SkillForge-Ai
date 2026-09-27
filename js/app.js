
const SF = (() => {
  const KEY = "skillforge_v1";
  const defaults = {
    auth:false, user:{email:"demo@skillforge.app",name:"Nawrin Tarannum",university:"Daffodil International University",department:"Software Engineering",semester:"3rd Year",careerGoal:"Full Stack Developer",bio:"Software Engineering student focused on building practical full-stack projects and growing consistently.",skills:"JavaScript, HTML, CSS, SQL, Git & GitHub",github:"https://github.com/nawrin30",linkedin:""},
    theme:"light", notifications:true,
    goals:[
      {id:"g1",title:"Build a production-style full-stack project",type:"Weekly",deadline:"2026-10-02",priority:"High",progress:65,status:"Active"},
      {id:"g2",title:"Complete JavaScript revision",type:"Monthly",deadline:"2026-10-31",priority:"Medium",progress:40,status:"Active"},
      {id:"g3",title:"Prepare internship-ready portfolio",type:"Career",deadline:"2026-12-15",priority:"High",progress:30,status:"Active"}
    ],
    skills:[
      {id:"s1",name:"HTML5",category:"Web Development",level:"Advanced",progress:90,practice:"2026-09-22"},
      {id:"s2",name:"CSS3",category:"Web Development",level:"Advanced",progress:82,practice:"2026-09-21"},
      {id:"s3",name:"JavaScript",category:"Programming",level:"Intermediate",progress:72,practice:"2026-09-25"},
      {id:"s4",name:"SQL",category:"Database",level:"Intermediate",progress:64,practice:"2026-09-19"},
      {id:"s5",name:"Git & GitHub",category:"Tools",level:"Intermediate",progress:82,practice:"2026-09-24"},
      {id:"s6",name:"Problem Solving",category:"Soft Skills",level:"Intermediate",progress:58,practice:"2026-09-18"}
    ],
    roadmap:[
      {id:"r1",topic:"HTML",description:"Semantic structure, forms and accessibility basics.",status:"Completed",resources:"MDN HTML"},
      {id:"r2",topic:"CSS",description:"Layouts, responsive design and reusable UI patterns.",status:"Completed",resources:"MDN CSS"},
      {id:"r3",topic:"JavaScript",description:"DOM, events, arrays, objects, async and APIs.",status:"In Progress",resources:"MDN JavaScript"},
      {id:"r4",topic:"Git & GitHub",description:"Branches, commits, pull requests and portfolio hygiene.",status:"Not Started",resources:"GitHub Docs"},
      {id:"r5",topic:"Responsive Design",description:"Mobile-first layouts, accessibility and UI polish.",status:"Not Started",resources:"web.dev"},
      {id:"r6",topic:"React",description:"Components, state, props and routing after strong JS fundamentals.",status:"Not Started",resources:"React Docs"},
      {id:"r7",topic:"REST APIs",description:"HTTP methods, JSON, authentication concepts and integration.",status:"Not Started",resources:"MDN HTTP"},
      {id:"r8",topic:"Testing",description:"Unit, integration and UI testing fundamentals.",status:"Not Started",resources:"Testing Library"},
      {id:"r9",topic:"Portfolio Projects",description:"Build and document 2–3 strong projects with real use cases.",status:"Not Started",resources:"SkillForge Projects"},
      {id:"r10",topic:"Internship Preparation",description:"Resume, GitHub, LinkedIn, interview and application preparation.",status:"Not Started",resources:"Career checklist"}
    ],
    courses:[
      {id:"c1",title:"JavaScript Algorithms and Data Structures",platform:"freeCodeCamp",instructor:"freeCodeCamp",category:"Programming",start:"2026-08-20",target:"2026-10-15",progress:58,status:"In Progress"},
      {id:"c2",title:"Git & GitHub Essentials",platform:"Cisco / NetAcad",instructor:"Cisco Networking Academy",category:"Tools",start:"2026-09-01",target:"2026-09-30",progress:75,status:"In Progress"},
      {id:"c3",title:"SQL Fundamentals",platform:"Self Study",instructor:"",category:"Database",start:"2026-07-15",target:"2026-09-20",progress:100,status:"Completed"},
      {id:"c4",title:"Python for Everybody",platform:"Coursera",instructor:"University of Michigan",category:"Programming",start:"2026-10-01",target:"2026-11-30",progress:0,status:"Not Started"}
    ],
    resources:[
      {id:"res1",title:"MDN Web Docs",type:"Documentation",category:"Web Development",url:"https://developer.mozilla.org/",description:"Reliable reference for HTML, CSS and JavaScript.",bookmarked:true},
      {id:"res2",title:"JavaScript.info",type:"Website",category:"JavaScript",url:"https://javascript.info/",description:"Structured JavaScript tutorials from fundamentals to advanced topics.",bookmarked:true},
      {id:"res3",title:"freeCodeCamp",type:"Practice",category:"Programming",url:"https://www.freecodecamp.org/",description:"Interactive coding curriculum and projects.",bookmarked:false},
      {id:"res4",title:"GitHub Skills",type:"Practice",category:"Git & GitHub",url:"https://skills.github.com/",description:"Hands-on GitHub learning paths.",bookmarked:false}
    ],
    projects:[
      {id:"p1",name:"SkillForge",description:"Career and skill development dashboard built with browser-native technologies.",tech:"HTML, CSS, Vanilla JavaScript, LocalStorage",github:"https://github.com/",live:"",status:"In Progress",start:"2026-09-20",completion:""},
      {id:"p2",name:"TaskFlow",description:"Smart task and project management interface with local persistence.",tech:"HTML, CSS, JavaScript",github:"https://github.com/",live:"",status:"Completed",start:"2026-08-12",completion:"2026-08-25"},
      {id:"p3",name:"Recipe Web Page",description:"Responsive recipe browsing interface with polished UI.",tech:"HTML, CSS, JavaScript",github:"https://github.com/",live:"",status:"Completed",start:"2026-07-10",completion:"2026-07-17"}
    ],
    certificates:[
      {id:"cr1",name:"Office Management Training",platform:"Training Program",issuer:"Training Provider",date:"2025-12-10",credential:"",url:"",category:"Productivity"},
      {id:"cr2",name:"Typing Speed Competition",platform:"Competition",issuer:"University / Organization",date:"2025-11-20",credential:"",url:"",category:"Professional Skills"}
    ],
    activity:{days:["2026-09-13","2026-09-15","2026-09-16","2026-09-18","2026-09-19","2026-09-21","2026-09-22","2026-09-24","2026-09-25"],streak:2,longest:5},
    activityLog:[
      {text:"JavaScript skill updated to 72%",date:"2026-09-25",icon:"⚡"},
      {text:"Git & GitHub practice recorded",date:"2026-09-24",icon:"🔧"},
      {text:"TaskFlow marked completed",date:"2026-08-25",icon:"✓"},
      {text:"SQL course completed",date:"2026-09-20",icon:"📚"}
    ]
  };
  function clone(o){return JSON.parse(JSON.stringify(o))}
  function load(){let raw=localStorage.getItem(KEY);if(!raw){localStorage.setItem(KEY,JSON.stringify(defaults));return clone(defaults)}try{return {...clone(defaults),...JSON.parse(raw)}}catch{return clone(defaults)}}
  let state=load();
  function save(){localStorage.setItem(KEY,JSON.stringify(state))}
  function uid(prefix="id"){return prefix+"_"+Date.now().toString(36)+"_"+Math.random().toString(36).slice(2,7)}
  function get(k){return state[k]}
  function set(k,v){state[k]=v;save()}
  function add(k,item){state[k].push({...item,id:uid(k.slice(0,2))});save();return state[k][state[k].length-1]}
  function update(k,id,patch){state[k]=state[k].map(x=>x.id===id?{...x,...patch}:x);save()}
  function remove(k,id){state[k]=state[k].filter(x=>x.id!==id);save()}
  function reset(){localStorage.removeItem(KEY);location.href="login.html"}
  function toast(msg,type="success"){const c=document.getElementById("toastContainer");if(!c)return;const d=document.createElement("div");d.className="toast "+type;d.textContent=msg;c.appendChild(d);setTimeout(()=>d.remove(),2800)}
  function esc(v){return String(v??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}
  function pct(v){return Math.max(0,Math.min(100,Number(v)||0))}
  function formatDate(d){if(!d)return "—";const x=new Date(d+"T00:00:00");return x.toLocaleDateString(undefined,{day:"2-digit",month:"short",year:"numeric"})}
  function openModal(id){document.getElementById(id)?.classList.add("open")}
  function closeModals(){document.querySelectorAll(".modal.open").forEach(m=>m.classList.remove("open"))}
  function initCommon(){
    document.querySelectorAll("[data-modal]").forEach(b=>b.addEventListener("click",()=>openModal(b.dataset.modal)));
    document.querySelectorAll(".modal-close,.modal-cancel").forEach(b=>b.addEventListener("click",closeModals));
    document.querySelectorAll(".modal").forEach(m=>m.addEventListener("click",e=>{if(e.target===m)m.classList.remove("open")}));
    const side=document.getElementById("sidebar");
    if(side){
      side.innerHTML=`<a class="brand" href="dashboard.html"><span class="brand-mark">SF</span><span>SkillForge</span></a>
      <div class="nav-section">WORKSPACE</div><nav class="side-nav">
      <a href="dashboard.html" data-nav="dashboard"><span class="nav-icon">⌂</span>Dashboard</a>
      <a href="skills.html" data-nav="skills"><span class="nav-icon">◈</span>My Skills</a>
      <a href="roadmap.html" data-nav="roadmap"><span class="nav-icon">⌁</span>Career Roadmap</a>
      <a href="resources.html" data-nav="resources"><span class="nav-icon">▣</span>Learning Resources</a>
      <a href="courses.html" data-nav="courses"><span class="nav-icon">▤</span>Courses</a>
      <a href="projects.html" data-nav="projects"><span class="nav-icon">◇</span>Projects</a>
      <a href="certificates.html" data-nav="certificates"><span class="nav-icon">✦</span>Certificates</a>
      <a href="goals.html" data-nav="goals"><span class="nav-icon">◎</span>Goals</a>
      </nav><div class="nav-section">INSIGHTS</div><nav class="side-nav">
      <a href="analytics.html" data-nav="analytics"><span class="nav-icon">▥</span>Progress Analytics</a>
      <a href="profile.html" data-nav="profile"><span class="nav-icon">◉</span>Profile</a>
      <a href="settings.html" data-nav="settings"><span class="nav-icon">⚙</span>Settings</a></nav>`;
      const page=document.body.dataset.page;side.querySelector(`[data-nav="${page}"]`)?.classList.add("active");
      document.getElementById("sidebarToggle")?.addEventListener("click",()=>side.classList.toggle("open"));
    }
    document.getElementById("themeButton")?.addEventListener("click",toggleTheme);
    document.getElementById("logoutButton")?.addEventListener("click",logout);
    document.querySelectorAll(".password-toggle").forEach(b=>b.addEventListener("click",()=>{const i=document.getElementById(b.dataset.target);i.type=i.type==="password"?"text":"password";b.textContent=i.type==="password"?"Show":"Hide"}));
    applyTheme();
    initProfile();
    initSettings();
  }
  function applyTheme(){document.body.classList.toggle("dark",state.theme==="dark");const t=document.getElementById("themeToggle");if(t)t.checked=state.theme==="dark"}
  function toggleTheme(){state.theme=state.theme==="dark"?"light":"dark";save();applyTheme();toast(`${state.theme==="dark"?"Dark":"Light"} mode enabled`)}
  function logout(){state.auth=false;save();location.href="login.html"}
  function requireAuth(){if(!state.auth && !location.pathname.endsWith("login.html") && !location.pathname.endsWith("index.html"))location.href="login.html"}
  function initProfile(){const f=document.getElementById("profileForm");if(!f)return;const u=state.user;["Name","University","Department","Semester","CareerGoal","Github","Linkedin","Bio","Skills"].forEach(x=>{const el=document.getElementById("profile"+x+(x==="Github"||x==="Linkedin"?"Input":""));if(el)el.value=x==="Github"?u.github:x==="Linkedin"?u.linkedin:x==="CareerGoal"?u.careerGoal:x==="Skills"?u.skills||"":u[x.charAt(0).toLowerCase()+x.slice(1)]||""});renderProfile();f.addEventListener("submit",e=>{e.preventDefault();state.user={...state.user,name:val("profileName"),university:val("profileUniversity"),department:val("profileDepartment"),semester:val("profileSemester"),careerGoal:val("profileCareerGoal"),github:val("profileGithubInput"),linkedin:val("profileLinkedinInput"),bio:val("profileBio"),skills:val("profileSkills")};save();renderProfile();toast("Profile saved")})}
  function renderProfile(){const u=state.user;const setText=(id,v)=>{const e=document.getElementById(id);if(e)e.textContent=v};setText("profileDisplayName",u.name);setText("profileCareer",u.careerGoal||"Software Engineering Student");setText("profileGithub",u.github?"GitHub profile":"GitHub not added");setText("profileLinkedin",u.linkedin?"LinkedIn profile":"LinkedIn not added");setText("profileAvatar",(u.name||"SF").split(" ").map(x=>x[0]).slice(0,2).join("").toUpperCase())}
  function initSettings(){document.getElementById("themeToggle")?.addEventListener("change",e=>{state.theme=e.target.checked?"dark":"light";save();applyTheme()});document.getElementById("notificationToggle")?.addEventListener("change",e=>{state.notifications=e.target.checked;save();toast("Notification preference saved")});document.getElementById("exportData")?.addEventListener("click",()=>{const blob=new Blob([JSON.stringify(state,null,2)],{type:"application/json"});const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="skillforge-data.json";a.click();URL.revokeObjectURL(a.href);toast("Data exported as JSON")});document.getElementById("resetData")?.addEventListener("click",()=>{if(confirm("Reset all SkillForge data? This cannot be undone."))reset()});document.getElementById("settingsLogout")?.addEventListener("click",logout)}
  function val(id){return document.getElementById(id)?.value?.trim()||""}
  function recordActivity(text,icon="•"){state.activityLog.unshift({text,date:new Date().toISOString().slice(0,10),icon});state.activityLog=state.activityLog.slice(0,10);save()}
  function markLearningDay(date=new Date().toISOString().slice(0,10)){if(!state.activity.days.includes(date)){state.activity.days.push(date);state.activity.days=state.activity.days.slice(-120);calculateStreak();save()}}
  function calculateStreak(){const days=new Set(state.activity.days);let cur=0;let d=new Date();while(days.has(d.toISOString().slice(0,10))){cur++;d.setDate(d.getDate()-1)}let longest=0,run=0,prev=null;[...days].sort().forEach(s=>{const x=new Date(s+"T00:00:00");if(prev&&((x-prev)/86400000)===1)run++;else run=1;prev=x;longest=Math.max(longest,run)});state.activity.streak=cur;state.activity.longest=Math.max(longest,state.activity.longest||0)}
  function badge(status){const cls=status==="Completed"?"success":status==="In Progress"||status==="Active"?"warning":status==="Planning"?"":"danger";return `<span class="badge ${cls}">${esc(status)}</span>`}
  document.addEventListener("DOMContentLoaded",()=>{initCommon();requireAuth()});
  return {state,get,set,add,update,remove,save,uid,toast,esc,pct,formatDate,openModal,closeModals,recordActivity,markLearningDay,calculateStreak,badge,val,reset};
})();
