const css = [
":root{color-scheme:light;--ink:#172b29;--muted:#71817d;--line:#e3e9e4;--paper:#fbfcfa;--green:#174c3d;--mint:#eaf3ed;--gold:#b58b4a;font-family:Inter,Pretendard,'Noto Sans KR',system-ui,sans-serif}",
"*{box-sizing:border-box}body{margin:0;background:#f4f6f2;color:var(--ink);font-size:13px;line-height:1.65}button,input,select,textarea{font:inherit}a{color:inherit;text-decoration:none}.top{height:58px;background:#fff;border-bottom:1px solid var(--line);display:flex;align-items:center;justify-content:space-between;padding:0 max(22px,calc((100% - 1160px)/2));position:sticky;top:0;z-index:5}.brand{font-weight:800;letter-spacing:.12em;font-size:12px}.brand b{background:var(--green);color:#fff;padding:7px 8px;border-radius:8px;margin-right:8px}.nav{display:flex;gap:6px;align-items:center}.nav a{padding:7px 11px;border-radius:8px;color:#53635e}.nav a.active,.btn{background:var(--green);color:#fff}.wrap{max-width:1160px;margin:30px auto;padding:0 20px}.hero{background:linear-gradient(120deg,#173e35,#235c49);color:#fff;padding:26px 30px;border-radius:16px;display:flex;justify-content:space-between;align-items:center;gap:20px}.eyebrow{font-size:10px;letter-spacing:.15em;color:#b9d3c5;font-weight:700}.hero h1{font-size:22px;line-height:1.35;margin:8px 0;font-weight:750}.hero p{color:#d4e3dc;margin:0;max-width:620px}.hero-stat{font-size:11px;color:#d4e3dc;text-align:right}.hero-stat strong{display:block;font-size:28px;color:#fff}.grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;margin:18px 0}.stat,.panel,.deal,.auth{background:#fff;border:1px solid var(--line);border-radius:13px;padding:16px}.stat span{font-size:11px;color:var(--muted)}.stat strong{display:block;font-size:22px;margin-top:5px;letter-spacing:-.03em}.section{display:flex;justify-content:space-between;align-items:center;margin:25px 0 11px}.section h2{font-size:15px;margin:0}.muted{color:var(--muted);font-size:11px}.btn{display:inline-flex;align-items:center;justify-content:center;border:0;border-radius:8px;padding:8px 13px;font-weight:650;cursor:pointer}.btn.light{background:#edf3ef;color:var(--green)}.btn.line{background:#fff;color:var(--ink);border:1px solid var(--line)}.cards{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.deal{transition:.18s}.deal:hover{border-color:#a9c4b4;transform:translateY(-1px)}.deal h3{font-size:14px;margin:6px 0}.tag{display:inline-block;background:var(--mint);color:var(--green);padding:3px 7px;border-radius:5px;font-size:10px;font-weight:700}.deal-meta{display:flex;gap:14px;color:var(--muted);font-size:11px;margin-top:12px}.formgrid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.field{display:flex;flex-direction:column;gap:5px}.field.full{grid-column:1/-1}.field label{font-size:11px;color:#52635d;font-weight:650}input,select,textarea{width:100%;border:1px solid #dce5de;border-radius:8px;padding:9px 10px;background:#fff;color:var(--ink);outline:none}input:focus,select:focus,textarea:focus{border-color:#6f9c84;box-shadow:0 0 0 3px #eaf3ed}textarea{min-height:110px;resize:vertical}.actions{display:flex;gap:8px;align-items:center;margin-top:14px}.table{width:100%;border-collapse:collapse}.table th,.table td{text-align:left;padding:10px;border-bottom:1px solid var(--line);font-size:12px}.table th{color:var(--muted);font-weight:600}.risk{display:flex;justify-content:space-between;gap:10px;padding:11px 0;border-bottom:1px solid var(--line)}.risk:last-child{border:0}.score{font-weight:750;color:#9a5b2d}.auth{max-width:420px;margin:70px auto;padding:25px}.auth h1{font-size:19px;margin:0 0 4px}.auth .field{margin:13px 0}.notice{padding:10px 12px;border-radius:8px;background:#fff6e8;color:#875a22;font-size:11px}.footer{padding:28px 20px;text-align:center;color:#85918b;font-size:10px;margin-top:50px}@media(max-width:760px){.grid{grid-template-columns:repeat(2,1fr)}.cards,.formgrid{grid-template-columns:1fr}.hero{padding:21px;align-items:flex-start;flex-direction:column}.hero-stat{text-align:left}.top{padding:0 14px}.nav a{padding:6px 7px;font-size:11px}.wrap{padding:0 13px;margin:18px auto}}"
].join("");
const enc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const json = (data,status=200) => new Response(JSON.stringify(data),{status,headers:{"content-type":"application/json;charset=utf-8","cache-control":"no-store"}});
const page = (title,body,me=null,active="") => new Response([
"<!doctype html><html lang='ko'><head><meta charset='utf-8'><meta name='viewport' content='width=device-width,initial-scale=1'><meta name='theme-color' content='#174c3d'><title>",enc(title)," · 허브스튜디오 11</title><style>",css,"</style></head><body>",
"<header class='top'><a class='brand' href='/'> <b>11</b> 허브스튜디오</a><nav class='nav'>",
me ? "<a class='"+(active==="home"?"active":"")+"' href='/'>대시보드</a><a class='"+(active==="deals"?"active":"")+"' href='/deals'>투자 딜</a><a class='"+(active==="new"?"active":"")+"' href='/deals/new'>딜 등록</a><a class='"+(active==="risk"?"active":"")+"' href='/risks'>위험 관리</a><a href='/logout'>로그아웃</a>" : "<a href='/login'>로그인</a><a class='active' href='/signup'>회원가입</a>",
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
async function dashboard(db,me){
 const deals=await all(db,"SELECT * FROM deals WHERE user_id=? ORDER BY updated_at DESC LIMIT 8",me.id);
 const stats=await one(db,"SELECT COUNT(*) total,SUM(CASE WHEN amount>0 THEN 1 ELSE 0 END) amount_count,SUM(CASE WHEN stage IN ('초기 검토','실사 진행','심사 작성','승인 대기') THEN 1 ELSE 0 END) active FROM deals WHERE user_id=?",me.id);
 const risk=await one(db,"SELECT COUNT(*) n FROM risks WHERE user_id=?",me.id);
 const body="<main class='wrap'><section class='hero'><div><div class='eyebrow'>투자·사업분석 워크스페이스</div><h1>"+enc(me.name)+"님, 오늘의 투자 검토 현황입니다.</h1><p>프로젝트 파이프라인부터 금융지표, 위험요인과 심사 메모까지 한곳에서 관리하세요.</p></div><div class='hero-stat'>등록 프로젝트<strong>"+(stats.total||0)+"</strong>건</div></section><section class='grid'><div class='stat'><span>전체 프로젝트</span><strong>"+(stats.total||0)+"건</strong></div><div class='stat'><span>검토 진행 중</span><strong>"+(stats.active||0)+"건</strong></div><div class='stat'><span>투자금액 입력 완료</span><strong>"+(stats.amount_count||0)+"</strong><span>금액이 입력된 프로젝트</span></div><div class='stat'><span>등록 위험요인</span><strong>"+(risk.n||0)+"건</strong></div></section><div class='section'><h2>최근 검토 프로젝트</h2><a class='btn' href='/deals/new'>＋ 새 딜 등록</a></div><section class='cards'>"+(deals.length?deals.map(d=>"<a class='deal' href='/deals/"+d.id+"'><span class='tag'>"+enc(d.sector)+"</span><h3>"+enc(d.name)+"</h3><span class='muted'>"+enc(d.location||"지역 미입력")+" · "+enc(d.sponsor||"스폰서 미입력")+"</span><div class='deal-meta'><span>"+enc(d.stage)+"</span><span>"+enc(d.currency)+" "+Number(d.amount).toLocaleString("en-US")+"</span></div></a>").join(""):"<div class='panel' style='grid-column:1/-1;text-align:center;padding:32px'><h3>첫 투자 프로젝트를 등록해 보세요.</h3><p class='muted'>프로젝트 기본정보와 투자 규모를 입력하면 검토 이력을 쌓을 수 있습니다.</p><a class='btn' href='/deals/new'>프로젝트 등록하기</a></div>")+"</section><div class='section'><h2>업무 바로가기</h2></div><section class='cards'><a class='panel' href='/deals'><b>투자 딜 파이프라인</b><p class='muted'>프로젝트별 진행 단계와 투자 규모를 확인합니다.</p></a><a class='panel' href='/risks'><b>위험요인 관리</b><p class='muted'>사업·금융·건설·운영 위험을 등록하고 우선순위를 관리합니다.</p></a></section></main>";
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
 return "<script>(function(){const dealId="+JSON.stringify(dealId)+";const ids=['calc-loan','calc-rate','calc-years','calc-noi','calc-value'];const el=id=>document.getElementById(id);function calculate(){const loan=Math.max(0,Number(el(ids[0]).value)||0),rate=Math.max(0,Number(el(ids[1]).value)||0)/1200,months=Math.max(1,(Number(el(ids[2]).value)||1)*12),noi=Math.max(0,Number(el(ids[3]).value)||0),value=Math.max(0,Number(el(ids[4]).value)||0);const monthly=rate===0?loan/months:loan*rate/(1-Math.pow(1+rate,-months));const annual=monthly*12,dscr=annual?noi/annual:0,ltv=value?loan/value*100:0;el('calc-debtservice').textContent=annual?annual.toLocaleString('ko-KR',{maximumFractionDigits:0}):'-';el('calc-dscr').textContent=annual?dscr.toFixed(2)+'배':'-';el('calc-ltv').textContent=value?ltv.toFixed(1)+'%':'-';el('calc-monthly').textContent=loan?monthly.toLocaleString('ko-KR',{maximumFractionDigits:0}):'-';}ids.forEach(id=>el(id).addEventListener('input',calculate));calculate();const button=el('ai-review');button.addEventListener('click',async()=>{button.disabled=true;el('ai-review-status').textContent='프로젝트 정보를 분석하고 있습니다…';el('ai-review-result').textContent='';try{const res=await fetch('/api/ai/analyze',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({deal_id:dealId})});const data=await res.json();if(!res.ok)throw new Error(data.error||'분석에 실패했습니다.');el('ai-review-result').textContent=data.analysis;el('ai-review-status').textContent='분석이 완료되었습니다. 원문 자료와 대조해 검증해 주세요.';}catch(err){el('ai-review-status').textContent=err.message;}finally{button.disabled=false;}});})();</script>";
}
async function dealDetail(db,me,id){
 const d=await one(db,"SELECT * FROM deals WHERE id=? AND user_id=?",id,me.id);if(!d)return page("프로젝트 없음","<main class='wrap'><p>프로젝트를 찾을 수 없습니다.</p><a href='/deals'>목록으로</a></main>",me);
 const risks=await all(db,"SELECT * FROM risks WHERE deal_id=? AND user_id=? ORDER BY likelihood*impact DESC",id,me.id);
 const memo=await one(db,"SELECT * FROM memos WHERE deal_id=? AND user_id=?",id,me.id);
 const body="<main class='wrap'><div class='section'><div><span class='tag'>"+enc(d.sector)+" · "+enc(d.stage)+"</span><h2 style='font-size:20px;margin:8px 0'>"+enc(d.name)+"</h2><p class='muted'>"+enc(d.location)+" · "+enc(d.sponsor)+"</p></div><a class='btn line' href='/deals/"+id+"/edit'>수정</a></div><section class='grid'><div class='stat'><span>투자 규모</span><strong>"+enc(d.currency)+" "+Number(d.amount).toLocaleString("en-US")+"</strong></div><div class='stat'><span>검토 단계</span><strong style='font-size:17px'>"+enc(d.stage)+"</strong></div><div class='stat'><span>등록 위험요인</span><strong>"+risks.length+"건</strong></div><div class='stat'><span>최종 수정</span><strong style='font-size:15px'>"+enc(d.updated_at.slice(0,10))+"</strong></div></section><section class='panel'><div class='section'><h2>사업 개요</h2></div><p style='white-space:pre-wrap'>"+enc(d.description||"등록된 사업 개요가 없습니다.")+"</p></section><div class='section'><h2>금융지표 간편 계산</h2><span class='muted'>입력한 가정에 따른 참고용 계산</span></div><section class='panel'><div class='formgrid'><div class='field'><label>대출금액</label><input id='calc-loan' type='number' min='0' value='0'></div><div class='field'><label>연 이자율 (%)</label><input id='calc-rate' type='number' min='0' max='100' step='0.01' value='6.5'></div><div class='field'><label>대출기간 (년)</label><input id='calc-years' type='number' min='1' max='50' value='15'></div><div class='field'><label>연간 순영업소득 (NOI)</label><input id='calc-noi' type='number' min='0' value='0'></div><div class='field'><label>담보 평가액</label><input id='calc-value' type='number' min='0' value='0'></div></div><div class='grid' style='margin-bottom:0'><div class='stat'><span>연간 원리금 상환액</span><strong id='calc-debtservice'>-</strong></div><div class='stat'><span>부채상환비율 (DSCR)</span><strong id='calc-dscr'>-</strong></div><div class='stat'><span>담보인정비율 (LTV)</span><strong id='calc-ltv'>-</strong></div><div class='stat'><span>월 상환액</span><strong id='calc-monthly'>-</strong></div></div><p class='muted'>원리금균등상환을 가정한 단순 계산입니다. 실제 금융약정, 수수료, 거치기간, 변동금리 및 상환조건에 따라 결과가 달라집니다.</p></section><div class='section'><h2>AI 심사 보조 분석</h2></div><section class='panel'><p class='muted'>등록된 프로젝트 정보를 바탕으로 위험요인, 추가 자료 요청 및 심사 쟁점을 정리합니다. AI 결과는 원문과 별도 검증이 필요합니다.</p><button class='btn' id='ai-review' data-deal='"+id+"'>AI 심사 쟁점 분석</button><p id='ai-review-status' class='muted' role='status'></p><div id='ai-review-result' style='white-space:pre-wrap;line-height:1.8'></div></section>"+dealDetailScript(id)+"<div class='section'><h2>위험요인</h2><a class='btn light' href='/risks?deal="+id+"'>위험 추가·관리</a></div><section class='panel'>"+(risks.length?risks.map(r=>"<div class='risk'><div><b>"+enc(r.title)+"</b><div class='muted'>"+enc(r.category)+" · "+enc(r.mitigation)+"</div></div><span class='score'>"+(r.likelihood*r.impact)+"/25</span></div>").join(""):"<p class='muted'>아직 등록된 위험요인이 없습니다.</p>")+"</section><div class='section'><h2>투자심사 메모</h2></div><section class='panel'><form method='post' action='/memos/save'><input type='hidden' name='deal_id' value='"+id+"'><div class='field'><label>메모 제목</label><input name='title' value='"+enc(memo?.title||"투자심사 검토 메모")+"' maxlength='150'></div><div class='field' style='margin-top:10px'><label>검토 내용</label><textarea name='content' style='min-height:220px' placeholder='사업 개요, 거래 구조, 상환재원, 주요 계약, 담보, 리스크 및 대응방안을 기록하세요.'>"+enc(memo?.content||"")+"</textarea></div><div class='actions'><button class='btn'>메모 저장</button><button class='btn line' type='button' onclick='window.print()'>인쇄·PDF 저장</button></div></form></section><form method='post' action='/deals/delete' onsubmit='return confirm(\"이 프로젝트와 관련 기록을 삭제할까요?\")' style='margin-top:18px'><input type='hidden' name='id' value='"+id+"'><button class='btn line'>프로젝트 삭제</button></form></main>";
 return page(d.name,body,me,"deals");
}
async function riskPage(db,me,dealId=""){
 const risks=await all(db,"SELECT r.*,d.name deal_name FROM risks r JOIN deals d ON d.id=r.deal_id WHERE r.user_id=? ORDER BY r.likelihood*r.impact DESC",me.id);
 const deals=await all(db,"SELECT id,name FROM deals WHERE user_id=? ORDER BY name",me.id);
 const body="<main class='wrap'><div class='section'><div><span class='eyebrow' style='color:#63816f'>위험 관리</span><h2>위험요인 평가</h2><p class='muted'>발생 가능성과 영향도를 1~5점으로 평가해 우선순위를 관리합니다.</p></div></div><section class='panel'><form method='post' action='/risks/save' class='formgrid'><div class='field'><label>대상 프로젝트 *</label><select name='deal_id' required>"+deals.map(d=>"<option value='"+d.id+"' "+(dealId===d.id?"selected":"")+">"+enc(d.name)+"</option>").join("")+"</select></div><div class='field'><label>위험 분야</label>"+select("category",["사업","금융","건설","기술","운영","전력·인프라","인허가","시장·수요","계약","환경·사회","기타"],"금융")+"</div><div class='field full'><label>위험요인 *</label><input name='title' required maxlength='200' placeholder='예: 전력 인입 일정 지연'></div><div class='field'><label>발생 가능성 (1~5)</label><input type='number' name='likelihood' min='1' max='5' value='3' required></div><div class='field'><label>영향도 (1~5)</label><input type='number' name='impact' min='1' max='5' value='3' required></div><div class='field full'><label>대응 및 완화 방안</label><textarea name='mitigation' maxlength='5000' placeholder='계약상 보호장치, 예비 일정, 추가 실사 항목 등을 기록하세요.'></textarea></div><div class='field full'><label>담당자</label><input name='owner' maxlength='100'></div><div class='field full actions'><button class='btn'>위험요인 등록</button></div></form></section><div class='section'><h2>등록된 위험요인 "+risks.length+"건</h2></div><section class='panel'>"+(risks.length?risks.map(r=>"<div class='risk'><div><span class='tag'>"+enc(r.category)+"</span><b style='display:block;margin-top:5px'>"+enc(r.title)+"</b><div class='muted'>"+enc(r.deal_name)+" · 대응: "+enc(r.mitigation||"미등록")+"</div></div><div class='score'>"+(r.likelihood*r.impact)+"/25</div></div>").join(""):"<p class='muted'>등록된 위험요인이 없습니다.</p>")+"</section></main>";
 return page("위험 관리",body,me,"risk");
}
async function aiAnalyze(req,env,db,me){
 if(!env.GEMINI_API_KEY)return json({error:"Gemini API 키가 Worker Secret에 등록되지 않았습니다. GEMINI_API_KEY 설정을 확인해 주세요."},503);
 let b;
 try{b=await req.json();}catch{return json({error:"분석 요청 형식이 올바르지 않습니다."},400);}
 const id=String(b.deal_id||"");
 const d=await one(db,"SELECT * FROM deals WHERE id=? AND user_id=?",id,me.id);
 if(!d)return json({error:"프로젝트를 찾을 수 없습니다."},404);
 const prompt="당신은 신중한 프로젝트 금융 및 투자심사 분석 보조자입니다. 아래 제공된 정보만 근거로 한국어 분석을 작성하세요. 정보가 없으면 확인 필요라고 명시하고 수치나 사실을 만들어내지 마세요. 법률·세무·투자 결론을 확정하지 말고 검토 쟁점과 확인 질문을 제시하세요. 프로젝트: "+d.name+" / 분야: "+d.sector+" / 단계: "+d.stage+" / 소재지: "+d.location+" / 스폰서: "+d.sponsor+" / 투자규모: "+d.currency+" "+d.amount+" / 사업설명: "+d.description+" . 출력은 위험요인 5개, 추가 자료 요청 5개, 심사 검토 의견으로 구성하세요.";
 const models=["gemini-3.8-flash","gemini-3.5-flash-lite"];
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
   const output=String(data.output_text||data.outputs?.filter(x=>x.type==="text").map(x=>x.text||"").join("\n")||"").trim();
   if(output)return json({analysis:output,model});
   lastStatus=response.status;lastMessage="Gemini API 응답에 분석 텍스트가 없습니다.";
   continue;
  }
  lastStatus=response.status;
  lastMessage=String(data.error?.message||data.message||"상세 오류 메시지가 반환되지 않았습니다.");
  if(lastMessage.includes(env.GEMINI_API_KEY))lastMessage=lastMessage.split(env.GEMINI_API_KEY).join("[비공개 키]");
 }
 const status=lastStatus>=400&&lastStatus<500?502:503;
 return json({error:"Gemini 호출 실패. HTTP "+(lastStatus||"연결 오류")+" — "+lastMessage+" (시도 모델: gemini-3.8-flash, gemini-3.5-flash-lite)"},status);
}

export default {async fetch(req,env){
 const url=new URL(req.url),path=url.pathname,db=env.DB;
 try{
  if(!db)return new Response("D1 데이터베이스 바인딩(DB)이 필요합니다.",{status:500});
  if(req.method==="POST"&&req.headers.get("origin")!==url.origin)return new Response("요청 출처를 확인해 주세요.",{status:403});
  const me=await currentUser(req,db);
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
  if(path==="/api/ai/analyze"&&req.method==="POST")return aiAnalyze(req,env,db,me);
  return page("페이지 없음","<main class='wrap'><h2>페이지를 찾을 수 없습니다.</h2><a href='/'>대시보드로</a></main>",me);
 }catch(err){console.error("HS11 request error",url.pathname,err?.message);return new Response("요청을 처리하지 못했습니다. 입력값과 데이터베이스 설정을 확인해 주세요.",{status:500,headers:{"content-type":"text/plain;charset=utf-8"}});}
}};
