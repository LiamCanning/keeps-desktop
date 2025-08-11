import sarahAvatar from '@/assets/avatars/sarah-avatar.png';
import mikeAvatar from '@/assets/avatars/mike-avatar.png';
import emmaAvatar from '@/assets/avatars/emma-avatar.png';
import jamesAvatar from '@/assets/avatars/james-avatar.png';
import lisaAvatar from '@/assets/avatars/lisa-avatar.png';
import davidAvatar from '@/assets/avatars/david-avatar.png';
import a01 from '@/assets/avatars/avatar-01.png';
import a02 from '@/assets/avatars/avatar-02.png';
import a03 from '@/assets/avatars/avatar-03.png';
import a04 from '@/assets/avatars/avatar-04.png';
import a05 from '@/assets/avatars/avatar-05.png';
import a06 from '@/assets/avatars/avatar-06.png';
import a07 from '@/assets/avatars/avatar-07.png';
import a08 from '@/assets/avatars/avatar-08.png';
import a09 from '@/assets/avatars/avatar-09.png';
import a10 from '@/assets/avatars/avatar-10.png';
import a11 from '@/assets/avatars/avatar-11.png';
import a12 from '@/assets/avatars/avatar-12.png';
import a13 from '@/assets/avatars/avatar-13.png';
import f1FanAvatar from '@/assets/avatars/f1-fan-avatar.png';
import golfFanAvatar from '@/assets/avatars/golf-fan-avatar.png';
import { assignAvatars } from '@/data/avatarRegistry';

const allNames = [
  "Marcus Chen","Sarah Williams","David Thompson","Emma Rodriguez","James Wilson","Alex Turner",
  "Tom Harrison","Lisa Chang","Mike O'Connor","Rachel Green","Chris Martinez","Jennifer Adams","Paul Stewart",
  "Nina Patel","Omar Hassan","Chloe Brown","Wei Zhang","Ava Johnson","Luca Bianchi","Sophie Martin","Daniel Evans","Priya Kapoor","Hiro Tanaka","Elena Garcia","Jonas Schmidt"
];
const AV = assignAvatars(allNames);

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
    replies: 8,
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
      avatar: a12
    },
    timestamp: "4 hours ago",
    replies: 18,
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
      avatar: a11
    },
    timestamp: "6 hours ago",
    replies: 8,
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
    replies: 25,
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
    replies: 13,
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
    replies: 21,
    views: 367,
    likes: 25
  }
];

