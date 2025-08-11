// Temporarily simplified avatar loading for debugging
import sarahAvatar from '@/assets/avatars/sarah-avatar.png';
import mikeAvatar from '@/assets/avatars/mike-avatar.png';
import emmaAvatar from '@/assets/avatars/emma-avatar.png';
import jamesAvatar from '@/assets/avatars/james-avatar.png';
import lisaAvatar from '@/assets/avatars/lisa-avatar.png';
import davidAvatar from '@/assets/avatars/david-avatar.png';

// Simple avatar assignment to avoid complex registry loading
const simpleAvatars = [sarahAvatar, mikeAvatar, emmaAvatar, jamesAvatar, lisaAvatar, davidAvatar];
const getAvatar = (index: number) => simpleAvatars[index % simpleAvatars.length];

// Simple name-to-avatar mapping for forum data
const allNames = [
  "Marcus Chen","Sarah Williams","David Thompson","Emma Rodriguez","James Wilson","Alex Turner",
  "Tom Harrison","Lisa Chang","Mike O'Connor","Rachel Green","Chris Martinez","Jennifer Adams","Paul Stewart",
  "Nina Patel","Omar Hassan","Chloe Brown","Wei Zhang","Ava Johnson","Luca Bianchi","Sophie Martin","Daniel Evans","Priya Kapoor","Hiro Tanaka","Elena Garcia","Jonas Schmidt"
];
const AV: Record<string, string> = {};
allNames.forEach((name, index) => {
  AV[name] = getAvatar(index);
});


export const forumPosts = [
  {
    id: "1",
    title: "Liverpool FC valuation concerns - thoughts?",
    content: "I've been looking at the Liverpool FC investment opportunity and I'm a bit concerned about the current valuation compared to recent club sales. What are your thoughts on the £40M raise at this price point?",
    author: "Sarah Thompson",
    avatar: sarahAvatar,
    timestamp: "2 hours ago",
    category: "Football",
    replies: 12,
    likes: 8,
    verified: true
  },
  {
    id: "2", 
    title: "McLaren F1 - Best performing investment this quarter",
    content: "Just wanted to share that McLaren has been absolutely crushing it this quarter. Up 22% and looking strong for the rest of the season. Anyone else holding McLaren shares?",
    author: "Mike Johnson",
    avatar: mikeAvatar,
    timestamp: "4 hours ago",
    category: "Formula 1",
    replies: 18,
    likes: 15,
    verified: false
  },
  {
    id: "3",
    title: "Ryder Cup debentures - worth the premium?",
    content: "Looking at the Ryder Cup investment - the returns look good but it's quite a high entry point at £5,935 per debenture. Has anyone done the math on whether this beats traditional golf investments?",
    author: "Emma Wilson",
    avatar: emmaAvatar,
    timestamp: "6 hours ago",
    category: "Golf",
    replies: 7,
    likes: 5,
    verified: true
  },
  {
    id: "4",
    title: "Secondary market opportunities - what to watch",
    content: "I've been tracking the secondary market and there are some interesting opportunities emerging. Liverpool shares trading above par, McLaren holding steady. Worth keeping an eye on.",
    author: "James Carter",
    avatar: jamesAvatar,
    timestamp: "8 hours ago",
    category: "Market Analysis",
    replies: 23,
    likes: 19,
    verified: true
  },
  {
    id: "5",
    title: "Portfolio diversification - mixing sports investments",
    content: "Currently holding Liverpool and McLaren. Thinking about adding some golf exposure through Ryder Cup. How are others diversifying across different sports?",
    author: "Lisa Anderson",
    avatar: lisaAvatar, 
    timestamp: "12 hours ago",
    category: "Strategy",
    replies: 31,
    likes: 24,
    verified: false
  },
  {
    id: "6",
    title: "Tax implications of sports investments - advice needed",
    content: "Can anyone share insights on the tax treatment of sports investments vs traditional equity? Particularly interested in ISA eligibility for some of these offerings.",
    author: "David Roberts",
    avatar: davidAvatar,
    timestamp: "1 day ago", 
    category: "Tax & Legal",
    replies: 14,
    likes: 11,
    verified: true
  }
];

