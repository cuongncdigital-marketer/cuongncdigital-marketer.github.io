import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewsletterCTA from '../components/NewsletterCTA';
import useAppStore from '../store/useAppStore';

// Reset Zustand store before each test
beforeEach(() => {
    useAppStore.setState({
        newsletterEmail: '',
        newsletterStatus: 'idle',
        newsletterError: '',
    });
});

describe('NewsletterCTA — rendering', () => {
    it('hiển thị ô nhập email và nút đăng ký', () => {
        render(<NewsletterCTA />);
        expect(screen.getByRole('textbox', { name: /địa chỉ email/i })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /đăng ký/i })).toBeInTheDocument();
    });

    it('renders the disclaimer text', () => {
        render(<NewsletterCTA />);
        expect(screen.getByText(/huỷ đăng ký bất cứ lúc nào/i)).toBeInTheDocument();
    });
});

describe('NewsletterCTA — validation', () => {
    it('shows error when submitting with empty email', async () => {
        const user = userEvent.setup();
        render(<NewsletterCTA />);
        await user.click(screen.getByRole('button', { name: /đăng ký/i }));
        expect(await screen.findByRole('alert')).toHaveTextContent('Vui lòng nhập email của bạn.');
    });

    it('shows error when submitting an invalid email', async () => {
        const user = userEvent.setup();
        render(<NewsletterCTA />);
        await user.type(screen.getByRole('textbox', { name: /địa chỉ email/i }), 'notvalid');
        await user.click(screen.getByRole('button', { name: /đăng ký/i }));
        expect(await screen.findByRole('alert')).toHaveTextContent('Email chưa hợp lệ, vui lòng kiểm tra lại.');
    });

    it('shows success message with a valid email', async () => {
        const user = userEvent.setup();
        render(<NewsletterCTA />);
        await user.type(screen.getByRole('textbox', { name: /địa chỉ email/i }), 'user@example.com');
        await user.click(screen.getByRole('button', { name: /đăng ký/i }));
        expect(await screen.findByRole('status')).toHaveTextContent('Đã đăng ký!');
    });

    it('disables button while loading', async () => {
        useAppStore.setState({ newsletterStatus: 'loading' });
        render(<NewsletterCTA />);
        expect(screen.getByRole('button', { name: /đang gửi/i })).toBeDisabled();
    });
});
