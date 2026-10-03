/**
 * ROAR MMA — programs & offerings (single source of truth).
 * The 7 disciplines routed under /programs/[slug] are generated from here.
 * Kids / personal-training / home-training have their own top-level routes
 * but share this shape so cards and links stay consistent.
 */

export interface FAQ {
  q: string;
  a: string;
}

export interface Program {
  slug: string;
  /** Full route — "/programs/mma" for disciplines, "/kids" etc. for specials. */
  route: string;
  /** Show under /programs/[slug] + the Programs grid. */
  isDiscipline: boolean;
  name: string;
  /** One primary keyword per page (SEO). */
  primaryKeyword: string;
  secondaryKeywords: string[];
  title: string; // 50–60 chars, keyword first, brand last
  metaDescription: string; // 140–160 chars
  tagline: string;
  duration: string;
  levels: string;
  /** PKR per month; null = custom quote. */
  priceMonthly: number | null;
  priceNote?: string;
  image: string;
  imageAlt: string;
  /** Short blurb for cards / grid. */
  excerpt: string;
  /** Lead paragraph — primary keyword appears in the first 100 words. */
  intro: string;
  whatYouLearn: string[];
  whoFor: string;
  /** Extra body paragraphs for depth / 400+ words. */
  body: string[];
  faqs: FAQ[];
  related: string[]; // slugs
}

