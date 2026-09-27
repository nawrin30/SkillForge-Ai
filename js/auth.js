document.addEventListener("DOMContentLoaded",()=>{
  const form=document.getElementById("loginForm"); if(!form)return;
  form.addEventListener("submit",e=>{
    e.preventDefault();
    const email=SF.val("loginEmail"), password=SF.val("loginPassword");
    if(!email || !email.includes("@")) return SF.toast("Enter a valid email.","error");
    if(password.length<6) return SF.toast("Password must contain at least 6 characters.","error");
    SF.state.auth=true; SF.state.user.email=email; localStorage.setItem("skillforge_v1",JSON.stringify(SF.state));
    SF.toast("Login successful"); setTimeout(()=>location.href="dashboard.html",450);
  });
});