// Forum topics data
export const forumTopics = [
  {
    id: "1",
    title: "Best investment strategy for Liverpool FC shares?",
    content: "I'm looking to invest £5,000 in Liverpool FC but wondering about the best approach. Should I invest all at once or dollar-cost average over time? Also curious about the dividend timeline and what factors might affect returns. Any experienced investors here with Liverpool shares?",
    category: "Liverpool FC",
    author: {
      name: "Marcus Chen",
      avatar: AV["Marcus Chen"]
    },
    timestamp: "2 hours ago",
    replies: 6,
    views: 142,
    likes: 12
  },
  {
    id: "2", 
    title: "McLaren's Q3 performance impact on ISA returns",
    content: "McLaren finished P4 in the constructors championship for Q3. How do you think this will affect our Income Sharing Agreement returns? The commercial revenue seems strong with their Google partnership, but I'm wondering if the on-track performance will impact prize money distributions.",
    category: "McLaren Racing",
    author: {
      name: "Sarah Williams",
      avatar: AV["Sarah Williams"]
    },
    timestamp: "4 hours ago",
    replies: 6,
    views: 289,
    likes: 23
  },
  {
    id: "3",
    title: "Tax implications for sports debentures in UK",
    content: "Can someone clarify the tax treatment for Ryder Cup debentures? I know the 5% annual return is taxable as income, but what about when we get the principal back at the end of the term? Is that considered capital gains or return of capital? My accountant wasn't familiar with sports investment taxation.",
    category: "Ryder Cup",
    author: {
      name: "David Thompson", 
      avatar: AV["David Thompson"]
    },
    timestamp: "6 hours ago",
    replies: 6,
    views: 178,
    likes: 9
  },
  {
    id: "4",
    title: "Portfolio diversification across different sports",
    content: "Currently holding Liverpool FC and McLaren Racing. Thinking about adding Ryder Cup debentures for diversification. Does this make sense or should I look at completely different sports? What's everyone's thoughts on correlation between football and F1 returns?",
    category: "General", 
    author: {
      name: "Emma Rodriguez",
      avatar: AV["Emma Rodriguez"]
    },
    timestamp: "1 day ago",
    replies: 6,
    views: 445,
    likes: 31
  },
  {
    id: "5",
    title: "Secondary market pricing strategies",
    content: "I'm looking to sell some of my Liverpool shares on the secondary market. What's the best way to price them? Should I set them at current market value or slightly below for quick sale? Also, any experience with auction vs fixed price listings?",
    category: "General",
    author: {
      name: "James Wilson",
      avatar: AV["James Wilson"]
    },
    timestamp: "1 day ago", 
    replies: 6,
    views: 223,
    likes: 7
  },
  {
    id: "6",
    title: "Upcoming Ohio State opportunity - thoughts?",
    content: "Saw Ohio State is coming to the platform soon. 10% of stadium revenues for £80M raise seems interesting. Anyone familiar with US college sports revenue models? How stable are these compared to professional sports?",
    category: "General",
    author: {
      name: "Alex Turner",
      avatar: AV["Alex Turner"]
    },
    timestamp: "2 days ago",
    replies: 6,
    views: 367,
    likes: 25
  }
];

