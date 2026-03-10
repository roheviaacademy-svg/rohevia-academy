import CandlestickBackground from "./components/CandlestickBackground";
export default function Home() {
  return (
    <main style={{
      background:"transparent",
      color:"white",
     minHeight:"100vh",
      display:"flex",
      flexDirection:"column",
     justifyContent:"flex-start",
padding:"60px 20px",
      alignItems:"center",
      fontFamily:"sans-serif"
    }}>
      <CandlestickBackground />

      <h1 style={{fontSize:"clamp(32px,6vw,50px)",textAlign:"center"}}>
        Rohevia Academy
      </h1>

     <p style={{opacity:0.7,fontSize:"clamp(16px,3vw,20px)",textAlign:"center"}}>
        Learn Professional Binary Options Trading
      </p>

     <div style={{
marginTop:"30px",
display:"flex",
gap:"20px",
flexWrap:"wrap",
justifyContent:"center"
}}>

        <button style={{
          background:"#22c55e",
          padding:"15px 30px",
          border:"none",
          borderRadius:"10px",
          fontSize:"18px"
        }}>
          View Courses
        </button>

        <button style={{
          background:"#2563eb",
          padding:"15px 30px",
          border:"none",
          borderRadius:"10px",
          fontSize:"18px"
        }}>
          Join Mentorship
        </button>

      </div>
<section style={{
marginTop:"120px",
textAlign:"center"
}}>

<h2 style={{fontSize:"36px",marginBottom:"40px"}}>
Why Choose Rohevia Academy
</h2>

<div style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
gap:"30px",
maxWidth:"900px",
margin:"auto"
}}>

<div style={{background:"#111827",padding:"25px",borderRadius:"15px"}}>
<h3>5+ Years Trading Experience</h3>
<p>Learn from real live market trading experience.</p>
</div>

<div style={{background:"#111827",padding:"25px",borderRadius:"15px"}}>
<h3>CWRV Strategy</h3>
<p>High probability trading concepts for consistent profits.</p>
</div>

<div style={{background:"#111827",padding:"25px",borderRadius:"15px"}}>
<h3>Live Market Mentorship</h3>
<p>Learn how to analyse charts in real trading conditions.</p>
</div>

<div style={{background:"#111827",padding:"25px",borderRadius:"15px"}}>
<h3>Personal Support</h3>
<p>Get guidance and feedback to improve your trading.</p>
</div>

</div>

</section><section style={{
marginTop:"120px",
textAlign:"center",
maxWidth:"1000px",
marginInline:"auto"
}}>

<h2 style={{fontSize:"36px",marginBottom:"40px"}}>
Student Results
</h2>

<div style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
gap:"30px"
}}>

<div style={{
background:"#111827",
padding:"25px",
borderRadius:"15px"
}}>
<p>"After joining Rohevia Academy I finally understood market structure and started taking better trades."</p>
<h4 style={{marginTop:"15px",opacity:0.7}}>– Student from Kenya</h4>
</div>

<div style={{
background:"#111827",
padding:"25px",
borderRadius:"15px"
}}>
<p>"CWRV concept completely changed my trading. The live mentorship sessions helped me improve fast."</p>
<h4 style={{marginTop:"15px",opacity:0.7}}>– Student from India</h4>
</div>

<div style={{
background:"#111827",
padding:"25px",
borderRadius:"15px"
}}>
<p>"Best trading mentorship I joined. Strategies are simple and very powerful."</p>
<h4 style={{marginTop:"15px",opacity:0.7}}>– Student from UAE</h4>
</div>

</div>

</section>
<section style={{
  marginTop:"120px",
  display:"flex",
justifyContent:"center",
gap:"40px",
flexWrap:"wrap",
maxWidth:"1200px"
}}>

{/* ADVANCED */}
<div style={{
  background:"#064e3b",
  padding:"35px",
  width:"320px",
  borderRadius:"20px",
  color:"white"
}}>

<h2 style={{fontSize:"34px",fontWeight:"bold"}}>ADVANCED</h2>
<p>2 WEEKS SESSIONS</p>

<div style={{marginTop:"10px"}}>

<span style={{
  textDecoration:"line-through",
  opacity:0.6,
  fontSize:"20px",
  marginRight:"10px"
}}>
$250
</span>

<span style={{
  fontSize:"42px",
  fontWeight:"bold"
}}>
$167
</span>

</div>

<ul style={{marginTop:"20px",lineHeight:"1.8"}}>
<li>5-10 powerful trading strategies</li>
<li>Chart reading basics</li>
<li>Trading setup identification</li>
<li>Entry & exit rules</li>
<li>Beginner money management tips</li>
<li>Essential trading psychology</li>
</ul><a href="https://wa.me/919122891133?text=Hi%20Rohit%20I%20want%20to%20join%20Rohevia%20Academy%20mentorship">

<button style={{
  marginTop:"20px",
  padding:"12px 25px",
  background:"white",
  color:"black",
  border:"none",
  borderRadius:"10px",
  fontWeight:"bold",
  cursor:"pointer"
}}>
Enroll Now
</button>

</a>

</div>


{/* PRO */}
<div style={{
  background:"#b91c1c",
  padding:"35px",
  width:"320px",
  borderRadius:"20px",
  color:"white"
}}>

