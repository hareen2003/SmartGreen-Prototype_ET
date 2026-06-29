function DivLogo() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="div.logo">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14.9px] text-black w-full">
        <p className="leading-[normal]">SG</p>
      </div>
    </div>
  );
}

function H() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="h1">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[28.6px] text-black w-full">
        <p className="leading-[normal]">SmartGreen</p>
      </div>
    </div>
  );
}

function P() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="p">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.6px] text-black w-full">
        <p className="leading-[normal]">Clickable prototype</p>
      </div>
    </div>
  );
}

function Div() {
  return (
    <div className="content-stretch flex flex-col gap-[21.44px] items-start relative shrink-0 w-full" data-name="div">
      <H />
      <P />
    </div>
  );
}

function DivBrand() {
  return (
    <div className="content-stretch flex flex-col gap-[21.44px] items-start relative shrink-0 w-full" data-name="div.brand">
      <DivLogo />
      <Div />
    </div>
  );
}

function NavNav() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="nav.nav">
      <a className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#00e] text-[0px] w-full" href="https://d2z0o16i8xm8ak.cloudfront.net/web/direct-files/38480c57dbcd4f128c368f0faf5c3e2e/892f2a7c-097c-4ac4-a545-cd2f72c8d09f/7cdfcd8a.html#dashboard" target="_blank">
        <p className="cursor-pointer text-[13.6px]">
          <span className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic text-[#00e] underline">🏠 Dashboard</span>
          <span className="leading-[normal] text-black">{` `}</span>
          <span className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic text-[#00e] underline" role="link" tabIndex="0">
            📸 Report Issue
          </span>
          <span className="leading-[normal] text-black">{` `}</span>
          <span className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic text-[#00e] underline" role="link" tabIndex="0">
            🗺️ Map Tracker
          </span>
          <span className="leading-[normal] text-black">{` `}</span>
          <span className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic text-[#00e] underline" role="link" tabIndex="0">
            📡 Sensor Monitor
          </span>
          <span className="leading-[normal] text-black">{` `}</span>
          <span className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic text-[#00e] underline" role="link" tabIndex="0">
            🛠️ Admin Panel
          </span>
          <span className="leading-[normal] text-black">{` `}</span>
          <span className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic text-[#00e] underline" role="link" tabIndex="0">
            📱 Mobile UI
          </span>
        </p>
      </a>
    </div>
  );
}

function SwitchTheme() {
  return (
    <div className="bg-[#efefef] content-stretch flex items-center justify-center px-[8px] py-[3px] relative shrink-0" data-name="Switch theme">
      <div aria-hidden className="absolute border-2 border-black border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12.2px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">🌙 Theme</p>
      </div>
    </div>
  );
}

function Div1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-full" data-name="div">
      <SwitchTheme />
    </div>
  );
}

function AsideSidebar() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="aside.sidebar">
      <DivBrand />
      <NavNav />
      <Div1 />
    </div>
  );
}

function DivMockupNote() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="div.mockup-note">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-black w-full">
        <p className="text-[13.6px]">
          <span className="font-['Inter:Regular',sans-serif] font-normal leading-[normal]">{`This file is the `}</span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[normal]">application prototype + UI mockup</span>
          <span className="font-['Inter:Regular',sans-serif] font-normal leading-[normal]">{` part of your assignment. You can click the left menu to move between screens.`}</span>
        </p>
      </div>
    </div>
  );
}

function H1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="h2">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[21.2px] text-black w-full">
        <p className="leading-[normal]">Citizen Dashboard</p>
      </div>
    </div>
  );
}

function P1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="p">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.6px] text-black w-full">
        <p className="leading-[normal]">Overview of environmental reports, alerts, and quick actions.</p>
      </div>
    </div>
  );
}

function DivTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[19.91px] items-start relative shrink-0 w-full" data-name="div.title">
      <H1 />
      <P1 />
    </div>
  );
}

function ButtonBtn() {
  return (
    <div className="absolute bg-[#efefef] content-stretch flex items-center justify-center left-[90.78px] px-[8px] py-[3px] top-0" data-name="button.btn">
      <div aria-hidden className="absolute border-2 border-black border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12.9px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">Export Summary</p>
      </div>
    </div>
  );
}