// Forum replies data
export const forumReplies = [
  // Replies for topic 1 (Liverpool FC strategy)
  { id: "r1", topicId: "1", content: "I've been DCA-ing into Liverpool for 6 months now. The volatility around transfer windows can be significant, so spreading purchases helps smooth out the price swings.", author: { name: "Tom Harrison", avatar: AV["Tom Harrison"] }, timestamp: "1 hour ago", likes: 5 },
  { id: "r2", topicId: "1", content: "Consider setting a standing order to automate it. It removes the emotion from timing buys.", author: { name: "Lisa Chang", avatar: AV["Lisa Chang"] }, timestamp: "55 minutes ago", likes: 7 },
  { id: "r3", topicId: "1", content: "Watch fixture congestion and Champions League qualification — they move sentiment short-term.", author: { name: "Mike O'Connor", avatar: AV["Mike O'Connor"] }, timestamp: "40 minutes ago", likes: 3 },
  { id: "r4", topicId: "1", content: "I split £5k into 5 tranches over 10 weeks. Worked well this season.", author: { name: "James Wilson", avatar: AV["James Wilson"] }, timestamp: "25 minutes ago", likes: 4 },
  { id: "r5", topicId: "1", content: "Don't forget to factor in any platform fees when setting the amount.", author: { name: "Emma Rodriguez", avatar: AV["Emma Rodriguez"] }, timestamp: "15 minutes ago", likes: 2 },
  { id: "r6", topicId: "1", content: "Anfield expansion revenue could be a tailwind — averaging in before that news is sensible.", author: { name: "Marcus Chen", avatar: AV["Marcus Chen"] }, timestamp: "just now", likes: 1 },

  // Replies for topic 2 (McLaren performance)
  { id: "r7", topicId: "2", content: "ISA returns lean more on commercial revenue. P4 still keeps brand momentum and sponsors happy.", author: { name: "Rachel Green", avatar: AV["Rachel Green"] }, timestamp: "3 hours ago", likes: 12 },
  { id: "r8", topicId: "2", content: "Tech partnerships like Google/Android bring in more than a couple of places in standings.", author: { name: "Chris Martinez", avatar: AV["Chris Martinez"] }, timestamp: "2 hours ago", likes: 7 },
  { id: "r9", topicId: "2", content: "Merch and licensing are strong this season. Expect steady distributions.", author: { name: "Alex Turner", avatar: AV["Alex Turner"] }, timestamp: "1 hour ago", likes: 3 },
  { id: "r10", topicId: "2", content: "Prize money volatility is small compared to the sponsor base for McLaren.", author: { name: "Daniel Evans", avatar: AV["Daniel Evans"] }, timestamp: "50 minutes ago", likes: 2 },
  { id: "r11", topicId: "2", content: "They've also improved pit stop times — small on-track gains, big brand narrative.", author: { name: "Omar Hassan", avatar: AV["Omar Hassan"] }, timestamp: "35 minutes ago", likes: 2 },
  { id: "r12", topicId: "2", content: "Long-term holder here — distributions have been consistent.", author: { name: "Sophie Martin", avatar: AV["Sophie Martin"] }, timestamp: "10 minutes ago", likes: 1 },

  // Replies for topic 3 (Tax implications)
  { id: "r13", topicId: "3", content: "Annual 5% is income tax, principal is return of capital at maturity in most structures.", author: { name: "Jennifer Adams", avatar: AV["Jennifer Adams"] }, timestamp: "5 hours ago", likes: 15 },
  { id: "r14", topicId: "3", content: "If you sell early above cost, that uplift is capital gains — track your acquisition price.", author: { name: "Paul Stewart", avatar: AV["Paul Stewart"] }, timestamp: "4 hours ago", likes: 9 },
  { id: "r15", topicId: "3", content: "HMRC's alternative finance guidance is a good read. Treat like corporate bonds for tax.", author: { name: "Wei Zhang", avatar: AV["Wei Zhang"] }, timestamp: "3 hours ago", likes: 6 },
  { id: "r16", topicId: "3", content: "Your accountant can code this cleanly if you keep all distribution statements.", author: { name: "Nina Patel", avatar: AV["Nina Patel"] }, timestamp: "2 hours ago", likes: 4 },
  { id: "r17", topicId: "3", content: "Worth checking whether it's ISA eligible — most aren't, but rules change.", author: { name: "David Thompson", avatar: AV["David Thompson"] }, timestamp: "1 hour ago", likes: 3 },
  { id: "r18", topicId: "3", content: "If structured notes are used, treatment can differ — read offering docs.", author: { name: "Elena Garcia", avatar: AV["Elena Garcia"] }, timestamp: "30 minutes ago", likes: 1 },

  // Replies for topic 4 (Diversification)
  { id: "r19", topicId: "4", content: "Ryder Cup adds different seasonality vs football/F1 — good diversifier.", author: { name: "Ava Johnson", avatar: AV["Ava Johnson"] }, timestamp: "1 day ago", likes: 8 },
  { id: "r20", topicId: "4", content: "Correlation between Liverpool and McLaren is lower than you think — revenue drivers differ.", author: { name: "James Wilson", avatar: AV["James Wilson"] }, timestamp: "23 hours ago", likes: 6 },
  { id: "r21", topicId: "4", content: "I'd allocate 20% to golf, 40% football, 40% motorsport for balance.", author: { name: "Sarah Williams", avatar: AV["Sarah Williams"] }, timestamp: "22 hours ago", likes: 5 },
  { id: "r22", topicId: "4", content: "Watch liquidity on the secondary market when rebalancing.", author: { name: "Luca Bianchi", avatar: AV["Luca Bianchi"] }, timestamp: "20 hours ago", likes: 3 },
  { id: "r23", topicId: "4", content: "Auto-invest makes DCA easy across assets — fewer timing mistakes.", author: { name: "Chloe Brown", avatar: AV["Chloe Brown"] }, timestamp: "18 hours ago", likes: 4 },
  { id: "r24", topicId: "4", content: "Set calendar reviews quarterly to adjust weights.", author: { name: "Hiro Tanaka", avatar: AV["Hiro Tanaka"] }, timestamp: "16 hours ago", likes: 2 },

  // Replies for topic 5 (Secondary market)
  { id: "r25", topicId: "5", content: "List slightly below last traded price for speed; match market for max value.", author: { name: "Marcus Chen", avatar: AV["Marcus Chen"] }, timestamp: "1 day ago", likes: 9 },
  { id: "r26", topicId: "5", content: "Auctions work when demand is high; fixed price is simpler most days.", author: { name: "Alex Turner", avatar: AV["Alex Turner"] }, timestamp: "22 hours ago", likes: 6 },
  { id: "r27", topicId: "5", content: "Fees can eat into returns — calculate your net before listing.", author: { name: "David Thompson", avatar: AV["David Thompson"] }, timestamp: "20 hours ago", likes: 5 },
  { id: "r28", topicId: "5", content: "Include good description and recent performance to justify price.", author: { name: "Emma Rodriguez", avatar: AV["Emma Rodriguez"] }, timestamp: "18 hours ago", likes: 4 },
  { id: "r29", topicId: "5", content: "Weekends see more buyers; time your listing accordingly.", author: { name: "Rachel Green", avatar: AV["Rachel Green"] }, timestamp: "16 hours ago", likes: 3 },
  { id: "r30", topicId: "5", content: "Set alerts for bids — counter quickly to close sales.", author: { name: "Paul Stewart", avatar: AV["Paul Stewart"] }, timestamp: "12 hours ago", likes: 2 },

  // Replies for topic 6 (Ohio State)
  { id: "r31", topicId: "6", content: "College sports revenues are diversified: media rights, donations, tickets.", author: { name: "Jonas Schmidt", avatar: AV["Jonas Schmidt"] }, timestamp: "2 days ago", likes: 11 },
  { id: "r32", topicId: "6", content: "Stability is strong for top programs like Ohio State — big alumni base.", author: { name: "Daniel Evans", avatar: AV["Daniel Evans"] }, timestamp: "2 days ago", likes: 7 },
  { id: "r33", topicId: "6", content: "US seasons offset Europe — nice temporal diversification.", author: { name: "Nina Patel", avatar: AV["Nina Patel"] }, timestamp: "2 days ago", likes: 5 },
  { id: "r34", topicId: "6", content: "Check compliance rules; college sports have unique governance.", author: { name: "Wei Zhang", avatar: AV["Wei Zhang"] }, timestamp: "2 days ago", likes: 4 },
  { id: "r35", topicId: "6", content: "Merch sales are massive in the US — predictable cash flows.", author: { name: "Lisa Chang", avatar: AV["Lisa Chang"] }, timestamp: "2 days ago", likes: 3 },
  { id: "r36", topicId: "6", content: "Watch currency risk if distributions are USD-linked.", author: { name: "Omar Hassan", avatar: AV["Omar Hassan"] }, timestamp: "2 days ago", likes: 2 },
];