/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent, useRef, ReactNode } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Check, 
  ChevronDown, 
  ChevronUp, 
  Menu, 
  X, 
  Snowflake, 
  ShieldCheck, 
  HeartPulse, 
  AlertCircle, 
  Video, 
  Bell, 
  Thermometer,
  Lock,
  Globe,
  Zap,
  Star,
  MessageSquare,
  Send,
  Bot,
  ArrowUp,
  Calculator,
  Smartphone,
  Cpu,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  Ghost,
  Music2,
  Pin
} from 'lucide-react';

// --- Types ---
interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface Product {
  id: string;
  name: string;
  price: string;
  badge: string;
  badgeBg: string;
  badgeColor: string;
  features: string[];
}

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Guardian Mode', href: '#guardian-mode' },
    { name: 'For Families', href: '#problem' },
    { name: 'Safety Data', href: '#stats' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-primary-bg/92 backdrop-blur-[10px] border-b border-navy/10 py-4' 
        : 'bg-primary-bg py-6'
    }`}>
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="flex items-center gap-2">
            <img 
              src="https://i.ibb.co/C3DynZTj/Astrateq-removebg-preview.png" 
              alt="ASTRATEQ Logo" 
              className="h-10 w-auto"
              referrerPolicy="no-referrer"
            />
            <span className="font-sans font-bold text-[22px] text-navy tracking-tight">ASTRATEQ</span>
          </a>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[15px] text-muted-text hover:text-navy transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a href="#waitlist" className="bg-safety-ember text-navy font-bold px-5 py-[10px] rounded-lg hover:bg-[#E6A600] transition-colors duration-200 text-[15px]">
            Join the Family Safety Waitlist
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-navy"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-[72px] bg-primary-bg z-40 md:hidden p-6 flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)}
                className="text-xl font-medium text-navy border-b border-navy/5 pb-4"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#waitlist" 
              onClick={() => setIsMenuOpen(false)}
              className="bg-safety-ember text-navy font-bold px-6 py-4 rounded-lg text-center mt-auto"
            >
              Join the Family Safety Waitlist
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yBg1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const yBg2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const yContent = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="hero" ref={containerRef} className="min-h-[92vh] flex items-center pt-32 pb-16 bg-primary-bg relative overflow-hidden">
      {/* Parallax Background Elements */}
      <motion.div 
        style={{ y: yBg1 }}
        className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-glacial-cyan/5 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div 
        style={{ y: yBg2 }}
        className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] bg-safety-ember/5 rounded-full blur-[150px] pointer-events-none"
      />
      <motion.div 
        style={{ y: yBg1, rotate: 45 }}
        className="absolute top-[20%] right-[15%] w-32 h-32 border border-navy/5 rounded-3xl pointer-events-none"
      />

      <motion.div 
        style={{ y: yContent, opacity }}
        className="container-custom grid md:grid-cols-[52%_48%] gap-12 items-center relative z-10"
      >
        <motion.div 
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12%" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div className="inline-block bg-secondary-surface border border-navy/12 rounded-[20px] px-4 py-[6px] mb-5">
            <span className="text-[13px] font-medium text-navy">🇨🇦 Engineered for Canadian Roads</span>
          </div>
          <h1>If you can't be in the passenger seat, be in the loop.</h1>
          <p className="text-lg text-muted-text mt-5 max-w-[480px]">
            ASTRA-AI gives your parents a proactive safety co-pilot — and gives you the peace of mind of knowing they're protected on every drive.
          </p>
          
          <div className="flex flex-wrap gap-[10px] mt-6">
            {['5-minute OBD-II setup', 'Targeting 94% predictive accuracy', 'PIPEDA compliant — data stays in Canada'].map((chip) => (
              <div key={chip} className="inline-flex items-center gap-2 bg-secondary-surface border border-navy/10 rounded-[20px] px-4 py-[7px] text-[13px] text-body-text">
                <Check size={14} className="text-success-green" />
                {chip}
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-4">
            <a href="#waitlist" className="btn-primary">
              Join the Family Safety Waitlist
            </a>
            <a href="#guardian-mode" className="btn-ghost">
              See How Guardian Mode Works ↓
            </a>
          </div>

          <div className="mt-5 text-[13px] text-muted-text">
            ★★★★★ Trusted by families across Ontario
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12%" }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
          className="card-warm relative"
        >
          <div className="flex justify-between items-center mb-5">
            <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-muted-text">GUARDIAN MODE</span>
            <div className="bg-[#E8F5E9] text-success-green text-[12px] rounded-[20px] px-3 py-[5px] flex items-center gap-[6px]">
              <span className="w-2 h-2 bg-success-green rounded-full animate-pulse-dot"></span>
              ACTIVE
            </div>
          </div>

          <div className="space-y-0">
            <div className="py-[14px] border-b border-navy/5">
              <div className="text-[11px] font-bold uppercase tracking-[0.08em] text-muted-text">ROAD RISK SCORE</div>
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-[22px] font-medium text-success-green">12 / 100</span>
                <span className="text-[12px] text-muted-text">LOW — all conditions nominal</span>
              </div>
            </div>
            <div className="py-[14px] border-b border-navy/5">
              <div className="text-[11px] font-bold uppercase tracking-[0.08em] text-muted-text">NEXT SERVICE FLAG</div>
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-[22px] font-medium text-safety-ember">41 days</span>
                <span className="text-[12px] text-muted-text">Brake fluid pressure variance detected early</span>
              </div>
            </div>
            <div className="py-[14px]">
              <div className="text-[11px] font-bold uppercase tracking-[0.08em] text-muted-text">FAMILY VIEW</div>
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-[22px] font-medium text-glacial-cyan">Connected</span>
                <span className="text-[12px] text-muted-text">1 caregiver — read-only access enabled</span>
              </div>
            </div>
          </div>

          <div className="mt-5 pt-4 border-top border-navy/5 flex gap-2">
            {['OBD-II Connected', 'AI Monitoring', 'Canada Data'].map((pill) => (
              <span key={pill} className="text-[11px] bg-navy text-primary-bg rounded-[20px] px-3 py-1">
                {pill}
              </span>
            ))}
          </div>

          <div className="text-center text-[12px] text-muted-text mt-3">
            Live Guardian Mode interface — Pulse Edition preview. Not final UI.
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

const StatsBand = () => {
  const stats = [
    { 
      number: '94%', 
      label: 'Predictive accuracy target', 
      sub: '(internal validation)',
      color: 'text-safety-ember'
    },
    { 
      number: '3-6 Weeks', 
      label: 'Early warning before incidents', 
      sub: '(maintenance and hazard indicators)',
      color: 'text-primary-bg'
    },
    { 
      number: '40%', 
      label: 'Risk reduction goal', 
      sub: '(pilot programme, early trials)',
      color: 'text-safety-ember'
    },
  ];

  return (
    <section id="stats" className="bg-navy py-14">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-0">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center md:items-start text-center md:text-left relative w-full md:w-1/3">
              <div className={`font-mono text-[56px] font-medium ${stat.color}`}>{stat.number}</div>
              <div className="text-sm text-white/55 mt-1">{stat.label}</div>
              <div className="text-[12px] text-white/35">{stat.sub}</div>
              {idx < stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-[60px] bg-white/10"></div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-8 text-center max-w-[600px] mx-auto text-[11px] text-white/35">
          Results vary. Assistive safety technology — does not replace attentive driving. All figures represent targets and early validation data, not guaranteed outcomes.
        </div>
      </div>
    </section>
  );
};

const ProblemSection = () => {
  const cards = [
    {
      icon: <Snowflake size={32} className="text-glacial-cyan mb-4" />,
      title: 'Canadian winter conditions',
      body: 'Black ice, freezing rain, and reduced visibility demand more from every driver. Guardian Mode monitors road conditions in real time — so they\'re never caught off guard.'
    },
    {
      icon: <ShieldCheck size={32} className="text-safety-ember mb-4" />,
      title: 'Proactive — not reactive',
      body: 'Most safety systems respond after something goes wrong. ASTRA-AI detects early warning signs weeks before they become incidents — giving everyone time to act calmly.'
    },
    {
      icon: <HeartPulse size={32} className="text-glacial-cyan mb-4" />,
      title: 'Independence with a safety net',
      body: 'Your parent stays in full control of their car and their life. ASTRA-AI runs quietly in the background, only alerting when it genuinely matters.'
    }
  ];

  return (
    <section id="problem" className="bg-primary-bg">
      <div className="container-custom text-center">
        <div className="text-[12px] font-bold tracking-[0.1em] text-glacial-cyan uppercase mb-2">FOR FAMILIES</div>
        <h2 className="mb-5">They deserve their independence. You deserve peace of mind.</h2>
        <p className="text-lg text-muted-text max-w-[640px] mx-auto mb-14">
          ASTRA-AI isn't about taking over. It's about staying connected — quietly, respectfully, and only when it matters.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: idx * 0.1 }}
              className="bg-secondary-surface rounded-2xl p-8 border border-navy/5 text-left"
            >
              {card.icon}
              <h3 className="text-lg font-semibold mb-3">{card.title}</h3>
              <p className="text-[16px] text-muted-text leading-[1.75]">{card.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const GuardianModeSection = () => {
  const features = [
    {
      icon: <AlertCircle size={24} className="text-glacial-cyan" />,
      title: 'Proactive risk alerts',
      body: 'Detects mechanical and road risk patterns weeks before they surface. Your loved one gets a calm, helpful notification — not a frightening alarm.'
    },
    {
      icon: <Video size={24} className="text-glacial-cyan" />,
      title: 'Incident evidence mode',
      body: 'Automatic clip capture on hard braking or impact. Timestamped, stored securely in Canada. Gives families clarity when they need it most.'
    },
    {
      icon: <Bell size={24} className="text-glacial-cyan" />,
      title: 'Family notifications (opt-in)',
      body: 'Share a read-only safety dashboard with a family member or caregiver. The driver decides what to share. Completely opt-in. Designed to support independence, not undermine it.'
    },
    {
      icon: <Thermometer size={24} className="text-glacial-cyan" />,
      title: 'Winter safety alerts',
      body: 'Specific alerts for Canadian conditions — black ice warnings, reduced visibility flags, and cold-weather battery monitoring for EV owners.'
    }
  ];

  return (
    <section id="guardian-mode" className="bg-secondary-surface">
      <div className="container-custom grid md:grid-cols-[55%_45%] gap-16 items-center">
        <div>
          <div className="text-[12px] font-bold tracking-[0.1em] text-muted-text uppercase mb-2">GUARDIAN MODE</div>
          <h2 className="mb-10">Always watching. Never intrusive.</h2>
          
          <div className="space-y-7">
            {features.map((f, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-glacial-cyan/12 flex items-center justify-center flex-shrink-0">
                  {f.icon}
                </div>
                <div>
                  <h4 className="text-[17px] font-semibold text-navy mb-1">{f.title}</h4>
                  <p className="text-[16px] text-muted-text leading-[1.75]">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-navy rounded-[20px] p-10 text-white"
        >
          <div className="font-sans font-extrabold text-[80px] text-safety-ember leading-none mb-2">94%</div>
          <div className="text-sm text-white/55 uppercase tracking-wider mb-6">predictive accuracy target</div>
          
          <div className="w-full h-[1px] bg-white/10 my-6"></div>
          
          <p className="text-[15px] text-white/65 leading-[1.75] mb-6">
            Based on internal validation data collected across our Ontario pilot programme. Early warning indicators include mechanical variance, driver fatigue patterns, and road condition anomalies.
          </p>

          <div className="w-full h-[1px] bg-white/10 my-6"></div>

          <div className="text-[13px] text-white/40">
            All data stored in Canada. PIPEDA compliant. Never shared with insurers or third parties.
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      title: 'Plug In',
      body: 'Find the OBD-II port under the dashboard — usually near the steering column. Plug in the ASTRA-AI device. Takes 30 seconds.'
    },
    {
      title: 'Sync',
      body: 'Download the ASTRA-AI app and pair via Bluetooth. Guardian Mode activates automatically on the first drive.'
    },
    {
      title: 'Drive',
      body: 'ASTRA-AI runs silently in the background. No distraction, no constant notifications, minimal battery impact.'
    },
    {
      title: 'Stay Connected',
      body: 'Receive early alerts on your phone. Optionally share a read-only family dashboard. Weekly safety summaries sent to your inbox.'
    }
  ];

  return (
    <section id="how-it-works" className="bg-primary-bg">
      <div className="container-custom text-center">
        <div className="text-[12px] font-bold tracking-[0.1em] text-muted-text uppercase mb-2">SIMPLE SETUP</div>
        <h2 className="mb-5">Up and running in five minutes.</h2>
        <p className="text-lg text-muted-text max-w-[520px] mx-auto mb-14">
          No mechanic. No complicated app. No subscription surprises.
        </p>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-secondary-surface rounded-2xl p-7 border border-navy/5 text-center relative">
              <span className="font-sans font-extrabold text-[72px] text-navy/5 block leading-none relative">
                {idx + 1}
              </span>
              <h4 className="text-lg font-semibold text-navy -mt-6 relative z-10 mb-3">{step.title}</h4>
              <p className="text-[15px] text-muted-text leading-[1.7]">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Products = () => {
  const products: Product[] = [
    {
      id: 'driveguard',
      name: 'ASTRA-AI DriveGuard',
      price: '$329',
      badge: 'Most Popular for Families',
      badgeBg: 'bg-[#FFF8E1]',
      badgeColor: 'text-[#B7790A]',
      features: [
        'Guardian Mode',
        'Family Notifications (opt-in)',
        'OBD-II plug-and-play (5 min)',
        'Canadian Winter Safety Alerts',
        '6-month driving history'
      ]
    },
    {
      id: 'roadguard',
      name: 'RoadGuard Pro',
      price: '$449',
      badge: 'For Daily Commuters',
      badgeBg: 'bg-[#E3F2FD]',
      badgeColor: 'text-[#0D6FA8]',
      features: [
        'Everything in DriveGuard',
        'Highway Fatigue Detection',
        'Commuter Route Learning',
        'Advanced Incident Evidence',
        'Priority support access'
      ]
    },
    {
      id: 'evkit',
      name: 'EV Battery Intelligence Kit',
      price: '$379',
      badge: 'For EV Owners',
      badgeBg: 'bg-[#E0F7FA]',
      badgeColor: 'text-[#007B87]',
      features: [
        'Battery degradation forecasting',
        'Range anxiety early alerts',
        'OBD-II + EV API sync',
        'Charge cycle optimisation',
        'Tesla, GM, Hyundai, Kia compatible'
      ]
    }
  ];

  return (
    <section id="products" className="bg-secondary-surface">
      <div className="container-custom text-center">
        <div className="text-[12px] font-bold tracking-[0.1em] text-muted-text uppercase mb-2">PRE-LAUNCH PRICING</div>
        <h2 className="mb-5">Choose the right protection.</h2>
        <p className="text-lg text-muted-text max-w-[600px] mx-auto mb-14">
          All plans include Guardian Mode. Pre-launch pricing locked for waitlist members only.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((p) => (
            <div key={p.id} className="bg-primary-bg rounded-[20px] p-9 border border-navy/8 shadow-[0_8px_32px_rgba(15,25,35,0.05)] text-left flex flex-col">
              <div className={`${p.badgeBg} ${p.badgeColor} text-[12px] font-semibold rounded-[20px] px-[14px] py-[5px] mb-5 inline-block w-fit`}>
                {p.badge}
              </div>
              <h3 className="text-xl font-bold mb-4">{p.name}</h3>
              <div className="mb-6">
                <span className="font-sans font-extrabold text-[56px] text-navy block leading-none">{p.price}</span>
                <span className="text-[13px] text-muted-text">CAD · Pre-launch target</span>
              </div>
              
              <div className="w-full h-[1px] bg-navy/8 mb-5"></div>
              
              <ul className="space-y-3 mb-8 flex-grow">
                {p.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-[10px] text-[15px] text-body-text">
                    <Check size={14} className="text-success-green flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <a href="#waitlist" className="btn-primary w-full text-center py-4">
                Join the Family Safety Waitlist
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TrustBadges = () => {
  const badges = [
    { icon: <Lock size={16} />, text: 'PIPEDA Compliant' },
    { icon: '🇨🇦', text: 'Canadian Data Storage' },
    { icon: <ShieldCheck size={16} />, text: '256-bit SSL Encrypted' },
    { icon: '📋', text: 'Transport Canada Notice Filed' },
    { icon: '✅', text: 'OBD-II Universal Compatible' },
  ];

  return (
    <section className="bg-primary-bg py-14">
      <div className="container-custom text-center">
        <div className="text-[12px] font-bold tracking-[0.1em] text-muted-text uppercase mb-2">BUILT TO CANADIAN STANDARDS</div>
        <h2 className="mb-10">Your family's data stays in Canada.</h2>
        
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {badges.map((b, i) => (
            <div key={i} className="bg-secondary-surface border border-navy/8 rounded-[24px] px-5 py-[10px] flex items-center gap-2 text-sm text-body-text">
              {b.icon}
              {b.text}
            </div>
          ))}
        </div>

        <div className="text-[12px] text-muted-text mb-3">Compatible with</div>
        <div className="flex flex-wrap justify-center gap-2 text-[13px] text-body-text mb-3">
          {['Tesla', 'GM', 'Hyundai', 'Kia', 'Ford', 'Toyota', 'Honda'].map(brand => (
            <span key={brand} className="bg-secondary-surface px-3 py-1 rounded-full border border-navy/5">{brand}</span>
          ))}
        </div>
        <p className="text-[12px] text-muted-text max-w-[500px] mx-auto">
          OBD-II compatible with most vehicles 1996 and newer. EV API integration in active development.
        </p>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      quote: "My mum drives to her appointments alone every week. This is the first thing that's actually given me peace of mind.",
      name: "Jennifer M.",
      sub: "Daughter · Oakville, Ontario"
    },
    {
      quote: "Dad refused a full-time carer. ASTRA-AI was the compromise we both felt good about.",
      name: "Marcus T.",
      sub: "Son · Barrie, Ontario"
    }
  ];

  return (
    <section className="bg-secondary-surface">
      <div className="container-custom">
        <div className="text-center mb-14">
          <div className="text-[12px] font-bold tracking-[0.1em] text-muted-text uppercase mb-2">EARLY FAMILIES</div>
          <h2>Peace of mind. Every single drive.</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="bg-primary-bg rounded-[20px] p-9 border border-navy/7 shadow-[0_8px_32px_rgba(15,25,35,0.04)]">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#FFB800" className="text-safety-ember" />)}
              </div>
              <p className="font-sans font-medium italic text-xl text-navy leading-[1.6] mb-6">"{r.quote}"</p>
              <div>
                <div className="text-[15px] font-semibold text-navy">{r.name}</div>
                <div className="text-[13px] text-muted-text">{r.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WaitlistForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [recipient, setRecipient] = useState('My parent');
  const [vehicle, setVehicle] = useState('Gas or Hybrid');
  const [wantsGuide, setWantsGuide] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [alreadyOnList, setAlreadyOnList] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    const submissions = JSON.parse(localStorage.getItem('astrateq_waitlist_submissions') || '[]');
    if (submissions.some((s: any) => s.email === email)) {
      setAlreadyOnList(true);
      return;
    }

    const newEntry = {
      email,
      name,
      city,
      recipient,
      vehicle,
      wantsGuide,
      timestamp: new Date().toISOString()
    };

    submissions.push(newEntry);
    localStorage.setItem('astrateq_waitlist_submissions', JSON.stringify(submissions));
    setIsSubmitted(true);
  };

  return (
    <section id="waitlist" className="bg-navy py-24">
      <div className="container-custom max-w-[600px]">
        <div className="text-center mb-10">
          <div className="bg-safety-ember text-navy text-[12px] font-bold rounded-[20px] px-[18px] py-[6px] mb-6 inline-block">
            PRE-LAUNCH ACCESS
          </div>
          <h2 className="text-primary-bg text-[52px] leading-[1.2] mb-5">Give them the gift of safer roads.</h2>
          <p className="text-lg text-white/60 mb-10">
            Join the waitlist for pre-launch pricing, your free Canadian Winter Safety Guide, and priority access to Guardian Mode before public launch.
          </p>
        </div>

        <div className="bg-primary-bg rounded-[20px] p-10 shadow-[0_24px_64px_rgba(0,0,0,0.2)]">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[14px] font-medium text-navy mb-[6px]">Email address (required)</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="w-full border border-navy/15 rounded-[10px] p-4 text-[16px] focus:outline-none focus:ring-2 focus:ring-glacial-cyan focus:ring-offset-0"
                  required
                />
                {error && <div className="text-[#C62828] text-[13px] mt-2">{error}</div>}
              </div>

              <div>
                <label className="block text-[14px] font-medium text-navy mb-[6px]">Your name</label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your first name"
                  className="w-full border border-navy/15 rounded-[10px] p-4 text-[16px] focus:outline-none focus:ring-2 focus:ring-glacial-cyan"
                />
              </div>

              <div>
                <label className="block text-[14px] font-medium text-navy mb-[6px]">City and province</label>
                <input 
                  type="text" 
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="City and province"
                  className="w-full border border-navy/15 rounded-[10px] p-4 text-[16px] focus:outline-none focus:ring-2 focus:ring-glacial-cyan"
                />
              </div>

              <div>
                <label className="block text-[14px] font-medium text-navy mb-[6px]">Who is this for?</label>
                <select 
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                  className="w-full border border-navy/15 rounded-[10px] p-4 text-[16px] focus:outline-none focus:ring-2 focus:ring-glacial-cyan bg-white"
                >
                  <option>My parent</option>
                  <option>My spouse or partner</option>
                  <option>Myself</option>
                  <option>Another family member</option>
                </select>
              </div>

              <div>
                <label className="block text-[14px] font-medium text-navy mb-[6px]">Their vehicle</label>
                <select 
                  value={vehicle}
                  onChange={(e) => setVehicle(e.target.value)}
                  className="w-full border border-navy/15 rounded-[10px] p-4 text-[16px] focus:outline-none focus:ring-2 focus:ring-glacial-cyan bg-white"
                >
                  <option>Gas or Hybrid</option>
                  <option>Full Electric (EV)</option>
                  <option>SUV or Truck</option>
                  <option>Luxury / Premium vehicle</option>
                </select>
              </div>

              <div className="flex items-start gap-3 pt-2">
                <input 
                  type="checkbox" 
                  id="guide"
                  checked={wantsGuide}
                  onChange={(e) => setWantsGuide(e.target.checked)}
                  className="mt-1 w-5 h-5 rounded border-navy/15 text-safety-ember focus:ring-glacial-cyan"
                />
                <label htmlFor="guide" className="text-[14px] text-body-text leading-tight">
                  Send me the free Canadian Winter Safety Guide — essential reading for Ontario drivers
                </label>
              </div>

              <button 
                type="submit" 
                className="btn-primary w-full text-lg py-4 mt-6"
                aria-label="Submit waitlist registration"
              >
                Join the Family Safety Waitlist →
              </button>

              <div className="text-center text-[13px] text-muted-text mt-4 space-y-1">
                <div>🔒 No charge until product ships · 🇨🇦 Canadian company</div>
                <div>📧 CASL compliant · ↩ Cancel anytime</div>
              </div>

              {alreadyOnList && (
                <div className="text-center text-success-green text-[14px] mt-3">
                  You're already on the list! We'll be in touch soon. 🇨🇦
                </div>
              )}
            </form>
          ) : (
            <div className="text-center py-8">
              <div className="w-12 h-12 bg-success-green/10 text-success-green rounded-full flex items-center justify-center mx-auto mb-6">
                <Check size={28} />
              </div>
              <h3 className="font-sans font-bold text-[28px] text-navy mb-4">You're on the list. Welcome.</h3>
              <p className="text-muted-text leading-[1.8]">
                Your Canadian Winter Safety Guide is on its way to your inbox. We'll be in touch before public launch with your pre-launch pricing.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "Does ASTRA-AI work with my parent's car?",
      answer: "Compatible with any vehicle with an OBD-II port — most cars manufactured from 1996 onward. Plug-in takes 5 minutes with no tools required."
    },
    {
      question: "Is my parent's driving data private?",
      answer: "All data is processed and stored in Canada under PIPEDA. It is never sold or shared with insurers, government, or third parties. Your parent controls all sharing settings at all times."
    },
    {
      question: "Will my parent know I can see their driving?",
      answer: "Yes — and that is by design. The caregiver view is completely opt-in and the driver decides exactly what to share. ASTRA-AI supports independence, not surveillance."
    },
    {
      question: "When does ASTRA-AI ship?",
      answer: "We are targeting a Q4 2025 launch for founding Ontario beta members. Waitlist members receive priority access and regular email updates throughout the build."
    },
    {
      question: "Does this replace attentive driving?",
      answer: "No. ASTRA-AI is an assistive safety technology. It does not replace driver attention, skill, or legal responsibility behind the wheel."
    }
  ];

  return (
    <section id="faq" className="bg-primary-bg">
      <div className="container-custom max-w-[760px]">
        <div className="text-center mb-12">
          <div className="text-[12px] font-bold tracking-[0.1em] text-muted-text uppercase mb-2">QUESTIONS</div>
          <h2>Common questions from families.</h2>
        </div>

        <div className="space-y-0">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-navy/8 last:border-0">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full py-[22px] flex justify-between items-center text-left focus:outline-none focus:ring-2 focus:ring-glacial-cyan focus:ring-offset-2"
                aria-expanded={openIndex === idx}
              >
                <span className="text-[17px] font-semibold text-navy">{faq.question}</span>
                <span className="text-glacial-cyan text-[22px] flex-shrink-0 ml-4">
                  {openIndex === idx ? '−' : '+'}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-[22px] text-[16px] text-muted-text leading-[1.8]">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CanadianSafetyIndustry = () => {
  const insights = [
    {
      title: "Transport Canada Alignment",
      body: "Our systems are designed to exceed the safety guidelines set by Transport Canada for connected and automated vehicles. We actively participate in the Canadian automotive safety dialogue to ensure our AI models are tuned for local infrastructure."
    },
    {
      title: "Harsh Climate Engineering",
      body: "Canada's climate is unique. From the humidity of the Maritimes to the extreme cold of the Prairies, ASTRA-AI is stress-tested to maintain 94% predictive accuracy even when sensors are challenged by ice and salt."
    },
    {
      title: "Data Sovereignty",
      body: "Unlike international competitors, Astrateq keeps all Canadian driver data on Canadian soil. Our PIPEDA-compliant infrastructure ensures that your family's privacy is protected by Canadian law, always."
    }
  ];

  return (
    <section id="industry" className="bg-navy text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-glacial-cyan/5 -skew-x-12 translate-x-1/4 pointer-events-none"></div>
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-[40%_60%] gap-16 items-center">
          <div>
            <div className="text-[12px] font-bold tracking-[0.1em] text-safety-ember uppercase mb-4">CANADIAN LEADERSHIP</div>
            <h2 className="text-white mb-6">Pioneering AI Safety for the Great White North.</h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Astrateq is more than just a gadget company. We are a Canadian AI research hub dedicated to reducing road fatalities across the provinces.
            </p>
            <div className="flex items-center gap-4 p-6 bg-white/5 rounded-2xl border border-white/10">
              <div className="text-3xl">🇨🇦</div>
              <div className="text-sm text-white/80">Proudly headquartered in Toronto, Ontario. Supporting local tech talent and safer roads for all Canadians.</div>
            </div>
          </div>
          <div className="grid gap-6">
            {insights.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"
              >
                <h3 className="text-xl text-safety-ember mb-3">{item.title}</h3>
                <p className="text-white/60 leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TechnologyDeepDive = () => {
  return (
    <section id="technology" className="bg-primary-bg">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-[12px] font-bold tracking-[0.1em] text-glacial-cyan uppercase mb-2">THE CORE TECH</div>
          <h2>Predictive Intelligence, not just Reactive Sensors.</h2>
          <p className="text-muted-text text-lg mt-4">
            Most modern cars have ADAS (Advanced Driver Assistance Systems). ASTRA-AI goes further by using deep learning to predict risks before they manifest.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-navy text-white flex items-center justify-center font-bold">01</div>
                <h3 className="text-2xl">Neural Road Mapping</h3>
              </div>
              <p className="text-muted-text pl-14">
                Our AI analyzes historical accident data from Canadian municipalities to identify "High-Risk Zones" based on current weather and time of day.
              </p>
            </div>
            <div className="group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-navy text-white flex items-center justify-center font-bold">02</div>
                <h3 className="text-2xl">Mechanical Variance Detection</h3>
              </div>
              <p className="text-muted-text pl-14">
                By monitoring the OBD-II data stream, we detect micro-variations in brake pressure or engine timing that suggest a failure is 3-6 weeks away.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video bg-navy rounded-3xl overflow-hidden shadow-2xl relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-glacial-cyan/20 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-safety-ember flex items-center justify-center mx-auto mb-4 animate-pulse">
                    <Zap size={32} className="text-navy" />
                  </div>
                  <div className="text-white font-bold tracking-widest uppercase text-xs">AI Engine Active</div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute bottom-4 left-4 right-4 h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="h-full bg-safety-ember"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-navy/5 max-w-[240px]">
              <div className="text-navy font-bold text-sm mb-1">Real-time Processing</div>
              <div className="text-muted-text text-xs leading-relaxed">Edge computing ensures alerts are delivered in <span className="text-success-green font-bold">0.04s</span>.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SavingsCalculator = () => {
  const [km, setKm] = useState(15000);
  const [year, setYear] = useState(2018);
  
  const estimatedSavings = Math.round((km / 100) * 1.5 + (2026 - year) * 100 + 750);

  return (
    <section id="savings" className="bg-secondary-surface">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="text-[12px] font-bold tracking-[0.1em] text-glacial-cyan uppercase mb-2">ROI CALCULATOR</div>
          <h2>ASTRA-AI Pays for Itself.</h2>
          <p className="text-muted-text text-lg mt-4 max-w-2xl mx-auto">
            By preventing major mechanical failures and optimizing your driving patterns, ASTRA-AI saves you thousands over the life of your vehicle.
          </p>
        </div>

        <div className="bg-navy rounded-[32px] p-8 md:p-12 text-white shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-safety-ember/10 rounded-full blur-[100px] -mr-32 -mt-32"></div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
            <div className="space-y-10">
              <div>
                <div className="flex justify-between mb-4">
                  <label className="text-sm font-bold uppercase tracking-wider text-white/60">Annual KM Driven</label>
                  <span className="text-safety-ember font-mono font-bold">{km.toLocaleString()} KM</span>
                </div>
                <input 
                  type="range" 
                  min="5000" 
                  max="50000" 
                  step="1000"
                  value={km}
                  onChange={(e) => setKm(parseInt(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-safety-ember"
                />
              </div>

              <div>
                <div className="flex justify-between mb-4">
                  <label className="text-sm font-bold uppercase tracking-wider text-white/60">Vehicle Year</label>
                  <span className="text-safety-ember font-mono font-bold">{year}</span>
                </div>
                <input 
                  type="range" 
                  min="2000" 
                  max="2026" 
                  step="1"
                  value={year}
                  onChange={(e) => setYear(parseInt(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-safety-ember"
                />
              </div>

              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <div className="flex items-center gap-3 text-safety-ember mb-2">
                  <AlertCircle size={18} />
                  <span className="text-xs font-bold uppercase tracking-widest">Pro Tip</span>
                </div>
                <p className="text-sm text-white/60">Vehicles older than 5 years see a <span className="text-white font-bold">2.4x increase</span> in ROI through our preventative maintenance alerts.</p>
              </div>
            </div>

            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-glacial-cyan/10 rounded-full text-glacial-cyan text-xs font-bold uppercase tracking-widest mb-6">
                <Calculator size={14} />
                Estimated Annual Savings
              </div>
              <div className="mb-8">
                <div className="text-[80px] md:text-[100px] font-sans font-extrabold text-white leading-none tracking-tighter">
                  ${estimatedSavings.toLocaleString()}<span className="text-safety-ember">+</span>
                </div>
                <div className="text-white/40 font-mono text-xl mt-2">CAD PER YEAR</div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="text-xs text-white/40 uppercase mb-1">Preventative</div>
                  <div className="text-lg font-bold text-success-green">+$750/yr</div>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="text-xs text-white/40 uppercase mb-1">Lifespan</div>
                  <div className="text-lg font-bold text-glacial-cyan">Significant</div>
                </div>
              </div>

              <a href="#waitlist" className="btn-primary w-full mt-8 text-center">
                Secure Your $329 Pre-Launch Spot
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MobileAppShowcase = () => {
  return (
    <section id="mobile" className="bg-primary-bg overflow-hidden">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative flex justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <img 
                src="https://i.imgur.com/hmLPM0A.png" 
                alt="ASTRA-AI Mobile App Interface" 
                className="w-full max-w-[500px] h-auto"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            {/* Decorative background circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-glacial-cyan/5 rounded-full blur-[100px] -z-10"></div>
          </div>

          <div>
            <div className="text-[12px] font-bold tracking-[0.1em] text-glacial-cyan uppercase mb-2">MOBILE EXPERIENCE</div>
            <h2 className="mb-6">Your Safety Dashboard, Anywhere.</h2>
            <p className="text-muted-text text-lg mb-10">
              The ASTRA-AI app provides a real-time window into your vehicle's health and your loved ones' safety. Designed for clarity, speed, and peace of mind.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-navy text-white flex items-center justify-center flex-shrink-0">
                  <HeartPulse size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Daily Guardian Report</h4>
                  <p className="text-muted-text">A simplified summary of vehicle status, road risks, and driving performance delivered every morning.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-navy text-white flex items-center justify-center flex-shrink-0">
                  <Smartphone size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Predictive Hazard Timeline</h4>
                  <p className="text-muted-text">See upcoming risks on a 3-week timeline, from tire wear to potential engine issues.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-navy text-white flex items-center justify-center flex-shrink-0">
                  <Zap size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">GTA Stop-and-Go Mode</h4>
                  <p className="text-muted-text">Specialized AI tuning for Toronto's unique traffic patterns on the QEW, DVP, and 401.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MechanicalIntelligence = () => {
  return (
    <section id="mechanical" className="bg-secondary-surface">
      <div className="container-custom">
        <div className="grid md:grid-cols-[45%_55%] gap-16 items-center">
          <div>
            <div className="text-[12px] font-bold tracking-[0.1em] text-safety-ember uppercase mb-2">MECHANICAL INTELLIGENCE</div>
            <h2 className="mb-6">Suspension & Brake Wear Prediction.</h2>
            <p className="text-muted-text text-lg mb-8">
              ASTRA-AI doesn't just read error codes. It listens to the "digital shadow" of your car's mechanical components to predict failure before it happens.
            </p>
            
            <div className="p-8 bg-navy rounded-3xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4">
                <Cpu className="text-safety-ember animate-pulse" size={32} />
              </div>
              <div className="text-4xl font-sans font-extrabold text-safety-ember mb-2">81%</div>
              <div className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">System Health Target</div>
              <p className="text-sm text-white/60 leading-relaxed">
                Our proprietary "Fire Code" algorithms analyze vibration and pressure data to estimate remaining life for bushings, bearings, and pads with unprecedented precision.
              </p>
            </div>
          </div>

          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-[2rem] overflow-hidden shadow-2xl border border-navy/10"
            >
              <img 
                src="https://picsum.photos/seed/astrateq_mechanical/1000/800" 
                alt="Mechanical Deep Dive" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            {/* Floating data points */}
            <div className="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-navy/5">
              <div className="text-[10px] font-bold text-muted-text uppercase mb-1">Bushing Wear</div>
              <div className="text-xl font-bold text-safety-ember">63% Remaining</div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-navy/5">
              <div className="text-[10px] font-bold text-muted-text uppercase mb-1">Brake Pad Life</div>
              <div className="text-xl font-bold text-success-green">22 Days Predicted</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-[90] w-12 h-12 rounded-full bg-safety-ember text-navy flex items-center justify-center shadow-lg hover:bg-[#E6A600] transition-all hover:-translate-y-1 border-2 border-white/20"
          aria-label="Back to top"
        >
          <ArrowUp size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

const Modal = ({ isOpen, onClose, title, children }: { isOpen: boolean, onClose: () => void, title: string, children: ReactNode }) => {
  if (!isOpen) return null;
  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-navy/80 backdrop-blur-sm"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl max-h-[80vh] bg-white rounded-[32px] shadow-2xl overflow-hidden flex flex-col"
        >
          <div className="p-6 border-b border-navy/5 flex justify-between items-center bg-secondary-surface">
            <h3 className="text-2xl font-bold text-navy">{title}</h3>
            <button onClick={onClose} className="p-2 hover:bg-navy/5 rounded-full transition-colors">
              <X size={24} className="text-navy" />
            </button>
          </div>
          <div className="p-8 overflow-y-auto custom-scrollbar text-body-text leading-relaxed">
            {children}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

const Footer = ({ onOpenPage }: { onOpenPage: (page: string) => void }) => {
  const socialIcons = [
    { name: 'Facebook', icon: Facebook, color: '#1877F2' },
    { name: 'Instagram', icon: Instagram, color: '#E4405F' },
    { name: 'LinkedIn', icon: Linkedin, color: '#0A66C2' },
    { name: 'X (Twitter)', icon: Twitter, color: '#000000' },
    { name: 'TikTok', icon: Music2, color: '#000000' },
    { name: 'Snapchat', icon: Ghost, color: '#FFFC00' },
    { name: 'Pinterest', icon: Pin, color: '#BD081C' }
  ];

  return (
    <footer className="bg-navy py-16 text-white border-t border-white/5">
      <div className="container-custom">
        <div className="grid md:grid-cols-[30%_50%_20%] gap-12 mb-16">
          <div>
            <a href="#" className="flex items-center gap-2 mb-6">
              <img 
                src="https://i.ibb.co/C3DynZTj/Astrateq-removebg-preview.png" 
                alt="ASTRATEQ Logo" 
                className="h-12 w-auto brightness-0 invert"
                referrerPolicy="no-referrer"
              />
              <span className="font-sans font-bold text-[24px] text-white tracking-tight">ASTRATEQ</span>
            </a>
            <p className="text-white/50 text-sm leading-relaxed mb-8">
              Empowering Canadian families with predictive AI safety technology. Built in Toronto, engineered for the world.
            </p>
            <div className="flex flex-wrap gap-3">
              {socialIcons.map(social => (
                <a 
                  key={social.name} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all duration-300 border border-white/10 group" 
                  aria-label={social.name}
                >
                  <social.icon size={18} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Company</h4>
              <ul className="space-y-4 text-white/50 text-sm">
                <li><button onClick={() => onOpenPage('About Astrateq')} className="hover:text-safety-ember transition-colors text-left">About Astrateq</button></li>
                <li><button onClick={() => onOpenPage('Our Technology')} className="hover:text-safety-ember transition-colors text-left">Our Technology</button></li>
                <li><button onClick={() => onOpenPage('Canadian Industry')} className="hover:text-safety-ember transition-colors text-left">Canadian Industry</button></li>
                <li><button onClick={() => onOpenPage('Careers')} className="hover:text-safety-ember transition-colors text-left">Careers</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Resources</h4>
              <ul className="space-y-4 text-white/50 text-sm">
                <li><button onClick={() => onOpenPage('Privacy Policy')} className="hover:text-safety-ember transition-colors text-left">Privacy Policy</button></li>
                <li><button onClick={() => onOpenPage('Terms of Service')} className="hover:text-safety-ember transition-colors text-left">Terms of Service</button></li>
                <li><button onClick={() => onOpenPage('Contact Support')} className="hover:text-safety-ember transition-colors text-left">Contact Support</button></li>
                <li><button onClick={() => onOpenPage('Transport Canada Notice')} className="hover:text-safety-ember transition-colors text-left">Transport Canada Notice</button></li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Headquarters</h4>
            <div className="text-white/50 text-sm leading-relaxed">
              123 Tech Way, Suite 500<br />
              Toronto, ON M5V 2T6<br />
              Canada
            </div>
            <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10 text-[11px] text-white/40">
              PIPEDA Compliant<br />
              Data Sovereignty Guaranteed
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[11px] text-white/30 leading-[1.9] max-w-[600px] text-center md:text-left">
            © 2026 Astrateq Gadgets Inc. All rights reserved. ASTRA-AI is an assistive safety technology. Does not replace attentive driving. All prices in CAD.
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-success-green rounded-full animate-pulse"></div>
            <span className="text-[10px] text-white/40 uppercase tracking-widest">Systems Nominal · Canada East</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hi! I'm Astrateq Sentinel. How can I help you protect your loved ones today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMessage] })
      });

      const data = await response.json();
      if (data.message) {
        setMessages(prev => [...prev, { role: 'assistant', content: data.message }]);
      } else if (data.error) {
        setMessages(prev => [...prev, { role: 'assistant', content: "I'm sorry, I'm having trouble connecting right now. Please try again later." }]);
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: "Connection error. Please check your internet and try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-primary-bg border border-navy/10 rounded-2xl shadow-2xl w-[350px] sm:w-[400px] h-[500px] flex flex-col overflow-hidden mb-4"
          >
            {/* Header */}
            <div className="bg-navy p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-safety-ember flex items-center justify-center">
                  <Bot size={18} className="text-navy" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm">Astrateq Sentinel</div>
                  <div className="text-white/50 text-[10px] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-success-green rounded-full"></span>
                    Online
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-secondary-surface/30">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.role === 'user' 
                      ? 'bg-navy text-white rounded-tr-none' 
                      : 'bg-white text-body-text border border-navy/5 rounded-tl-none'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white text-body-text border border-navy/5 p-3 rounded-2xl rounded-tl-none text-sm">
                    <span className="flex gap-1">
                      <span className="w-1.5 h-1.5 bg-muted-text rounded-full animate-bounce"></span>
                      <span className="w-1.5 h-1.5 bg-muted-text rounded-full animate-bounce [animation-delay:0.2s]"></span>
                      <span className="w-1.5 h-1.5 bg-muted-text rounded-full animate-bounce [animation-delay:0.4s]"></span>
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="p-4 bg-white border-t border-navy/5 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-grow text-sm focus:outline-none"
              />
              <button 
                type="submit" 
                disabled={isLoading || !input.trim()}
                className="text-navy disabled:opacity-30 hover:text-glacial-cyan transition-colors"
              >
                <Send size={20} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-safety-ember text-navy flex items-center justify-center shadow-[0_0_20px_rgba(255,184,0,0.4)] hover:bg-[#E6A600] transition-all hover:scale-110 border-2 border-white/20"
        aria-label="Open AI Chat"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>
    </div>
  );
};

export default function App() {
  const [activePage, setActivePage] = useState<string | null>(null);

  const pageContent: Record<string, ReactNode> = {
    'About Astrateq': (
      <div className="space-y-6">
        <p className="text-lg font-medium text-navy">Founded in Toronto, Astrateq is at the forefront of the AI-powered automotive safety revolution in Canada.</p>
        <p>Our mission is simple: to provide families with the same level of safety assurance that professional fleet operators enjoy. We believe that every driver, especially our seniors, deserves a proactive guardian on the road.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 bg-secondary-surface rounded-2xl">
            <h4 className="font-bold text-navy mb-2">Our Vision</h4>
            <p className="text-sm">A world where road accidents are predicted and prevented before they occur, starting with the most vulnerable drivers.</p>
          </div>
          <div className="p-6 bg-secondary-surface rounded-2xl">
            <h4 className="font-bold text-navy mb-2">Our Roots</h4>
            <p className="text-sm">Engineered in the heart of Toronto's tech hub, our algorithms are trained on the unique challenges of Canadian roads.</p>
          </div>
        </div>
      </div>
    ),
    'Our Technology': (
      <div className="space-y-6">
        <h4 className="text-xl font-bold text-navy">The ASTRA-AI Engine</h4>
        <p>Our technology leverages high-frequency OBD-II data combined with advanced neural road mapping to create a "digital shadow" of your vehicle's performance.</p>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>Neural Road Mapping:</strong> Real-time analysis of terrain, traffic density, and weather conditions.</li>
          <li><strong>Mechanical Variance Detection:</strong> Identifying subtle changes in brake pressure and suspension vibration.</li>
          <li><strong>Edge Computing:</strong> All critical safety processing happens locally on the device for zero-latency alerts.</li>
        </ul>
        <div className="mt-6 p-6 bg-navy text-white rounded-2xl">
          <p className="text-sm italic">"We aren't just reading error codes; we're predicting the future state of the machine." — Astrateq Engineering Team</p>
        </div>
      </div>
    ),
    'Canadian Industry': (
      <div className="space-y-6">
        <h4 className="text-xl font-bold text-navy">Leading the North</h4>
        <p>Canada presents unique challenges for automotive AI, from extreme temperature fluctuations to complex urban stop-and-go traffic.</p>
        <div className="space-y-4">
          <div className="flex gap-4 items-start">
            <div className="w-8 h-8 rounded-full bg-glacial-cyan/10 text-glacial-cyan flex items-center justify-center flex-shrink-0">1</div>
            <p><strong>Harsh Climate Engineering:</strong> Our sensors and algorithms are tested in -40°C conditions to ensure reliability in Canadian winters.</p>
          </div>
          <div className="flex gap-4 items-start">
            <div className="w-8 h-8 rounded-full bg-glacial-cyan/10 text-glacial-cyan flex items-center justify-center flex-shrink-0">2</div>
            <p><strong>GTA Traffic Optimization:</strong> Specialized tuning for the 401, QEW, and DVP corridors.</p>
          </div>
          <div className="flex gap-4 items-start">
            <div className="w-8 h-8 rounded-full bg-glacial-cyan/10 text-glacial-cyan flex items-center justify-center flex-shrink-0">3</div>
            <p><strong>Data Sovereignty:</strong> All user data is stored on Canadian soil, adhering to the strictest national standards.</p>
          </div>
        </div>
      </div>
    ),
    'Careers': (
      <div className="space-y-6 text-center py-8">
        <h4 className="text-2xl font-bold text-navy">Join the Safety Revolution</h4>
        <p className="text-muted-text">We're looking for brilliant minds to help us redefine road safety in Canada.</p>
        <div className="grid gap-4 max-w-md mx-auto mt-8">
          <div className="p-4 border border-navy/10 rounded-xl hover:border-safety-ember transition-colors cursor-pointer">
            <div className="font-bold">Senior AI Engineer</div>
            <div className="text-sm text-muted-text">Toronto, ON · Full-time</div>
          </div>
          <div className="p-4 border border-navy/10 rounded-xl hover:border-safety-ember transition-colors cursor-pointer">
            <div className="font-bold">Embedded Systems Specialist</div>
            <div className="text-sm text-muted-text">Toronto, ON · Full-time</div>
          </div>
          <div className="p-4 border border-navy/10 rounded-xl hover:border-safety-ember transition-colors cursor-pointer">
            <div className="font-bold">Customer Success Lead</div>
            <div className="text-sm text-muted-text">Remote (Canada) · Full-time</div>
          </div>
        </div>
        <p className="text-sm mt-8">Send your resume to <span className="text-navy font-bold">careers@astrateq.com</span></p>
      </div>
    ),
    'Privacy Policy': (
      <div className="space-y-6">
        <h4 className="text-xl font-bold text-navy">Your Data, Your Control.</h4>
        <p>At Astrateq, privacy isn't a feature—it's a fundamental right. We adhere to PIPEDA (Personal Information Protection and Electronic Documents Act) and go beyond standard requirements.</p>
        <div className="space-y-4 bg-secondary-surface p-6 rounded-2xl">
          <p><strong>1. Data Sovereignty:</strong> Your driving data never leaves Canada. We use local servers to ensure national jurisdiction.</p>
          <p><strong>2. End-to-End Encryption:</strong> All communication between the OBD-II device and your app is secured with military-grade encryption.</p>
          <p><strong>3. No Data Selling:</strong> We never sell your personal or driving data to third parties, including insurance companies, without your explicit consent.</p>
        </div>
      </div>
    ),
    'Terms of Service': (
      <div className="space-y-6">
        <h4 className="text-xl font-bold text-navy">Usage Guidelines</h4>
        <p>By using ASTRA-AI, you agree to our terms of service. Key points include:</p>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>Assistive Technology:</strong> ASTRA-AI is an assistive tool and does not replace the need for an attentive, licensed driver.</li>
          <li><strong>Subscription:</strong> Access to Guardian Mode requires an active subscription after the initial pre-launch period.</li>
          <li><strong>Liability:</strong> Astrateq is not liable for accidents or mechanical failures; the driver remains responsible for vehicle operation.</li>
        </ul>
      </div>
    ),
    'Contact Support': (
      <div className="space-y-8 text-center py-4">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-secondary-surface rounded-2xl">
            <div className="w-10 h-10 bg-navy text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <Send size={20} />
            </div>
            <h5 className="font-bold mb-1">Email</h5>
            <p className="text-sm">support@astrateq.com</p>
          </div>
          <div className="p-6 bg-secondary-surface rounded-2xl">
            <div className="w-10 h-10 bg-navy text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <Smartphone size={20} />
            </div>
            <h5 className="font-bold mb-1">Phone</h5>
            <p className="text-sm">+1 (800) ASTRA-AI</p>
          </div>
          <div className="p-6 bg-secondary-surface rounded-2xl">
            <div className="w-10 h-10 bg-navy text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe size={20} />
            </div>
            <h5 className="font-bold mb-1">Office</h5>
            <p className="text-sm">Toronto, ON</p>
          </div>
        </div>
        <div className="max-w-md mx-auto">
          <h5 className="font-bold mb-4">Send us a message</h5>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-3 rounded-xl border border-navy/10 focus:outline-none focus:border-safety-ember" />
            <textarea placeholder="How can we help?" rows={4} className="w-full p-3 rounded-xl border border-navy/10 focus:outline-none focus:border-safety-ember"></textarea>
            <button type="button" className="btn-primary w-full">Send Message</button>
          </form>
        </div>
      </div>
    ),
    'Transport Canada Notice': (
      <div className="space-y-6">
        <h4 className="text-xl font-bold text-navy">Regulatory Compliance</h4>
        <p>Astrateq works closely with regulatory bodies to ensure our technology meets and exceeds Canadian safety standards.</p>
        <div className="p-6 border-l-4 border-safety-ember bg-safety-ember/5">
          <p className="text-sm font-medium">"ASTRA-AI is designed to complement existing vehicle safety systems and adheres to the guidelines set forth for aftermarket driver assistance technologies."</p>
        </div>
        <p>We are committed to the continuous improvement of road safety in Canada and participate in national dialogues regarding AI ethics and automotive regulation.</p>
      </div>
    )
  };

  return (
    <div className="selection:bg-safety-ember selection:text-navy">
      <Navbar />
      <main>
        <Hero />
        <StatsBand />
        <ProblemSection />
        <GuardianModeSection />
        <TechnologyDeepDive />
        <MechanicalIntelligence />
        <HowItWorks />
        <SavingsCalculator />
        <MobileAppShowcase />
        <CanadianSafetyIndustry />
        <Products />
        <TrustBadges />
        <Testimonials />
        <WaitlistForm />
        <FAQ />
      </main>
      <Footer onOpenPage={setActivePage} />
      <ChatWidget />
      <ScrollToTop />

      <Modal 
        isOpen={!!activePage} 
        onClose={() => setActivePage(null)} 
        title={activePage || ''}
      >
        {activePage && pageContent[activePage]}
      </Modal>

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Does ASTRA-AI work with my parent's car?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Compatible with any vehicle with an OBD-II port — most cars 1996 and newer. Setup takes 5 minutes with no tools required."
              }
            },
            {
              "@type": "Question",
              "name": "Is my parent's driving data private?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "All data is processed and stored in Canada under PIPEDA. Never sold, never shared with insurers. Your parent controls all sharing settings."
              }
            }
          ]
        })}
      </script>
    </div>
  );
}