function DivToolbar() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="div.toolbar">
      <a className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#00e] text-[13.8px] top-[9.5px] whitespace-nowrap" href="https://d2z0o16i8xm8ak.cloudfront.net/web/direct-files/38480c57dbcd4f128c368f0faf5c3e2e/892f2a7c-097c-4ac4-a545-cd2f72c8d09f/7cdfcd8a.html#report" target="_blank">
        <p className="[text-underline-position:from-font] cursor-pointer decoration-from-font decoration-solid leading-[normal] underline">+ New Report</p>
      </a>
      <ButtonBtn />
    </div>
  );
}

function DivTopbar() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="div.topbar">
      <DivTitle />
      <DivToolbar />
    </div>
  );
}

function DivTiny() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="div.tiny">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.5px] text-black w-full">
        <p className="leading-[normal]">Total reports this week</p>
      </div>
    </div>
  );
}

function DivMetric() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="div.metric">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14.1px] text-black w-full">
        <p className="leading-[normal]">126</p>
      </div>
    </div>
  );
}

function DivMuted() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="div.muted">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.8px] text-black w-full">
        <p className="leading-[normal]">18% increase from last week</p>
      </div>
    </div>
  );
}

function DivCard() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.card">
      <DivTiny />
      <DivMetric />
      <DivMuted />
    </div>
  );
}

function DivTiny1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="div.tiny">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.3px] text-black w-full">
        <p className="leading-[normal]">Urgent unresolved cases</p>
      </div>
    </div>
  );
}

function DivMetric1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="div.metric">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14.6px] text-black w-full">
        <p className="leading-[normal]">14</p>
      </div>
    </div>
  );
}

function DivMuted1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="div.muted">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.3px] text-black w-full">
        <p className="leading-[normal]">Needs authority attention</p>
      </div>
    </div>
  );
}

function DivCard1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.card">
      <DivTiny1 />
      <DivMetric1 />
      <DivMuted1 />
    </div>
  );
}

function DivTiny2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="div.tiny">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.4px] text-black w-full">
        <p className="leading-[normal]">Average response time</p>
      </div>
    </div>
  );
}

function DivMetric2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="div.metric">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.5px] text-black w-full">
        <p className="leading-[normal]">3.2h</p>
      </div>
    </div>
  );
}

function DivMuted2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="div.muted">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.5px] text-black w-full">
        <p className="leading-[normal]">From report to case review</p>
      </div>
    </div>
  );
}

function DivCard2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.card">
      <DivTiny2 />
      <DivMetric2 />
      <DivMuted2 />
    </div>
  );
}

function DivGrid() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.grid">
      <DivCard />
      <DivCard1 />
      <DivCard2 />
    </div>
  );
}

function H2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="h3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16.2px] text-black w-full">
        <p className="leading-[normal]">Recent community reports</p>
      </div>
    </div>
  );
}

function DivMuted3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="div.muted">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.3px] text-black w-full">
        <p className="leading-[normal]">Maharagama sector 3</p>
      </div>
    </div>
  );
}

function Div2() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start relative shrink-0 w-full" data-name="div">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14.5px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Illegal dumping near canal</p>
      </div>
      <DivMuted3 />
    </div>
  );
}

function DivReportItem() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="div.report-item">
      <Div2 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[15.3px] text-black whitespace-nowrap">
        <p className="leading-[normal]">New</p>
      </div>
    </div>
  );
}

function DivMuted4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="div.muted">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black w-full">
        <p className="leading-[normal]">Kolonnawa industrial lane</p>
      </div>
    </div>
  );
}

function Div3() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start relative shrink-0 w-full" data-name="div">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14.3px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Smoke from small factory area</p>
      </div>
      <DivMuted4 />
    </div>
  );
}

function DivReportItem1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="div.report-item">
      <Div3 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.9px] text-black whitespace-nowrap">
        <p className="leading-[normal]">In progress</p>
      </div>
    </div>
  );
}

function DivMuted5() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="div.muted">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.8px] text-black w-full">
        <p className="leading-[normal]">School road junction</p>
      </div>
    </div>
  );
}

function Div4() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start relative shrink-0 w-full" data-name="div">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14.4px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Overflowing smart bin alert</p>
      </div>
      <DivMuted5 />
    </div>
  );
}

function DivReportItem2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="div.report-item">
      <Div4 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14.4px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Urgent</p>
      </div>
    </div>
  );
}

