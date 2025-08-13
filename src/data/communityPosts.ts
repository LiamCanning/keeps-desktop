import sarahAvatar from '@/assets/avatars/sarah-avatar.png';
import mikeAvatar from '@/assets/avatars/mike-avatar.png';
import emmaAvatar from '@/assets/avatars/emma-avatar.png';
import jamesAvatar from '@/assets/avatars/james-avatar.png';
import alexAvatar from '@/assets/avatars/alex-avatar.png';
import mariaAvatar from '@/assets/avatars/maria-avatar.png';

interface CommunityPost {
  id: string;
  user: {
    name: string;
    username: string;
    avatar: string;
    verified: boolean;
  };
  content: string;
  timestamp: string;
  likes: number;
  replies: number;
  dealMention?: string;
}

export const communityPosts: CommunityPost[] = [
  {
    id: "1",
    user: {
      name: "Sarah Mitchell",
      username: "sarahm_investor",
      avatar: sarahAvatar,
      verified: true
    },
    content: "Just invested in Liverpool FC through Keeps! The Diamond tier benefits are incredible - behind-the-scenes access and VIP hospitality make this feel like true ownership. This is the future of fan investment! ⚽️🔥",
    timestamp: "2h",
    likes: 127,
    replies: 15,
    dealMention: "Liverpool FC"
  },
  {
    id: "2", 
    user: {
      name: "Mike Johnson",
      username: "mike_sports",
      avatar: mikeAvatar,
      verified: false
    },
    content: "McLaren's performance this season has been outstanding! My F1 investment is already showing solid returns. The revenue sharing model is brilliant for sports fans who want to be more than just spectators 🏎️📈",
    timestamp: "4h",
    likes: 89,
    replies: 23,
    dealMention: "McLaren Racing"
  },
  {
    id: "3",
    user: {
      name: "Emma Watson",
      username: "emma_invests", 
      avatar: emmaAvatar,
      verified: true
    },
    content: "Diversification is key! I'm now invested across Liverpool FC, McLaren F1, and considering the Ryder Cup. Sports investment gives me exposure to sectors I'm passionate about while building wealth 💰⛳",
    timestamp: "6h",
    likes: 156,
    replies: 31
  },
  {
    id: "4",
    user: {
      name: "Alex Rodriguez",
      username: "alex_cricket",
      avatar: alexAvatar,
      verified: true
    },
    content: "Southern Brave was incredibly efficient to buy into! Got in at the perfect timing with The Hundred's growing popularity. Cricket is becoming a massive global market and this franchise is positioned perfectly 🏏🔥",
    timestamp: "8h",
    likes: 94,
    replies: 18,
    dealMention: "Southern Brave"
  },
  {
    id: "5",
    user: {
      name: "James Wilson",
      username: "james_golf",
      avatar: jamesAvatar,
      verified: false
    },
    content: "The Ryder Cup debenture structure is genius! Not only do you get returns but the exclusive access to tournaments and hospitality is unmatched. Golf investment at its finest! ⛳️💎",
    timestamp: "12h",
    likes: 67,
    replies: 12,
    dealMention: "Ryder Cup"
  }
];