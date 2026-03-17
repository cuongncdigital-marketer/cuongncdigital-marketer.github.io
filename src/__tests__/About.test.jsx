import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import About from '../pages/About/About';
import useAppStore from '../store/useAppStore';

const mockVideoCards = [
    {
        title: 'Video Test 1',
        videoId: 'abc123',
        href: 'https://www.youtube.com/watch?v=abc123',
        thumbnail: '',
        alt: 'Video test 1',
    },
    {
        title: 'Video Test 2',
        videoId: 'def456',
        href: 'https://www.youtube.com/watch?v=def456',
        thumbnail: '',
        alt: 'Video test 2',
    },
];

beforeEach(() => {
    useAppStore.setState({ videoCards: mockVideoCards });
});

// ─── Hero Section ─────────────────────────────────────────────────────────────
describe('About — hero section', () => {
    it('renders the hero title', () => {
        render(<About />);
        expect(screen.getByText(/Xin chào, mình là Cường/i)).toBeInTheDocument();
    });

    it('renders the subtitle', () => {
        render(<About />);
        expect(screen.getByText(/Marketer chuyển mình thành AI Automator/i)).toBeInTheDocument();
    });

    it('renders the bio paragraph', () => {
        render(<About />);
        expect(screen.getByText(/7 năm kinh nghiệm/i)).toBeInTheDocument();
    });
});

// ─── Timeline ─────────────────────────────────────────────────────────────────
describe('About — timeline', () => {
    it('renders all three timeline era labels', () => {
        render(<About />);
        expect(screen.getByText('Khởi đầu')).toBeInTheDocument();
        expect(screen.getByText('Bước ngoặt')).toBeInTheDocument();
        expect(screen.getByText('Hiện tại')).toBeInTheDocument();
    });

    it('renders all three timeline step headings', () => {
        render(<About />);
        expect(screen.getByText('Health & Education Marketing')).toBeInTheDocument();
        expect(screen.getByText('Công nghệ & Tối ưu hoá')).toBeInTheDocument();
        expect(screen.getByRole('heading', { level: 5, name: 'Performance AI Marketer' })).toBeInTheDocument();
    });
});

// ─── Video Cards from Store ────────────────────────────────────────────────────
describe('About — video cards (store)', () => {
    it('renders the video section title', () => {
        render(<About />);
        expect(screen.getByText('Video Nổi Bật Của Mình')).toBeInTheDocument();
    });

    it('renders the correct number of video cards from store', () => {
        render(<About />);
        const cards = screen.getAllByRole('link');
        expect(cards).toHaveLength(mockVideoCards.length);
    });

    it('renders each video title from store', () => {
        render(<About />);
        expect(screen.getByText('Video Test 1')).toBeInTheDocument();
        expect(screen.getByText('Video Test 2')).toBeInTheDocument();
    });

    it('each card links to the correct href', () => {
        render(<About />);
        const links = screen.getAllByRole('link');
        expect(links[0]).toHaveAttribute('href', mockVideoCards[0].href);
        expect(links[1]).toHaveAttribute('href', mockVideoCards[1].href);
    });

    it('renders correct card count when store has 0 videos', () => {
        useAppStore.setState({ videoCards: [] });
        render(<About />);
        expect(screen.queryAllByRole('link')).toHaveLength(0);
    });
});
