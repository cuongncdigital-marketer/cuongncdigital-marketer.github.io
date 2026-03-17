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
    it('renders the email input and subscribe button', () => {
        render(<NewsletterCTA />);
        expect(screen.getByRole('textbox', { name: /email address/i })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument();
    });

    it('renders the disclaimer text', () => {
        render(<NewsletterCTA />);
        expect(screen.getByText(/no spam/i)).toBeInTheDocument();
    });
});

describe('NewsletterCTA — validation', () => {
    it('shows error when submitting with empty email', async () => {
        const user = userEvent.setup();
        render(<NewsletterCTA />);
        await user.click(screen.getByRole('button', { name: /subscribe/i }));
        expect(await screen.findByRole('alert')).toHaveTextContent('Please enter your email.');
    });

    it('shows error when submitting an invalid email', async () => {
        const user = userEvent.setup();
        render(<NewsletterCTA />);
        await user.type(screen.getByRole('textbox', { name: /email address/i }), 'notvalid');
        await user.click(screen.getByRole('button', { name: /subscribe/i }));
        expect(await screen.findByRole('alert')).toHaveTextContent('Please enter a valid email.');
    });

    it('shows success message with a valid email', async () => {
        const user = userEvent.setup();
        render(<NewsletterCTA />);
        await user.type(screen.getByRole('textbox', { name: /email address/i }), 'user@example.com');
        await user.click(screen.getByRole('button', { name: /subscribe/i }));
        expect(await screen.findByRole('status')).toHaveTextContent("You're in!");
    });

    it('disables button while loading', async () => {
        useAppStore.setState({ newsletterStatus: 'loading' });
        render(<NewsletterCTA />);
        expect(screen.getByRole('button', { name: /subscribing/i })).toBeDisabled();
    });
});
