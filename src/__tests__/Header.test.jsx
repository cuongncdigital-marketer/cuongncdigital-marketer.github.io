import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from '../components/Header';
import useAppStore from '../store/useAppStore';

// Reset Zustand store before each test
beforeEach(() => {
    useAppStore.setState({
        mobileMenuOpen: false,
        activeDropdown: null,
    });
});

describe('Header — rendering', () => {
    it('renders the logo', () => {
        render(<Header />);
        expect(screen.getByText('Cường Nguyễn')).toBeInTheDocument();
    });

    it('renders nav dropdowns from data', () => {
        render(<Header />);
        expect(screen.getByText('Dịch vụ')).toBeInTheDocument();
        expect(screen.getByText('Tài liệu')).toBeInTheDocument();
    });
});

describe('Header — mobile menu', () => {
    it('mobile menu is closed by default', () => {
        render(<Header />);
        expect(useAppStore.getState().mobileMenuOpen).toBe(false);
    });

    it('clicking hamburger opens the mobile menu', async () => {
        const user = userEvent.setup();
        render(<Header />);
        const hamburger = screen.getByTestId('hamburger-btn');
        await user.click(hamburger);
        expect(useAppStore.getState().mobileMenuOpen).toBe(true);
    });

    it('clicking hamburger twice closes the mobile menu', async () => {
        const user = userEvent.setup();
        render(<Header />);
        const hamburger = screen.getByTestId('hamburger-btn');
        await user.click(hamburger);
        await user.click(hamburger);
        expect(useAppStore.getState().mobileMenuOpen).toBe(false);
    });
});

describe('Header — dropdowns', () => {
    it('no dropdown is open by default', () => {
        render(<Header />);
        expect(useAppStore.getState().activeDropdown).toBeNull();
    });

    it('clicking Services button opens the Services dropdown', async () => {
        const user = userEvent.setup();
        render(<Header />);
        const servicesBtn = screen.getByRole('button', { name: /dịch vụ/i });
        await user.click(servicesBtn);
        expect(useAppStore.getState().activeDropdown).toBe('services');
        expect(screen.getByText('AI Marketing')).toBeVisible();
    });

    it('desktop: bấm nút khi dropdown đã mở do hover thì không bị đóng', async () => {
        const user = userEvent.setup();
        render(<Header />);
        const servicesBtn = screen.getByRole('button', { name: /dịch vụ/i });
        await user.click(servicesBtn);
        await user.click(servicesBtn);
        expect(useAppStore.getState().activeDropdown).toBe('services');
    });

    it('mobile: clicking Services button again closes it', async () => {
        const originalWidth = window.innerWidth;
        window.innerWidth = 500;
        try {
            const user = userEvent.setup();
            render(<Header />);
            const servicesBtn = screen.getByRole('button', { name: /dịch vụ/i });
            await user.click(servicesBtn);
            expect(useAppStore.getState().activeDropdown).toBe('services');
            await user.click(servicesBtn);
            expect(useAppStore.getState().activeDropdown).toBeNull();
        } finally {
            window.innerWidth = originalWidth;
        }
    });
});
