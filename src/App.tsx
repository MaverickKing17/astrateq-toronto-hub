/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
  Bot
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
  return (
    <section id="hero" className="min-h-[92vh] flex items-center pt-32 pb-16 bg-primary-bg">
      <div className="container-custom grid md:grid-cols-[52%_48%] gap-12 items-center">
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
      </div>
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

const Footer = () => {
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
            <div className="flex gap-4">
              {['LinkedIn', 'Instagram', 'X/Twitter'].map(social => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-safety-ember hover:text-navy transition-all duration-300 border border-white/10" aria-label={social}>
                  <Globe size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Company</h4>
              <ul className="space-y-4 text-white/50 text-sm">
                <li><a href="#" className="hover:text-safety-ember transition-colors">About Astrateq</a></li>
                <li><a href="#technology" className="hover:text-safety-ember transition-colors">Our Technology</a></li>
                <li><a href="#industry" className="hover:text-safety-ember transition-colors">Canadian Industry</a></li>
                <li><a href="#" className="hover:text-safety-ember transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Resources</h4>
              <ul className="space-y-4 text-white/50 text-sm">
                <li><a href="#" className="hover:text-safety-ember transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-safety-ember transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-safety-ember transition-colors">Contact Support</a></li>
                <li><a href="#" className="hover:text-safety-ember transition-colors">Transport Canada Notice</a></li>
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
  return (
    <div className="selection:bg-safety-ember selection:text-navy">
      <Navbar />
      <main>
        <Hero />
        <StatsBand />
        <ProblemSection />
        <GuardianModeSection />
        <TechnologyDeepDive />
        <HowItWorks />
        <CanadianSafetyIndustry />
        <Products />
        <TrustBadges />
        <Testimonials />
        <WaitlistForm />
        <FAQ />
      </main>
      <Footer />
      <ChatWidget />

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