function DivReportList() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.report-list">
      <DivReportItem />
      <DivReportItem1 />
      <DivReportItem2 />
    </div>
  );
}

function DivCard3() {
  return (
    <div className="content-stretch flex flex-col gap-[18.72px] items-start relative shrink-0 w-full" data-name="div.card">
      <H2 />
      <DivReportList />
    </div>
  );
}

function H3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="h3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[15.9px] text-black w-full">
        <p className="leading-[normal]">Issue type trends</p>
      </div>
    </div>
  );
}

function DivTiny3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="div.tiny">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.6px] text-black w-full">
        <p className="leading-[normal]">Waste, smoke, drainage, noise, water pollution</p>
      </div>
    </div>
  );
}

function DivCard4() {
  return (
    <div className="content-stretch flex flex-col gap-[18.71px] items-start relative shrink-0 w-full" data-name="div.card">
      <H3 />
      <DivTiny3 />
    </div>
  );
}

function DivGrid1() {
  return (
    <div className="content-stretch flex flex-col gap-[18.72px] items-start pt-[20px] relative shrink-0 w-full" data-name="div.grid">
      <DivCard3 />
      <DivCard4 />
    </div>
  );
}

function SectionDashboard() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="section#dashboard">
      <DivTopbar />
      <DivGrid />
      <DivGrid1 />
    </div>
  );
}

function H4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="h2">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[21.2px] text-black w-full">
        <p className="leading-[normal]">Report an Issue</p>
      </div>
    </div>
  );
}

function P2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="p">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.6px] text-black w-full">
        <p className="leading-[normal]">Form screen mockup for citizens to submit environmental incidents.</p>
      </div>
    </div>
  );
}

function DivTitle1() {
  return (
    <div className="content-stretch flex flex-col gap-[19.91px] items-start relative shrink-0 w-full" data-name="div.title">
      <H4 />
      <P2 />
    </div>
  );
}

function ButtonBtn1() {
  return (
    <div className="bg-[#efefef] content-stretch flex items-center justify-center px-[8px] py-[3px] relative shrink-0" data-name="button.btn">
      <div aria-hidden className="absolute border-2 border-black border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">AI Preview</p>
      </div>
    </div>
  );
}

function DivToolbar1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.toolbar">
      <ButtonBtn1 />
    </div>
  );
}

function DivTopbar1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="div.topbar">
      <DivTitle1 />
      <DivToolbar1 />
    </div>
  );
}

function Div5() {
  return (
    <div className="relative shrink-0" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[0.81px] py-px relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12.7px] text-black whitespace-nowrap">
          <p className="leading-[15px]">Illegal waste dumping</p>
        </div>
      </div>
    </div>
  );
}

function Select() {
  return (
    <div className="bg-[#efefef] content-stretch flex items-center pl-[5px] pr-[17px] py-px relative shrink-0" data-name="select">
      <div aria-hidden className="absolute border border-[#767676] border-solid inset-0 pointer-events-none" />
      <Div5 />
    </div>
  );
}

function DivField() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="div.field">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.4px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Issue category</p>
      </div>
      <Select />
    </div>
  );
}

function Div6() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-auto pr-[22.16px] relative shrink-0" data-name="div">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Maharagama - Lake Road</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="absolute left-[56.88px] rounded-[2.5px] top-0" data-name="input">
      <div className="content-stretch flex items-start overflow-clip px-[4px] py-[3px] relative rounded-[inherit] size-full">
        <Div6 />
      </div>
      <div aria-hidden className="absolute border border-[#767676] border-solid inset-0 pointer-events-none rounded-[2.5px]" />
    </div>
  );
}

function DivField1() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="div.field">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[14.6px] text-black top-[10px] whitespace-nowrap">
        <p className="leading-[normal]">Location</p>
      </div>
      <Input />
    </div>
  );
}

