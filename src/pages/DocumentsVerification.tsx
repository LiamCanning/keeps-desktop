import { ArrowLeft, FileText, Upload, Check, AlertCircle, Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface Document {
  id: string;
  type: string;
  name: string;
  status: "verified" | "pending" | "required";
  uploadDate?: string;
  expiryDate?: string;
}

export default function DocumentsVerification() {
  const navigate = useNavigate();
  
  const documents: Document[] = [
    {
      id: "1",
      type: "Passport",
      name: "passport-scan.pdf",
      status: "verified",
      uploadDate: "2024-06-15",
      expiryDate: "2031-03-20"
    },
    {
      id: "2",
      type: "Proof of Address",
      name: "utility-bill.pdf",
      status: "verified",
      uploadDate: "2024-06-15"
    },
    {
      id: "3",
      type: "Bank Statement",
      name: "bank-statement.pdf",
      status: "pending",
      uploadDate: "2024-07-01"
    },
    {
      id: "4",
      type: "Investment Experience",
      name: "",
      status: "required"
    }
  ];

  const verifiedCount = documents.filter(doc => doc.status === "verified").length;
  const totalCount = documents.length;
  const completionPercentage = (verifiedCount / totalCount) * 100;

  return (
    <div className="p-6 space-y-6 max-w-6xl mx-auto">
      <Button 
        variant="ghost" 
        onClick={() => navigate("/my-account")}
        className="flex items-center gap-2"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Account
      </Button>

      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-gradient">Documents & Verification</h1>
        <p className="text-lg text-muted-foreground">Manage your identity verification and investment documents</p>
      </div>

      <Card className="card-professional">
        <CardHeader>
          <CardTitle>Verification Progress</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Overall Progress</span>
            <span className="text-sm text-muted-foreground">{verifiedCount}/{totalCount} Complete</span>
          </div>
          <Progress value={completionPercentage} className="h-2" />
          <p className="text-sm text-muted-foreground">
            Complete your verification to unlock all investment features
          </p>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Required Documents</h2>
        
        {documents.map((doc) => (
          <Card key={doc.id} className="card-professional">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg ${
                    doc.status === 'verified' ? 'bg-success/10' : 
                    doc.status === 'pending' ? 'bg-warning/10' : 'bg-muted/20'
                  }`}>
                    <FileText className={`w-6 h-6 ${
                      doc.status === 'verified' ? 'text-success' : 
                      doc.status === 'pending' ? 'text-warning' : 'text-muted-foreground'
                    }`} />
                  </div>
                  <div>
                    <h3 className="font-semibold">{doc.type}</h3>
                    {doc.name && (
                      <p className="text-sm text-muted-foreground">{doc.name}</p>
                    )}
                    {doc.uploadDate && (
                      <p className="text-xs text-muted-foreground">
                        Uploaded: {new Date(doc.uploadDate).toLocaleDateString()}
                      </p>
                    )}
                    {doc.expiryDate && (
                      <p className="text-xs text-muted-foreground">
                        Expires: {new Date(doc.expiryDate).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge 
                    variant={
                      doc.status === 'verified' ? 'success' : 
                      doc.status === 'pending' ? 'warning' : 'secondary'
                    }
                    className="gap-1"
                  >
                    {doc.status === 'verified' && <Check className="w-3 h-3" />}
                    {doc.status === 'pending' && <AlertCircle className="w-3 h-3" />}
                    {doc.status === 'verified' ? 'Verified' : 
                     doc.status === 'pending' ? 'Pending Review' : 'Required'}
                  </Badge>
                  {doc.status === 'verified' && (
                    <Button variant="outline" size="sm" className="gap-1">
                      <Download className="w-4 h-4" />
                      Download
                    </Button>
                  )}
                  {doc.status !== 'verified' && (
                    <Button variant="outline" size="sm" className="gap-1">
                      <Upload className="w-4 h-4" />
                      {doc.status === 'pending' ? 'Replace' : 'Upload'}
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="card-professional">
        <CardHeader>
          <CardTitle>Investment History Documents</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h4 className="font-medium">Liverpool FC Investment Certificate</h4>
                <p className="text-sm text-muted-foreground">Investment: £25,000 • Date: July 2024</p>
              </div>
              <Button variant="outline" size="sm" className="gap-1">
                <Download className="w-4 h-4" />
                Download
              </Button>
            </div>
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h4 className="font-medium">McLaren Racing Investment Certificate</h4>
                <p className="text-sm text-muted-foreground">Investment: £200,000 • Date: June 2024</p>
              </div>
              <Button variant="outline" size="sm" className="gap-1">
                <Download className="w-4 h-4" />
                Download
              </Button>
            </div>
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h4 className="font-medium">Tax Statement 2024</h4>
                <p className="text-sm text-muted-foreground">Annual investment summary for tax purposes</p>
              </div>
              <Button variant="outline" size="sm" className="gap-1">
                <Download className="w-4 h-4" />
                Download
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}