import { useState } from "react";
import { ArrowLeft, User, Mail, Phone, MapPin, Calendar, Edit } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function PersonalInformation() {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "Liam",
    lastName: "Canning",
    email: "liam.canning@keeps.com",
    phone: "+44 7700 900123",
    address: "123 Investment Street",
    city: "London",
    postcode: "SW1A 1AA",
    dateOfBirth: "1992-03-15",
    nationality: "British"
  });

  const handleSave = () => {
    setIsEditing(false);
    // Save logic would go here
  };

  return (
    <div className="p-6 space-y-6 max-w-4xl mx-auto">
      <Button 
        variant="ghost" 
        onClick={() => navigate("/my-account")}
        className="flex items-center gap-2"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Account
      </Button>

      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-gradient">Personal Information</h1>
        <p className="text-lg text-muted-foreground">Manage your personal details and contact information</p>
      </div>

      <Card className="card-professional">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <User className="w-5 h-5" />
            Personal Details
          </CardTitle>
          <Button
            variant={isEditing ? "default" : "outline"}
            onClick={() => isEditing ? handleSave() : setIsEditing(true)}
          >
            {isEditing ? "Save Changes" : <><Edit className="w-4 h-4 mr-2" />Edit</>}
          </Button>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center gap-6">
            <Avatar className="w-24 h-24">
              <AvatarImage src="src/assets/liam-avatar.png" alt="Liam" />
              <AvatarFallback className="text-xl">LC</AvatarFallback>
            </Avatar>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Profile Photo</h3>
              <p className="text-sm text-muted-foreground">Update your profile picture</p>
              <Button variant="outline" size="sm">Change Photo</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                disabled={!isEditing}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                disabled={!isEditing}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                disabled={!isEditing}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                disabled={!isEditing}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dateOfBirth">Date of Birth</Label>
              <Input
                id="dateOfBirth"
                type="date"
                value={formData.dateOfBirth}
                onChange={(e) => setFormData({...formData, dateOfBirth: e.target.value})}
                disabled={!isEditing}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="nationality">Nationality</Label>
              <Input
                id="nationality"
                value={formData.nationality}
                onChange={(e) => setFormData({...formData, nationality: e.target.value})}
                disabled={!isEditing}
              />
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Address</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="address">Street Address</Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={(e) => setFormData({...formData, city: e.target.value})}
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="postcode">Postcode</Label>
                <Input
                  id="postcode"
                  value={formData.postcode}
                  onChange={(e) => setFormData({...formData, postcode: e.target.value})}
                  disabled={!isEditing}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}