function Textarea() {
  return (
    <div className="absolute bg-white h-[38px] left-[74.66px] top-0" data-name="textarea">
      <div className="content-stretch flex items-start overflow-auto pl-[3px] pr-[2.07px] pt-[4px] relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.3px] text-black whitespace-nowrap">
          <p className="leading-[normal] mb-0 whitespace-pre">{`Large waste pile near `}</p>
          <p className="leading-[normal] mb-0 whitespace-pre">{`the canal causing bad `}</p>
          <p className="leading-[normal] mb-0 whitespace-pre">{`smell and blocked `}</p>
          <p className="leading-[normal] whitespace-pre">roadside access.</p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#767676] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function DivField2() {
  return (
    <div className="h-[42px] relative shrink-0 w-full" data-name="div.field">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[14.3px] text-black top-[32.5px] whitespace-nowrap">
        <p className="leading-[normal]">Description</p>
      </div>
      <Textarea />
    </div>
  );
}

function InputFileUploadButton() {
  return (
    <div className="bg-[#efefef] relative shrink-0" data-name="input#file-upload-button">
      <div className="content-stretch flex items-start justify-center overflow-clip px-[8px] py-[3px] relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.2px] text-black text-center whitespace-nowrap">
          <p className="leading-[normal]">Choose File</p>
        </div>
      </div>
      <div aria-hidden className="absolute border-2 border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Input1() {
  return (
    <div className="absolute content-stretch flex gap-[4px] items-center left-[90.2px] overflow-clip pr-[77.4px] top-0" data-name="input">
      <InputFileUploadButton />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12.8px] text-black whitespace-nowrap">
        <p className="leading-[normal]">No file chosen</p>
      </div>
    </div>
  );
}

function DivField3() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="div.field">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[14.1px] text-black top-[9.5px] whitespace-nowrap">
        <p className="leading-[normal]">Upload image</p>
      </div>
      <Input1 />
    </div>
  );
}

function ButtonBtn2() {
  return (
    <div className="bg-[#efefef] content-stretch flex items-center justify-center px-[8px] py-[3px] relative shrink-0" data-name="button.btn">
      <div aria-hidden className="absolute border-2 border-black border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12.8px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">Submit Report</p>
      </div>
    </div>
  );
}

function DivCard5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.card">
      <DivField />
      <DivField1 />
      <DivField2 />
      <DivField3 />
      <ButtonBtn2 />
    </div>
  );
}

function H5() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="h3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16.4px] text-black w-full">
        <p className="leading-[normal]">AI classification result</p>
      </div>
    </div>
  );
}

function PMuted() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px pt-[2.71px] relative shrink-0 w-full" data-name="p.muted">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.6px] text-black w-full">
        <p className="leading-[normal]">The uploaded image is automatically categorized by the AI module.</p>
      </div>
    </div>
  );
}

function DivMuted6() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="div.muted">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.9px] text-black w-full">
        <p className="leading-[normal]">Garbage overflow / illegal dumping</p>
      </div>
    </div>
  );
}

function Div7() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start relative shrink-0 w-full" data-name="div">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[13.9px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Predicted type</p>
      </div>
      <DivMuted6 />
    </div>
  );
}

function DivReportItem3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="div.report-item">
      <Div7 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.9px] text-black whitespace-nowrap">
        <p className="leading-[normal]">92% confidence</p>
      </div>
    </div>
  );
}

function DivMuted7() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="div.muted">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.8px] text-black w-full">
        <p className="leading-[normal]">High priority due to public-health risk</p>
      </div>
    </div>
  );
}

function Div8() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start relative shrink-0 w-full" data-name="div">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[13.9px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Severity</p>
      </div>
      <DivMuted7 />
    </div>
  );
}

function DivReportItem4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="div.report-item">
      <Div8 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14.4px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Urgent</p>
      </div>
    </div>
  );
}

function DivMuted8() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="div.muted">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.6px] text-black w-full">
        <p className="leading-[normal]">Notify local authority and sanitation team</p>
      </div>
    </div>
  );
}

function Div9() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start relative shrink-0 w-full" data-name="div">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[13.5px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Suggested action</p>
      </div>
      <DivMuted8 />
    </div>
  );
}

function DivReportItem5() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="div.report-item">
      <Div9 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.9px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Auto-routed</p>
      </div>
    </div>
  );
}

function DivGrid3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.grid">
      <DivReportItem3 />
      <DivReportItem4 />
      <DivReportItem5 />
    </div>
  );
}

function DivCard6() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="div.card">
      <H5 />
      <PMuted />
      <DivGrid3 />
    </div>
  );
}

function DivGrid2() {
  return (
    <div className="content-stretch flex flex-col gap-[18.72px] items-start relative shrink-0 w-full" data-name="div.grid">
      <DivCard5 />
      <DivCard6 />
    </div>
  );
}

