"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingInline from '@/components/navigation/NavbarLayoutFloatingInline';
import FrameHero from '@/components/sections/layouts/hero/FrameHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import PatternTokenomics from '@/components/sections/layouts/tokenomics/PatternTokenomics';
import FooterBase from '@/components/footer/FooterBase';
import { DollarSign, Users, Chart } from 'lucide-react';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'slide' }}>
      <NavbarLayoutFloatingInline
        logoSrc="/images/logo.svg"
        logoWidth={150}
        logoHeight={50}
        navItems={[{ name: 'Hero', id: 'hero' }, { name: 'About', id: 'about' }, { name: 'How to Buy', id: 'how-to-buy' }, { name: 'Tokenomics', id: 'tokenomics' }, { name: 'Footer', id: 'footer' }]}
        buttonText="Join Now"
        onButtonClick={() => { /* Handle join action */ }}
        className="bg-white"
      />

      <div id="hero" data-section="hero" className="scroll-mt-24">
        <FrameHero
          title="Welcome to MemeWave"
          description="Your one-stop destination for all the bold and vibrant memes out there."
          primaryButtonText="Get Started"
          secondaryButtonText="Explore"
        />
      </div>

      <div id="about" data-section="about" className="scroll-mt-24">
        <SocialsAbout
          title="About MemeWave"
          descriptions={[
            'Join our vibrant community where the latest memes come to life.',
            'Participate, share, and engage with fellow meme enthusiasts.',
            'Stay updated with the latest trends and memes that spark joy!'
          ]}
        />
      </div>

      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D variant="reveal" />
      </div>

      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <PatternTokenomics
          title="Tokenomics Overview"
          description="A brief overview of our tokenomics and how you can participate in the growth of MemeWave"
          kpiItems={[
            { value: '100M', description: 'Total Supply', icon: DollarSign },
            { value: '50%', description: 'Community Allocation', icon: Users },
            { value: '20%', description: 'Development Fund', icon: Chart }
          ]}
        />
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterBase
          logoSrc="/images/logo.svg"
          logoWidth={150}
          logoHeight={50}
          columns={[
            { title: 'Links', items: [{ label: 'Home', onClick: () => {} }, { label: 'About', onClick: () => {} }, { label: 'How to Buy', onClick: () => {} }] },
            { title: 'Resources', items: [{ label: 'Blog', onClick: () => {} }, { label: 'Support', onClick: () => {} }, { label: 'Contact', onClick: () => {} }] },
            { title: 'Social', items: [{ label: 'Twitter', onClick: () => {} }, { label: 'Discord', onClick: () => {} }, { label: 'Instagram', onClick: () => {} }] }
          ]}
          copyrightText="© 2023 MemeWave. All rights reserved."
          onPrivacyClick={() => { /* Handle privacy policy */ }}
        />
      </div>
    </SiteThemeProvider>
  );
}