// Forum replies data
export const forumReplies = [
  // Replies for topic 1 (Liverpool FC strategy)
  {
    id: "r1",
    topicId: "1",
    content: "I've been DCA-ing into Liverpool for 6 months now. The volatility around transfer windows can be significant, so spreading purchases helps smooth out the price swings. Just my experience!",
    author: {
      name: "Tom Harrison",
      avatar: AV["Tom Harrison"]
    },
    timestamp: "1 hour ago",
    likes: 5
  },
  {
    id: "r2", 
    topicId: "1",
    content: "£5k is a decent chunk. I'd probably do 60% upfront and 40% over next 3 months. Liverpool's fundamentals are strong but Champions League qualification can affect short-term pricing.",
    author: {
      name: "Lisa Chang",
      avatar: AV["Lisa Chang"]
    },
    timestamp: "45 minutes ago",
    likes: 8
  },
  {
    id: "r3",
    topicId: "1", 
    content: "Don't forget about the Anfield expansion completion timeline. That should boost revenue significantly once finished. Might be worth timing some purchases around that announcement.",
    author: {
      name: "Mike O'Connor",
      avatar: AV["Mike O'Connor"]
    },
    timestamp: "30 minutes ago",
    likes: 3
  },

  // Replies for topic 2 (McLaren performance)
  {
    id: "r4",
    topicId: "2",
    content: "P4 is actually quite good for McLaren historically. The ISA is structured around total commercial revenue, not just prize money, so the Google and other sponsorship deals matter more than championship position.",
    author: {
      name: "Rachel Green",
      avatar: AV["Rachel Green"]
    },
    timestamp: "3 hours ago",
    likes: 12
  },
  {
    id: "r5",
    topicId: "2",
    content: "Prize money is only about 30% of total revenue for teams like McLaren. The technology licensing and merchandise are the real drivers. P4 vs P3 won't make a huge difference to our returns.",
    author: {
      name: "Chris Martinez",
      avatar: AV["Chris Martinez"]
    },
    timestamp: "2 hours ago", 
    likes: 7
  },

  // Replies for topic 3 (Tax implications)
  {
    id: "r6",
    topicId: "3",
    content: "I spoke to a tax specialist about this. The annual 5% is definitely income tax, but the principal repayment should be return of capital (not taxable). However, if debentures appreciate and you sell early, that would be capital gains.",
    author: {
      name: "Jennifer Adams",
      avatar: AV["Jennifer Adams"]
    },
    timestamp: "5 hours ago",
    likes: 15
  },
  {
    id: "r7",
    topicId: "3",
    content: "Make sure your accountant understands these are alternative investments. The tax treatment is similar to corporate bonds in many ways. The HMRC guidance on 'alternative finance arrangements' might be helpful.",
    author: {
      name: "Paul Stewart",
      avatar: AV["Paul Stewart"]
    },
    timestamp: "4 hours ago",
    likes: 9
  },

  // Additional replies for topic 1
  {
    id: "r8",
    topicId: "1",
    content: "Consider the summer transfer window. If Liverpool secures a marquee signing, retail sentiment can spike and temporarily inflate prices.",
    author: { name: "Alicia Brown", avatar: a01 },
    timestamp: "25 minutes ago",
    likes: 2
  },
  {
    id: "r9",
    topicId: "1",
    content: "Also watch UEFA distributions; European runs add a meaningful uplift to matchday and broadcast income.",
    author: { name: "Ben Carter", avatar: a02 },
    timestamp: "12 minutes ago",
    likes: 1
  },

  // Additional replies for topic 2
  {
    id: "r10",
    topicId: "2",
    content: "Commercial pipeline looks strong. McLaren's tech partnerships often yield multi‑year deals that smooth revenue.",
    author: { name: "Diego Lopez", avatar: a03 },
    timestamp: "1 hour ago",
    likes: 4
  },
  {
    id: "r11",
    topicId: "2",
    content: "Don't sleep on merchandise – Norris effect is real. Strong brand equals steadier ISA payouts.",
    author: { name: "Mia Chen", avatar: a04 },
    timestamp: "58 minutes ago",
    likes: 3
  },

  // Additional replies for topic 3
  {
    id: "r12",
    topicId: "3",
    content: "If you sell on the secondary market at a premium, that's capital gains. Keep records of all fees for CGT basis.",
    author: { name: "Oliver King", avatar: a05 },
    timestamp: "3 hours ago",
    likes: 6
  },
  {
    id: "r13",
    topicId: "3",
    content: "Some debentures can be held in certain wrappers; check the provider docs – eligibility varies.",
    author: { name: "Sana Iqbal", avatar: a06 },
    timestamp: "2 hours ago",
    likes: 5
  },

  // Replies for topic 4 (new)
  {
    id: "r14",
    topicId: "4",
    content: "Diversification across sports reduces event risk. Football and F1 have different cycles.",
    author: { name: "Noah Patel", avatar: a07 },
    timestamp: "6 hours ago",
    likes: 7
  },
  {
    id: "r15",
    topicId: "4",
    content: "Consider correlation during global downturns – sponsorship budgets can contract across the board.",
    author: { name: "Elise Dupont", avatar: a08 },
    timestamp: "5 hours ago",
    likes: 3
  },
  {
    id: "r16",
    topicId: "4",
    content: "Ryder Cup exposure adds hospitality revenue which behaves differently than matchday income.",
    author: { name: "Tariq Ahmed", avatar: a09 },
    timestamp: "4 hours ago",
    likes: 4
  },

  // Replies for topic 5 (new)
  {
    id: "r17",
    topicId: "5",
    content: "List slightly below market for faster fill, especially if liquidity is thin.",
    author: { name: "Hannah Lee", avatar: a10 },
    timestamp: "7 hours ago",
    likes: 2
  },
  {
    id: "r18",
    topicId: "5",
    content: "Auction works well when you have multiple interested buyers – encourages price discovery.",
    author: { name: "Jon Park", avatar: a13 },
    timestamp: "6 hours ago",
    likes: 2
  },

  // Replies for topic 6 (new)
  {
    id: "r19",
    topicId: "6",
    content: "College sports media rights in the US are massive and long‑term – stability is decent but conference changes matter.",
    author: { name: "Priyanka Desai", avatar: f1FanAvatar },
    timestamp: "8 hours ago",
    likes: 5
  },
  {
    id: "r20",
    topicId: "6",
    content: "Check stadium utilization beyond game days – concerts and events can drive incremental revenue.",
    author: { name: "Marco Silva", avatar: golfFanAvatar },
    timestamp: "7 hours ago",
    likes: 4
  }
];