function SectionReport() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="section#report">
      <DivTopbar1 />
      <DivGrid2 />
    </div>
  );
}

function H6() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="h2">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[21px] text-black w-full">
        <p className="leading-[normal]">Map-based Tracker</p>
      </div>
    </div>
  );
}

function P3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="p">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.4px] text-black w-full">
        <p className="leading-[normal]">Visual screen for issue locations and severity hotspots.</p>
      </div>
    </div>
  );
}

function DivTitle2() {
  return (
    <div className="content-stretch flex flex-col gap-[19.91px] items-start relative shrink-0 w-full" data-name="div.title">
      <H6 />
      <P3 />
    </div>
  );
}

function DivMuted9() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="div.muted">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.1px] text-black w-full">
        <p className="leading-[normal]">Urgent cases</p>
      </div>
    </div>
  );
}

function Div10() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start relative shrink-0 w-full" data-name="div">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14.8px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Red pins</p>
      </div>
      <DivMuted9 />
    </div>
  );
}

function DivMuted10() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="div.muted">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12.9px] text-black w-full">
        <p className="leading-[normal]">Sensor-supported areas</p>
      </div>
    </div>
  );
}

function Div11() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start relative shrink-0 w-full" data-name="div">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14.3px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Blue zone</p>
      </div>
      <DivMuted10 />
    </div>
  );
}

function DivMuted11() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="div.muted">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.4px] text-black w-full">
        <p className="leading-[normal]">Frequent complaint hotspots</p>
      </div>
    </div>
  );
}

function Div12() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start relative shrink-0 w-full" data-name="div">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14.1px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Heat regions</p>
      </div>
      <DivMuted11 />
    </div>
  );
}

function DivGrid4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.grid">
      <Div10 />
      <Div11 />
      <Div12 />
    </div>
  );
}

function SectionMap() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="section#map">
      <DivTitle2 />
      <DivGrid4 />
    </div>
  );
}

function H7() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="h2">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[21.8px] text-black w-full">
        <p className="leading-[normal]">Sensor Monitoring UI</p>
      </div>
    </div>
  );
}

function P4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="p">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.4px] text-black w-full">
        <p className="leading-[normal]">IoT dashboard screen for air quality and smart-bin status.</p>
      </div>
    </div>
  );
}

function DivTitle3() {
  return (
    <div className="content-stretch flex flex-col gap-[19.91px] items-start relative shrink-0 w-full" data-name="div.title">
      <H7 />
      <P4 />
    </div>
  );
}

function H8() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="h4">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-black w-full">
        <p className="leading-[normal]">Air Quality Index</p>
      </div>
    </div>
  );
}

function DivMetric3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px pt-[21.27px] relative shrink-0 w-full" data-name="div.metric">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-black w-full">
        <p className="leading-[normal]">68</p>
      </div>
    </div>
  );
}

function DivMuted12() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="div.muted">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.5px] text-black w-full">
        <p className="leading-[normal]">Moderate near industrial area</p>
      </div>
    </div>
  );
}

function DivCard7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.card">
      <H8 />
      <DivMetric3 />
      <DivMuted12 />
    </div>
  );
}

function H9() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="h4">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[15.1px] text-black w-full">
        <p className="leading-[normal]">Smart Bin Fill Level</p>
      </div>
    </div>
  );
}

function DivMetric4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px pt-[21.26px] relative shrink-0 w-full" data-name="div.metric">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14.6px] text-black w-full">
        <p className="leading-[normal]">87%</p>
      </div>
    </div>
  );
}

function DivMuted13() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="div.muted">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.5px] text-black w-full">
        <p className="leading-[normal]">Collection recommended soon</p>
      </div>
    </div>
  );
}

function DivCard8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.card">
      <H9 />
      <DivMetric4 />
      <DivMuted13 />
    </div>
  );
}

function H10() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="h4">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14.1px] text-black w-full">
        <p className="leading-[normal]">Temperature Alert</p>
      </div>
    </div>
  );
}

function DivMetric5() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px pt-[21.26px] relative shrink-0 w-full" data-name="div.metric">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14.6px] text-black w-full">
        <p className="leading-[normal]">31°C</p>
      </div>
    </div>
  );
}

function DivMuted14() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="div.muted">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.6px] text-black w-full">
        <p className="leading-[normal]">Normal range for outdoor zone</p>
      </div>
    </div>
  );
}

