// Forum topics data
export const forumTopics = [
  {
    id: "1",
    title: "Best investment strategy for Liverpool FC shares?",
    content: "I'm looking to invest £5,000 in Liverpool FC but wondering about the best approach. Should I invest all at once or dollar-cost average over time? Also curious about the dividend timeline and what factors might affect returns. Any experienced investors here with Liverpool shares?",
    category: "Liverpool FC",
    author: {
      name: "Marcus Chen",
      avatar: "/src/assets/avatars/marcus-avatar.png"
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
      avatar: "/src/assets/avatars/sarah-avatar.png"
    },
    timestamp: "4 hours ago",
    replies: 15,
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
      avatar: "/src/assets/avatars/david-avatar.png"
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
      avatar: "/src/assets/avatars/emma-avatar.png"
    },
    timestamp: "1 day ago",
    replies: 22,
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
      avatar: "/src/assets/avatars/james-avatar.png"
    },
    timestamp: "1 day ago", 
    replies: 11,
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
      avatar: "/src/assets/avatars/alex-avatar.png"
    },
    timestamp: "2 days ago",
    replies: 18,
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
      avatar: "/src/assets/avatars/tom-avatar.png"
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
      avatar: "/src/assets/avatars/lisa-avatar.png"
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
      avatar: "/src/assets/avatars/mike-avatar.png"
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
      avatar: "/src/assets/avatars/rachel-avatar.png"
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
      avatar: "/src/assets/avatars/chris-avatar.png"
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
      avatar: "/src/assets/avatars/jennifer-avatar.png"
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
      avatar: "/src/assets/avatars/paul-avatar.png"
    },
    timestamp: "4 hours ago",
    likes: 9
  }
];