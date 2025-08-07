import { useState } from "react";
import { ArrowLeft, Send, Search, MoreVertical } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";

interface Message {
  id: string;
  sender: {
    name: string;
    username: string;
    avatar: string;
  };
  content: string;
  timestamp: string;
  read: boolean;
}

interface Conversation {
  id: string;
  user: {
    name: string;
    username: string;
    avatar: string;
    online: boolean;
  };
  lastMessage: string;
  timestamp: string;
  unread: number;
  messages: Message[];
}

const conversations: Conversation[] = [
  {
    id: "1",
    user: {
      name: "Sarah Mitchell",
      username: "sarahm_investor",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612400d?w=64&h=64&fit=crop&crop=face",
      online: true
    },
    lastMessage: "The Liverpool FC investment benefits are incredible!",
    timestamp: "2h",
    unread: 2,
    messages: [
      {
        id: "1",
        sender: {
          name: "Sarah Mitchell",
          username: "sarahm_investor",
          avatar: "https://images.unsplash.com/photo-1494790108755-2616b612400d?w=64&h=64&fit=crop&crop=face"
        },
        content: "Hey! I saw your post about the McLaren investment. How are you finding the benefits package?",
        timestamp: "3h",
        read: true
      },
      {
        id: "2",
        sender: {
          name: "Sarah Mitchell",
          username: "sarahm_investor",
          avatar: "https://images.unsplash.com/photo-1494790108755-2616b612400d?w=64&h=64&fit=crop&crop=face"
        },
        content: "The Liverpool FC investment benefits are incredible!",
        timestamp: "2h",
        read: false
      }
    ]
  },
  {
    id: "2",
    user: {
      name: "Mike Johnson",
      username: "mike_sports",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
      online: false
    },
    lastMessage: "Thanks for the Ryder Cup tip!",
    timestamp: "1d",
    unread: 0,
    messages: [
      {
        id: "1",
        sender: {
          name: "Mike Johnson",
          username: "mike_sports",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face"
        },
        content: "Thanks for the Ryder Cup tip! Just invested £5K",
        timestamp: "1d",
        read: true
      }
    ]
  }
];

export default function CommunityMessages() {
  const navigate = useNavigate();
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(conversations[0]);
  const [newMessage, setNewMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredConversations = conversations.filter(conv =>
    conv.user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    conv.user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sendMessage = () => {
    if (!newMessage.trim() || !selectedConversation) return;
    
    // In a real app, this would send the message to the backend
    setNewMessage("");
  };

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" onClick={() => navigate("/community")}>
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <div>
          <h1 className="text-3xl font-bold text-gradient">Messages</h1>
          <p className="text-lg text-foreground/80">Direct messages with community members</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
        {/* Conversations List */}
        <Card className="card-professional lg:col-span-1">
          <CardHeader className="pb-4">
            <CardTitle className="text-card-foreground">Conversations</CardTitle>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                placeholder="Search messages..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="space-y-1">
              {filteredConversations.map((conversation) => (
                <div
                  key={conversation.id}
                  className={`p-4 cursor-pointer hover:bg-accent/50 transition-colors ${
                    selectedConversation?.id === conversation.id ? 'bg-accent/30' : ''
                  }`}
                  onClick={() => setSelectedConversation(conversation)}
                >
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={conversation.user.avatar} alt={conversation.user.name} />
                        <AvatarFallback>{conversation.user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      {conversation.user.online && (
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-white" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-card-foreground truncate">{conversation.user.name}</h3>
                        <span className="text-xs text-muted-foreground">{conversation.timestamp}</span>
                      </div>
                      <p className="text-sm text-muted-foreground truncate">{conversation.lastMessage}</p>
                    </div>
                    {conversation.unread > 0 && (
                      <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-xs text-white font-medium">{conversation.unread}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Chat Area */}
        <Card className="card-professional lg:col-span-2 flex flex-col">
          {selectedConversation ? (
            <>
              {/* Chat Header */}
              <CardHeader className="border-b border-border">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={selectedConversation.user.avatar} alt={selectedConversation.user.name} />
                      <AvatarFallback>{selectedConversation.user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-card-foreground">{selectedConversation.user.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {selectedConversation.user.online ? "Online" : "Offline"}
                      </p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>

              {/* Messages */}
              <CardContent className="flex-1 p-6 overflow-y-auto">
                <div className="space-y-4">
                  {selectedConversation.messages.map((message) => (
                    <div key={message.id} className="flex items-start gap-3">
                      <Avatar className="w-8 h-8">
                        <AvatarImage src={message.sender.avatar} alt={message.sender.name} />
                        <AvatarFallback>{message.sender.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium text-sm text-card-foreground">{message.sender.name}</span>
                          <span className="text-xs text-muted-foreground">{message.timestamp}</span>
                        </div>
                        <div className="bg-accent/20 rounded-lg p-3 max-w-md">
                          <p className="text-card-foreground">{message.content}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>

              {/* Message Input */}
              <div className="p-6 border-t border-border">
                <div className="flex gap-3">
                  <Textarea
                    placeholder="Type a message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    className="flex-1 min-h-[40px] max-h-[120px] resize-none"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        sendMessage();
                      }
                    }}
                  />
                  <Button onClick={sendMessage} disabled={!newMessage.trim()}>
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <CardContent className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-card-foreground mb-2">Select a conversation</h3>
                <p className="text-muted-foreground">Choose a conversation from the list to start messaging</p>
              </div>
            </CardContent>
          )}
        </Card>
      </div>
    </div>
  );
}