function DivCard9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.card">
      <H10 />
      <DivMetric5 />
      <DivMuted14 />
    </div>
  );
}

function DivGrid5() {
  return (
    <div className="content-stretch flex flex-col gap-[21.3px] items-start pt-[1.26px] relative shrink-0 w-full" data-name="div.grid">
      <DivCard7 />
      <DivCard8 />
      <DivCard9 />
    </div>
  );
}

function H11() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="h3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[15.9px] text-black w-full">
        <p className="leading-[normal]">Recent sensor activity</p>
      </div>
    </div>
  );
}

function DivMuted15() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="div.muted">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.6px] text-black w-full">
        <p className="leading-[normal]">PM level increased in the last 30 minutes</p>
      </div>
    </div>
  );
}

function Div13() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start relative shrink-0 w-full" data-name="div">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Station AQ-03</p>
      </div>
      <DivMuted15 />
    </div>
  );
}

function DivActivityItem() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="div.activity-item">
      <Div13 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Monitor</p>
      </div>
    </div>
  );
}

function DivMuted16() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="div.muted">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.9px] text-black w-full">
        <p className="leading-[normal]">Reached 87% fill level at school road</p>
      </div>
    </div>
  );
}

function Div14() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start relative shrink-0 w-full" data-name="div">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14.3px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Bin SN-09</p>
      </div>
      <DivMuted16 />
    </div>
  );
}

function DivActivityItem1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="div.activity-item">
      <Div14 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Action</p>
      </div>
    </div>
  );
}

function DivMuted17() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="div.muted">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.5px] text-black w-full">
        <p className="leading-[normal]">Water blockage indicator triggered</p>
      </div>
    </div>
  );
}

function Div15() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start relative shrink-0 w-full" data-name="div">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14.1px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Drain sensor DR-04</p>
      </div>
      <DivMuted17 />
    </div>
  );
}

function DivActivityItem2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="div.activity-item">
      <Div15 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[15.3px] text-black whitespace-nowrap">
        <p className="leading-[normal]">New</p>
      </div>
    </div>
  );
}

function DivActivity() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.activity">
      <DivActivityItem />
      <DivActivityItem1 />
      <DivActivityItem2 />
    </div>
  );
}

function DivCard10() {
  return (
    <div className="content-stretch flex flex-col gap-[18.72px] items-start relative shrink-0 w-full" data-name="div.card">
      <H11 />
      <DivActivity />
    </div>
  );
}

function SectionSensors() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="section#sensors">
      <DivTitle3 />
      <DivGrid5 />
      <DivCard10 />
    </div>
  );
}

function H12() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="h2">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[21.4px] text-black w-full">
        <p className="leading-[normal]">Admin Management Panel</p>
      </div>
    </div>
  );
}

function P5() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="p">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.6px] text-black w-full">
        <p className="leading-[normal]">Authority interface for reviewing, assigning, and resolving cases.</p>
      </div>
    </div>
  );
}

function DivTitle4() {
  return (
    <div className="content-stretch flex flex-col gap-[19.9px] items-start relative shrink-0 w-full" data-name="div.title">
      <H12 />
      <P5 />
    </div>
  );
}

function H13() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="h3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[15.6px] text-black w-full">
        <p className="leading-[normal]">Case queue</p>
      </div>
    </div>
  );
}

function DivMuted18() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="div.muted">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.9px] text-black w-full">
        <p className="leading-[normal]">Illegal dumping - high severity</p>
      </div>
    </div>
  );
}

function Div16() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start relative shrink-0 w-full" data-name="div">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[13.6px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Case #SG-1042</p>
      </div>
      <DivMuted18 />
    </div>
  );
}

function ButtonBtn3() {
  return (
    <div className="bg-[#efefef] content-stretch flex items-center justify-center px-[8px] py-[3px] relative shrink-0" data-name="button.btn">
      <div aria-hidden className="absolute border-2 border-black border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.3px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">Assign</p>
      </div>
    </div>
  );
}

function DivReportItem6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.report-item">
      <Div16 />
      <ButtonBtn3 />
    </div>
  );
}

function DivMuted19() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="div.muted">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.6px] text-black w-full">
        <p className="leading-[normal]">Smoke complaint - medium severity</p>
      </div>
    </div>
  );
}

