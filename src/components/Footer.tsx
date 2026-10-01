import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-3">
        <div className="flex items-start gap-3">
          <img src={logo} alt="" className="h-10 w-10 rounded-lg" />
          <div>
            <div className="font-display font-bold">Kristine De Vera</div>
            <p className="text-sm text-muted-foreground mt-1 max-w-xs">
              Building automated systems that bridge marketing and sales.
            </p>
          </div>
        </div>
        <div className="text-sm text-muted-foreground space-y-1">
          <div className="font-semibold text-foreground mb-2">Contact</div>
          <div>krisdigitalvibe@gmail.com</div>
          <div>+63-950-709-5404</div>
          <div>Rizal, Calabarzon, Philippines</div>
        </div>
        <div className="text-sm">
          <div className="font-semibold text-foreground mb-2">Explore</div>
          <ul className="space-y-1 text-muted-foreground">
            <li><a href="#services" className="hover:text-primary">Services</a></li>
            <li><a href="#work" className="hover:text-primary">Selected Work</a></li>
            <li><a href="#contact" className="hover:text-primary">Get in touch</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Kristine De Vera. Crafted with care.
      </div>

      {/* BIR Registration Seal */}
<div style={{
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '1.5rem',
  paddingTop: '1.5rem',
  borderTop: '1px solid rgba(255,255,255,0.1)'
}}>
  <p style={{ fontSize: '11px', color: '#9ca3af', marginBottom: '8px' }}>
    BIR Registered — RSN 045RC20230000005822
  </p>
  <iframe
  src="https://bir.gov.ph/BIRSeal/seal.php?rsn=045RC20230000005822"
  width="200"
  height="200"
  style={{ border: 'none', opacity: 0.9 }}
  title="BIR Registration Seal"
  loading="lazy"
/>
</div>   
    </footer>
  );
}
