import { create } from 'zustand';
import { videoCards as initialVideoCards, expertiseCards } from '../data/portfolioData';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const useAppStore = create((set, get) => ({
  // ─── UI State ──────────────────────────────────────────────────────────────
  mobileMenuOpen: false,
  activeDropdown: null, // 'services' | 'resources' | null

  // ─── Global Service Modal State ────────────────────────────────────────────
  globalServiceModalOpen: false,
  globalSelectedService: null,

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

  openServiceModal: (slug) => {
    const matchedService = expertiseCards.find(card => card.slug === slug) || expertiseCards[0];
    set({
      globalServiceModalOpen: true,
      globalSelectedService: matchedService,
      mobileMenuOpen: false,
      activeDropdown: null,
    });
  },

  closeServiceModal: () =>
    set({ globalServiceModalOpen: false, globalSelectedService: null }),

  // ─── Newsletter Actions ────────────────────────────────────────────────────
  setNewsletterEmail: (email) =>
    set({ newsletterEmail: email, newsletterError: '' }),

  submitNewsletter: async () => {
    const { newsletterEmail } = get();

    if (!newsletterEmail.trim()) {
      set({ newsletterError: 'Vui lòng nhập email của bạn.' });
      return;
    }

    if (!EMAIL_REGEX.test(newsletterEmail)) {
      set({ newsletterError: 'Email chưa hợp lệ, vui lòng kiểm tra lại.' });
      return;
    }

    set({ newsletterStatus: 'loading', newsletterError: '' });

    // Mock async submission — replace with real API call later
    await new Promise((resolve) => setTimeout(resolve, 800));

    set({ newsletterStatus: 'success' });
  },
}));

export default useAppStore;
