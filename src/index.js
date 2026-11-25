const css = [
":root{color-scheme:light;--ink:#172b29;--muted:#71817d;--line:#e3e9e4;--paper:#fbfcfa;--green:#174c3d;--mint:#eaf3ed;--gold:#b58b4a;font-family:Inter,Pretendard,'Noto Sans KR',system-ui,sans-serif}",
"*{box-sizing:border-box}body{margin:0;background:#f4f6f2;color:var(--ink);font-size:13px;line-height:1.65}button,input,select,textarea{font:inherit}a{color:inherit;text-decoration:none}.top{height:58px;background:#fff;border-bottom:1px solid var(--line);display:flex;align-items:center;justify-content:space-between;padding:0 max(22px,calc((100% - 1160px)/2));position:sticky;top:0;z-index:5}.brand{font-weight:800;letter-spacing:.12em;font-size:12px}.brand b{background:var(--green);color:#fff;padding:7px 8px;border-radius:8px;margin-right:8px}.nav{display:flex;gap:6px;align-items:center}.nav a{padding:7px 11px;border-radius:8px;color:#53635e}.nav a.active,.btn{background:var(--green);color:#fff}.wrap{max-width:1160px;margin:30px auto;padding:0 20px}.hero{background:linear-gradient(120deg,#173e35,#235c49);color:#fff;padding:26px 30px;border-radius:16px;display:flex;justify-content:space-between;align-items:center;gap:20px}.eyebrow{font-size:10px;letter-spacing:.15em;color:#b9d3c5;font-weight:700}.hero h1{font-size:22px;line-height:1.35;margin:8px 0;font-weight:750}.hero p{color:#d4e3dc;margin:0;max-width:620px}.hero-stat{font-size:11px;color:#d4e3dc;text-align:right}.hero-stat strong{display:block;font-size:28px;color:#fff}.grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;margin:18px 0}.stat,.panel,.deal,.auth{background:#fff;border:1px solid var(--line);border-radius:13px;padding:16px}.stat span{font-size:11px;color:var(--muted)}.stat strong{display:block;font-size:22px;margin-top:5px;letter-spacing:-.03em}.section{display:flex;justify-content:space-between;align-items:center;margin:25px 0 11px}.section h2{font-size:15px;margin:0}.muted{color:var(--muted);font-size:11px}.btn{display:inline-flex;align-items:center;justify-content:center;border:0;border-radius:8px;padding:8px 13px;font-weight:650;cursor:pointer}.btn.light{background:#edf3ef;color:var(--green)}.btn.line{background:#fff;color:var(--ink);border:1px solid var(--line)}.cards{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.deal{transition:.18s}.deal:hover{border-color:#a9c4b4;transform:translateY(-1px)}.deal h3{font-size:14px;margin:6px 0}.tag{display:inline-block;background:var(--mint);color:var(--green);padding:3px 7px;border-radius:5px;font-size:10px;font-weight:700}.deal-meta{display:flex;gap:14px;color:var(--muted);font-size:11px;margin-top:12px}.formgrid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.field{display:flex;flex-direction:column;gap:5px}.field.full{grid-column:1/-1}.field label{font-size:11px;color:#52635d;font-weight:650}input,select,textarea{width:100%;border:1px solid #dce5de;border-radius:8px;padding:9px 10px;background:#fff;color:var(--ink);outline:none}input:focus,select:focus,textarea:focus{border-color:#6f9c84;box-shadow:0 0 0 3px #eaf3ed}textarea{min-height:110px;resize:vertical}.actions{display:flex;gap:8px;align-items:center;margin-top:14px}.table{width:100%;border-collapse:collapse}.table th,.table td{text-align:left;padding:10px;border-bottom:1px solid var(--line);font-size:12px}.table th{color:var(--muted);font-weight:600}.risk{display:flex;justify-content:space-between;gap:10px;padding:11px 0;border-bottom:1px solid var(--line)}.risk:last-child{border:0}.score{font-weight:750;color:#9a5b2d}.report-body{padding:28px 34px;line-height:1.85}.report-h{font-size:16px;margin:24px 0 10px;color:#174c3d}.report-h:first-child{margin-top:0}.report-p{font-size:13px;margin:7px 0;white-space:pre-wrap}.report-list{padding-left:22px;margin:8px 0 16px}.report-list li{padding:3px 0}.report-rule{border:0;border-top:1px solid var(--line);margin:22px 0}.report-body strong{font-weight:750;color:#173e35}.auth{max-width:420px;margin:70px auto;padding:25px}.auth h1{font-size:19px;margin:0 0 4px}.auth .field{margin:13px 0}.notice{padding:10px 12px;border-radius:8px;background:#fff6e8;color:#875a22;font-size:11px}.footer{padding:28px 20px;text-align:center;color:#85918b;font-size:10px;margin-top:50px}.landing{max-width:1160px;margin:0 auto;padding:64px 22px 30px}.landing-hero{border-radius:24px;padding:65px 7%;background:radial-gradient(circle at 85% 20%,#36725b 0,#214f40 32%,#142f2a 78%);color:#fff;min-height:390px;display:flex;flex-direction:column;justify-content:center}.landing-hero h1{font-size:clamp(30px,4vw,48px);line-height:1.25;letter-spacing:-.04em;margin:20px 0 12px}.landing-hero h1 em{font-style:normal;color:#b9d6bf}.landing-hero p{max-width:610px;color:#d2e0d8;font-size:14px}.landing-foot{margin-top:55px;color:#b6c9bf;font-size:10px;letter-spacing:.12em}.landing-features{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-top:18px}.landing-features>div{background:#fff;border:1px solid var(--line);border-radius:13px;padding:18px}.landing-features span{display:block;color:#9aab9e;font-size:10px;margin-bottom:20px}.landing-features b{font-size:13px}.landing-features p{color:var(--muted);font-size:11px;margin-bottom:0}.chart-grid{display:grid;grid-template-columns:1.25fr 1fr;gap:12px;margin:15px 0}.chart-panel{background:#fff;border:1px solid var(--line);border-radius:13px;padding:18px}.chart-title{font-size:13px;font-weight:700;margin-bottom:14px}.bar-row{display:grid;grid-template-columns:90px 1fr 30px;gap:9px;align-items:center;margin:11px 0;font-size:11px}.bar-track{height:9px;background:#edf1ed;border-radius:10px;overflow:hidden}.bar-fill{height:100%;background:linear-gradient(90deg,#245944,#8eb69a);border-radius:10px}.donut-wrap{display:flex;align-items:center;gap:20px}.donut{width:112px;height:112px;border-radius:50%;background:conic-gradient(#245944 var(--p1),#8eb69a var(--p1) var(--p2),#d8c59e var(--p2) var(--p3),#e7ece7 var(--p3));position:relative;flex:none}.donut:after{content:'';position:absolute;inset:18px;background:#fff;border-radius:50%}.legend{font-size:11px;color:var(--muted);line-height:2}@media(max-width:760px){.landing{padding:25px 13px}.landing-hero{min-height:340px;padding:30px 22px}.landing-features{grid-template-columns:repeat(2,1fr)}.chart-grid{grid-template-columns:1fr}}@media(max-width:760px){.grid{grid-template-columns:repeat(2,1fr)}.cards,.formgrid{grid-template-columns:1fr}.hero{padding:21px;align-items:flex-start;flex-direction:column}.hero-stat{text-align:left}.top{padding:0 14px}.nav a{padding:6px 7px;font-size:11px}.wrap{padding:0 13px;margin:18px auto}}"
].join("");
const enc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const json = (data,status=200) => new Response(JSON.stringify(data),{status,headers:{"content-type":"application/json;charset=utf-8","cache-control":"no-store"}});
const page = (title,body,me=null,active="") => new Response([
"<!doctype html><html lang='ko'><head><meta charset='utf-8'><meta name='viewport' content='width=device-width,initial-scale=1'><meta name='theme-color' content='#174c3d'><title>",enc(title)," · 허브스튜디오 11</title><style>",css,"</style></head><body>",
"<header class='top'><a class='brand' href='/'> <b>11</b> 허브스튜디오</a><nav class='nav'>",
me ? "<a class='"+(active==="home"?"active":"")+"' href='/'>대시보드</a><a class='"+(active==="deals"?"active":"")+"' href='/deals'>투자 딜</a><a class='"+(active==="new"?"active":"")+"' href='/deals/new'>딜 등록</a><a class='"+(active==="analyses"?"active":"")+"' href='/analyses'>AI 분석 이력</a><a class='"+(active==="risk"?"active":"")+"' href='/risks'>위험 관리</a><a href='/logout'>로그아웃</a>" : "<a href='/login'>로그인</a><a class='active' href='/signup'>회원가입</a>",
"</nav></header>",body,"<footer class='footer'>허브스튜디오 11 · 투자와 사업의 판단을 더 명확하게</footer></body></html>"
].join(""),{headers:{"content-type":"text/html;charset=utf-8","cache-control":"no-store"}});
const one = async (db,sql,...v) => db.prepare(sql).bind(...v).first();
const all = async (db,sql,...v) => (await db.prepare(sql).bind(...v).all()).results || [];
const run = async (db,sql,...v) => db.prepare(sql).bind(...v).run();
const uid = () => crypto.randomUUID();
const cookie = req => (req.headers.get("cookie")||"").split(";").map(x=>x.trim()).find(x=>x.startsWith("hs11_session="))?.slice(13)||"";
const setCookie = (id,age) => "hs11_session="+id+"; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age="+age;
async function digest(password,salt){
 const key=await crypto.subtle.importKey("raw",new TextEncoder().encode(password),"PBKDF2",false,["deriveBits"]);
 const bits=await crypto.subtle.deriveBits({name:"PBKDF2",salt:new TextEncoder().encode(salt),iterations:100000,hash:"SHA-256"},key,256);
 return Array.from(new Uint8Array(bits)).map(x=>x.toString(16).padStart(2,"0")).join("");
}
async function currentUser(req,db){
 const sid=cookie(req);if(!sid)return null;
 return one(db,"SELECT u.id,u.email,u.name FROM sessions s JOIN users u ON u.id=s.user_id WHERE s.id=? AND s.expires_at>datetime('now')",sid);
}
function authPage(signup,error=""){
 const heading=signup?"계정 만들기":"다시 오셨군요";
 const form="<main class='auth'><span class='eyebrow' style='color:#63816f'>HUB STUDIO 11</span><h1>"+heading+"</h1><p class='muted'>투자·사업분석 업무를 한곳에서 관리하세요.</p>"+(error?"<p class='notice'>"+enc(error)+"</p>":"")+"<form method='post' action='/auth/"+(signup?"signup":"login")+"'>"+(signup?"<div class='field'><label>이름</label><input name='name' required maxlength='50' autocomplete='name'></div>":"")+"<div class='field'><label>이메일</label><input name='email' type='email' required maxlength='254' autocomplete='email'></div><div class='field'><label>비밀번호 · 최대 10자</label><input name='password' type='password' required maxlength='10' autocomplete='"+(signup?"new-password":"current-password")+"'></div>"+(signup?"<p class='muted'>비밀번호는 최대 10자로 설정해 주세요. 11자 이상은 허용하지 않습니다.</p>":"")+"<button class='btn' style='width:100%;margin-top:8px'>"+(signup?"회원가입":"로그인")+"</button></form><p class='muted' style='margin-top:16px'>"+(signup?"이미 계정이 있나요? <a href='/login'>로그인</a>":"처음이신가요? <a href='/signup'>회원가입</a>")+"</p></main>";
 return page(signup?"회원가입":"로그인",form);
}
const sectors=["데이터센터","에너지·발전","인프라","부동산","기업금융","산업·제조","기타"];
const stages=["초기 검토","실사 진행","심사 작성","승인 대기","승인","집행","보류","중단"];
function select(name,values,current){return "<select name='"+name+"'>"+values.map(v=>"<option "+(v===current?"selected":"")+" value='"+enc(v)+"'>"+enc(v)+"</option>").join("")+"</select>";}
async function landingPage(){
 const body="<main class='landing'><section class='landing-hero'><div class='eyebrow'>AI INVESTMENT WORKSPACE · HUB STUDIO 11</div><h1>투자 판단의 모든 과정을<br><em>하나의 흐름으로.</em></h1><p>딜 발굴부터 사업성 검토, 위험 평가, 금융 분석과 종합 투자심사보고서까지. 투자심사 업무를 위한 전문 워크스페이스.</p><div class='actions'><a class='btn' href='/login'>로그인</a><a class='btn light' href='/signup'>시작하기</a></div><div class='landing-foot'>투자심사 · 프로젝트 금융 · 인프라 · 데이터센터 · 에너지</div></section><section class='landing-features'><div><span>01</span><b>투자 딜 관리</b><p>프로젝트 파이프라인과 진행 단계를 한곳에서 관리합니다.</p></div><div><span>02</span><b>AI 투자 분석</b><p>프로젝트 자료를 바탕으로 심사 쟁점과 검토 의견을 정리합니다.</p></div><div><span>03</span><b>위험 관리</b><p>위험요인을 평가하고 대응 방안과 추가 자료 요청을 관리합니다.</p></div><div><span>04</span><b>심사보고서</b><p>분석 이력을 저장하고 종합 투자심사보고서 초안을 작성합니다.</p></div></section></main>";
 return page("AI 투자금융 스튜디오",body);
}
async function dashboard(db,me){
 const deals=await all(db,"SELECT * FROM deals WHERE user_id=? ORDER BY updated_at DESC LIMIT 8",me.id);
 const stats=await one(db,"SELECT COUNT(*) total,SUM(CASE WHEN amount>0 THEN 1 ELSE 0 END) amount_count,SUM(CASE WHEN stage IN ('초기 검토','실사 진행','심사 작성','승인 대기') THEN 1 ELSE 0 END) active FROM deals WHERE user_id=?",me.id);
 const risk=await one(db,"SELECT COUNT(*) n FROM risks WHERE user_id=?",me.id);
 const stagesData=await all(db,"SELECT stage,COUNT(*) n FROM deals WHERE user_id=? GROUP BY stage ORDER BY n DESC",me.id);
 const sectorsData=await all(db,"SELECT sector,COUNT(*) n FROM deals WHERE user_id=? GROUP BY sector ORDER BY n DESC LIMIT 5",me.id);
 const recentAnalyses=await all(db,"SELECT a.id,a.model,a.created_at,d.name FROM ai_analyses a JOIN deals d ON d.id=a.deal_id WHERE a.user_id=? ORDER BY a.created_at DESC LIMIT 4",me.id);
 const maxStage=Math.max(1,...stagesData.map(x=>x.n)),totalDeals=Math.max(1,Number(stats.total)||0);
 const body="<main class='wrap'><section class='hero'><div><div class='eyebrow'>투자·사업분석 워크스페이스</div><h1>"+enc(me.name)+"님, 오늘의 투자 검토 현황입니다.</h1><p>프로젝트 파이프라인부터 금융지표, 위험요인과 심사 메모까지 한곳에서 관리하세요.</p></div><div class='hero-stat'>등록 프로젝트<strong>"+(stats.total||0)+"</strong>건</div></section><section class='grid'><div class='stat'><span>전체 프로젝트</span><strong>"+(stats.total||0)+"건</strong></div><div class='stat'><span>검토 진행 중</span><strong>"+(stats.active||0)+"건</strong></div><div class='stat'><span>투자금액 입력 완료</span><strong>"+(stats.amount_count||0)+"</strong><span>금액이 입력된 프로젝트</span></div><div class='stat'><span>등록 위험요인</span><strong>"+(risk.n||0)+"건</strong></div></section><div class='chart-grid'><section class='chart-panel'><div class='chart-title'>투자 파이프라인 · 단계별 딜 현황</div>"+(stagesData.length?stagesData.map(x=>"<div class='bar-row'><span>"+enc(x.stage)+"</span><div class='bar-track'><div class='bar-fill' style='width:"+(x.n/maxStage*100)+"%'></div></div><b>"+x.n+"</b></div>").join(""):"<p class='muted'>프로젝트를 등록하면 단계별 현황이 표시됩니다.</p>")+"</section><section class='chart-panel'><div class='chart-title'>사업 분야별 포트폴리오</div><div class='donut-wrap'><div class='donut' style='--p1:"+((sectorsData[0]?.n||0)/totalDeals*100)+"%;--p2:"+((sectorsData.slice(0,2).reduce((a,x)=>a+x.n,0))/totalDeals*100)+"%;--p3:"+((sectorsData.slice(0,3).reduce((a,x)=>a+x.n,0))/totalDeals*100)+"%'></div><div class='legend'>"+(sectorsData.length?sectorsData.map(x=>enc(x.sector)+" · "+x.n+"건").join("<br>"):"등록된 분야 없음")+"</div></div></section></div><div class='section'><h2>최근 AI 분석</h2><a class='btn light' href='/analyses'>전체 이력</a></div><section class='panel'>"+(recentAnalyses.length?recentAnalyses.map(x=>"<div class='risk'><div><a href='/analyses/"+enc(x.id)+"'><b>"+enc(x.name)+"</b></a><div class='muted'>"+enc(x.model)+" · "+enc(String(x.created_at).slice(0,16))+"</div></div><a class='btn line' href='/analyses/"+enc(x.id)+"'>열람</a></div>").join(""):"<p class='muted'>아직 저장된 AI 분석이 없습니다.</p>")+"</section><div class='section'><h2>최근 검토 프로젝트</h2><a class='btn' href='/deals/new'>＋ 새 딜 등록</a></div><section class='cards'>"+(deals.length?deals.map(d=>"<a class='deal' href='/deals/"+d.id+"'><span class='tag'>"+enc(d.sector)+"</span><h3>"+enc(d.name)+"</h3><span class='muted'>"+enc(d.location||"지역 미입력")+" · "+enc(d.sponsor||"스폰서 미입력")+"</span><div class='deal-meta'><span>"+enc(d.stage)+"</span><span>"+enc(d.currency)+" "+Number(d.amount).toLocaleString("en-US")+"</span></div></a>").join(""):"<div class='panel' style='grid-column:1/-1;text-align:center;padding:32px'><h3>첫 투자 프로젝트를 등록해 보세요.</h3><p class='muted'>프로젝트 기본정보와 투자 규모를 입력하면 검토 이력을 쌓을 수 있습니다.</p><a class='btn' href='/deals/new'>프로젝트 등록하기</a></div>")+"</section><div class='section'><h2>업무 바로가기</h2></div><section class='cards'><a class='panel' href='/deals'><b>투자 딜 파이프라인</b><p class='muted'>프로젝트별 진행 단계와 투자 규모를 확인합니다.</p></a><a class='panel' href='/risks'><b>위험요인 관리</b><p class='muted'>사업·금융·건설·운영 위험을 등록하고 우선순위를 관리합니다.</p></a></section></main>";
 return page("대시보드",body,me,"home");
}
function dealForm(deal=null){
 return "<main class='wrap'><div class='section'><div><span class='eyebrow' style='color:#63816f'>프로젝트 정보</span><h2>"+(deal?"프로젝트 수정":"새 투자 딜 등록")+"</h2></div><a class='btn line' href='/deals'>목록으로</a></div><section class='panel'><form method='post' action='/deals/save' class='formgrid'>"+(deal?"<input type='hidden' name='id' value='"+enc(deal.id)+"'>":"")+"<div class='field full'><label>프로젝트명 *</label><input name='name' required maxlength='150' value='"+enc(deal?.name||"")+"' placeholder='예: 미국 조지아 데이터센터 개발사업'></div><div class='field'><label>사업 분야</label>"+select("sector",sectors,deal?.sector||"데이터센터")+"</div><div class='field'><label>검토 단계</label>"+select("stage",stages,deal?.stage||"초기 검토")+"</div><div class='field'><label>소재지</label><input name='location' maxlength='120' value='"+enc(deal?.location||"")+"' placeholder='예: 조지아주 애틀랜타'></div><div class='field'><label>사업주·스폰서</label><input name='sponsor' maxlength='120' value='"+enc(deal?.sponsor||"")+"' placeholder='사업주 또는 주요 주주'></div><div class='field'><label>총 투자 규모</label><input name='amount' type='number' min='0' step='any' value='"+enc(deal?.amount||0)+"'></div><div class='field'><label>통화</label>"+select("currency",["USD","KRW","EUR","JPY"],deal?.currency||"USD")+"</div><div class='field full'><label>사업 개요 및 검토 메모</label><textarea name='description' maxlength='10000' placeholder='사업 구조, 주요 계약, 투자 목적 및 현재 쟁점을 기록하세요.'>"+enc(deal?.description||"")+"</textarea></div><div class='field full actions'><button class='btn'>저장하기</button><a class='btn line' href='/deals'>취소</a></div></form></section></main>";
}
async function dealList(db,me){
 const deals=await all(db,"SELECT * FROM deals WHERE user_id=? ORDER BY updated_at DESC",me.id);
 const body="<main class='wrap'><div class='section'><div><span class='eyebrow' style='color:#63816f'>투자 검토 관리</span><h2>투자 딜 파이프라인</h2><p class='muted'>검토 중인 사업과 투자 기회를 단계별로 관리합니다.</p></div><a class='btn' href='/deals/new'>＋ 딜 등록</a></div><section class='panel'><table class='table'><thead><tr><th>프로젝트</th><th>분야</th><th>단계</th><th>규모</th><th>최근 수정</th></tr></thead><tbody>"+(deals.length?deals.map(d=>"<tr><td><a href='/deals/"+d.id+"'><b>"+enc(d.name)+"</b></a><div class='muted'>"+enc(d.location)+"</div></td><td>"+enc(d.sector)+"</td><td><span class='tag'>"+enc(d.stage)+"</span></td><td>"+enc(d.currency)+" "+Number(d.amount).toLocaleString("en-US")+"</td><td>"+enc(d.updated_at.slice(0,10))+"</td></tr>").join(""):"<tr><td colspan='5'>등록된 프로젝트가 없습니다.</td></tr>")+"</tbody></table></section></main>";
 return page("투자 딜",body,me,"deals");
}
function dealDetailScript(dealId){
 return "<script>(function(){const dealId="+JSON.stringify(dealId)+";const ids=['calc-loan','calc-rate','calc-years','calc-noi','calc-value'];const el=id=>document.getElementById(id);function calculate(){const loan=Math.max(0,Number(el(ids[0]).value)||0),rate=Math.max(0,Number(el(ids[1]).value)||0)/1200,months=Math.max(1,(Number(el(ids[2]).value)||1)*12),noi=Math.max(0,Number(el(ids[3]).value)||0),value=Math.max(0,Number(el(ids[4]).value)||0);const monthly=rate===0?loan/months:loan*rate/(1-Math.pow(1+rate,-months));const annual=monthly*12,dscr=annual?noi/annual:0,ltv=value?loan/value*100:0;el('calc-debtservice').textContent=annual?annual.toLocaleString('ko-KR',{maximumFractionDigits:0}):'-';el('calc-dscr').textContent=annual?dscr.toFixed(2)+'배':'-';el('calc-ltv').textContent=value?ltv.toFixed(1)+'%':'-';el('calc-monthly').textContent=loan?monthly.toLocaleString('ko-KR',{maximumFractionDigits:0}):'-';}ids.forEach(id=>el(id).addEventListener('input',calculate));calculate();const button=el('ai-review');button.addEventListener('click',async()=>{button.disabled=true;el('ai-review-status').textContent='프로젝트 정보를 분석하고 있습니다…';el('ai-review-result').textContent='';try{const res=await fetch('/api/ai/analyze',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({deal_id:dealId})});const data=await res.json();if(!res.ok)throw new Error(data.error||'분석에 실패했습니다.');el('ai-review-result').textContent=data.analysis;el('ai-review-status').textContent='분석이 저장되었습니다. 결과 페이지로 이동합니다.';if(data.analysis_id){window.location.href='/analyses/'+encodeURIComponent(data.analysis_id);}}catch(err){el('ai-review-status').textContent=err.message;}finally{button.disabled=false;}});})();</script>";
}
async function dealDetail(db,me,id){
 const d=await one(db,"SELECT * FROM deals WHERE id=? AND user_id=?",id,me.id);if(!d)return page("프로젝트 없음","<main class='wrap'><p>프로젝트를 찾을 수 없습니다.</p><a href='/deals'>목록으로</a></main>",me);
 const risks=await all(db,"SELECT * FROM risks WHERE deal_id=? AND user_id=? ORDER BY likelihood*impact DESC",id,me.id);
 const analyses=await all(db,"SELECT id,model,created_at FROM ai_analyses WHERE deal_id=? AND user_id=? ORDER BY created_at DESC LIMIT 5",id,me.id);
 const memo=await one(db,"SELECT * FROM memos WHERE deal_id=? AND user_id=?",id,me.id);
 const body="<main class='wrap'><div class='section'><div><span class='tag'>"+enc(d.sector)+" · "+enc(d.stage)+"</span><h2 style='font-size:20px;margin:8px 0'>"+enc(d.name)+"</h2><p class='muted'>"+enc(d.location)+" · "+enc(d.sponsor)+"</p></div><a class='btn line' href='/deals/"+id+"/edit'>수정</a></div><section class='grid'><div class='stat'><span>투자 규모</span><strong>"+enc(d.currency)+" "+Number(d.amount).toLocaleString("en-US")+"</strong></div><div class='stat'><span>검토 단계</span><strong style='font-size:17px'>"+enc(d.stage)+"</strong></div><div class='stat'><span>등록 위험요인</span><strong>"+risks.length+"건</strong></div><div class='stat'><span>최종 수정</span><strong style='font-size:15px'>"+enc(d.updated_at.slice(0,10))+"</strong></div></section><section class='panel'><div class='section'><h2>사업 개요</h2></div><p style='white-space:pre-wrap'>"+enc(d.description||"등록된 사업 개요가 없습니다.")+"</p></section><div class='section'><h2>금융지표 간편 계산</h2><span class='muted'>입력한 가정에 따른 참고용 계산</span></div><section class='panel'><div class='formgrid'><div class='field'><label>대출금액</label><input id='calc-loan' type='number' min='0' value='0'></div><div class='field'><label>연 이자율 (%)</label><input id='calc-rate' type='number' min='0' max='100' step='0.01' value='6.5'></div><div class='field'><label>대출기간 (년)</label><input id='calc-years' type='number' min='1' max='50' value='15'></div><div class='field'><label>연간 순영업소득 (NOI)</label><input id='calc-noi' type='number' min='0' value='0'></div><div class='field'><label>담보 평가액</label><input id='calc-value' type='number' min='0' value='0'></div></div><div class='grid' style='margin-bottom:0'><div class='stat'><span>연간 원리금 상환액</span><strong id='calc-debtservice'>-</strong></div><div class='stat'><span>부채상환비율 (DSCR)</span><strong id='calc-dscr'>-</strong></div><div class='stat'><span>담보인정비율 (LTV)</span><strong id='calc-ltv'>-</strong></div><div class='stat'><span>월 상환액</span><strong id='calc-monthly'>-</strong></div></div><p class='muted'>원리금균등상환을 가정한 단순 계산입니다. 실제 금융약정, 수수료, 거치기간, 변동금리 및 상환조건에 따라 결과가 달라집니다.</p></section><div class='section'><h2>AI 심사 보조 분석</h2></div><section class='panel'><p class='muted'>등록된 프로젝트 정보를 바탕으로 위험요인, 추가 자료 요청 및 심사 쟁점을 정리합니다. AI 결과는 원문과 별도 검증이 필요합니다.</p><button class='btn' id='ai-review' data-deal='"+id+"'>AI 심사 쟁점 분석</button><p id='ai-review-status' class='muted' role='status'></p><div id='ai-review-result' style='white-space:pre-wrap;line-height:1.8'></div></section>"+dealDetailScript(id)+"<div class='section'><h2>저장된 AI 분석</h2><a class='btn light' href='/analyses'>전체 분석 이력</a></div><section class='panel'>"+(analyses.length?analyses.map(a=>"<div class='risk'><div><a href='/analyses/"+enc(a.id)+"'><b>종합 투자심사 분석</b></a><div class='muted'>"+enc(a.model)+" · "+enc(String(a.created_at).slice(0,16).replace('T',' '))+"</div></div><a class='btn line' href='/analyses/"+enc(a.id)+"'>열람</a></div>").join(""):"<p class='muted'>저장된 AI 분석이 없습니다.</p>")+"</section><div class='section'><h2>위험요인</h2><a class='btn light' href='/risks?deal="+id+"'>위험 추가·관리</a></div><section class='panel'>"+(risks.length?risks.map(r=>"<div class='risk'><div><b>"+enc(r.title)+"</b><div class='muted'>"+enc(r.category)+" · "+enc(r.mitigation)+"</div></div><span class='score'>"+(r.likelihood*r.impact)+"/25</span></div>").join(""):"<p class='muted'>아직 등록된 위험요인이 없습니다.</p>")+"</section><div class='section'><h2>투자심사 메모</h2></div><section class='panel'><form method='post' action='/memos/save'><input type='hidden' name='deal_id' value='"+id+"'><div class='field'><label>메모 제목</label><input name='title' value='"+enc(memo?.title||"투자심사 검토 메모")+"' maxlength='150'></div><div class='field' style='margin-top:10px'><label>검토 내용</label><textarea name='content' style='min-height:220px' placeholder='사업 개요, 거래 구조, 상환재원, 주요 계약, 담보, 리스크 및 대응방안을 기록하세요.'>"+enc(memo?.content||"")+"</textarea></div><div class='actions'><button class='btn'>메모 저장</button><button class='btn line' type='button' onclick='window.print()'>인쇄·PDF 저장</button></div></form></section><form method='post' action='/deals/delete' onsubmit='return confirm(\"이 프로젝트와 관련 기록을 삭제할까요?\")' style='margin-top:18px'><input type='hidden' name='id' value='"+id+"'><button class='btn line'>프로젝트 삭제</button></form></main>";
 return page(d.name,body,me,"deals");
}
async function riskPage(db,me,dealId=""){
 const risks=await all(db,"SELECT r.*,d.name deal_name FROM risks r JOIN deals d ON d.id=r.deal_id WHERE r.user_id=? ORDER BY r.likelihood*r.impact DESC",me.id);
 const deals=await all(db,"SELECT id,name FROM deals WHERE user_id=? ORDER BY name",me.id);
 const body="<main class='wrap'><div class='section'><div><span class='eyebrow' style='color:#63816f'>위험 관리</span><h2>위험요인 평가</h2><p class='muted'>발생 가능성과 영향도를 1~5점으로 평가해 우선순위를 관리합니다.</p></div></div><section class='panel'><form method='post' action='/risks/save' class='formgrid'><div class='field'><label>대상 프로젝트 *</label><select name='deal_id' required>"+deals.map(d=>"<option value='"+d.id+"' "+(dealId===d.id?"selected":"")+">"+enc(d.name)+"</option>").join("")+"</select></div><div class='field'><label>위험 분야</label>"+select("category",["사업","금융","건설","기술","운영","전력·인프라","인허가","시장·수요","계약","환경·사회","기타"],"금융")+"</div><div class='field full'><label>위험요인 *</label><input name='title' required maxlength='200' placeholder='예: 전력 인입 일정 지연'></div><div class='field'><label>발생 가능성 (1~5)</label><input type='number' name='likelihood' min='1' max='5' value='3' required></div><div class='field'><label>영향도 (1~5)</label><input type='number' name='impact' min='1' max='5' value='3' required></div><div class='field full'><label>대응 및 완화 방안</label><textarea name='mitigation' maxlength='5000' placeholder='계약상 보호장치, 예비 일정, 추가 실사 항목 등을 기록하세요.'></textarea></div><div class='field full'><label>담당자</label><input name='owner' maxlength='100'></div><div class='field full actions'><button class='btn'>위험요인 등록</button></div></form></section><div class='section'><h2>등록된 위험요인 "+risks.length+"건</h2></div><section class='panel'>"+(risks.length?risks.map(r=>"<div class='risk'><div><span class='tag'>"+enc(r.category)+"</span><b style='display:block;margin-top:5px'>"+enc(r.title)+"</b><div class='muted'>"+enc(r.deal_name)+" · 대응: "+enc(r.mitigation||"미등록")+"</div></div><div class='score'>"+(r.likelihood*r.impact)+"/25</div></div>").join(""):"<p class='muted'>등록된 위험요인이 없습니다.</p>")+"</section></main>";
 return page("위험 관리",body,me,"risk");
}


