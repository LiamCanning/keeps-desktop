import sarahAvatar from '@/assets/avatars/sarah-avatar.png';
import mikeAvatar from '@/assets/avatars/mike-avatar.png';
import emmaAvatar from '@/assets/avatars/emma-avatar.png';
import jamesAvatar from '@/assets/avatars/james-avatar.png';
import lisaAvatar from '@/assets/avatars/lisa-avatar.png';
import davidAvatar from '@/assets/avatars/david-avatar.png';
import alexAvatar from '@/assets/avatars/alex-avatar.png';
import mariaAvatar from '@/assets/avatars/maria-avatar.png';
import f1FanAvatar from '@/assets/avatars/f1-fan-avatar.png';
import golfFanAvatar from '@/assets/avatars/golf-fan-avatar.png';
import liverpoolFanAvatar from '@/assets/avatars/liverpool-fan-avatar.png';
import tomAvatar from '@/assets/avatars/tom-avatar.png';
import paulAvatar from '@/assets/avatars/paul-avatar.png';
import chrisAvatar from '@/assets/avatars/chris-avatar.png';
import marcusAvatar from '@/assets/avatars/marcus-avatar.png';
import rachelAvatar from '@/assets/avatars/rachel-avatar.png';
import jenniferAvatar from '@/assets/avatars/jennifer-avatar.png';
import liamAvatar from '@/assets/liam-avatar.png';

import mclarenRacing from '@/assets/mclaren-racing.jpg';
import liverpoolSquad from '@/assets/liverpool-squad.jpg';
import ryderCupGolf from '@/assets/ryder-cup-golf.jpg';
import cardiffCity from '@/assets/cardiff-city.jpg';
import ohioState from '@/assets/ohio-state.jpg';
import hexagonSports from '@/assets/hexagon-sports.jpg';

// Forum posts (home feed style)
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

// Forum topics for the forum listing and detail pages (kept consistent with CommunityForum)
export const forumTopics = [
  {
    id: "1",
    title: "Liverpool FC vs McLaren F1: Which offers better long-term returns?",
    content: "Comparing the investment potential of traditional football clubs versus F1 racing teams. Looking at revenue streams, global reach, and growth potential.",
    category: "Investment Strategy",
    author: {
      name: "Sarah Mitchell",
      avatar: mariaAvatar
    },
    timestamp: "2 hours ago",
    replies: 47,
    views: 1240,
    likes: 34
  },
  {
    id: "2", 
    title: "Ryder Cup Debentures: Understanding the 2025 Structure",
    content: "Deep dive into how Ryder Cup debentures work, including revenue sharing, hospitality benefits, and the unique aspects of golf tournament investments.",
    category: "Asset Analysis",
    author: {
      name: "James Wilson",
      avatar: jamesAvatar
    },
    timestamp: "4 hours ago",
    replies: 23,
    views: 890,
    likes: 28
  },
  {
    id: "3",
    title: "Portfolio Diversification: How many sports should you invest in?",
    content: "Discussing optimal portfolio allocation across different sports. Risk management and correlation analysis between various sporting assets.",
    category: "Portfolio Strategy",
    author: {
      name: "Emma Thompson",
      avatar: emmaAvatar
    },
    timestamp: "6 hours ago",
    replies: 31,
    views: 567,
    likes: 19
  },
  {
    id: "4",
    title: "McLaren's 2024 Performance Impact on Share Values",
    content: "Analysis of how McLaren's recent F1 performance has affected their investment value and what it means for future projections.",
    category: "Market Analysis",
    author: {
      name: "Mike Rodriguez",
      avatar: mikeAvatar
    },
    timestamp: "8 hours ago",
    replies: 15,
    views: 432,
    likes: 12
  },
  {
    id: "5",
    title: "New to sports investing: Where should I start?",
    content: "Complete beginner looking for advice on getting started with sports investments. What should I consider as my first purchase?",
    category: "Beginner Questions",
    author: {
      name: "Alex Chen",
      avatar: alexAvatar
    },
    timestamp: "1 hour ago",
    replies: 52,
    views: 1100,
    likes: 25
  },
  {
    id: "6",
    title: "Tax implications of sports investments in the UK",
    content: "Understanding capital gains, ISA allowances, and tax-efficient strategies for sports asset investments in the UK market.",
    category: "Tax & Legal",
    author: {
      name: "Maria Garcia",
      avatar: f1FanAvatar
    },
    timestamp: "12 hours ago",
    replies: 38,
    views: 789,
    likes: 41
  }
];

