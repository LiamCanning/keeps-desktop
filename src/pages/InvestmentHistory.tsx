import { useState } from "react";
import { Calendar, DollarSign, TrendingUp, Filter, Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link, useNavigate } from "react-router-dom";
interface Investment {
  id: string;
  asset: string;
  type: string;
  date: string;
  amount: number;
  shares: number;
  pricePerShare: number;
  status: "completed" | "pending" | "cancelled";
  currentValue?: number;
}

const investmentHistory: Investment[] = [
  {
    id: "1",
    asset: "Liverpool FC",
    type: "Primary Purchase",
    date: "2025-07-15",
    amount: 25000,
    shares: 50,
    pricePerShare: 500,
    status: "completed",
    currentValue: 28750
  },
  {
    id: "2", 
    asset: "McLaren Racing",
    type: "Primary Purchase",
    date: "2025-07-10",
    amount: 200000,
    shares: 200,
    pricePerShare: 1000,
    status: "completed",
    currentValue: 244000
  },
  {
    id: "3",
    asset: "Ryder Cup",
    type: "Debenture Purchase",
    date: "2025-07-05",
    amount: 15000,
    shares: 3,
    pricePerShare: 5000,
    status: "completed",
    currentValue: 17805
  },
];

export default function InvestmentHistory() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("all");
  const [sortBy, setSortBy] = useState("date-desc");

  const filteredInvestments = investmentHistory.filter(investment => {
    if (activeTab === "all") return true;
    return investment.status === activeTab;
  });

  const sortedInvestments = [...filteredInvestments].sort((a, b) => {
    switch (sortBy) {
      case "date-desc":
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      case "date-asc":
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      case "amount-desc":
        return b.amount - a.amount;
      case "amount-asc":
        return a.amount - b.amount;
      default:
        return 0;
    }
  });

  const totalInvested = investmentHistory.reduce((sum, inv) => sum + inv.amount, 0);
  const totalCurrentValue = investmentHistory.reduce((sum, inv) => sum + (inv.currentValue || inv.amount), 0);
  const totalReturn = totalCurrentValue - totalInvested;

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-gradient">Investment History</h1>
        <p className="text-lg text-muted-foreground">Complete record of your investment transactions</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="card-professional p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/20 rounded-lg">
              <DollarSign className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Invested</p>
              <p className="font-semibold text-xl text-card-foreground">£{totalInvested.toLocaleString()}</p>
            </div>
          </div>
        </Card>
        
        <Card className="card-professional p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-success/20 rounded-lg">
              <TrendingUp className="w-5 h-5 text-success" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Current Value</p>
              <p className="font-semibold text-xl text-card-foreground">£{totalCurrentValue.toLocaleString()}</p>
            </div>
          </div>
        </Card>

        <Card className="card-professional p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-warning/20 rounded-lg">
              <TrendingUp className="w-5 h-5 text-warning" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Return</p>
              <p className="font-semibold text-xl text-success">+£{totalReturn.toLocaleString()}</p>
            </div>
          </div>
        </Card>

        <Card className="card-professional p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-accent/20 rounded-lg">
              <Calendar className="w-5 h-5 text-accent" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Transactions</p>
              <p className="font-semibold text-xl text-card-foreground">{investmentHistory.length}</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Filters and Controls */}
      <div className="flex flex-wrap gap-4 items-center justify-between">
        <div className="flex items-center gap-4">
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="date-desc">Date (Newest)</SelectItem>
              <SelectItem value="date-asc">Date (Oldest)</SelectItem>
              <SelectItem value="amount-desc">Amount (High to Low)</SelectItem>
              <SelectItem value="amount-asc">Amount (Low to High)</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <Download className="w-4 h-4" />
          Export History
        </Button>
      </div>

      {/* Investment History Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        {/* Mobile tab selector */}
        <div className="md:hidden mb-3">
          <Select value={activeTab} onValueChange={setActiveTab}>
            <SelectTrigger aria-label="Select history section">
              <SelectValue placeholder="Select section" />
            </SelectTrigger>
            <SelectContent className="z-50">
              <SelectItem value="all">All Transactions</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <TabsList className="hidden md:grid w-full grid-cols-3 lg:w-auto lg:grid-cols-3 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/30 shadow-[var(--shadow-elegant)] rounded-md">
          <TabsTrigger value="all">All Transactions</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-6">
          <Card className="card-professional">
            <CardHeader>
              <CardTitle>Transaction History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {sortedInvestments.map((investment) => (
                  <div key={investment.id} className="p-4 border rounded-lg hover:bg-accent/5 transition-colors">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-semibold text-lg">{investment.asset}</h4>
                        <p className="text-sm text-muted-foreground">{investment.type}</p>
                      </div>
                      <Badge variant={
                        investment.status === "completed" ? "success" :
                        investment.status === "pending" ? "warning" : "destructive"
                      }>
                        {investment.status.charAt(0).toUpperCase() + investment.status.slice(1)}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Date</p>
                        <p className="font-semibold">{new Date(investment.date).toLocaleDateString()}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Amount</p>
                        <p className="font-semibold">£{investment.amount.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Shares/Units</p>
                        <p className="font-semibold">{investment.shares}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Price per Share</p>
                        <p className="font-semibold">£{investment.pricePerShare}</p>
                      </div>
                      {investment.currentValue && (
                        <div>
                          <p className="text-muted-foreground">Current Value</p>
                          <p className="font-semibold text-success">£{investment.currentValue.toLocaleString()}</p>
                        </div>
                      )}
                    </div>
                    
                    {investment.currentValue && (
                      <div className="mt-3 pt-3 border-t">
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-semibold">
                            <span className="text-muted-foreground mr-2">Return</span>
                            <span className={(investment.currentValue - investment.amount) > 0 ? 'text-success' : 'text-destructive'}>
                              {(investment.currentValue - investment.amount) > 0 ? '+' : ''}
                              £{(investment.currentValue - investment.amount).toLocaleString()} ({(((investment.currentValue - investment.amount) / investment.amount) * 100).toFixed(1)}%)
                            </span>
                          </div>
                          <Button
                            variant="default"
                            size="sm"
                            className="bg-primary text-primary-foreground hover:bg-primary/90"
                            onClick={() => navigate(`/transaction-details/${investment.id}`)}
                          >
                            Download Page
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}