export const programs: Program[] = [
  {
    slug: "mma",
    route: "/programs/mma",
    isDiscipline: true,
    name: "MMA",
    primaryKeyword: "MMA classes in Lahore",
    secondaryKeywords: ["MMA training Lahore", "mixed martial arts beginners Lahore", "MMA gym Canal Gardens"],
    title: "MMA Classes in Lahore | ROAR MMA Canal Gardens",
    metaDescription:
      "MMA classes in Lahore for all levels. Striking, wrestling and grappling in one system under a federation-certified coach. Book your free trial at ROAR MMA.",
    tagline: "The complete fight game",
    duration: "90 min · Mon–Fri",
    levels: "Beginner / Intermediate / Advanced",
    priceMonthly: 10000,
    image: "/images/mma-throw-takedown-lahore.jpg",
    imageAlt: "MMA takedown and throw training at ROAR MMA, Canal Gardens Lahore",
    excerpt: "Striking, wrestling and grappling fused into one cohesive system — train the way fighters compete.",
    intro:
      "ROAR MMA runs structured MMA classes in Lahore for complete beginners through to competitors. Mixed martial arts brings striking, clinch, wrestling and ground grappling into one connected game, and our MMA program at Canal Gardens teaches each range on its own before putting them together — so you build real, usable skill instead of just getting tired. Every session runs under federation-certified head coach Azhar Hussain.",
    whatYouLearn: [
      "Stand-up striking: boxing hands, kicks, knees and elbows",
      "Clinch work, takedowns and takedown defense",
      "Ground control, positions, submissions and escapes",
      "Transitions between striking, wrestling and the ground",
      "Fight IQ, pacing, and controlled sparring as you progress",
    ],
    whoFor:
      "Adults and teens who want the full combat-sports skill set — whether your goal is self-defense, serious fitness, or stepping into amateur competition. No experience needed to start.",
    body: [
      "Beginners start with fundamentals and controlled drilling. You learn to move, defend, and stay calm before any hard contact — there is no being thrown into sparring on day one. As your base develops, we layer in live rounds at a pace that matches your level, so progress feels challenging but safe.",
      "MMA is also one of the most complete conditioning tools there is. A single 90-minute session trains power, endurance, mobility and mental toughness at once. Many members join purely to get fit and leaner, and stay for the skills.",
      "For those who want to test themselves, Coach Azhar builds competition-focused camps with sparring, fight IQ and a full preparation plan — backed by 15 years of coaching and professional stunt-fighting experience.",
    ],
    faqs: [
      { q: "Do I need any experience to join MMA classes?", a: "No. Most members start with zero background. You begin with fundamentals and controlled drills, and only move to live rounds once you're ready." },
      { q: "Will I have to spar straight away?", a: "Never on your first day. Sparring is introduced gradually, with control, once your defense and fundamentals are solid." },
      { q: "How long are MMA sessions and when do they run?", a: "MMA sessions are about 90 minutes, Monday to Friday. Message us on WhatsApp for the exact times that suit your level." },
      { q: "Is MMA good for fitness and weight loss?", a: "Yes — it's a full-body workout that builds strength, endurance and coordination while burning serious calories." },
      { q: "How much do MMA classes cost in Lahore?", a: "The MMA program is PKR 10,000 per month. Private one-on-one MMA coaching is also available — see our pricing page." },
    ],
    related: ["boxing", "muay-thai", "self-defense"],
  },
  {
    slug: "boxing",
    route: "/programs/boxing",
    isDiscipline: true,
    name: "Boxing",
    primaryKeyword: "boxing classes Lahore",
    secondaryKeywords: ["boxing club Lahore", "boxing coach Lahore", "boxing for beginners Lahore"],
    title: "Boxing Classes in Lahore | ROAR MMA Canal Gardens",
    metaDescription:
      "Learn boxing in Lahore with a Pakistan Boxing Federation–certified coach. Beginner to advanced classes Mon–Fri in Canal Gardens. Book your free trial today.",
    tagline: "Master the sweet science",
    duration: "60 min · Mon–Fri",
    levels: "Beginner / Intermediate / Advanced",
    priceMonthly: 7000,
    image: "/images/boxing-pads-ring-lahore.jpg",
    imageAlt: "Boxing pad work in the ring at ROAR MMA, Canal Gardens Lahore",
    excerpt: "Footwork, head movement, combinations and ring IQ — from your first jab to sparring-ready.",
    intro:
      "Our boxing classes in Lahore take you from your very first jab to sparring-ready, coached by a Pakistan Boxing Federation–certified instructor. Boxing is the foundation of every striking art: you learn to move, defend, and hit with real technique. At ROAR in Canal Gardens, you train stance, footwork, head movement and combinations on the pads and bag, five days a week.",
    whatYouLearn: [
      "Proper stance, guard and footwork",
      "The full punch arsenal — jab, cross, hooks, uppercuts",
      "Head movement, slips, rolls and defensive work",
      "Combinations and pad work for timing and power",
      "Ring IQ and controlled sparring as you advance",
    ],
    whoFor:
      "Anyone from total beginners and kids to fitness-focused adults and aspiring competitors. Boxing scales to your level — it's as much a workout as it is a skill.",
    body: [
      "Boxing is one of the best ways to get genuinely fit. The footwork, bag rounds and pad work build cardio, core strength and coordination fast, which is why so many members start boxing purely for fitness and weight loss.",
      "Technique comes first. You'll drill the fundamentals until they're automatic, then build combinations and defensive movement on the pads with the coach. Sparring is optional and introduced carefully once you're ready — plenty of members train for years without ever competing.",
      "For those who want to compete, ROAR offers a clear path into amateur boxing with structured sparring and fight preparation.",
    ],
    faqs: [
      { q: "I've never boxed before — can I join?", a: "Absolutely. Most members start as complete beginners. You'll learn stance, footwork and the basic punches from your first session." },
      { q: "Do I need my own gloves and wraps?", a: "You can start with club equipment for your trial. Once you commit, we'll recommend your own gloves and hand wraps." },
      { q: "Is boxing good for weight loss and fitness?", a: "Yes — boxing is a high-intensity full-body workout that burns calories and builds conditioning quickly." },
      { q: "Do I have to spar?", a: "No. Sparring is optional and only introduced gradually once your technique and defense are ready." },
      { q: "How much are boxing classes in Lahore?", a: "Boxing is PKR 7,000 per month as a single discipline. Kids boxing is available under our Kids Program at PKR 5,000." },
    ],
    related: ["kickboxing", "mma", "fitness"],
  },
  {
    slug: "kickboxing",
    route: "/programs/kickboxing",
    isDiscipline: true,
    name: "Kickboxing",
    primaryKeyword: "kickboxing classes Lahore",
    secondaryKeywords: ["kickboxing training Lahore", "kickboxing for fitness Lahore", "kickboxing coach Lahore"],
    title: "Kickboxing Classes in Lahore | ROAR MMA Canal Gardens",
    metaDescription:
      "Kickboxing classes in Lahore that blend punches and kicks for fitness and combat. Federation-certified coaching Mon–Fri in Canal Gardens. Book a free trial.",
    tagline: "Explosive striking, head to toe",
    duration: "60 min · Mon–Fri",
    levels: "Beginner / Intermediate / Advanced",
    priceMonthly: 7000,
    image: "/images/kickboxing-head-kick-sparring-lahore.jpg",
    imageAlt: "Kickboxing head-kick sparring at ROAR MMA, Canal Gardens Lahore",
    excerpt: "Punches plus kicks — explosive striking for fitness, power and real combat skill.",
    intro:
      "Our kickboxing classes in Lahore blend punches and kicks into fast, explosive striking that's as good for fitness as it is for combat. Coached by a Pakistan Kickboxing Federation–certified instructor, the kickboxing program at ROAR Canal Gardens builds power, speed and conditioning while teaching you to strike with both hands and legs. It's a complete, high-energy workout open to every level.",
    whatYouLearn: [
      "Boxing hands combined with kicks and knees",
      "Roundhouse, front, side and push kicks",
      "Footwork, range control and angles",
      "Pad and bag combinations for power and speed",
      "Defensive movement and controlled sparring",
    ],
    whoFor:
      "Great for fitness-focused adults who want a fun, demanding workout, as well as anyone building striking for self-defense or competition. All levels welcome.",
    body: [
      "Kickboxing is one of the most effective cardio workouts in combat sports. The constant movement, pad rounds and bag work torch calories and build full-body conditioning — a favourite for members training for fitness and weight loss.",
      "On the skill side, you learn to flow between hands and legs, control distance, and defend against strikes from every angle. Technique and safety come first, with sparring introduced only when you're ready.",
      "Kickboxing also pairs perfectly with MMA and Muay Thai — the striking you build here carries directly into both.",
    ],
    faqs: [
      { q: "What's the difference between kickboxing and Muay Thai?", a: "Both use punches and kicks; Muay Thai adds elbows, knees and heavy clinch work. We coach both — try each and see what you prefer." },
      { q: "Is kickboxing a good workout for weight loss?", a: "Yes — it's one of the highest-calorie-burning classes we offer, combining cardio, strength and coordination." },
      { q: "Can beginners join kickboxing?", a: "Yes. You'll start with fundamentals and build up at your own pace. No experience required." },
      { q: "When do kickboxing classes run?", a: "Sessions are about 60 minutes, Monday to Friday. WhatsApp us for exact timings." },
      { q: "How much is kickboxing in Lahore?", a: "Kickboxing is PKR 7,000 per month as a single discipline at ROAR." },
    ],
    related: ["boxing", "muay-thai", "fitness"],
  },
  {
    slug: "muay-thai",
    route: "/programs/muay-thai",
    isDiscipline: true,
    name: "Muay Thai",
    primaryKeyword: "Muay Thai Lahore",
    secondaryKeywords: ["Muay Thai classes Lahore", "Thai boxing Lahore", "Muay Thai coach Lahore"],
    title: "Muay Thai Classes in Lahore | ROAR MMA Canal Gardens",
    metaDescription:
      "Authentic Muay Thai in Lahore — the art of eight limbs with proper clinch and pad work, led by a federation-certified coach. Book your free trial at ROAR MMA.",
    tagline: "The art of eight limbs",
    duration: "60 min · Mon–Fri",
    levels: "Beginner / Intermediate / Advanced",
    priceMonthly: 7000,
    image: "/images/mma-knee-clinch-sparring-lahore.jpg",
    imageAlt: "Muay Thai knee and clinch sparring at ROAR MMA, Canal Gardens Lahore",
    excerpt: "Fists, elbows, knees and kicks — authentic Muay Thai with real clinch work and pad sessions.",
    intro:
      "Train authentic Muay Thai in Lahore at ROAR Canal Gardens. Known as the art of eight limbs, Muay Thai uses fists, elbows, knees and kicks together with clinch work to make it one of the most complete and powerful striking arts in the world. Our Muay Thai classes are led by a Pakistan Muay Thai Federation–certified coach, with proper pad sessions and technique for every level.",
    whatYouLearn: [
      "The eight weapons — punches, elbows, knees and kicks",
      "Teeps (push kicks) and devastating roundhouse kicks",
      "Clinch control, knees and off-balancing",
      "Authentic Thai pad and bag rounds",
      "Defense, counters and controlled sparring",
    ],
    whoFor:
      "Anyone who wants serious striking skill and conditioning — from beginners and fitness clients to MMA fighters adding a stand-up weapon. All levels welcome.",
    body: [
      "Muay Thai is famous for building power. The kicks, knees and clinch demand strong hips, core and legs, and the pad rounds deliver a brutal, satisfying workout that builds real-world toughness and conditioning.",
      "We teach it properly — clean technique on the pads, correct clinch mechanics, and gradual, controlled sparring once your fundamentals are solid. Beginners are always welcome and start with the basics.",
      "For MMA athletes, Muay Thai is a cornerstone: the elbows, knees and clinch translate directly into the cage.",
    ],
    faqs: [
      { q: "Is Muay Thai suitable for beginners?", a: "Yes. You'll start with stance, basic kicks and pad work, building up gradually. No experience needed." },
      { q: "How is Muay Thai different from kickboxing?", a: "Muay Thai adds elbows, knees and clinch fighting to the punches and kicks of kickboxing — it's a more complete striking art." },
      { q: "Will Muay Thai help my MMA?", a: "Enormously. The clinch, knees and elbows are central to MMA stand-up and translate directly." },
      { q: "Do you do real Thai pad work?", a: "Yes — authentic pad rounds are a core part of every session, coached by a federation-certified instructor." },
      { q: "What does Muay Thai cost in Lahore?", a: "Muay Thai is PKR 7,000 per month as a single discipline at ROAR." },
    ],
    related: ["kickboxing", "mma", "boxing"],
  },
  {
    slug: "self-defense",
    route: "/programs/self-defense",
    isDiscipline: true,
    name: "Self-Defense",
    primaryKeyword: "self defense classes Lahore",
    secondaryKeywords: ["women's self defense Lahore", "self defence training for girls Lahore", "self defense academy Lahore"],
    title: "Self Defense Classes in Lahore | ROAR MMA Canal Gardens",
    metaDescription:
      "Practical self defense classes in Lahore, including a dedicated women's self-defense program. Federation-certified curriculum in Canal Gardens. Book a free trial.",
    tagline: "Real-world readiness & confidence",
    duration: "60 min · Mon–Fri",
    levels: "All levels / Women's class",
    priceMonthly: 10000,
    image: "/images/self-defense-takedown-lahore.jpg",
    imageAlt: "Self-defense takedown and control training at ROAR MMA, Lahore",
    excerpt: "Practical, real-world self-defense — including a dedicated women's program. Awareness, confidence, readiness.",
    intro:
      "Our self defense classes in Lahore teach practical, real-world skills to protect yourself and build genuine confidence — including a dedicated women's self-defense program. Taught through a Pakistan Self-Defense Federation–certified curriculum at ROAR Canal Gardens, the focus is on awareness, de-escalation, and simple, effective techniques that work under pressure for people of every age and fitness level.",
    whatYouLearn: [
      "Situational awareness and avoiding danger early",
      "Escapes from grabs, holds and common attacks",
      "Simple, high-percentage strikes that actually work",
      "Using distance, voice and positioning to stay safe",
      "Calm decision-making and confidence under stress",
    ],
    whoFor:
      "Everyone — with a dedicated women's self-defense class. Ideal for women, girls, students, professionals and parents who want practical safety skills in a supportive environment.",
    body: [
      "This is not about becoming a fighter — it's about being prepared. The curriculum focuses on realistic scenarios and techniques that don't rely on size or strength, so they work for everyone.",
      "The dedicated women's self-defense program runs in a respectful, supportive setting. Many members tell us the biggest change is confidence: how they carry themselves, read a situation, and move through the world.",
      "Sessions combine awareness training, physical technique drilled against realistic resistance, and conditioning — so the skills hold up when it counts.",
    ],
    faqs: [
      { q: "Do you offer a women-only self-defense class?", a: "Yes — ROAR runs a dedicated women's self-defense program in a supportive, respectful environment." },
      { q: "Do I need to be fit to start?", a: "No. The techniques are built to work regardless of size, strength or fitness level, and you'll build conditioning as you train." },
      { q: "Is this suitable for teenagers and students?", a: "Yes — self-defense is valuable for students and young adults. Contact us about age-appropriate groups." },
      { q: "How long before I can defend myself?", a: "You'll learn useful fundamentals from your very first class; real confidence builds steadily with regular training." },
      { q: "What does self-defense training cost?", a: "The self-defense program is PKR 10,000 per month at ROAR." },
    ],
    related: ["mma", "boxing", "fitness"],
  },
  {
    slug: "wushu-kung-fu",
    route: "/programs/wushu-kung-fu",
    isDiscipline: true,
    name: "Wushu & Kung Fu",
    primaryKeyword: "Wushu Kung Fu Lahore",
    secondaryKeywords: ["kung fu classes Lahore", "Shaolin Kung Fu Lahore", "Wushu training Lahore"],
    title: "Wushu & Kung Fu Classes in Lahore | ROAR MMA Lahore",
    metaDescription:
      "Rare Wushu & Kung Fu classes in Lahore, taught by a Wushu black sash and Shaolin Kung Fu black sash. Forms, agility and combat application. Book a free trial.",
    tagline: "Traditional Chinese martial arts",
    duration: "60 min · Mon–Fri",
    levels: "Beginner / Intermediate / Advanced",
    priceMonthly: 7000,
    image: "/images/wushu-meditation-discipline-roar.jpg",
    imageAlt: "Wushu and Kung Fu discipline and focus training at ROAR MMA, Lahore",
    excerpt: "Traditional Chinese martial arts — agility, balance, forms and real combat application.",
    intro:
      "ROAR offers rare, authentic Wushu & Kung Fu classes in Lahore, taught by a coach who holds both a Wushu black sash and a Shaolin Kung Fu black sash. These traditional Chinese martial arts develop extraordinary agility, balance, discipline and body control through forms and combat application. Very few clubs in Lahore teach Wushu and Kung Fu at this level — at Canal Gardens, you learn it from a certified black sash.",
    whatYouLearn: [
      "Foundational stances, footwork and body mechanics",
      "Traditional forms (taolu) for balance and flow",
      "Kicks, strikes and agility drills",
      "Combat application of traditional techniques",
      "Focus, discipline and mind-body control",
    ],
    whoFor:
      "Adults and kids drawn to traditional martial arts, discipline and agility — and anyone wanting something different from pure combat sport. All levels welcome.",
    body: [
      "Wushu and Kung Fu are as much about discipline and self-mastery as they are about fighting. The training sharpens coordination, flexibility and balance in a way few other sports can, and the forms are deeply rewarding to learn and refine.",
      "Because it's taught by a genuine black sash, you get authentic technique and progression — not a watered-down version. Kids especially thrive here, building focus and confidence through structured practice.",
      "It also complements striking and MMA beautifully, developing the body control and agility that carry into every other discipline.",
    ],
    faqs: [
      { q: "Is Wushu the same as Kung Fu?", a: "They're closely related Chinese martial arts. Our coach holds black sash rank in both Wushu and Shaolin Kung Fu and teaches them together." },
      { q: "Is Kung Fu good for kids?", a: "Yes — it's excellent for building focus, discipline, balance and confidence. Kids are welcome under our Kids Program." },
      { q: "Do I need to be flexible to start?", a: "No. Flexibility and agility develop naturally through the training; you start wherever you are." },
      { q: "Is this traditional or modern Wushu?", a: "You learn authentic traditional technique and forms from a certified black sash, with real combat application." },
      { q: "What does Wushu & Kung Fu cost in Lahore?", a: "It's PKR 7,000 per month as a single discipline at ROAR; kids train under the PKR 5,000 Kids Program." },
    ],
    related: ["self-defense", "fitness", "mma"],
  },
  {
    slug: "fitness",
    route: "/programs/fitness",
    isDiscipline: true,
    name: "Strength, Fitness & Weight Loss",
    primaryKeyword: "martial arts fitness Lahore",
    secondaryKeywords: ["weight loss training Lahore", "strength and conditioning Lahore", "fitness coach Lahore"],
    title: "Martial Arts Fitness & Weight Loss Lahore | ROAR MMA",
    metaDescription:
      "Strength, conditioning and weight-loss training in Lahore, programmed by a Master of Sports Science. Get leaner, stronger and fitter at ROAR Canal Gardens.",
    tagline: "Get leaner, stronger, fitter",
    duration: "60 min · Mon–Fri",
    levels: "All levels",
    priceMonthly: 5000,
    image: "/images/fitness-group-conditioning-lahore.jpg",
    imageAlt: "Group strength and conditioning training at ROAR MMA, Canal Gardens Lahore",
    excerpt: "Personalised strength, conditioning and weight-loss programming from a sports-science specialist.",
    intro:
      "ROAR's martial arts fitness in Lahore combines combat-sports conditioning with personalised strength and weight-loss programming, designed by a Master of Sports Science & Physical Education. Whether you want to lose weight, build strength, or simply get fitter, you train with a coach who programmes for your body and goals — far more engaging than a standard gym routine, and far more effective.",
    whatYouLearn: [
      "Personalised strength & conditioning plans",
      "Fat-loss and weight-management programming",
      "Combat-sports conditioning — bag work, circuits, drills",
      "Mobility, core strength and injury-resilient movement",
      "Sustainable habits coached by a specialist",
    ],
    whoFor:
      "Anyone wanting to lose weight, get stronger or improve fitness — complete beginners welcome. No fighting required; train purely for results if you prefer.",
    body: [
      "Combat-sports training is one of the most enjoyable ways to get fit. Instead of counting reps alone in a corner, you move, hit pads, and build real athleticism — which is why people stick with it and actually see results.",
      "Programming is personalised. Your coach assesses where you are and builds a plan around your goals, whether that's dropping weight, building strength, or getting back in shape after time away from training.",
      "You can train fitness on its own, or combine it with a striking or MMA program for a complete package.",
    ],
    faqs: [
      { q: "Can I train just for fitness and weight loss, without fighting?", a: "Absolutely. Many members train purely for fitness and never spar. Your program is built around your goals." },
      { q: "Who designs the fitness programming?", a: "Programming is designed by Coach Azhar, a Master of Sports Science & Physical Education with international fitness certifications." },
      { q: "I'm a complete beginner and out of shape — is that okay?", a: "Completely. We meet you where you are and build up safely. Everyone starts somewhere." },
      { q: "How quickly will I see results?", a: "With consistent training and sensible nutrition, most members notice changes in energy and fitness within a few weeks." },
      { q: "What does the fitness program cost?", a: "Physical Fitness is PKR 5,000 per month. Personalised one-on-one and home training are also available." },
    ],
    related: ["boxing", "kickboxing", "personal-training"],
  },

  // ─────────── Special offerings (own top-level routes) ───────────
  {
    slug: "kids",
    route: "/kids",
    isDiscipline: false,
    name: "Kids Martial Arts",
    primaryKeyword: "kids martial arts Lahore",
    secondaryKeywords: ["boxing for kids Lahore", "martial arts classes for children Lahore", "kids self defense Lahore"],
    title: "Kids Martial Arts Classes in Lahore | ROAR MMA",
    metaDescription:
      "Kids martial arts classes in Lahore that build discipline, focus and confidence in a safe, structured environment. Federation-certified coaching. Book a free trial.",
    tagline: "Discipline, focus & confidence",
    duration: "Mon–Fri · age-appropriate groups",
    levels: "Kids & youth, all levels",
    priceMonthly: 5000,
    image: "/images/kids-punch-drill-lahore.jpg",
    imageAlt: "Kids martial arts punch drill at ROAR MMA, Canal Gardens Lahore",
    excerpt: "One discipline of choice for young athletes — building discipline, focus and confidence.",
    intro:
      "ROAR's kids martial arts classes in Lahore give young athletes a single discipline of their choice — boxing, kickboxing, Wushu & Kung Fu and more — in a safe, structured, federation-certified environment. Beyond the skills, kids build discipline, focus, confidence and respect that carry into school and life. Classes run five days a week at Canal Gardens.",
    whatYouLearn: [
      "A martial art of choice (boxing, kickboxing, Wushu & more)",
      "Discipline, focus and self-control",
      "Confidence, resilience and respect",
      "Coordination, fitness and healthy habits",
      "Age-appropriate self-defense awareness",
    ],
    whoFor:
      "Children and youth of all levels. A fantastic outlet for energy that channels it into discipline, confidence and fitness — in a safe, coached setting.",
    body: [
      "Martial arts is one of the best investments in a child's development. The structure teaches patience and focus; the training builds confidence and fitness; and the environment teaches respect for themselves and others.",
      "Our coaching is certified and safety-first. Kids progress at their own pace with clear goals, celebrating real milestones along the way — which keeps them motivated and proud of their progress.",
      "Parents are welcome to watch, and we're happy to recommend the best discipline to start with based on your child's age and personality.",
    ],
    faqs: [
      { q: "What age can children start?", a: "We run age-appropriate groups for kids and youth. Message us with your child's age and we'll recommend the right class." },
      { q: "Which martial art is best for my child?", a: "The Kids Program covers one discipline of choice — boxing, kickboxing, Wushu & Kung Fu and more. We'll help you pick based on their age and interests." },
      { q: "Is it safe for children?", a: "Yes — safety is the priority. Coaching is federation-certified and structured, with contact introduced carefully and appropriately." },
      { q: "How does martial arts help kids beyond fitness?", a: "It builds discipline, focus, confidence and respect — benefits parents consistently see at home and school." },
      { q: "What does the Kids Program cost?", a: "The Kids Program is PKR 5,000 per month for one discipline, five days a week." },
    ],
    related: ["boxing", "wushu-kung-fu", "self-defense"],
  },
  {
    slug: "personal-training",
    route: "/personal-training",
    isDiscipline: false,
    name: "Personal Training",
    primaryKeyword: "personal martial arts trainer Lahore",
    secondaryKeywords: ["one-on-one boxing coach Lahore", "private MMA coach Lahore", "personal training Canal Gardens"],
    title: "Personal Martial Arts Trainer in Lahore | ROAR MMA",
    metaDescription:
      "One-on-one martial arts personal training in Lahore with the head coach. Private boxing, MMA and fitness coaching for the fastest progress. Book a session at ROAR.",
    tagline: "One-on-one, fastest progress",
    duration: "By appointment · in-club",
    levels: "All levels",
    priceMonthly: 15000,
    priceNote: "From PKR 15,000/month (MMA one-on-one). Other disciplines — message us for a quote.",
    image: "/images/coach-azhar-hussain-roar-mma-lahore.jpg",
    imageAlt: "One-on-one personal training with Coach Azhar at ROAR MMA, Lahore",
    excerpt: "Private in-club coaching with the head coach — tailored to you for the fastest progression.",
    intro:
      "Work directly with a personal martial arts trainer in Lahore for the fastest, most tailored progress possible. ROAR's one-on-one personal training gives you the head coach's full attention — private in-club sessions in boxing, MMA, Muay Thai, fitness or self-defense, built entirely around your goals, schedule and level. It's the quickest way to improve, whether you're starting out or preparing to compete.",
    whatYouLearn: [
      "A fully personalised plan for your goals",
      "Undivided coaching attention and instant feedback",
      "Any discipline — boxing, MMA, Muay Thai, fitness, self-defense",
      "Flexible scheduling around your life",
      "Accelerated progress vs group classes",
    ],
    whoFor:
      "Anyone who wants to progress fast — beginners who prefer private attention, busy professionals needing flexible times, and competitors preparing for a fight.",
    body: [
      "In a one-on-one session, every minute is about you. The coach corrects technique in real time, adapts the plan session to session, and pushes you at exactly the right level — something group classes can't match.",
      "It's ideal if you want flexible timings, prefer privacy, or have a specific goal like a fitness transformation or fight preparation. Many members combine private sessions with group classes for the best of both.",
      "Sessions are by appointment at the Canal Gardens club. Tell us your goals and we'll build the right plan.",
    ],
    faqs: [
      { q: "Who will coach my personal training sessions?", a: "Private sessions are with head coach Azhar Hussain, certified across boxing, MMA, Muay Thai, kickboxing, self-defense and sports science." },
      { q: "Which disciplines can I train one-on-one?", a: "Any of them — boxing, MMA, Muay Thai, kickboxing, fitness or self-defense. Your plan is built around your chosen focus." },
      { q: "Is personal training only for advanced athletes?", a: "Not at all. It's great for beginners who want focused attention and faster progress in a private setting." },
      { q: "How do I schedule sessions?", a: "Personal training is by appointment. Message us on WhatsApp and we'll arrange times that fit your schedule." },
      { q: "How much does personal training cost?", a: "MMA one-on-one starts at PKR 15,000/month. For other disciplines, message us for a tailored quote." },
    ],
    related: ["home-training", "mma", "fitness"],
  },
  {
    slug: "home-training",
    route: "/home-training",
    isDiscipline: false,
    name: "Home MMA Training",
    primaryKeyword: "home MMA training Lahore",
    secondaryKeywords: ["personal trainer at home Lahore", "home boxing coach Lahore", "home martial arts coaching Lahore"],
    title: "Home MMA Training in Lahore | ROAR MMA Coaching",
    metaDescription:
      "Private home MMA training in Lahore — the coach comes to you. 3 one-hour sessions a week, a personalised plan, MMA fitness and skills. Get a quote from ROAR MMA.",
    tagline: "The coaching comes to you",
    duration: "3 × 1-hour sessions / week",
    levels: "All levels",
    priceMonthly: null,
    priceNote: "Custom quote based on location and schedule — message us on WhatsApp.",
    image: "/images/mma-ground-control-lahore.jpg",
    imageAlt: "Private MMA ground-control coaching by ROAR MMA, Lahore",
    excerpt: "Private home-based MMA coaching — 3 one-hour sessions a week, a personalised plan, at your location.",
    intro:
      "Can't make it to the club? ROAR brings home MMA training to you across Lahore. Our home coaching package is private home-based MMA coaching with 3 one-hour sessions per week — one-on-one at your location, with a personalised plan covering MMA fitness and skill development. It's the ultimate in convenience and focus: professional coaching without leaving your home.",
    whatYouLearn: [
      "Private one-on-one MMA coaching at home",
      "3 one-hour sessions every week",
      "A personalised plan for your goals",
      "MMA fitness and skill development",
      "Maximum convenience and privacy",
    ],
    whoFor:
      "Busy professionals, those who prefer privacy, and anyone who wants serious coaching without travelling to the gym. All levels — beginners fully supported.",
    body: [
      "Home training removes every barrier. No commute, no waiting — just you and the coach, focused entirely on your progress, three hours a week, on a plan built around your goals.",
      "The sessions blend MMA skills with conditioning, so you build fitness and ability together. Everything scales to your level, so complete beginners are just as welcome as experienced athletes.",
      "Because it's delivered at your location, pricing depends on area and schedule — message us on WhatsApp for a custom quote.",
    ],
    faqs: [
      { q: "What exactly does the home training package include?", a: "Private one-on-one MMA coaching at your home — 3 one-hour sessions per week, with a personalised plan covering MMA fitness and skill development." },
      { q: "Do I need any equipment at home?", a: "Minimal space is enough to start. We'll advise on any basic gear once we understand your setup and goals." },
      { q: "Which areas of Lahore do you cover?", a: "We cover much of Lahore. Share your location on WhatsApp and we'll confirm availability and a quote." },
      { q: "Is home training suitable for beginners?", a: "Yes — the one-on-one format is excellent for beginners, with full attention and a plan that builds up safely." },
      { q: "How much does home MMA training cost?", a: "Pricing is a custom quote based on your location and schedule. Message us on WhatsApp for details." },
    ],
    related: ["personal-training", "mma", "fitness"],
  },
];

export const disciplines = programs.filter((p) => p.isDiscipline);

export function getProgram(slug: string): Program | undefined {
  return programs.find((p) => p.slug === slug);
}
