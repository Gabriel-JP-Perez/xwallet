import { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowCounterClockwise, CaretLeft, Check, ForkKnife, Coffee, EnvelopeSimple, Tag, CreditCard, X, ArrowUpRight, ArrowRight, Wallet, Storefront, Cards, SlidersHorizontal, Coins, AirplaneTilt, Heart, Plus } from '@phosphor-icons/react';

const A = '/assets/';
const benefits = [
  { id: 'credit', label: 'Store credit', icon: Coffee, kicker: 'FIRST, YOUR MORNING COFFEE', title: 'Your next coffee.\nYour credit, remembered.', body: 'That balance in your coffee account? It could cover part of your order. X Wallet brings eligible credit into the moment you pay.', source: 'Your coffee account', sourceSub: '$5 in store credit', result: '$5 already yours.', resultSub: 'Ready to put toward your coffee.', action: 'Credit found', tone: 'green', purchase: 'Coffee & a little extra', total: '$7.00', savingLabel: 'Store credit', saving: '−$5.00', remaining: '$2.00' },
  { id: 'offer', label: 'Inbox offers', icon: EnvelopeSimple, kicker: 'THEN, THE EVERYDAY ESSENTIALS', title: 'An offer in your inbox.\nReady at checkout.', body: 'A promotion shouldn’t disappear in your inbox. An eligible offer can meet you at checkout, without another email search.', source: 'An offer just for you', sourceSub: '15% off a qualifying $50+ purchase', result: 'An offer worth $9.', resultSub: 'Found in the inbox you chose to connect.', action: 'Offer found', tone: 'purple', purchase: 'Everyday essentials', total: '$60.00', savingLabel: '15% offer', saving: '−$9.00', remaining: '$51.00' },
  { id: 'coupon', label: 'Expiring coupons', icon: Tag, kicker: 'AND THAT THING YOU’VE HAD YOUR EYE ON', title: 'Your coupon. Used\nwhile it still counts.', body: 'A $10 coupon, about to expire. When it fits something you’re already buying, X Wallet helps you use it—and choose how to pay the rest.', source: 'A coupon in your account', sourceSub: '$10 off · expires tomorrow', result: '$10, remembered.', resultSub: 'For a purchase you were already making.', action: 'Coupon found', tone: 'peach', purchase: 'A new everyday favorite', total: '$80.00', savingLabel: 'Eligible coupon', saving: '−$10.00', remaining: '$70.00' },
];

function Brand({ footer = false }) {
  return <a className={`brand ${footer ? 'brand-footer' : ''}`} href="#top" aria-label="X Wallet home"><img src={`${A}x-mark.png`} alt="" width="32" height="29" /><span>Wallet</span></a>;
}

function Signup({ id = 'join', location = 'Top' }) {
  const [email, setEmail] = useState('');
  const [state, setState] = useState('');
  return <div className="signup" id={id}>
    <form aria-label={`${location} waitlist signup`} onSubmit={e => { e.preventDefault(); setState('ready'); }}>
      <label htmlFor={`${id}-email`}>Email address</label>
      <div className="signup-row">
        <input id={`${id}-email`} type="email" name="email" autoComplete="email" placeholder="you@email.com" required maxLength="254" value={email} onChange={e => { setEmail(e.target.value); setState(''); }} aria-describedby={`${id}-note`} />
        <button className="button button-primary" type="submit">Join the waitlist</button>
      </div>
      <p className="signup-note" id={`${id}-note`}>Demo only. Your email won’t be saved.</p>
    </form>
    {state === 'ready' && <div className="signup-notice" role="status">
      <button className="notice-close" type="button" aria-label="Dismiss signup notice" onClick={() => setState('')}><X size={16} /></button>
      <strong>Demo complete. No email saved.</strong>
      <p>This is where your signup confirmation will appear. Nothing was sent or added to a waitlist.</p>
    </div>}
  </div>;
}

