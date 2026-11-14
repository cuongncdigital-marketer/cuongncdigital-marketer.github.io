import { describe, it, expect, beforeEach } from 'vitest';
import { act } from 'react';
import useAppStore from '../store/useAppStore';

// Reset Zustand store state before each test
beforeEach(() => {
    useAppStore.setState({
        mobileMenuOpen: false,
        activeDropdown: null,
        newsletterEmail: '',
        newsletterStatus: 'idle',
        newsletterError: '',
    });
});

describe('useAppStore — initial state', () => {
    it('has correct defaults', () => {
        const state = useAppStore.getState();
        expect(state.mobileMenuOpen).toBe(false);
        expect(state.activeDropdown).toBeNull();
        expect(state.newsletterEmail).toBe('');
        expect(state.newsletterStatus).toBe('idle');
        expect(state.newsletterError).toBe('');
    });
});

describe('useAppStore — mobile menu', () => {
    it('toggleMobileMenu flips mobileMenuOpen', () => {
        const { toggleMobileMenu } = useAppStore.getState();
        act(() => toggleMobileMenu());
        expect(useAppStore.getState().mobileMenuOpen).toBe(true);
        act(() => toggleMobileMenu());
        expect(useAppStore.getState().mobileMenuOpen).toBe(false);
    });

    it('closeMobileMenu resets menu and dropdown', () => {
        useAppStore.setState({ mobileMenuOpen: true, activeDropdown: 'services' });
        act(() => useAppStore.getState().closeMobileMenu());
        expect(useAppStore.getState().mobileMenuOpen).toBe(false);
        expect(useAppStore.getState().activeDropdown).toBeNull();
    });
});

describe('useAppStore — dropdown', () => {
    it('setActiveDropdown sets the active dropdown', () => {
        act(() => useAppStore.getState().setActiveDropdown('services'));
        expect(useAppStore.getState().activeDropdown).toBe('services');
    });

    it('setActiveDropdown toggles off when same key is passed', () => {
        useAppStore.setState({ activeDropdown: 'services' });
        act(() => useAppStore.getState().setActiveDropdown('services'));
        expect(useAppStore.getState().activeDropdown).toBeNull();
    });
});

describe('useAppStore — newsletter email', () => {
    it('setNewsletterEmail updates email and clears error', () => {
        useAppStore.setState({ newsletterError: 'old error' });
        act(() => useAppStore.getState().setNewsletterEmail('test@example.com'));
        expect(useAppStore.getState().newsletterEmail).toBe('test@example.com');
        expect(useAppStore.getState().newsletterError).toBe('');
    });
});

describe('useAppStore — submitNewsletter validation', () => {
    it('sets error when email is empty', async () => {
        useAppStore.setState({ newsletterEmail: '' });
        await act(async () => useAppStore.getState().submitNewsletter());
        expect(useAppStore.getState().newsletterError).toBe('Vui lòng nhập email của bạn.');
        expect(useAppStore.getState().newsletterStatus).toBe('idle');
    });

    it('sets error when email is invalid', async () => {
        useAppStore.setState({ newsletterEmail: 'notanemail' });
        await act(async () => useAppStore.getState().submitNewsletter());
        expect(useAppStore.getState().newsletterError).toBe('Email chưa hợp lệ, vui lòng kiểm tra lại.');
        expect(useAppStore.getState().newsletterStatus).toBe('idle');
    });

    it('sets status to success with valid email', async () => {
        useAppStore.setState({ newsletterEmail: 'valid@example.com' });
        await act(async () => useAppStore.getState().submitNewsletter());
        expect(useAppStore.getState().newsletterStatus).toBe('success');
        expect(useAppStore.getState().newsletterError).toBe('');
    });
});