const riskCategories=["사업","금융","건설","기술","운영","전력·인프라","인허가","시장·수요","계약","환경·사회","기타"];
function parseAiReport(raw){
 const text=String(raw||"").trim();
 const start=text.indexOf("{"),end=text.lastIndexOf("}");
 if(start>=0&&end>start){
  try{
   const obj=JSON.parse(text.slice(start,end+1));
   const report=String(obj.report_markdown||obj.report||obj.analysis||"").trim();
   if(report)return {report:report,risks:Array.isArray(obj.risks)?obj.risks:[],document_requests:Array.isArray(obj.document_requests)?obj.document_requests:[],conditions:Array.isArray(obj.conditions)?obj.conditions:[],executive_summary:String(obj.executive_summary||"")};
  }catch(e){}
 }
 return {report:text,risks:[],document_requests:[],conditions:[],executive_summary:""};
}
async function saveExtractedRisks(db,me,dealId,analysisId,items){
 let saved=0,skipped=0;
 for(const item of items.slice(0,15)){
  if(!item||typeof item!=="object")continue;
  const title=String(item.title||"").trim().slice(0,200);
  if(title.length<4){skipped++;continue;}
  const duplicate=await one(db,"SELECT id FROM risks WHERE deal_id=? AND user_id=? AND lower(title)=lower(?) LIMIT 1",dealId,me.id,title);
  if(duplicate){skipped++;continue;}
  const category=riskCategories.includes(item.category)?item.category:"기타";
  const likelihood=Math.max(1,Math.min(5,Math.round(Number(item.likelihood)||3)));
  const impact=Math.max(1,Math.min(5,Math.round(Number(item.impact)||3)));
  const mitigation=String(item.mitigation||item.response||"대응방안 확인 필요").slice(0,4500);
  const basis=String(item.basis||"AI 분석 추출 — 원문 확인 필요").slice(0,300);
  await run(db,"INSERT INTO risks(id,deal_id,user_id,category,title,likelihood,impact,mitigation,owner,created_at) VALUES(?,?,?,?,?,?,?,?,?,?)",uid(),dealId,me.id,category,title,likelihood,impact,"[AI 추출 근거] "+basis+"\n[대응방안] "+mitigation,"AI 자동 추출 · 담당자 검토 필요 · 분석 "+analysisId.slice(0,8),new Date().toISOString());
  saved++;
 }
 return {saved:saved,skipped:skipped};
}
function reportHtml(source){
 const lines=String(source||"").replace(/\r/g,"").split("\n");
 let out="",list="";
 const close=()=>{if(list){out+="</"+list+">";list="";}};
 const inline=t=>enc(t).replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>");
 for(const raw of lines){
  const t=raw.trim();
  if(!t){close();continue;}
  if(/^---+$/.test(t)){close();out+="<hr class='report-rule'>";continue;}
  const h=t.match(/^(#{1,3})\s+(.+)$/);
  if(h){close();const n=h[1].length+1;out+="<h"+n+" class='report-h'>"+inline(h[2])+"</h"+n+">";continue;}
  const ol=t.match(/^\d+[.)]\s+(.+)$/),ul=t.match(/^[-*]\s+(.+)$/);
  if(ol||ul){const tag=ol?"ol":"ul";if(list!==tag){close();list=tag;out+="<"+tag+" class='report-list'>";}out+="<li>"+inline((ol||ul)[1])+"</li>";continue;}
  close();out+="<p class='report-p'>"+inline(t)+"</p>";
 }
 close();return out;
}
async function analysisList(db,me){
 const rows=await all(db,"SELECT a.id,a.deal_id,a.model,a.created_at,d.name deal_name,d.sector,d.stage FROM ai_analyses a JOIN deals d ON d.id=a.deal_id WHERE a.user_id=? ORDER BY a.created_at DESC LIMIT 100",me.id);
 const body="<main class='wrap'><div class='section'><div><span class='eyebrow' style='color:#63816f'>AI 투자심사</span><h2>저장된 분석 이력</h2><p class='muted'>생성한 투자심사 분석과 보고서를 다시 열람할 수 있습니다.</p></div><a class='btn line' href='/deals'>투자 딜</a></div><section class='panel'>"+(rows.length?"<table class='table'><thead><tr><th>프로젝트</th><th>분야</th><th>검토 단계</th><th>사용 모델</th><th>분석 일시</th></tr></thead><tbody>"+rows.map(r=>"<tr><td><a href='/analyses/"+enc(r.id)+"'><b>"+enc(r.deal_name)+"</b></a></td><td>"+enc(r.sector)+"</td><td>"+enc(r.stage)+"</td><td>"+enc(r.model)+"</td><td>"+enc(String(r.created_at).slice(0,16).replace("T"," "))+"</td></tr>").join("")+"</tbody></table>":"<div style='padding:28px;text-align:center'><h3>저장된 분석이 없습니다.</h3><p class='muted'>투자 딜 상세 화면에서 AI 심사 분석을 실행하면 이곳에 자동 저장됩니다.</p><a class='btn' href='/deals'>투자 딜 보기</a></div>")+"</section></main>";
 return page("AI 분석 이력",body,me,"analyses");
}
async function analysisDetail(db,me,id){
 const row=await one(db,"SELECT a.*,d.name deal_name,d.sector,d.stage,d.location,d.sponsor,d.amount,d.currency FROM ai_analyses a JOIN deals d ON d.id=a.deal_id WHERE a.id=? AND a.user_id=?",id,me.id);
 if(!row)return page("분석을 찾을 수 없습니다.","<main class='wrap'><p>분석 기록이 없거나 열람 권한이 없습니다.</p><a class='btn line' href='/analyses'>분석 이력으로</a></main>",me,"analyses");
 let reportMeta={};try{reportMeta=JSON.parse(row.report_json||"{}");}catch{}
 const summary=String(reportMeta.executive_summary||"").trim();
 const requests=Array.isArray(reportMeta.document_requests)?reportMeta.document_requests:[];
 const conditions=Array.isArray(reportMeta.conditions)?reportMeta.conditions:[];
 const metaPanels=(summary?"<section class='panel'><h3>잠정 검토의견 요약</h3><p style='white-space:pre-wrap'>"+enc(summary)+"</p></section>":"")+(requests.length?"<section class='panel'><h3>추가 자료 요청</h3><ol class='report-list'>"+requests.map(x=>"<li>"+enc(x)+"</li>").join("")+"</ol></section>":"")+(conditions.length?"<section class='panel'><h3>주요 선결조건 및 약정 검토사항</h3><ol class='report-list'>"+conditions.map(x=>"<li>"+enc(x)+"</li>").join("")+"</ol></section>":"");
 const body="<main class='wrap'><div class='section'><div><span class='eyebrow' style='color:#63816f'>저장된 투자심사 분석</span><h2>"+enc(row.deal_name)+"</h2><p class='muted'>"+enc(row.sector)+" · "+enc(row.stage)+" · "+enc(row.model)+" · "+enc(String(row.created_at).slice(0,16).replace("T"," "))+"</p></div><div class='actions'><a class='btn line' href='/analyses'>분석 이력</a><a class='btn line' href='/analyses/"+enc(row.id)+"/download'>보고서 다운로드</a><button class='btn' onclick='window.print()'>인쇄·PDF 저장</button></div></div><section class='grid'><div class='stat'><span>소재지</span><strong style='font-size:15px'>"+enc(row.location||"미입력")+"</strong></div><div class='stat'><span>스폰서</span><strong style='font-size:15px'>"+enc(row.sponsor||"미입력")+"</strong></div><div class='stat'><span>투자 규모</span><strong style='font-size:15px'>"+enc(row.currency)+" "+Number(row.amount).toLocaleString("en-US")+"</strong></div><div class='stat'><span>사용 모델</span><strong style='font-size:15px'>"+enc(row.model)+"</strong></div></section>"+metaPanels+"<article class='panel report-body'>"+reportHtml(row.analysis_text)+"</article><p class='muted' style='margin-top:12px'>본 보고서는 등록된 정보에 기반한 AI 보조 초안입니다. 원문 자료, 수치, 계약 및 법률·세무 사항을 별도로 검증한 후 투자 판단에 활용하세요.</p><div class='actions'><a class='btn line' href='/deals/"+enc(row.deal_id)+"'>프로젝트로 돌아가기</a><a class='btn' href='/risks?deal="+enc(row.deal_id)+"'>위험요인 관리</a></div></main>";
 return page("투자심사 분석 결과",body,me,"analyses");
}
async function aiAnalyze(req,env,db,me){
 if(!env.GEMINI_API_KEY)return json({error:"Gemini API 키가 Worker Secret에 등록되지 않았습니다. GEMINI_API_KEY 설정을 확인해 주세요."},503);
 let b;
 try{b=await req.json();}catch{return json({error:"분석 요청 형식이 올바르지 않습니다."},400);}
 const id=String(b.deal_id||"");
 const d=await one(db,"SELECT * FROM deals WHERE id=? AND user_id=?",id,me.id);
 if(!d)return json({error:"프로젝트를 찾을 수 없습니다."},404);
 const existingRisks=await all(db,"SELECT category,title,likelihood,impact,mitigation,owner FROM risks WHERE deal_id=? AND user_id=? ORDER BY likelihood*impact DESC LIMIT 30",id,me.id);
 const memo=await one(db,"SELECT title,content,updated_at FROM memos WHERE deal_id=? AND user_id=?",id,me.id);
 const prior=await all(db,"SELECT model,created_at,substr(analysis_text,1,5000) analysis_excerpt FROM ai_analyses WHERE deal_id=? AND user_id=? ORDER BY created_at DESC LIMIT 3",id,me.id);
 const sourcePack={project:{name:d.name,sector:d.sector,stage:d.stage,location:d.location,sponsor:d.sponsor,amount:d.amount,currency:d.currency,description:d.description},existing_risks:existingRisks,investment_memo:memo||null,previous_analysis_excerpts:prior};
 const sourceText=JSON.stringify(sourcePack);
 const prompt="당신은 전문 PF·인프라·부동산 투자심사 분석가입니다. 반드시 한국어로, 입력 정보만 근거로 작성하세요. 미제공 정보는 확인 필요로 표시하고 수치·계약·시장정보를 창작하지 마세요. 최종 답변은 JSON 객체 하나만 출력: {\"executive_summary\":\"잠정의견\",\"report_markdown\":\"# 종합 투자심사보고서\\n...\",\"risks\":[{\"category\":\"사업/금융/건설/기술/운영/전력·인프라/인허가/시장·수요/계약/환경·사회/기타\",\"title\":\"위험요인\",\"likelihood\":3,\"impact\":3,\"mitigation\":\"대응\",\"basis\":\"근거\"}],\"document_requests\":[\"추가자료\"],\"conditions\":[\"선결조건\"]}. risks 최대 10개, 가능성과 영향도는 1~5 정수. 보고서 목차: 1 요약·잠정의견 2 사업개요·거래구조 3 시장·사업성 4 기술·건설·운영 5 인허가·법률·환경 6 금융구조·상환재원 7 주요위험 8 추가자료요청 9 선결조건·약정 10 종합의견·후속조치. 사실과 추론을 구분하고 법률·세무·투자 결론을 확정하지 마세요. 프로젝트: "+d.name+" / 분야: "+d.sector+" / 단계: "+d.stage+" / 소재지: "+d.location+" / 스폰서: "+d.sponsor+" / 규모: "+d.currency+" "+d.amount+" / 제공 자료 전체(JSON): "+sourceText+". 기존 위험요인은 재평가하되 중복 위험을 새로 만들지 말고, 메모와 과거 분석은 참고자료로만 사용하며 상충 시 최신 원문 입력을 우선하세요. 미제공 항목은 확인 필요로 표시하세요.";
 const models=["gemini-3.8-flash","gemini-3.5-flash"];
 let lastStatus=0,lastMessage="";
 for(const model of models){
  let response;
  try{
   response=await fetch("https://generativelanguage.googleapis.com/v1beta/interactions",{
    method:"POST",
    headers:{"content-type":"application/json","x-goog-api-key":env.GEMINI_API_KEY},
    body:JSON.stringify({model,input:prompt,generation_config:{thinking_level:"low"}})
   });
  }catch(err){
   lastStatus=0;lastMessage="Google Gemini API에 연결하지 못했습니다: "+String(err?.message||err);
   continue;
  }
  let data={};
  try{data=await response.json();}catch{}
  if(response.ok){
   // REST Interactions API returns final text under steps[].content[].text.
   const stepText=Array.isArray(data.steps)?data.steps
    .filter(step=>step&&step.type==="model_output")
    .flatMap(step=>Array.isArray(step.content)?step.content:[])
    .filter(part=>part&&(part.type==="text"||typeof part.text==="string"))
    .map(part=>part.text||"").join("\n"):"";
   const legacyText=Array.isArray(data.outputs)?data.outputs
    .filter(item=>item&&(item.type==="text"||typeof item.text==="string"))
    .map(item=>item.text||"").join("\n"):"";
   const output=String(data.output_text||stepText||legacyText||"").trim();
   if(output){const parsed=parseAiReport(output),analysisId=uid(),createdAt=new Date().toISOString();await run(db,"INSERT INTO ai_analyses(id,user_id,deal_id,model,analysis_text,report_json,created_at) VALUES(?,?,?,?,?,?,?)",analysisId,me.id,id,model,parsed.report,JSON.stringify({format:"markdown",version:1,executive_summary:parsed.executive_summary,document_requests:parsed.document_requests,conditions:parsed.conditions}),createdAt);const riskResult=await saveExtractedRisks(db,me,id,analysisId,parsed.risks);return json({analysis:parsed.report,analysis_id:analysisId,model,status:data.status||"completed",risks_saved:riskResult.saved,risks_skipped:riskResult.skipped});}
   lastStatus=response.status;
   lastMessage="Gemini API는 HTTP 200을 반환했지만 분석 텍스트가 없습니다. 응답 상태: "+String(data.status||"알 수 없음")+".";
   if(data.status==="in_progress"&&data.id)lastMessage+=" 비동기 응답 ID: "+String(data.id);
   continue;
  }
  lastStatus=response.status;
  lastMessage=String(data.error?.message||data.message||"상세 오류 메시지가 반환되지 않았습니다.");
  if(lastMessage.includes(env.GEMINI_API_KEY))lastMessage=lastMessage.split(env.GEMINI_API_KEY).join("[비공개 키]");
 }
 const status=lastStatus>=400&&lastStatus<500?502:503;
 return json({error:"Gemini 호출 실패. HTTP "+(lastStatus||"연결 오류")+" — "+lastMessage+" (시도 모델: gemini-3.8-flash, gemini-3.5-flash)"},status);
}

export default {async fetch(req,env){
 const url=new URL(req.url),path=url.pathname,db=env.DB;
 try{
  if(!db)return new Response("D1 데이터베이스 바인딩(DB)이 필요합니다.",{status:500});
  if(req.method==="POST"&&req.headers.get("origin")!==url.origin)return new Response("요청 출처를 확인해 주세요.",{status:403});
  const me=await currentUser(req,db);
  if(req.method==="GET"&&path==="/")return landingPage();
  if(req.method==="GET"&&path==="/login")return authPage(false);
  if(req.method==="GET"&&path==="/signup")return authPage(true);
  if(req.method==="POST"&&path==="/auth/signup"){
   const f=await req.formData(),name=String(f.get("name")||"").trim(),email=String(f.get("email")||"").trim().toLowerCase(),pw=String(f.get("password")||"");
   if(!name||name.length>50||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))return authPage(true,"이름과 이메일을 확인해 주세요.");
   if(!pw||pw.length>10)return authPage(true,"비밀번호는 최대 10자로 입력해 주세요.");
   if(await one(db,"SELECT id FROM users WHERE email=?",email))return authPage(true,"이미 가입된 이메일입니다.");
   const id=uid(),salt=uid(),hash=await digest(pw,salt);await run(db,"INSERT INTO users(id,email,name,password_hash,created_at) VALUES(?,?,?,?,datetime('now'))",id,email,name,salt+":"+hash);
   const sid=uid();await run(db,"INSERT INTO sessions(id,user_id,expires_at) VALUES(?,?,datetime('now','+30 day'))",sid,id);
   return new Response(null,{status:303,headers:{location:"/", "set-cookie":setCookie(sid,2592000)}});
  }
  if(req.method==="POST"&&path==="/auth/login"){
   const f=await req.formData(),email=String(f.get("email")||"").trim().toLowerCase(),pw=String(f.get("password")||"");
   if(pw.length>10)return authPage(false,"비밀번호는 최대 10자입니다.");
   const user=await one(db,"SELECT * FROM users WHERE email=?",email);const parts=(user?.password_hash||"").split(":");
   if(!user||parts.length!==2||await digest(pw,parts[0])!==parts[1])return authPage(false,"이메일 또는 비밀번호가 올바르지 않습니다.");
   const sid=uid();await run(db,"INSERT INTO sessions(id,user_id,expires_at) VALUES(?,?,datetime('now','+30 day'))",sid,user.id);
   return new Response(null,{status:303,headers:{location:"/","set-cookie":setCookie(sid,2592000)}});
  }
  if(path==="/logout"){if(me)await run(db,"DELETE FROM sessions WHERE id=? AND user_id=?",cookie(req),me.id);return new Response(null,{status:303,headers:{location:"/login","set-cookie":setCookie("",0)}});}
  if(!me)return new Response(null,{status:303,headers:{location:"/login"}});
  if(path==="/"&&req.method==="GET")return dashboard(db,me);
  if(path==="/deals"&&req.method==="GET")return dealList(db,me);
  if(path==="/deals/new"&&req.method==="GET")return page("딜 등록",dealForm(),me,"new");
  if(path==="/deals/save"&&req.method==="POST"){
   const f=await req.formData(),id=String(f.get("id")||""),name=String(f.get("name")||"").trim(),amount=Number(f.get("amount")||0);
   if(!name||name.length>150||!Number.isFinite(amount)||amount<0)return page("입력 확인","<main class='wrap'><p>프로젝트명과 투자 규모를 확인해 주세요.</p><a href='/deals/new'>돌아가기</a></main>",me);
   const values=[name,sectors.includes(f.get("sector"))?f.get("sector"):"기타",stages.includes(f.get("stage"))?f.get("stage"):"초기 검토",String(f.get("location")||"").slice(0,120),String(f.get("sponsor")||"").slice(0,120),amount,["USD","KRW","EUR","JPY"].includes(f.get("currency"))?f.get("currency"):"USD",String(f.get("description")||"").slice(0,10000),new Date().toISOString()];
   if(id){const old=await one(db,"SELECT id FROM deals WHERE id=? AND user_id=?",id,me.id);if(!old)return json({error:"프로젝트를 찾을 수 없습니다."},404);await run(db,"UPDATE deals SET name=?,sector=?,stage=?,location=?,sponsor=?,amount=?,currency=?,description=?,updated_at=? WHERE id=? AND user_id=?",...values,id,me.id);return new Response(null,{status:303,headers:{location:"/deals/"+id}});}
   const newId=uid();await run(db,"INSERT INTO deals(id,user_id,name,sector,stage,location,sponsor,amount,currency,description,created_at,updated_at) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)",newId,me.id,...values,new Date().toISOString());return new Response(null,{status:303,headers:{location:"/deals/"+newId}});
  }
  const detail=path.match(/^\/deals\/([a-f0-9-]+)$/);if(detail&&req.method==="GET")return dealDetail(db,me,detail[1]);
  const edit=path.match(/^\/deals\/([a-f0-9-]+)\/edit$/);if(edit&&req.method==="GET"){const d=await one(db,"SELECT * FROM deals WHERE id=? AND user_id=?",edit[1],me.id);return d?page("프로젝트 수정",dealForm(d),me):page("오류","<main class='wrap'>프로젝트를 찾을 수 없습니다.</main>",me);}
  if(path==="/deals/delete"&&req.method==="POST"){const f=await req.formData();await run(db,"DELETE FROM deals WHERE id=? AND user_id=?",String(f.get("id")),me.id);return new Response(null,{status:303,headers:{location:"/deals"}});}
  if(path==="/risks"&&req.method==="GET")return riskPage(db,me,url.searchParams.get("deal")||"");
  if(path==="/risks/save"&&req.method==="POST"){const f=await req.formData(),dealId=String(f.get("deal_id")||""),d=await one(db,"SELECT id FROM deals WHERE id=? AND user_id=?",dealId,me.id);if(!d)return page("오류","<main class='wrap'>프로젝트를 먼저 등록해 주세요.</main>",me);const title=String(f.get("title")||"").trim(),likelihood=Math.max(1,Math.min(5,Number(f.get("likelihood")||3))),impact=Math.max(1,Math.min(5,Number(f.get("impact")||3)));if(!title)return riskPage(db,me,dealId);await run(db,"INSERT INTO risks(id,deal_id,user_id,category,title,likelihood,impact,mitigation,owner,created_at) VALUES(?,?,?,?,?,?,?,?,?,?)",uid(),dealId,me.id,String(f.get("category")||"기타"),title,likelihood,impact,String(f.get("mitigation")||"").slice(0,5000),String(f.get("owner")||"").slice(0,100),new Date().toISOString());return new Response(null,{status:303,headers:{location:"/deals/"+dealId}});}
  if(path==="/memos/save"&&req.method==="POST"){const f=await req.formData(),dealId=String(f.get("deal_id")||""),d=await one(db,"SELECT id FROM deals WHERE id=? AND user_id=?",dealId,me.id);if(!d)return json({error:"프로젝트를 찾을 수 없습니다."},404);const title=String(f.get("title")||"투자심사 메모").slice(0,150),content=String(f.get("content")||"").slice(0,30000),old=await one(db,"SELECT id FROM memos WHERE deal_id=? AND user_id=?",dealId,me.id);if(old)await run(db,"UPDATE memos SET title=?,content=?,updated_at=? WHERE id=? AND user_id=?",title,content,new Date().toISOString(),old.id,me.id);else await run(db,"INSERT INTO memos(id,deal_id,user_id,title,content,updated_at) VALUES(?,?,?,?,?,?)",uid(),dealId,me.id,title,content,new Date().toISOString());return new Response(null,{status:303,headers:{location:"/deals/"+dealId}});}
  if(path==="/analyses"&&req.method==="GET")return analysisList(db,me);
  const download=path.match(/^\/analyses\/([a-f0-9-]+)\/download$/);if(download&&req.method==="GET"){const item=await one(db,"SELECT a.analysis_text,d.name FROM ai_analyses a JOIN deals d ON d.id=a.deal_id WHERE a.id=? AND a.user_id=?",download[1],me.id);if(!item)return new Response("보고서를 찾을 수 없습니다.",{status:404});const filename=String(item.name||"investment-report").replace(/[^a-zA-Z0-9가-힣_-]/g,"_").slice(0,60)||"investment-report";return new Response("# "+item.name+" — 종합 투자심사보고서\n\n"+item.analysis_text,{headers:{"content-type":"text/markdown;charset=utf-8","content-disposition":"attachment; filename*=UTF-8''"+encodeURIComponent(filename+".md"),"cache-control":"no-store"}});}
  if(path.startsWith("/analyses/")&&req.method==="GET")return analysisDetail(db,me,decodeURIComponent(path.slice(10)));
  if(path==="/api/ai/analyze"&&req.method==="POST")return aiAnalyze(req,env,db,me);
  return page("페이지 없음","<main class='wrap'><h2>페이지를 찾을 수 없습니다.</h2><a href='/'>대시보드로</a></main>",me);
 }catch(err){console.error("HS11 request error",url.pathname,err?.message);return new Response("요청을 처리하지 못했습니다. 입력값과 데이터베이스 설정을 확인해 주세요.",{status:500,headers:{"content-type":"text/plain;charset=utf-8"}});}
}};
