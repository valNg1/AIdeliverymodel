const projects=[
{id:'adm',name:'AI Delivery Model',status:'In development',cls:'',progress:78,req:'120 / 150',tests:92,deliveries:6,desc:'A reusable operating model to industrialize AI delivery across business units.',icon:'⛓'},
{id:'everskills',name:'EverSKILLS',status:'In prototyping',cls:'proto',progress:35,req:'28 / 80',tests:64,deliveries:4,desc:'AI-powered post-training activation and skills development.',icon:'🎓'},
{id:'everinsight',name:'EverINSIGHT',status:'In development',cls:'',progress:62,req:'95 / 140',tests:88,deliveries:5,desc:'Learning profile, DISC insight and actionable development plan.',icon:'▥'},
{id:'academy',name:'Davidson Academy',status:'In production',cls:'prod',progress:100,req:'42 / 42',tests:98,deliveries:8,desc:'Training resources, learning pathways and reusable best practices.',icon:'◉'},
{id:'compostel',name:'Compostel',status:'In discovery',cls:'discovery',progress:48,req:'36 / 75',tests:74,deliveries:5,desc:'Mobile language-learning product using AI to explain, practice and improve expressions.',icon:'✦'},
{id:'hub',name:'AI Hub',status:'In prototyping',cls:'proto',progress:52,req:'64 / 120',tests:82,deliveries:3,desc:'Portfolio control tower for ADM delivery, governance and industrialization handover.',icon:'⬡'}];

const phases=[
['0. Prepare','Give the workshop context without designing the solution too early','Workshop preparation pack'],
['1. Discover','Lay down a first explicit model that can be challenged','Target outcome, value stream, personas, data, rules and real cases'],
['2. Structure','Turn raw discussion into a structured product model','Workshop outcome and product model'],
['3. Prototype','Produce something concrete as early as possible','Prototype'],
['4. Requirement refinement','Draw better requirements from reactions to the prototype','Feedback classified by type of change'],
['5. Requalify product model','Review the model, not just the screen','Impact analysis, updated reference specification'],
['6. Light implementation','Uncover further requirements with working software','Exploration build, then validation build'],
['7. Business validation','Test the model and software on real cases','Real cases turned into tests'],
['8. Model stability gate','Decide whether exploration continues or production begins','Continue discovery, iterate, or MVP ready'],
['9. MVP freeze','Define exactly what will go into production','MVP contract'],
['10. Production build','Turn the validated model into production software','Production application'],
['11. Validate & release','Verify through automated tests and business cases','Go-live'],
['12. Iterate','Address needs revealed by real use','Extensions using the same method']];

const executive=[
['AI-driven development','Three internal applications, 26 working days','Information systems'],
['The first statement of a need is almost never the right one','Many requirements stay implicit until somebody sees working software. The economics of rapid prototyping have changed.','The observation'],
['From a sequence to a learning loop','Prototype early. Learn fast. Challenge the model. Iterate without fear. Stabilise what matters. Then build for real.','The method, in seven lines'],
['The same questions, two answers','Sequential freezes early; learning freezes when the model stops moving. Working software appears at the first meeting.','The comparison'],
['What was produced','Applications, recorded deliveries, automated tests and screens — read from repository history, not estimated.','Evidence'],
['Three real needs, brought by their business owners','Different domains, same delivery mechanics: business need, rapid prototype, learning, validation and industrialization.','The projects'],
['Going fast excuses nothing','Adapters isolate data sources, tests protect boundaries, quality gates stay mandatory and every delivery is numbered.','Under the hood'],
['Four conditions, without which the loop does not close','Fast business feedback, real cases early, permission to throw away a build, and a quality bar defined up front.','What the method requires'],
['What comes next, and what will need measuring','Delivery speed matters, but the real question is the savings delivered by a shared foundation and shorter learning loops.','What follows'],
['The cost of trying has dropped. The cost of being wrong for a long time has not.','Working software can be shown early; what reaches production has been seen, discussed and corrected first.','What this means']];

const onboarding=[
['Before the workshop','What we are going to do together, and how to get the most out of it','Product owner onboarding'],
['A first model that can be challenged, not a complete one','Start from expected result, ideal process, personas, data, rules and real cases. Technology comes later.','The starting point'],
['From conversation to prototype, in a few days','Prepare → Discover → Structure → Prototype → Refine. Several loops are planned: structured learning, not rework.','How it will work'],
["The session is recorded: let's speak to be understood",'One conversation at a time; be explicit; explain acronyms; introduce yourself; give context; say when you do not know.','Ground rules'],
['What makes a good session','Keep personas apart. Name data sources. Say what is wrong today. Bring real cases.','Four habits'],
['“We need a table.”','Ask why until the real need appears. Describe the job to do, not only the screen you want.','An example'],
['Every piece of information has a status','Confirmed, To confirm, Inferred, Observed request, Solution idea, AI proposal, Later or Out. Nothing becomes confirmed without human agreement.','What we record'],
['There are no wrong answers, only hypotheses to test','No perfection expected. Prototype early. Learn fast. Stabilise the model one iteration at a time.','Let’s start']];

