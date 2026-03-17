import { create } from 'zustand';
import { videoCards as initialVideoCards } from '../data/portfolioData';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const useAppStore = create((set, get) => ({
  // ─── UI State ──────────────────────────────────────────────────────────────
  mobileMenuOpen: false,
  activeDropdown: null, // 'services' | 'resources' | null

  // ─── Data ──────────────────────────────────────────────────────────────────
  videoCards: initialVideoCards,

  // ─── Newsletter Form State ─────────────────────────────────────────────────
  newsletterEmail: '',
  newsletterStatus: 'idle', // 'idle' | 'loading' | 'success' | 'error'
  newsletterError: '',

  // ─── UI Actions ────────────────────────────────────────────────────────────
  toggleMobileMenu: () =>
    set((state) => ({ mobileMenuOpen: !state.mobileMenuOpen })),

  closeMobileMenu: () =>
    set({ mobileMenuOpen: false, activeDropdown: null }),

  setActiveDropdown: (name) =>
    set((state) => ({
      activeDropdown: state.activeDropdown === name ? null : name,
    })),

  // ─── Newsletter Actions ────────────────────────────────────────────────────
  setNewsletterEmail: (email) =>
    set({ newsletterEmail: email, newsletterError: '' }),

  submitNewsletter: async () => {
    const { newsletterEmail } = get();

    if (!newsletterEmail.trim()) {
      set({ newsletterError: 'Please enter your email.' });
      return;
    }

    if (!EMAIL_REGEX.test(newsletterEmail)) {
      set({ newsletterError: 'Please enter a valid email.' });
      return;
    }

    set({ newsletterStatus: 'loading', newsletterError: '' });

    // Mock async submission — replace with real API call later
    await new Promise((resolve) => setTimeout(resolve, 800));

    set({ newsletterStatus: 'success' });
  },
}));

export default useAppStore;