function Div17() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start relative shrink-0 w-full" data-name="div">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[13.5px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Case #SG-1038</p>
      </div>
      <DivMuted19 />
    </div>
  );
}

function ButtonBtn4() {
  return (
    <div className="bg-[#efefef] content-stretch flex items-center justify-center px-[8px] py-[3px] relative shrink-0" data-name="button.btn">
      <div aria-hidden className="absolute border-2 border-black border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.3px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">Review</p>
      </div>
    </div>
  );
}

function DivReportItem7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.report-item">
      <Div17 />
      <ButtonBtn4 />
    </div>
  );
}

function DivMuted20() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="div.muted">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.6px] text-black w-full">
        <p className="leading-[normal]">Drain blockage - urgent</p>
      </div>
    </div>
  );
}

function Div18() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start relative shrink-0 w-full" data-name="div">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[13.6px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Case #SG-1029</p>
      </div>
      <DivMuted20 />
    </div>
  );
}

function ButtonBtn5() {
  return (
    <div className="bg-[#efefef] content-stretch flex items-center justify-center px-[8px] py-[3px] relative shrink-0" data-name="button.btn">
      <div aria-hidden className="absolute border-2 border-black border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.3px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">Resolve</p>
      </div>
    </div>
  );
}

function DivReportItem8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.report-item">
      <Div18 />
      <ButtonBtn5 />
    </div>
  );
}

function DivReportList1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.report-list">
      <DivReportItem6 />
      <DivReportItem7 />
      <DivReportItem8 />
    </div>
  );
}

function DivCard11() {
  return (
    <div className="content-stretch flex flex-col gap-[18.72px] items-start relative shrink-0 w-full" data-name="div.card">
      <H13 />
      <DivReportList1 />
    </div>
  );
}

function H14() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="h3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16.2px] text-black w-full">
        <p className="leading-[normal]">Performance analytics</p>
      </div>
    </div>
  );
}

function DivMuted21() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="div.muted">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.5px] text-black w-full">
        <p className="leading-[normal]">82 this month</p>
      </div>
    </div>
  );
}

function Div19() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start relative shrink-0 w-full" data-name="div">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[13.3px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Resolved cases</p>
      </div>
      <DivMuted21 />
    </div>
  );
}

function DivMuted22() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="div.muted">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.8px] text-black w-full">
        <p className="leading-[normal]">7.4 hours</p>
      </div>
    </div>
  );
}

function Div20() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start relative shrink-0 w-full" data-name="div">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14.1px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Avg resolution time</p>
      </div>
      <DivMuted22 />
    </div>
  );
}

function DivMuted23() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="div.muted">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.5px] text-black w-full">
        <p className="leading-[normal]">Canal-side ward</p>
      </div>
    </div>
  );
}

function Div21() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start relative shrink-0 w-full" data-name="div">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[13.9px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Top hotspot</p>
      </div>
      <DivMuted23 />
    </div>
  );
}

function DivMuted24() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="div.muted">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.3px] text-black w-full">
        <p className="leading-[normal]">89% feedback score</p>
      </div>
    </div>
  );
}

function Div22() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start relative shrink-0 w-full" data-name="div">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[13.9px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Citizen satisfaction</p>
      </div>
      <DivMuted24 />
    </div>
  );
}

function DivGrid7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.grid">
      <Div19 />
      <Div20 />
      <Div21 />
      <Div22 />
    </div>
  );
}

function DivCard12() {
  return (
    <div className="content-stretch flex flex-col gap-[18.72px] items-start relative shrink-0 w-full" data-name="div.card">
      <H14 />
      <DivGrid7 />
    </div>
  );
}

function DivGrid6() {
  return (
    <div className="content-stretch flex flex-col gap-[18.72px] items-start relative shrink-0 w-full" data-name="div.grid">
      <DivCard11 />
      <DivCard12 />
    </div>
  );
}

function SectionAdmin() {
  return (
    <div className="content-stretch flex flex-col gap-[18.71px] items-start relative shrink-0 w-full" data-name="section#admin">
      <DivTitle4 />
      <DivGrid6 />
    </div>
  );
}

function H15() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="h2">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[22.3px] text-black w-full">
        <p className="leading-[normal]">Mobile UI Mockup</p>
      </div>
    </div>
  );
}

function P6() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="p">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.6px] text-black w-full">
        <p className="leading-[normal]">Phone-style screen to show your UI/UX design direction.</p>
      </div>
    </div>
  );
}

