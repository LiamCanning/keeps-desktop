import React, { useState, useEffect } from "react";
import { X, Globe, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: 'de', name: 'German', flag: '🇩🇪' },
  { code: 'fr', name: 'French', flag: '🇫🇷' },
  { code: 'es', name: 'Spanish', flag: '🇪🇸' },
  { code: 'it', name: 'Italian', flag: '🇮🇹' },
];

export const TranslationBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isTranslating, setIsTranslating] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<string>('en');
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(null);

  useEffect(() => {
    // Show banner after 2 seconds if not English browser or previously dismissed
    const timer = setTimeout(() => {
      const dismissed = localStorage.getItem('translation-banner-dismissed');
      const browserLang = navigator.language.toLowerCase();
      
      // Show if browser language suggests non-English preference
      if (!dismissed && !browserLang.startsWith('en')) {
        setIsVisible(true);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleTranslate = async (language: Language) => {
    setIsTranslating(true);
    setSelectedLanguage(language);
    
    try {
      // Here you would integrate with Google Translate API or similar
      // For now, we'll simulate the translation process
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real implementation, you would:
      // 1. Collect all text content from the page
      // 2. Send it to translation API
      // 3. Replace the content with translated text
      
      setCurrentLanguage(language.code);
      setIsVisible(false);
      
      // Store preference
      localStorage.setItem('preferred-language', language.code);
      
    } catch (error) {
      console.error('Translation failed:', error);
    } finally {
      setIsTranslating(false);
    }
  };

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('translation-banner-dismissed', 'true');
  };

  const handleNeverShow = () => {
    setIsVisible(false);
    localStorage.setItem('translation-banner-dismissed', 'permanent');
  };

  if (!isVisible) return null;

  return (
    <div className="w-full bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-200 shadow-sm relative">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-full">
              <Globe className="w-4 h-4 text-blue-600" />
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-blue-900">
                Translate this page?
              </span>
              <Badge variant="outline" className="text-xs bg-white/50">
                English detected
              </Badge>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isTranslating ? (
              <div className="flex items-center gap-2 text-blue-600">
                <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                <span className="text-sm">
                  Translating to {selectedLanguage?.name}...
                </span>
              </div>
            ) : (
              <>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="bg-white/80 hover:bg-white border-blue-200 text-blue-700 hover:text-blue-800"
                    >
                      <Globe className="w-4 h-4 mr-2" />
                      Translate
                      <ChevronDown className="w-4 h-4 ml-2" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-48 bg-white border border-blue-200 shadow-lg" align="end">
                    {languages.map((language) => (
                      <DropdownMenuItem 
                        key={language.code}
                        onClick={() => handleTranslate(language)}
                        className="flex items-center gap-3 py-2 px-3 hover:bg-blue-50 cursor-pointer"
                      >
                        <span className="text-lg">{language.flag}</span>
                        <span className="text-sm font-medium">{language.name}</span>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>

                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={handleNeverShow}
                  className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                >
                  Not now
                </Button>
              </>
            )}

            <Button
              variant="ghost"
              size="sm"
              onClick={handleDismiss}
              className="text-blue-400 hover:text-blue-600 hover:bg-blue-50 p-1"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Progress indicator when translating */}
        {isTranslating && (
          <div className="mt-3">
            <div className="w-full bg-blue-100 rounded-full h-1.5">
              <div className="bg-blue-600 h-1.5 rounded-full animate-pulse" style={{width: '60%'}}></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TranslationBanner;