// Forum replies (4–7 unique, consistent per topic)
export const forumReplies = [
  // Topic 1 – Investment Strategy
  {
    id: "r1",
    topicId: "1",
    content: "DCA makes sense here. Liverpool's revenue spikes around major tournaments and transfer windows, so smoothing entries helps.",
    author: { name: "Tom Harrison", avatar: tomAvatar },
    timestamp: "1 hour ago",
    likes: 6
  },
  {
    id: "r2",
    topicId: "1",
    content: "I split 50/50 over two months. The McLaren correlation isn't perfect, so mixing can reduce volatility.",
    author: { name: "Lisa Chang", avatar: lisaAvatar },
    timestamp: "50 minutes ago",
    likes: 9
  },
  {
    id: "r3",
    topicId: "1",
    content: "Watch the Anfield expansion milestones – announcements have historically moved pricing.",
    author: { name: "Marcus Lee", avatar: marcusAvatar },
    timestamp: "35 minutes ago",
    likes: 3
  },
  {
    id: "r4",
    topicId: "1",
    content: "Also consider liquidity on the secondary market – spreads widen during off-season.",
    author: { name: "Rachel Green", avatar: rachelAvatar },
    timestamp: "20 minutes ago",
    likes: 4
  },

  // Topic 2 – Ryder Cup Structure
  {
    id: "r5",
    topicId: "2",
    content: "Prize pools matter less than hospitality margin. The debenture utility drives value.",
    author: { name: "Chris Martinez", avatar: chrisAvatar },
    timestamp: "3 hours ago",
    likes: 12
  },
  {
    id: "r6",
    topicId: "2",
    content: "Tax-wise, treat it similar to fixed-income for the annual coupon. Capital treatment only on sale.",
    author: { name: "Jennifer Adams", avatar: jenniferAvatar },
    timestamp: "2 hours ago",
    likes: 7
  },
  {
    id: "r7",
    topicId: "2",
    content: "Liquidity is thinner than football assets. Price accordingly if selling early.",
    author: { name: "Paul Stewart", avatar: paulAvatar },
    timestamp: "1 hour ago",
    likes: 5
  },
  {
    id: "r8",
    topicId: "2",
    content: "2025 demand looks strong with corporate packages nearly sold out.",
    author: { name: "Alex Novak", avatar: alexAvatar },
    timestamp: "55 minutes ago",
    likes: 4
  },

  // Topic 3 – Portfolio Diversification
  {
    id: "r9",
    topicId: "3",
    content: "I cap any single sport at 35% of portfolio. Football + motorsport have low correlation in my backtests.",
    author: { name: "David Khan", avatar: davidAvatar },
    timestamp: "5 hours ago",
    likes: 10
  },
  {
    id: "r10",
    topicId: "3",
    content: "Consider event-driven plays (e.g., Ryder Cup years) to balance seasonal dips.",
    author: { name: "Emma Patel", avatar: emmaAvatar },
    timestamp: "4 hours ago",
    likes: 6
  },
  {
    id: "r11",
    topicId: "3",
    content: "Don't forget currency exposure if assets are USD-linked.",
    author: { name: "Liam Brooks", avatar: liamAvatar },
    timestamp: "3 hours ago",
    likes: 4
  },
  {
    id: "r12",
    topicId: "3",
    content: "Tracking error vs traditional ETFs can be high – size positions accordingly.",
    author: { name: "Sarah Ahmed", avatar: sarahAvatar },
    timestamp: "2 hours ago",
    likes: 5
  },

  // Topic 4 – McLaren 2024 Performance
  {
    id: "r13",
    topicId: "4",
    content: "Commercial deals (Google, OKX) overshadow prize money in impact – good for stability.",
    author: { name: "Carlos Reyes", avatar: mclarenRacing },
    timestamp: "8 hours ago",
    likes: 11
  },
  {
    id: "r14",
    topicId: "4",
    content: "Chassis upgrades in mid-season correlated with merch spikes – keep an eye on launches.",
    author: { name: "Nina Park", avatar: hexagonSports },
    timestamp: "7 hours ago",
    likes: 7
  },
  {
    id: "r15",
    topicId: "4",
    content: "If Lando podiums consistently, Q4 projections could beat guidance.",
    author: { name: "Owen Price", avatar: ohioState },
    timestamp: "6 hours ago",
    likes: 6
  },
  {
    id: "r16",
    topicId: "4",
    content: "Watch cost cap penalties – historical fines can affect distributions.",
    author: { name: "Priya Nair", avatar: cardiffCity },
    timestamp: "5 hours ago",
    likes: 3
  },

  // Topic 5 – Getting Started
  {
    id: "r17",
    topicId: "5",
    content: "Start with one blue-chip (Liverpool) and one growth (McLaren). Learn the cadence before scaling.",
    author: { name: "Ben Carter", avatar: liverpoolSquad },
    timestamp: "1 hour ago",
    likes: 9
  },
  {
    id: "r18",
    topicId: "5",
    content: "Use small-limit DCA and set alerts around matchdays and race weekends.",
    author: { name: "Chloe Smith", avatar: golfFanAvatar },
    timestamp: "45 minutes ago",
    likes: 6
  },
  {
    id: "r19",
    topicId: "5",
    content: "Read each asset’s offering document – benefit tiers matter more than you'd think.",
    author: { name: "Derek Wong", avatar: chrisAvatar },
    timestamp: "30 minutes ago",
    likes: 5
  },
  {
    id: "r20",
    topicId: "5",
    content: "Join the community calls; Q&A sessions are gold for context.",
    author: { name: "Ella Johnson", avatar: jenniferAvatar },
    timestamp: "25 minutes ago",
    likes: 4
  },

  // Topic 6 – Tax & Legal
  {
    id: "r21",
    topicId: "6",
    content: "If inside an ISA, disposals on the secondary market can be tax-free – check eligibility.",
    author: { name: "Fiona Patel", avatar: liverpoolFanAvatar },
    timestamp: "12 hours ago",
    likes: 13
  },
  {
    id: "r22",
    topicId: "6",
    content: "Annual distributions are income – keep records for self-assessment.",
    author: { name: "George Hall", avatar: davidAvatar },
    timestamp: "11 hours ago",
    likes: 8
  },
  {
    id: "r23",
    topicId: "6",
    content: "Non-UK investors: watch double-tax treaties; withholding can differ by asset type.",
    author: { name: "Hannah Lee", avatar: sarahAvatar },
    timestamp: "10 hours ago",
    likes: 6
  },
  {
    id: "r24",
    topicId: "6",
    content: "Document everything – HMRC queries are easier when you have clear breakdowns.",
    author: { name: "Ian Moore", avatar: paulAvatar },
    timestamp: "9 hours ago",
    likes: 5
  }
];