function DivTitle5() {
  return (
    <div className="content-stretch flex flex-col gap-[19.9px] items-start relative shrink-0 w-full" data-name="div.title">
      <H15 />
      <P6 />
    </div>
  );
}

function H16() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="h3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16.7px] text-black w-full">
        <p className="leading-[normal]">Report. Detect. Improve.</p>
      </div>
    </div>
  );
}

function PMuted1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="p.muted">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.6px] text-black w-full">
        <p className="leading-[normal]">A simple environmental reporting experience for citizens.</p>
      </div>
    </div>
  );
}

function DivHero() {
  return (
    <div className="content-stretch flex flex-col gap-[18.72px] items-start relative shrink-0 w-full" data-name="div.hero">
      <H16 />
      <PMuted1 />
    </div>
  );
}

function ButtonBtn6() {
  return (
    <div className="bg-[#efefef] relative shrink-0 w-full" data-name="button.btn">
      <div aria-hidden className="absolute border-2 border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[8px] py-[3px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12.8px] text-black text-center whitespace-nowrap">
            <p className="leading-[normal]">+ Report New Issue</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DivField4() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start pt-[16px] relative shrink-0 w-full" data-name="div.field">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14.4px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Quick action</p>
      </div>
      <ButtonBtn6 />
    </div>
  );
}

function PMuted2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="p.muted">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.6px] text-black w-full">
        <p className="leading-[normal]">2 urgent reports within 2 km</p>
      </div>
    </div>
  );
}

function DivCard13() {
  return (
    <div className="content-stretch flex flex-col gap-[17px] items-start relative shrink-0 w-full" data-name="div.card">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14.3px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Nearby alerts</p>
      </div>
      <PMuted2 />
    </div>
  );
}

function PMuted3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="p.muted">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.5px] text-black w-full">
        <p className="leading-[normal]">Waste dump report is under review</p>
      </div>
    </div>
  );
}

function DivCard14() {
  return (
    <div className="content-stretch flex flex-col gap-[17px] items-start relative shrink-0 w-full" data-name="div.card">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[13.8px] text-black whitespace-nowrap">
        <p className="leading-[normal]">My recent case</p>
      </div>
      <PMuted3 />
    </div>
  );
}

function PMuted4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="p.muted">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.6px] text-black w-full">
        <p className="leading-[normal]">Area cleanliness improved this week</p>
      </div>
    </div>
  );
}

function DivCard15() {
  return (
    <div className="content-stretch flex flex-col gap-[17px] items-start relative shrink-0 w-full" data-name="div.card">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14.1px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Community score</p>
      </div>
      <PMuted4 />
    </div>
  );
}

function DivGrid8() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="div.grid">
      <DivCard13 />
      <DivCard14 />
      <DivCard15 />
    </div>
  );
}

function DivPhoneScreen() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.phone-screen">
      <DivHero />
      <DivField4 />
      <DivGrid8 />
    </div>
  );
}

function SectionMobile() {
  return (
    <div className="content-stretch flex flex-col gap-[18.71px] items-start relative shrink-0 w-full" data-name="section#mobile">
      <DivTitle5 />
      <DivPhoneScreen />
    </div>
  );
}

function MainMain() {
  return (
    <div className="content-stretch flex flex-col gap-[19.9px] items-start relative shrink-0 w-full" data-name="main.main">
      <DivMockupNote />
      <SectionDashboard />
      <SectionReport />
      <SectionMap />
      <SectionSensors />
      <SectionAdmin />
      <SectionMobile />
    </div>
  );
}

function DivApp() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.app">
      <AsideSidebar />
      <MainMain />
    </div>
  );
}

function Component1920WLight() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-[99px] pb-[16px] pt-[8px] px-[8px] top-[99px] w-[1920px]" data-name="1920w light">
      <DivApp />
    </div>
  );
}

export default function IndexHtmlSmartGreenPrototypeMhtByHtmlToDesignFreeVersion28062026123218Gmt() {
  return (
    <div className="bg-[#444] border border-[rgba(255,255,255,0.1)] border-solid overflow-clip relative rounded-[2px] size-full" data-name="index.html - SmartGreen Prototype.mht by html.to.design ❤️ FREE version - 28/06/2026, 12:32:18 GMT+5:30">
      <Component1920WLight />
    </div>
  );
}