function projectCard(p){
 return '<article class="project card"><div class="project-title"><div class="iconbox">'+p.icon+'</div><div><h3>'+p.name+'</h3><span class="status '+p.cls+'">'+p.status+'</span></div></div><p>'+p.desc+'</p><div class="metrics"><div><b>'+p.progress+'%</b><small>Progress</small></div><div><b>'+p.req+'</b><small>Requirements</small></div><div><b>'+p.tests+'%</b><small>Test coverage</small></div><div><b>'+p.deliveries+'</b><small>Deliveries</small></div></div><div class="progress"><span style="width:'+p.progress+'%"></span></div><div class="foot"><small>Last activity: recent</small><button class="open" data-open-project>Open →</button></div></article>';
}
document.getElementById('project-grid').innerHTML=projects.map(projectCard).join('');

const steps=['Context','Clarify','Prototype','Human Gate','Build','Test','Accept','Industrialize'];
const stepNotes=['Connect sources','Intent & scope','Make tangible','Review & decide','Develop','Prove','Go / no-go','Deploy & scale'];
document.getElementById('adm-stepper').innerHTML=steps.map((s,i)=>'<div class="step"><div class="dot '+(i<4?'done':'')+'">'+(i+1)+'</div><b>'+s+'</b><small>'+stepNotes[i]+'</small></div>').join('');

document.getElementById('phase-table').innerHTML='<div class="phase head"><b>Phase</b><b>Objective</b><b>Output</b></div>'+phases.map(p=>'<div class="phase"><span>'+p[0]+'</span><span>'+p[1]+'</span><span>'+p[2]+'</span></div>').join('');

document.getElementById('usage-body').innerHTML=projects.map((p,i)=>'<div class="tr"><span>'+p.name+'</span><span>'+(i%3===0?'1 workshop':'—')+'</span><span>'+(12+i*7)+'</span><span>$'+(45+i*31)+'</span><span>'+(2+i)+' h '+(i*7)+' m</span></div>').join('');

function showPage(id){
 document.querySelectorAll('.pageview').forEach(x=>x.classList.remove('active'));
 document.getElementById(id).classList.add('active');
 document.querySelectorAll('nav button').forEach(x=>x.classList.toggle('active',x.dataset.page===id));
 window.scrollTo(0,0);
}
document.querySelectorAll('nav button').forEach(b=>b.addEventListener('click',()=>showPage(b.dataset.page)));
document.querySelectorAll('[data-open-project]').forEach(b=>b.addEventListener('click',()=>showPage('project')));

document.querySelectorAll('.tabs button').forEach(b=>b.addEventListener('click',()=>{
 document.querySelectorAll('.tabs button').forEach(x=>x.classList.remove('active'));
 b.classList.add('active');
 document.querySelectorAll('.tabview').forEach(x=>x.style.display='none');
 document.getElementById(b.dataset.tab).style.display='block';
}));

let deck='exec',slideIndex=0;
function renderSlide(){
 const arr=deck==='exec'?executive:onboarding;
 const s=arr[slideIndex];
 const dark=slideIndex%3===0?' dark':'';
 let loop='';
 if(slideIndex===2){
  const items=deck==='exec'?['Business problem','Rapid prototype','Business reaction','Corrected model']:['Prepare','Discover','Structure','Prototype','Refine'];
  loop='<div class="loop">'+items.map((x,i)=>'<span>'+x+'</span>'+(i<items.length-1?'→':'')).join('')+'</div>';
 }
 document.getElementById('slide').className='slide'+dark;
 document.getElementById('slide').innerHTML='<div class="slide-kicker">'+s[2]+'</div><h1>'+s[0]+'</h1><p>'+s[1]+'</p>'+loop+'<div class="slide-foot"><span>'+(deck==='exec'?'Executive presentation':'Product Owner onboarding')+'</span><span>'+(slideIndex+1)+' / '+arr.length+'</span></div>';
 document.getElementById('exec-btn').classList.toggle('active',deck==='exec');
 document.getElementById('onboard-btn').classList.toggle('active',deck==='onboarding');
}
document.getElementById('exec-btn').addEventListener('click',()=>{deck='exec';slideIndex=0;renderSlide()});
document.getElementById('onboard-btn').addEventListener('click',()=>{deck='onboarding';slideIndex=0;renderSlide()});
document.getElementById('prev').addEventListener('click',()=>{const arr=deck==='exec'?executive:onboarding;slideIndex=(slideIndex-1+arr.length)%arr.length;renderSlide()});
document.getElementById('next').addEventListener('click',()=>{const arr=deck==='exec'?executive:onboarding;slideIndex=(slideIndex+1)%arr.length;renderSlide()});
renderSlide();