<h2 style={{fontSize:"34px",fontWeight:"bold"}}>PRO</h2>
<p>1 MONTH SESSIONS</p>

<div style={{marginTop:"10px"}}>

<span style={{
  textDecoration:"line-through",
  opacity:0.6,
  fontSize:"20px",
  marginRight:"10px"
}}>
$450
</span>

<span style={{
  fontSize:"42px",
  fontWeight:"bold"
}}>
$310
</span>

</div>

<ul style={{marginTop:"20px",lineHeight:"1.8"}}>
<li>10-15 high-accuracy trading strategies</li>
<li>Daily chart analysis</li>
<li>Risk management & capital allocation</li>
<li>Advanced trading psychology</li>
<li>Trend reading + entry zones</li>
<li>Volume reading & candle power concept</li>
</ul><a href="https://wa.me/919122891133?text=Hi%20Rohit%20I%20want%20to%20join%20Rohevia%20Academy" target="_blank">

<button style={{
marginTop:"20px",
padding:"12px 25px",
background:"white",
color:"black",
border:"none",
borderRadius:"10px",
fontWeight:"bold",
cursor:"pointer"
}}>
Enroll Now
</button>

</a>

</div>


{/* PRO+ */}
<div style={{
  background:"#1d4ed8",
  padding:"35px",
  width:"320px",
  borderRadius:"20px",
  color:"white"
}}>

<h2 style={{fontSize:"34px",fontWeight:"bold"}}>PRO+</h2>
<p>2 MONTH SESSIONS</p>

<div style={{marginTop:"10px"}}>

<span style={{
  textDecoration:"line-through",
  opacity:0.6,
  fontSize:"20px",
  marginRight:"10px"
}}>
$800
</span>

<span style={{
  fontSize:"42px",
  fontWeight:"bold"
}}>
$699
</span>

</div>

<ul style={{marginTop:"20px",lineHeight:"1.8"}}>
<li>20+ elite trading strategies</li>
<li>Daily chart updates</li>
<li>Live trading analysis</li>
<li>Personalised money management</li>
<li>Pro-level trading psychology</li>
<li>Weekly progress feedback</li>
</ul><a href="https://wa.me/919122891133?text=Hi%20Rohit%20I%20want%20to%20join%20Rohevia%20Academy" target="_blank">

<button style={{
marginTop:"20px",
padding:"12px 25px",
background:"white",
color:"black",
border:"none",
borderRadius:"10px",
fontWeight:"bold",
cursor:"pointer"
}}>
Enroll Now
</button>

</a>

</div>

</section>
<section style={{
marginTop:"120px",
maxWidth:"900px",
marginInline:"auto"
}}>

<h2 style={{
fontSize:"36px",
textAlign:"center",
marginBottom:"40px"
}}>
Frequently Asked Questions
</h2>

<div style={{
display:"flex",
flexDirection:"column",
gap:"20px"
}}>

<div style={{background:"#111827",padding:"25px",borderRadius:"15px"}}>
<h3>Do I need trading experience to join?</h3>
<p style={{opacity:0.8}}>No. The Advanced plan is beginner friendly and teaches the fundamentals of chart reading and trading setups.</p>
</div>

<div style={{background:"#111827",padding:"25px",borderRadius:"15px"}}>
<h3>Will there be live mentorship sessions?</h3>
<p style={{opacity:0.8}}>Yes. During the mentorship you will learn how to analyze the live market and understand trading psychology.</p>
</div>

<div style={{background:"#111827",padding:"25px",borderRadius:"15px"}}>
<h3>Which trading strategies will be taught?</h3>
<p style={{opacity:0.8}}>You will learn CWRV concepts, momentum strategies, breakout trading, and advanced market structure analysis.</p>
</div>

<div style={{background:"#111827",padding:"25px",borderRadius:"15px"}}>
<h3>How do I enroll?</h3>
<p style={{opacity:0.8}}>Click the Enroll Now button under any plan to contact us on WhatsApp and start your mentorship.</p>
</div>

</div>

</section><footer style={{
marginTop:"120px",
padding:"40px",
background:"#020617",
borderTop:"1px solid #1f2937",
textAlign:"center",
width:"100%"
}}>

<h2 style={{fontSize:"22px",marginBottom:"10px"}}>
Rohevia Academy
</h2>

<p style={{opacity:0.7}}>
Professional Binary Options Trading Mentorship
</p>

<div style={{
marginTop:"20px",
display:"flex",
justifyContent:"center",
gap:"20px"
}}>

<a href="https://www.instagram.com/roheviaacademy?igsh=NjNzbWFobGM0MDh2&utm_source=qr" target="_blank" style={{color:"#22c55e"}}>
Instagram
</a>

<a href="https://wa.me/919122891133?text=Hi%20Rohit%20I%20want%20to%20join%20Rohevia%20Academy%20mentorship" target="_blank" style={{color:"#22c55e"}}>
WhatsApp
</a>

</div>

<p style={{marginTop:"20px",opacity:0.5,fontSize:"14px"}}>
© 2026 Rohevia Academy. All rights reserved.
</p>

</footer>
    </main>
  )
}