function HeroWallet() {
  const [replay, setReplay] = useState(0);
  return <div className="hero-visual-wrap"><div className="hero-art" key={replay} role="img" aria-label="X Wallet selects American Express Gold for dining, with a 4 times dining points badge and an illustrative five dollar offer saving.">
    <div className="side-card side-card-left"><div className="side-card-crop"><img src={`${A}approved-artwork.png`} alt="" /></div></div>
    <div className="side-card side-card-right"><div className="side-card-crop"><img src={`${A}approved-artwork.png`} alt="" /></div></div>
    <div className="phone"><div className="phone-screen"><div className="phone-content">
      <div className="payment-category"><CaretLeft size={18} /><span>Dining</span></div><p className="payment-amount">$42.17</p>
      <div className="wallet-stack"><img className="payment-card venture" src={`${A}venture.png`} alt="" /><img className="payment-card sapphire" src={`${A}sapphire.png`} alt="" /><div className="selected-card"><img src={`${A}amex-gold.png`} alt="" /><span className="reward-pill">4× <ForkKnife size={19} /></span></div></div>
      <div className="offer-result"><span className="result-check"><Check size={23} weight="bold" /></span><div><span>Offer applied</span><strong>$5 saved</strong></div></div><p className="illustration-note">Illustrative experience. Eligibility varies.</p>
    </div></div><img className="phone-bezel" src={`${A}phone.png`} alt="" /></div>
  </div><div className="hero-ending"><p>Less to remember. More to get back.</p><button className="replay-button" type="button" onClick={() => setReplay(v => v + 1)} aria-label="Replay wallet animation"><ArrowCounterClockwise size={17} /></button></div></div>;
}

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const node = ref.current;
    if (!node || !('IntersectionObserver' in window)) { node?.classList.add('is-visible'); return; }
    const observer = new IntersectionObserver(entries => {
      if (entries.some(e => e.isIntersecting)) { node.classList.add('is-visible'); observer.disconnect(); }
    }, { threshold: .08 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function Benefits() {
  const [active, setActive] = useState(0);
  const sectionRef = useReveal();
  const tabsRef = useRef([]);
  const b = benefits[active], Icon = b.icon;
  function keydown(e, i) {
    let next = i;
    if (e.key === 'ArrowRight') next = (i + 1) % 3;
    else if (e.key === 'ArrowLeft') next = (i + 2) % 3;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = 2;
    else return;
    e.preventDefault(); setActive(next); tabsRef.current[next]?.focus();
  }
  return <section className="benefits" id="how-it-works" ref={sectionRef} aria-labelledby="benefits-heading">
    <div className="section-intro reveal"><span className="eyebrow">IT ALL BELONGS IN YOUR WALLET</span><h2 id="benefits-heading">Your wallet holds<br />more than cards.</h2><p>One card or a whole collection.<br className="mobile-break" /> There’s more to bring together.</p></div>
    <div className="benefits-stage reveal">
      <div className="benefit-tabs" role="tablist" aria-label="Benefits beyond your payment cards">{benefits.map((item, i) => <button key={item.id} ref={el => { tabsRef.current[i] = el; }} role="tab" id={`tab-${item.id}`} aria-controls="benefit-panel" aria-selected={active === i} tabIndex={active === i ? 0 : -1} onClick={() => setActive(i)} onKeyDown={e => keydown(e, i)}><item.icon size={21} weight={active === i ? 'fill' : 'regular'} /><span>{item.label}</span></button>)}</div>
      <div className="benefit-content" id="benefit-panel" role="tabpanel" aria-labelledby={`tab-${b.id}`} tabIndex="0">
        <div className="benefit-copy" key={`copy-${b.id}`}><p className="small-kicker">{b.kicker}</p><h3>{b.title.split('\n').map((t, i) => <span key={i}>{t}{i === 0 && <br />}</span>)}</h3><p>{b.body}</p><div className="one-card-note"><CreditCard size={20} /><span>Same card. More taken care of.</span></div></div>
        <div className={`benefit-demo tone-${b.tone}`} key={`demo-${b.id}`} aria-label={`Illustrative purchase: ${b.purchase}`}>
          <div className="source-item"><span className="source-icon"><Icon size={28} /></span><div><strong>{b.source}</strong><span>{b.sourceSub}</span></div><span className="source-badge">{b.id === 'coupon' ? 'Soon' : 'Available'}</span></div>
          <div className="connection"><span /><ArrowDown size={17} /><span /></div>
          <div className="wallet-moment"><div className="moment-heading"><img src={`${A}x-mark.png`} width="22" height="20" alt="" /><span>Your wallet</span><span className="moment-status"><Check size={13} weight="bold" />{b.action}</span></div>
            <div className="moment-result"><h4>{b.result}</h4><p>{b.resultSub}</p></div>
            <dl className="purchase-breakdown"><div><dt>{b.purchase}</dt><dd>{b.total}</dd></div><div className="purchase-saving"><dt>{b.savingLabel}</dt><dd>{b.saving}</dd></div><div className="purchase-total"><dt>Left to pay</dt><dd>{b.remaining}</dd></div></dl>
            <div className="same-card"><img src={`${A}sapphire.png`} alt="" /><div><strong>Sapphire Preferred</strong><span>Your payment card</span></div><Check size={17} /></div>
          </div><span className="planned-label">Example only. Offers and availability will vary.</span>
        </div>
      </div>
    </div>
    <div className="benefits-close reveal"><p>Your benefits are everywhere.<br /><strong>We’re bringing them together.</strong></p><span>Less searching. Less switching apps. More taken care of.</span></div>
  </section>;
}

const walletModes = [
  { id: 'one', label: 'One card', icon: CreditCard, title: 'One card is a great start.', body: 'Keep the card you like. Bring your store credits, rewards and eligible offers along with it.', rows: [ ['Your everyday card', 'The one you already use.', CreditCard], ['Your store accounts', 'Credits and rewards, remembered.', Storefront], ['Your eligible offers', 'There when they fit your purchase.', Tag] ], note: 'No extra card needed.' },
  { id: 'several', label: 'Several cards', icon: Cards, title: 'A little more choice.\nA lot less comparing.', body: 'The right card is part of the picture. We’re bringing offers, credits and your preferences into that decision, too.', rows: [ ['Your connected cards', 'Compared for the purchase.', Cards], ['Your store benefits', 'Considered alongside your cards.', Storefront], ['What matters to you', 'Cash back, points or simplicity.', SlidersHorizontal] ], note: 'More than the biggest points multiplier.' },
  { id: 'accounts', label: 'Store accounts', icon: Storefront, title: 'No cards connected?\nYou still have a wallet.', body: 'Start with supported store accounts. Your credits, loyalty benefits and coupons can have a place here, too.', rows: [ ['Your store credit', 'A balance you can put to use.', Coins], ['Your loyalty benefits', 'Benefits from accounts you already have.', Heart], ['Your coupons', 'Remembered before they expire.', Tag] ], note: 'Any remaining balance still needs a payment method.' },
];

function WalletFit() {
  const [selected, setSelected] = useState('one');
  const sectionRef = useReveal();
  const mode = walletModes.find(item => item.id === selected);
  return <section className="wallet-fit section-shell" id="wallet-fit" ref={sectionRef} aria-labelledby="fit-heading">
    <div className="fit-heading reveal"><p className="eyebrow">START WITH WHAT YOU HAVE</p><h2 id="fit-heading">Your kind of wallet.</h2><p>You don’t need more cards to get more out of it.</p></div>
    <fieldset className="wallet-options reveal"><legend className="sr-only">Choose an example wallet</legend>{walletModes.map(item => <label key={item.id} className={selected === item.id ? 'selected' : ''}><input type="radio" name="wallet-mode" value={item.id} checked={selected === item.id} onChange={() => setSelected(item.id)} /><item.icon size={21} /><span>{item.label}</span></label>)}</fieldset>
    <div className="fit-content reveal" aria-live="polite" aria-atomic="true">
      <div className="fit-copy" key={`${selected}-copy`}><h3>{mode.title.split('\n').map((text, i) => <span key={text}>{i > 0 && <br />}{text}</span>)}</h3><p>{mode.body}</p><span className="fit-note"><Check size={18} />{mode.note}</span></div>
      <div className="fit-list" key={selected}>{mode.rows.map(([title, description, Icon], i) => <div className="fit-row" key={title} style={{ '--row': i }}><span className="fit-icon"><Icon size={25} /></span><div><h4>{title}</h4><p>{description}</p></div><Check className="fit-check" size={18} /></div>)}</div>
    </div>
  </section>;
}

const priorities = [
  { id: 'cash', label: 'Cash back', icon: Coins, result: 'A little more back in your pocket.', body: 'Your wallet looks for cash back, alongside eligible credits and offers.' },
  { id: 'travel', label: 'Travel points', icon: AirplaneTilt, result: 'A little closer to your next trip.', body: 'Your wallet considers the points you value, alongside eligible credits and offers.' },
  { id: 'simple', label: 'Keep it simple', icon: Heart, result: 'Your everyday card. Less to remember.', body: 'Keep your preferred card and let your wallet help with eligible credits and offers.' },
];

function Preferences() {
  const [priority, setPriority] = useState('cash');
  const [expiring, setExpiring] = useState(true);
  const ref = useReveal();
  const selection = priorities.find(item => item.id === priority);
  return <section className="preferences" id="preferences" ref={ref} aria-labelledby="preferences-heading"><div className="preferences-inner">
    <div className="preferences-copy reveal"><p className="eyebrow">A LITTLE HELP. ON YOUR TERMS.</p><h2 id="preferences-heading">Your wallet.<br />Your say.</h2><p>Getting more back should feel like you. Choose what matters, see why it was picked, and keep the final say.</p><a className="text-link" href="#questions">A few things you might be wondering <ArrowRight size={18} /></a></div>
    <div className="preference-demo reveal"><div className="preference-heading"><SlidersHorizontal size={22} /><span>Your preferences</span><span className="demo-label">Try it</span></div>
      <fieldset className="priority-options"><legend>What matters most to you?</legend>{priorities.map(item => <label key={item.id} className={priority === item.id ? 'selected' : ''}><input type="radio" name="priority" value={item.id} checked={priority === item.id} onChange={() => setPriority(item.id)} /><item.icon size={21} /><span>{item.label}</span><span className="radio-indicator" aria-hidden="true" /></label>)}</fieldset>
      <label className="expiry-option"><span><strong>Remember expiring offers</strong><small>For things you’re already buying.</small></span><input type="checkbox" role="switch" checked={expiring} onChange={e => setExpiring(e.target.checked)} /><span className="switch-track" aria-hidden="true" /></label>
      <div className="preference-result" aria-live="polite" aria-atomic="true"><strong>{selection.result}</strong><p>{selection.body}</p><span>{expiring ? 'Expiring offers get an extra look.' : 'Eligible offers compared without an expiry preference.'}</span></div>
      <p className="preference-disclaimer">Example preferences. Changes here aren’t saved.</p>
    </div>
  </div></section>;
}

const questions = [
  ['Can I use X Wallet yet?', 'Not quite. We’re building the experience and gathering early interest. Join the waitlist to hear when access opens. The examples on this page show what we’re working toward.'],
  ['Do I need more than one credit card?', 'No. X Wallet is being designed for the wallet you already have, including a single payment card. Supported store accounts, credits and coupons can add value, too. You can start with store benefits without connecting a card, but any remaining purchase balance still needs a payment method.'],
  ['Will it work with my cards and favorite stores?', 'Support will depend on the card, store, account and payment method. We’ll share confirmed compatibility as access opens, so you can check what works for you.'],
  ['Do I have to connect my email?', 'The plan is to make inbox connections optional. You choose which supported accounts to connect. Connecting an inbox would help find eligible promotions; it wouldn’t be required just to join the waitlist.'],
  ['Can every coupon, credit and card offer be combined?', 'Only when the terms allow it. Minimum spends, exclusions, expiry dates and other conditions can affect eligibility. The goal is to compare what actually applies to your purchase, alongside the way you want to pay.'],
];

function Questions() {
  const ref = useReveal();
  return <section className="questions section-shell" id="questions" ref={ref} aria-labelledby="questions-heading"><div className="questions-title reveal"><p className="eyebrow">GOOD QUESTIONS</p><h2 id="questions-heading">A little more <br />clarity.</h2></div><div className="question-list reveal">{questions.map(([question, answer]) => <details key={question} name="wallet-faq"><summary><span>{question}</span><Plus size={20} /></summary><p>{answer}</p></details>)}</div></section>;
}

function ClosingSignup() {
  const ref = useReveal();
  return <section className="closing-signup" ref={ref} aria-labelledby="closing-heading"><div className="reveal"><span className="closing-icon"><Wallet size={32} /></span><p className="eyebrow">YOUR EVERYDAY, A LITTLE EASIER</p><h2 id="closing-heading">More living.<br />Less wallet homework.</h2><p className="closing-copy">Be first to hear when X Wallet is ready for you.</p><Signup id="join-bottom" location="Bottom" /></div></section>;
}

export function App() {
  useEffect(() => {
    if (!window.location.hash) return;
    const frame = window.requestAnimationFrame(() => document.getElementById(window.location.hash.slice(1))?.scrollIntoView({ behavior: 'instant' }));
    return () => window.cancelAnimationFrame(frame);
  }, []);
  return <><a className="skip-link" href="#main">Skip to content</a><header className="site-header" id="top"><Brand /><nav aria-label="Main navigation"><a className="how-link" href="#how-it-works">How it works</a><a className="button nav-join" href="#join" onClick={() => setTimeout(() => document.getElementById('join-email')?.focus({ preventScroll: true }), 450)}>Join the waitlist</a></nav></header><main id="main"><section className="hero" aria-labelledby="hero-title"><p className="eyebrow coming-soon">COMING SOON</p><h1 id="hero-title">One tap.<br />Your whole wallet.</h1><p className="hero-subtitle">The right card. Your rewards. Your offers.<br />Handled when you pay.</p><Signup /><HeroWallet /></section><Benefits /><WalletFit /><Preferences /><Questions /><ClosingSignup /></main><footer className="site-footer"><Brand footer /><p>Less to remember. More to get back.</p><a href="https://x-wallet-website.vercel.app/privacy" target="_blank" rel="noreferrer">Privacy <ArrowUpRight size={14} /></a></footer></>;
}
