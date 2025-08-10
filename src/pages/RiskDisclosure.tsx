export function RiskDisclosure() {
  return (
    <div className="container mx-auto px-6 py-8 max-w-4xl">
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <h1 className="text-3xl font-bold text-foreground mb-8">Risk Disclosure</h1>
        
        <div className="text-sm text-muted-foreground mb-8">
          <p>Last updated: January 2025</p>
        </div>

        <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-destructive mb-4">⚠️ Important Risk Warning</h2>
          <p className="text-muted-foreground">
            Investing in sports-related assets carries significant risk. You could lose some or all of your invested capital. Only invest money you can afford to lose and ensure you understand the risks involved.
          </p>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">1. General Investment Risks</h2>
          
          <h3 className="text-xl font-medium text-foreground mb-3">Market Risk</h3>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
            <li>The value of investments can fluctuate significantly</li>
            <li>Market conditions can change rapidly and unpredictably</li>
            <li>Past performance is not indicative of future results</li>
            <li>You may receive back less than you originally invested</li>
          </ul>

          <h3 className="text-xl font-medium text-foreground mb-3">Liquidity Risk</h3>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
            <li>Secondary market trading may be limited</li>
            <li>You may not be able to sell your investments when you want to</li>
            <li>The price you receive may be significantly different from the listed value</li>
            <li>There is no guarantee of a liquid market for any investment</li>
          </ul>

          <h3 className="text-xl font-medium text-foreground mb-3">Concentration Risk</h3>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>Sports investments may be concentrated in specific teams, leagues, or sectors</li>
            <li>Poor performance of a single entity can significantly impact your portfolio</li>
            <li>Diversification may be limited within sports-related investments</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">2. Sports-Specific Risks</h2>
          
          <h3 className="text-xl font-medium text-foreground mb-3">Performance Risk</h3>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
            <li>Team performance can be unpredictable and volatile</li>
            <li>Player injuries, transfers, or retirements can impact valuations</li>
            <li>Coaching changes and management decisions affect performance</li>
            <li>Competition results directly influence asset values</li>
          </ul>

          <h3 className="text-xl font-medium text-foreground mb-3">Regulatory Risk</h3>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
            <li>Changes in sports regulations or governance</li>
            <li>Financial fair play rules and sanctions</li>
            <li>Broadcasting rights and revenue distribution changes</li>
            <li>Government intervention in sports organizations</li>
          </ul>

          <h3 className="text-xl font-medium text-foreground mb-3">Reputation Risk</h3>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>Scandals, misconduct, or negative publicity can impact valuations</li>
            <li>Fan sentiment and loyalty can be volatile</li>
            <li>Social media and public perception influence asset values</li>
            <li>Ethical and governance issues can affect investment returns</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">3. Platform-Specific Risks</h2>
          
          <h3 className="text-xl font-medium text-foreground mb-3">Technology Risk</h3>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
            <li>Platform downtime or technical issues may affect trading</li>
            <li>Cybersecurity threats and data breaches</li>
            <li>System failures could impact your ability to access investments</li>
            <li>Third-party service dependencies</li>
          </ul>

          <h3 className="text-xl font-medium text-foreground mb-3">Counterparty Risk</h3>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
            <li>Risk of default by other platform users</li>
            <li>Third-party service provider failures</li>
            <li>Custodial risks related to asset holding</li>
          </ul>

          <h3 className="text-xl font-medium text-foreground mb-3">Operational Risk</h3>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>Business model changes or platform closure</li>
            <li>Changes to fees and charges</li>
            <li>Regulatory changes affecting the platform</li>
            <li>Force majeure events beyond our control</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">4. Regulatory and Tax Considerations</h2>
          
          <h3 className="text-xl font-medium text-foreground mb-3">Regulatory Status</h3>
          <p className="text-muted-foreground mb-4">
            Sports investments may not be regulated in the same way as traditional financial instruments. This means:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
            <li>Limited regulatory protection for investors</li>
            <li>No access to financial services compensation schemes</li>
            <li>Fewer consumer protection measures</li>
            <li>Potential changes in regulatory treatment</li>
          </ul>

          <h3 className="text-xl font-medium text-foreground mb-3">Tax Implications</h3>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>Tax treatment of sports investments may be complex and uncertain</li>
            <li>Capital gains tax may apply to profitable disposals</li>
            <li>Income tax implications for any distributions received</li>
            <li>Tax rules may change and affect your returns</li>
            <li>You should seek independent tax advice</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">5. Important Disclaimers</h2>
          
          <div className="bg-muted/50 border border-border rounded-lg p-6">
            <ul className="list-disc pl-6 text-muted-foreground space-y-3">
              <li><strong>No Investment Advice:</strong> We do not provide investment advice. All investment decisions are your responsibility.</li>
              <li><strong>No Guarantees:</strong> We make no guarantees about investment performance or returns.</li>
              <li><strong>Information Accuracy:</strong> While we strive for accuracy, information may be incomplete or out of date.</li>
              <li><strong>Independent Research:</strong> You should conduct your own research before making any investment decisions.</li>
              <li><strong>Professional Advice:</strong> Consider seeking advice from qualified financial advisors.</li>
              <li><strong>Eligibility:</strong> Ensure you meet all eligibility requirements before investing.</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">6. Before You Invest</h2>
          <p className="text-muted-foreground mb-4">
            Before making any investment, ensure you:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>Understand the risks involved and can afford to lose your investment</li>
            <li>Have read and understood all relevant documentation</li>
            <li>Have appropriate knowledge and experience for the investments you're considering</li>
            <li>Have diversified your investments appropriately</li>
            <li>Have sought independent financial advice if needed</li>
            <li>Are comfortable with the illiquid nature of these investments</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">7. Contact Information</h2>
          <p className="text-muted-foreground">
            If you have any questions about the risks associated with investing through our platform, please contact us:
          </p>
          <p className="text-muted-foreground mt-4">
            Vessel Social Ltd<br />
            2 Hilliards Court<br />
            Chester Business Park<br />
            Chester, Cheshire, CH4 9QP<br />
            United Kingdom
          </p>
        </section>
      </div>
    </div>
  );
}